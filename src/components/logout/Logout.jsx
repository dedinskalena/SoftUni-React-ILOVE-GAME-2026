import { Navigate } from "react-router"
import AuthContext from "../../contexts/auth-context";
import {useContext, useEffect} from "react"
export default function Logout( ) {
const {logout}=useContext(AuthContext) 

useEffect(()=>{
    logout()
},[logout])


   return (
       <Navigate to="/"/>
   )
}