const AddNote=(name:string)=>{
return{
    type:"ADD_NOTE",
    payload:name
}

}
const DelNote=(id:number)=>{
return{
    type:"DEL_NOTE",
    payload:id
}

}

export {AddNote,DelNote}