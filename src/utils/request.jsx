const URL='https://etlhxwekessjykkdlijw.supabase.co/rest/v1/'
const APIKEY='sb_publishable_DBoSW9ebShtJBaRJiDjOBg_P6eH4Sqh'


export default async function request(path="/",method='GET',data=null){
    const options={
        headers:{
            'APIKEY':APIKEY
        }
    }
    if(method!=='GET'){
        options.method=method
    }
    if(data){
        options.headers['Content-Type']='aplication/json'
        options.body=JSON.stringify(data)
    }
    const response=await fetch(`${URL}${path}`,options)
    if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`)
    }
    if(response.status==204){
        return null
    }
    return response.json()

}