import React from "react";
import { useState } from 'react';

const Card=()=>{
    const [state1, setstate1] = useState(0)
    const handleClick1 = () => {
        setstate1(state1 + 1)
      }
    return(

        <div>
       <button className="btn1" onClick={handleClick1}>{state1}</button>
    </div>
        )
}
export default Card;