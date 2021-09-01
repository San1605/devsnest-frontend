import React from 'react'
interface todoprops{
    title:string
}
const Todo = ({title}:todoprops) => {
    return (
        <div>
            <h1>{title}</h1>
            
        </div>
    )
}

export default Todo
 