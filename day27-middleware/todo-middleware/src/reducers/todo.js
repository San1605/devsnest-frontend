const todolist=(state=[],action)=>{
   switch(action.type){
        case"add":
        return [...state, action.payload]
        
        case "del":
            return state.filter((item,index)=> index!==action.payload)

            case "Load_todo":
            return action.payload
            default:
                return state
   }
}


export default todolist