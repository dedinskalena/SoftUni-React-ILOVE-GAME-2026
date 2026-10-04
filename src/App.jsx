import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameDetails from "./components/game-details/GameDetails"

import Catalog from "./components/catalog/Catalog"
import { Routes,Route } from "react-router"
 

function App() {
   

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/games/:id" element={<GameDetails/>}/>
        </Routes>
     
        <Footer/>
    

    </>
  )
}

export default App
