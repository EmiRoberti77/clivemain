import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './css/login.css'
import { 
  Container,
  Form,
  Button
 } from 'react-bootstrap'
import { getUserbyEmailPass } from '../utils/ValidateLogin'
import { useAppDispatch } from '../state/store'
import {User, addUser} from '../state/features/UserSlice'


enum SignInMessaage { 
  INITIAL_MESSAGE = 'Please Sign in',
  MISSING_MESSAGE = 'Email or Password missing',
  ERROR_MESSAGE = 'Invalid user credentials'
}

const LoginPage:React.FC = () => {

  //const {user} = useAppSelector((state)=>state.user)
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [signinMessage, SetSiginMessage] = useState<SignInMessaage>(SignInMessaage.INITIAL_MESSAGE)

  const navigate = useNavigate();

  const OnLogin = async () =>{

    if(!email || !password ){
      SetSiginMessage(SignInMessaage.MISSING_MESSAGE)
      return;
    }
    
    const user = await getUserbyEmailPass(email!, password!)
    if(user.data.length > 0){
      if(user.data[0].email == email && user.data[0].password == password){

        dispatch(addUser({
          user:user.data[0]
        }))
        navigate('/')
        return true
      }
    }

    SetSiginMessage(SignInMessaage.ERROR_MESSAGE)
    return false
  }
  
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Container id='main-container' className='d-grid h-100'>
      <Form id='sign-form' className='text-center w-100'>
        <img 
          src='/VAS_logo.png' 
          height='100' 
          width='200' />
        <h1 className='mb-3 fs-3 fw-normal'>{signinMessage}</h1> 
        <Form.Group controlId='sign-in-email-address'>
          <Form.Control 
                        onChange={onEmailChange}
                        className='position-relative mb-1'
                        type='email' 
                        size='lg' 
                        placeholder='Email address' 
                        autoComplete='username'/>
          </Form.Group>
        <Form.Group controlId='sign-in-password' className='mb-3'>  
          <Form.Control 
                        onChange={onPasswordChange}
                        className='position-relative'
                        type='password' 
                        size='lg' 
                        placeholder='Password' 
                        autoComplete='current-password'/>
        </Form.Group>
        <Form.Group controlId='remeber-me'>
          <Form.Check 
                        className='d-flex justify-content-center'
                        label='Remember me' />
        </Form.Group>  
        <div className='d-grid'>
          <Button
            onClick={()=>{OnLogin()}} 
            variant='primary' size='lg'>
            Sign in
          </Button>
        </div>
        <p className='mt-5 text-muted'>&copy; 2022 - 2023</p>
      </Form>
    </Container>
  )
}

export default LoginPage;