import axios from "axios"

const endpoint = 'http://localhost:3000/api/v1/users/finduser'

interface User {
  _id:string;
  email:string;
  password:string;
  level:number;
}

export const getUserbyEmailPass = async(useremail:string, userpassword:string):Promise<any> =>{
  console.log("export const doLogin = async(useremail:string, userpassword:string):Promise<boolean> =>{");
  return await axios.post<User[]>(endpoint, {
    email:useremail,
    pass:userpassword
  })
}
