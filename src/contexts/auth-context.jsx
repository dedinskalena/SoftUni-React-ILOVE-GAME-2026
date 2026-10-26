import {createContext} from "react"
import UsePersistedState from "../hooks/usePersistedState"
import { useNavigate } from "react-router"
import { authApi } from "../api"


const AuthContext=createContext({
    accessToken:'',
    user:{},
    isAuthenticated: false,
    register(){},
    login(){},
    logout(){}
})

export function AuthProvider({
   children,
}){
     const navigate=useNavigate()
     const [auth,setAuth]=UsePersistedState('auth',null)

      const register=async (userData)=>{
      //setUser(userData)
      //Authenticate with superbase Auth
      try{

      const result=await authApi.register(userData)
       setAuth(result)
       
       navigate('/')
      }catch(error){
        alert(error.message)
      }
       
   }
   const login=async (userData)=>{
     try{

      const result=await authApi.login(userData)
        setAuth(result); 
        
        navigate('/')
      }catch(error){
        alert(error.message)
      }
      
   }
   const logout=async ()=>{
    try{
      await authApi.logout()
      setAuth(null)

    }catch(error){
      alert(error.message)
    }
     
   }
    
   const contextValue={
     accessToken:auth?.access_token,
     user:auth?.user,
     isAuthenticated:!!auth,
     register,
     login,
     logout
   }
    return(
        <AuthContext.Provider value={contextValue}>
          {children}
        </AuthContext.Provider>
    )
}



export default AuthContext