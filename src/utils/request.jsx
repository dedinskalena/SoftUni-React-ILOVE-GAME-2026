const restUrl= 'https://etlhxwekessjykkdlijw.supabase.co/rest/v1'
const authUrl='https://etlhxwekessjykkdlijw.supabase.co/auth/v1'

const storageUrl='https://etlhxwekessjykkdlijw.supabase.co/storage/v1/object/images'

const APIKEY='sb_publishable_DBoSW9ebShtJBaRJiDjOBg_P6eH4Sqh' 




async function baseRequest(url,path="/",method="GET",data=null,opts={}){
    const options={
        ...opts,
        headers:{
            ...opts.headers,
            'APIKEY':APIKEY,
            ...getAuthHeader()
             
        },
        
    }
    if(method!=='GET'){
        options.method=method
    }
    if(data){
        options.headers['Content-Type']='application/json'
        options.body=JSON.stringify(data)
    }
    const response=await fetch(`${url}${path}`,options)
    if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`)
    }
    if([204,201].includes(response.status)){
        return null
    }
    
    return response.json()
}
export default async function request(path="/",method='GET',data=null,opts={}){
    return baseRequest(restUrl,path,method,data,opts)

}
export const authRequest=async function(path="/",method='GET',data=null,opts={}){
    return baseRequest(authUrl,path,method,data,opts)
}
//export const authRequest=baseRequest.bind(null,authUrl)

function getAuthHeader(){
    const auth=localStorage.getItem('auth')
    let accessToken
    if(auth!="null"){
        accessToken=JSON.parse(auth).access_token
    }else{

        accessToken=null
    }

    //const accessToken=auth ? JSON.parse(auth).access_token:null
    return {
        ...(accessToken?{Authorization:`Bearer ${accessToken}`}:{})
    }
}




export  async function fileUpload(fileName,file){
       const options={
        headers:{
            'APIKEY':APIKEY,
            'Content-Type':'application/octet-stream'
        },
    }
    const response=await fetch(`${storageUrl}/${fileName}`,{
        method:"POST",
        body:file,
        ...options
    })
    if(!response.ok){
        throw new Error(`Http error status:${response.status}`)
    }
     return `https://etlhxwekessjykkdlijw.supabase.co/storage/v1/object/public/images/${fileName}`

}
 