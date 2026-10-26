import request from "../utils/request"

export const getAll=async ()=>{
    
    return request('/games?order=created_at.desc',"GET")
        
}

export const create=async (data)=>{

    return request('/games',"POST",data)
}

export const remove=async function(gameId){
   return request(`/games?id=eq.${gameId}`,"DELETE")
}

export const update=async function (gameId,data) {
    return request(`/games?id=eq.${gameId}`,"PUT",data)
}

 