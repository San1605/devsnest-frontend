import './App.css';
import React, { useState } from 'react';
import "./components/card.css"
const Card = (name, calories, index, Cards, setCards) => {

  return (
    <div className="container">
      <h1 className="heading">{name}</h1>
      <button className="delete" onClick={() => {
        const newCards = Cards.filter((el, i) => i !== index)
        setCards(newCards)
      }}>Delete</button>
      <h2 className="heading2">You have consumed {calories} cal today</h2>
    </div>
  )
}
function App(index) {
  const [Cards, setCards] = useState([])
  function add() {
    setCards([...Cards])
  }
  return (
    <div className="container1">

      <h1 className="a">
        Diet Chart
      </h1>
      <Card name="Pizza" calories="56" keys={index} cards={Cards} setCards={setCards} index={index} add={add} />
      <Card name="Burger" calories="69" keys={index} cards={Cards} setCards={setCards} index={index} />
      <Card name="Coke" calories="500" keys={index} cards={Cards} setCards={setCards} index={index} />
      <Card name="Brownie" calories="180" keys={index} cards={Cards} setCards={setCards} index={index} />
      <Card name="Fried Rice" calories="90" keys={index} cards={Cards} setCards={setCards} index={index} />
      <Card name="Lasgna" calories="200" keys={index} cards={Cards} setCards={setCards} index={index} />
      <Card name="Pani Puri" calories="10" keys={index} cards={Cards} setCards={setCards} index={index} />
    </div>
  )
}
export default App;
