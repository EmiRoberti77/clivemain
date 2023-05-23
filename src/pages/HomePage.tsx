import React, { useEffect } from 'react'
import { useAppSelector } from '../state/store'
import { useNavigate } from 'react-router-dom'
import { Page } from '.'

interface HomePageProps {}

const HomePage:React.FC<HomePageProps> = () => {
  
  const {user} = useAppSelector((state)=>state.user)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user) navigate(Page.LOGIN)
  },[])

  return (
    <div>
      {user?.email} This is the home page 
    </div>
  )
}

export default HomePage