import {createContext} from "react"
const AuthContext=createContext({
    accessToken:'',
    user:{},
    isAuthenticated:WebGLTransformFeedback,
    register(){},
    login(){},
    logout(){}
})

export default AuthContext