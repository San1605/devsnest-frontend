import { useDispatch, useSelector } from "react-redux"
import { Deltodo } from "../action"
const ListTodo = () => {
    const todos = useSelector((state) => state.todolist)
    const dispatch = useDispatch()

    return (
        <div>
            {
        todos.map((todo,index)=>(
            <div>
                        <h4 style={{ display: 'inline-block' }}key={index}>{todo.title}</h4>
                        <button onClick={() => {
                            dispatch(Deltodo(index))
                        }}>Delete</button>
                    </div>
        ))
            }
        </div>
    )
}

export default ListTodo
