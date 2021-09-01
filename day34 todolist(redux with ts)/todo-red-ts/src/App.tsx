import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddNote, DelNote } from "./action/index"
import { reducerType } from './reducer/index';
function App() {
  const notes = useSelector((state: reducerType) => state.notes)
  const dispatch = useDispatch()
  const [input, setinput] = useState<string>("")
  return (
    <div className="App">
      <input type="text" value={input} onChange={(e) => { setinput(e.target.value) }} />
      <button onClick={() =>{
         dispatch(AddNote(input))
         setinput("")
         }}>Add</button>
    
      <ul>
        {
          notes.map((note: string, index: number) => (
            <div key={index}>
   
              <h3>{note}</h3>
              <button onClick={() => { dispatch(DelNote(index)) }}>delete</button>
             </div>
          ))
            }
   </ul>
    </div>
  );
}
export default App;