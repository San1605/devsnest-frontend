import {incNumber ,decNumber} from "./actions/index"
import { useSelector,useDispatch } from "react-redux";
import './App.css';



function App() {
  const mystate=useSelector((state)=> state.changethenumber)
  const dispatch = useDispatch()
  return (
    <div className="App">

<button onClick={()=>dispatch(incNumber())}>add</button>
<span>{mystate}</span>
<button onClick={()=>dispatch(decNumber())}>Subtract</button>



    </div>
  );
}

export default App;
