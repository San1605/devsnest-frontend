const weatherdata=(state={},action)=>{
    if(action.type==="placeSearchdata"){
    return action.payload
    }
    return state
    }
    export default weatherdata 