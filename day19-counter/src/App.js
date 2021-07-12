import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [state1, setstate1] = useState(0)
  const [state2, setstate2] = useState(0)
  const [state3, setstate3] = useState(0)
  const [state4, setstate4] = useState(0)
  const handleClick1 = () => {
    setstate1(state1 + 1)
  }
  const handleClick2 = () => {
    setstate2(state2 + 1)
  }
  const handleClick3 = () => {
    setstate3(state3 + 1)
  }
  const handleClick4 = () => {
    setstate4(state4 + 1)
  }
  return (
    <div className="container">
      <button className="btn1" onClick={handleClick1}>{state1}</button>
      <button className="btn2" onClick={handleClick2}>{state2}</button>
      <button className="btn3" onClick={handleClick3}>{state3}</button>
      <button className="btn4" onClick={handleClick4}>{state4}</button>
    </div>
  )
}
export default App