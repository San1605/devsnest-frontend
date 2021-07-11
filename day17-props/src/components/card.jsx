import React from "react"


const Card=(props)=>{
    const {name,calories}=props
   return(
<div className="container">
  <h1 className="heading">
  {name}
  </h1>
  <h2 className="heading2">
  You have consumed {calories} cal today
  </h2>
</div>
    
   )
}
export default Card