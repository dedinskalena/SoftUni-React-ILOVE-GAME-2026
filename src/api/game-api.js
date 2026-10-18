import request from "../utils/request"

export const getAll=async (accessToken)=>{
    
    return request('/games?order=created_at.desc',"GET",null,{
        headers:{
            ...(accessToken?{Authorization:`Bearer ${accessToken}`}:{})
        }
    })
}