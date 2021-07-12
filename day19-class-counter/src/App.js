import React, { Component } from 'react'





class App extends Component {
constructor(){
  super()
  this.state={
    value1:0,
    value2:0,
    value3:0,
    value4:0
  }
}

  render() {
    const handleClick1=()=>{
      this.setState(
      {
       value: this.state.value1+=1
      }
    )}
    const handleClick2=()=>{
      this.setState(
      {
       value: this.state.value2+=1
      }
    )}
    const handleClick3=()=>{
      this.setState(
      {
       value: this.state.value3+=1
      }
    )}
    const handleClick4=()=>{
      this.setState(
      {
       value: this.state.value4+=1
      }
    )}
    return (
      <div className="container">
        <button className="btn1" onClick={handleClick1}>{this.state.value1}</button>
        <button className="btn2" onClick={handleClick2}>{this.state.value2}</button>
        <button className="btn3" onClick={handleClick3}>{this.state.value3}</button>
        <button className="btn4" onClick={handleClick4}>{this.state.value4}</button>
      </div>
    )
}
} 
export default App;
