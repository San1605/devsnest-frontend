import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddtodoList,Loadtodo } from '../action/index'

const AddTodo = () => {
    const [item,setItem]=useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" value={item} onChange={
                 (e)=>{
                    setItem(e.target.value)
                 }
            }/>
            <button
            onClick={()=>{
                dispatch(
                    AddtodoList({
                        title:item,

                    })
                )
                setItem("")
            }}
            >Add</button> 
            <button onClick={()=>{
                dispatch(Loadtodo())
            }}>Loadtodo</button>
        </div>
    )
}

export default AddTodo
