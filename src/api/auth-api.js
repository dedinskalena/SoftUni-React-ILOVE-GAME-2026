import {authRequest} from "../utils/request"
export const register=async function({email,password}){
   return authRequest("/signup","POST",{email,password})
}
export const login=async function({email,password}){
   return authRequest("/token?grant_type=password","POST",{email,password})
}

export const logout=async function(accessToken){
   return authRequest('/logout',"POST",null,{
      headers:{
         Authorization:`Bearer ${accessToken}`
      }
   })
}