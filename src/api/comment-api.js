import request from "../utils/request"

export const getAll=(gameId)=>{
    return request(`/comments?game_id=eq.${gameId}&order=created_at.desc`,"GET",null,{
         
    })
}

export const create=(data,accessToken)=>{
    return request('/comments',"POST",data,{
         headers:{
             ...(getAuthHeader(accessToken))
        }
    })
}
function getAuthHeader(accessToken){
    return {
        ...(accessToken?{Authorization:`Bearer ${accessToken}`}:{})
    }
}