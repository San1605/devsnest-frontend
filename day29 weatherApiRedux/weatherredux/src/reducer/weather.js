const weather=(state="",action)=>{
if(action.type==="searchCity"){
return action.payload
}
return state
}
export default weather