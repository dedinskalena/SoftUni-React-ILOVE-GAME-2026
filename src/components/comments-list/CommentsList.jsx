import { useEffect, useReducer } from "react";
import CommentItem from "./CommentItem";
 
import { commentReducer } from "./comment-reducer";
import { commentApi } from "../../api";


export default function CommentsList({
    gameId,
    refresh
}) {
    const [comments,dispatch]=useReducer(commentReducer,[])

    useEffect(()=>{
       commentApi.getAll(gameId)
        .then(result=>dispatch({type:'SET_Comments',payload:result}))
        .catch(error=>console.log(error))
        
    },[gameId,refresh])
    const deleteComentHandler=(id)=>{
        commentApi.remove(id)
        .then(()=>dispatch({type:'DELETE_COMMENT',payload:id}))
    }

   return(
    <>
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
             {comments.map(comment=><CommentItem key={comment.id} onDelete={deleteComentHandler} {...comment}/>)}

            </ul>
              {/* <!-- Display paragraph: If there are no games in the database -->
                    <!-- <p className="no-comment">No comments.</p> --> */}
            </div>
        </>
   );
}