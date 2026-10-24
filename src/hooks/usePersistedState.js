import { useState } from "react"

 export default function UsePersistedState(key,initialState){
    const [state,setState]=useState(()=>{
        const persistedState=localStorage.getItem(key)
        if(persistedState){
            return JSON.parse(persistedState)

        }
            return initialState

        
    })

    const setPersistedState=(value)=>{
        let resultState=value
        if(typeof value === 'function'){
            resultState=value(state)
        }

        localStorage.setItem(key,JSON.stringify(resultState))
        setState(resultState)

    }
    return [state,setPersistedState]
 }