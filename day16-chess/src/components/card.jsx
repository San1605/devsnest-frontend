import React from "react"
 var chess=[];
 for(var i=0;i<121;i++){
     chess.push(i)
 }

const board=(i)=>{
      if(i%2===0){
          return(
       <div key={i} className="black"></div>
       )
      }
      else{
          return(
          <div key={i} className="white"></div>
          )
      }
}


function Card() {
    return(
    chess.map(board)
    )
}
export default Card;