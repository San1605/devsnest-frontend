import {username,email} from "./action/index"
import {useSelector,useDispatch} from "react-redux"
import './App.css';
function App() {
const mystateU = useSelector((state) => state.formU)
const mystateE = useSelector((state) => state.formE)
  const  dispatch = useDispatch()
  return (
    <div className="App">
       <h1>Input</h1>
<input type="text" name="name" id=""  placeholder="enter your name" onChange={(e)=>dispatch(username(e.target.value))}/>
<input type="email" name="email" id="" placeholder="enter your email" onChange={(e)=>dispatch(email(e.target.value))}/>
     <h1>Data</h1>
     <h3>Username:{mystateU}</h3>
     <h3>Email:{mystateE}</h3>
    </div>
  );
}

export default App;
