import React from 'react';

import './App.css';
interface User{
  name:string,
  age:number,
  array:number[],
  email:string
}
let a:number=1;
let b:string="s";
let c:(number|string)[]=["a",1,2];
let d:any=1; //any datatype;
let e:boolean =true;

// class print {
//   printhello(){
//     console.log("hello world");
    
//   }

// }
//   let print1 :new print() 
//     print1.printhello()

// type Door ='open'|"close"  //custom type
// let door:Door="close"

function add(a:number,b:number):number{
  return a+b;
}

function App() {
  
  
  const user :User={
    name:"sandesh",
    age:20,
    array:[1,2,3,4],
    email:"sandesinghal2001@gmail.com"
  }
  
  
  return (
    <div className="App">
     {
       user==null?"loadingg":(
         <div>
           <h1>{user.name}</h1>
           <h1>{user.age}</h1>
           <h1>{user.array}</h1>
           <h1>{user.email}</h1>
<h1>{a}</h1>
<h1>{b}</h1>
<h1>{c}</h1>
<h1>{d}</h1>
<h1>{e}</h1>
<h1>{add(2,3)}</h1>

         </div>
       )
     }
    </div>
  );
}

export default App;
