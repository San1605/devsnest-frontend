
import { useState} from 'react';

import './App.css';
 
import Todo from "./components/todo"
import Themetoggle from "./components/themetoggle"
import themecontext from './components/themecontext';
interface todotype{
  title:string
}
function App() {
const [theme, settheme] = useState<boolean>(false)
const [value, setvalue] = useState<string>('');

const [todos, settodos] = useState<todotype[]>([]);
  return (
    <themecontext.Provider value={{theme,settheme}}>
    <div className={theme?"app dark":"app"}>
      <input type="text" onChange={(e)=>{
        setvalue(e.target.value)
      }}/>
      <button onClick={()=>{
      settodos([...todos,{
        title:value
      }])
      setvalue("")
      }}>
        ADD
      </button>
<div className="todos dark">
{

      todos.map((todo,index)=>(
        <Todo title={todo.title} key={index}/>
        
        ))
      }
      </div>
      <Themetoggle/>
    
    </div>
    </themecontext.Provider>
  );
}

export default App;
