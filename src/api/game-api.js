import request from "../utils/request"

export const getAll=async (accessToken)=>{
    
    return request('/games?order=created_at.desc',"GET",null,{
        headers:{
            ...(accessToken?{Authorization:`Bearer ${accessToken}`}:{})
        }
    })
}

export const create=async (data,accessToken)=>{

    return request('/games',"POST",data,{
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