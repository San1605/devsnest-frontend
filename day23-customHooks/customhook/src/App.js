
import './App.css';
import {useState}  from "react"
import useCount from './useCount';
function App() {
     const [count, setCount] = useState(0);
     useCount(count)
    //  u can use it anywhere
  return (

    <div className="App">
      <button onClick={() => {
        setCount(count + 1);
      }}>add</button>

      <span>{count}</span>

      <button onClick={
        () => {
          setCount(count - 1)
        }
      }>subtract</button>

    </div >
  );
}

export default App;
