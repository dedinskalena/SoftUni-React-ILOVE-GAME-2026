import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import request from "../../utils/request"


export default function CommentsList({
    gameId,
    refresh
}) {
    const [comments,setComments]=useState([])

    useEffect(()=>{
        request(`/comments?game_id=eq.${gameId}&order=created_at.desc`)
        .then(result=>setComments(result))
        .catch(error=>console.log(error))
        
    },[gameId,refresh])


   return(
    <>
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
             {comments.map(comment=><CommentItem key={comment.id} {...comment}/>)}

            </ul>
              {/* <!-- Display paragraph: If there are no games in the database -->
                    <!-- <p className="no-comment">No comments.</p> --> */}
            </div>
        </>
   );
}