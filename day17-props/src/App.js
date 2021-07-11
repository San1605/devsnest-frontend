import './App.css';
import Card from "./components/card"
import "./components/card.css"
function App() {
  return (
    <div className="container1">
  <h1 className="a">
  Diet Chart

  </h1>
   <Card name="Pizza" calories="56"/>
   <Card name="Burger" calories="69"/>
   <Card name="Coke" calories="500"/>
   <Card name="Brownie" calories="180"/>
   <Card name="Fried Rice" calories="90"/>
   <Card name="Lasgna" calories="200"/>
   <Card name="Pani Puri" calories="10"/>
 



 

   </div>
  );
}

export default App;
