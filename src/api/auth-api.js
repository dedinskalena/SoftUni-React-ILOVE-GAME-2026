import {authRequest} from "../utils/request"
export const register=async function({email,password}){
    authRequest("/signup","POST",{email,password})
}