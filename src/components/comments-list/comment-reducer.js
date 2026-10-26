export function commentReducer(state,action){
    switch(action.type){
        case "SET_Comments":
            return action.payload;
        default:
            return state    
    }
}