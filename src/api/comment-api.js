import request from "../utils/request"

export const getAll=(gameId)=>{
    return request(`/comments?game_id=eq.${gameId}&order=created_at.desc`,"GET"
    )
}

export const create=(data)=>{
    return request('/comments',"POST",data)
}
