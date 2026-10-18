import { useEffect, useState,useContext } from "react";
import { useNavigate, useParams } from "react-router";
import request from "../../utils/request"
import { gameApi } from "../../api";
import AuthContext from "../../contexts/auth-context";

export default function GameEdit() {
    const {accessToken}=useContext(AuthContext)
    const navigate=useNavigate()
    const {gameId}=useParams()
    const initialValues={
        title:'',
        genre:'',
        activePlayers:'',
        imageUrl:'',
        summary:'',
        releaseDate:''
    }
    const [game, setGame]=useState(initialValues)

    const changeHandler=(e)=>{
        setGame(state=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }



    useEffect(()=>{
        request(`/games?id=eq.${gameId}`)
        .then(data=>setGame(data[0]))
        .catch(error=>alert(error))

    },[gameId])

    const editAction=async ()=>{
        try{

            await gameApi.update(gameId,game,accessToken)
            navigate(`/games/${gameId}`)
        }catch(error){
            alert(error.message)
        }
        
    }

   return(
          <section id="edit-page">
            <form id="add-new-game" action={editAction}>
                <div className="container">

                    <h1>Edit Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="title">Game Name:</label>
                        <input type="text" id="gameName" name="title" placeholder="Enter game title..." value={game.title} onChange={changeHandler}/>
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter game genre..." value={game.genre} onChange={changeHandler}/>
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" id="activePlayers" name="activePlayers" min="0" placeholder="0"  value={game.activePlayers} onChange={changeHandler}/>
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="releaseDate" value={game.releaseDate} onChange={changeHandler}/>
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..." value={game.imageUrl} onChange={changeHandler}/>
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" rows="5"
                            placeholder="Write a brief summary..." value={game.summary} onChange={changeHandler}></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="EDIT GAME"/>
                </div>
            </form>
        </section>
   );
}