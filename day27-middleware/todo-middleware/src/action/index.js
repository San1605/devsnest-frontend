const AddtodoList=(item)=>{

    return{

        type:"add",
        payload:item
    }

}
const Deltodo=(id)=>{
 
 return{

     type:"del",
     payload:id

 }   
}


const Loadtodo=()=>{

    return(dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res)=>res.json())
        .then((todos)=>{
            return dispatch({
                type:"Load_todo",
                payload:todos,
            })
        })
    }
}

export {AddtodoList,Deltodo,Loadtodo}
