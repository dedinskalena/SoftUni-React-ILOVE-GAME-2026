import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameDetails from "./components/game-details/GameDetails"
import { useState } from "react"
import Catalog from "./components/catalog/Catalog"
import { Routes,Route } from "react-router"
import GameCreate from "./components/game-create/GameCreate"
import Register from "./components/register/Register" 
import Login from "./components/login/Login" 
import Logout from "./components/logout/Logout"
import GameEdit from "./components/game-edit/GameEdit"
import { useNavigate } from "react-router"
import { authApi } from "./api"
import AuthContext from "./contexts/auth-context"

function App() {
  const [auth,setAuth]=useState(null)
  const navigate=useNavigate()

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
   const logoutHandler=()=>{
    
     
   }
    
   const contextValue={
     accessToken:auth?.access_token,
     user:auth?.user,
     isAuthenticated:!!auth,
     register,
     login
   }
    

  return (
    
    <AuthContext.Provider value={contextValue}>
        <Header isAuthenticated={!!auth}/> 
        {auth&&<p>Welcome,{auth?.user.email}</p>}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/games/:gameId" element={<GameDetails />}/>
            <Route path="/games/create" element={<GameCreate/>}/> 
            <Route path="/games/:gameId/edit" element={<GameEdit/>}/>

            <Route path="/register" element={<Register  onRegister={register}/>}/>
            <Route path="/login" element={<Login onLogin={login}/>}/>
            <Route path="/logout"  element={<Logout onLogout={logoutHandler}/>}/>

        </Routes>
     
        <Footer/>
    

    
    </AuthContext.Provider>
  )
}

export default App
