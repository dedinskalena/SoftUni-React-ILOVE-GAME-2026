import { Routes,Route } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameDetails from "./components/game-details/GameDetails"
 
import Catalog from "./components/catalog/Catalog"
import GameCreate from "./components/game-create/GameCreate"
import Register from "./components/register/Register" 
import Login from "./components/login/Login" 
import Logout from "./components/logout/Logout"
import GameEdit from "./components/game-edit/GameEdit"
 
 
import  {AuthProvider} from "./contexts/auth-context"
 
 

function App() {
 
  

  
    

  return (
    
    <AuthProvider>
         <Header/> 
        {/*{auth&&<p>Welcome,{auth?.user.email}</p>} */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/games/:gameId" element={<GameDetails />}/>
            <Route path="/games/create" element={<GameCreate/>}/> 
            <Route path="/games/:gameId/edit" element={<GameEdit/>}/>

            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout"  element={<Logout />}/>

        </Routes>
     
        <Footer/>
    

    
    </AuthProvider>
  )
}

export default App
