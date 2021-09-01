const username=(value)=>{
return{
type:"username",
payLoad:value
}
}

const email=(value)=>{
return{
type:'email',
payLoad:value
}
}

export {username,email};