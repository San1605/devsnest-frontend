
import './App.css';
import themeContext from './components/themeContext';
import {useState } from 'react';
import Themetoggle from './components/themetoggle';

const App=()=>{
  const [theme, settheme] = useState<boolean>(false);
  return(
<div>
<themeContext.Provider value={{theme,settheme}}>
  <Themetoggle/>
  </themeContext.Provider>
</div>
  )
}


//  import { useState,useEffect } from 'react';
// const App=()=>{
//   const [count, setcount] = useState<number|null>(null);
// useEffect(() => {
// setcount(0)
// }, [])
//   return(
//     <div>
//       {
//         count!==null?(<button onClick={
//           ()=>{
//             setcount(count+1)
//           }
//         }> 
//           {count}
//         </button>):null
//       }

//     </div>
//   )
// }



// import {FC ,ReactElement} from  "react   "
// import Card from "./components/card"
// const App :FC = ():ReactElement => {
//   return (
//     <div>
//        <Card title={"page title"}/>
//     </div>
//   )
// }
export default App;
