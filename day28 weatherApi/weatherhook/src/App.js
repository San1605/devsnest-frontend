import './App.css';
import { useState } from "react"
function App() {

  const [place, setPlace] = useState("")
  const [placedata, setplacedata] = useState({})
const updatePlaceData=()=>{
  fetch(`http://api.weatherapi.com/v1/current.json?key=e094d7540bd84074af465043210108&q=${place}`)
    .then((res)=>res.json())
    .then((data)=>{
      setplacedata(data)
    })
}

  return (
    <div className="App">
<div className="searchbox">
  <input type="text" 
    value={place}
    onChange={
      (e)=>{
    setPlace(e.target.value)
    }}
  />
  <button onClick={updatePlaceData}>Submit</button>

</div>
   
<div className="card">
{placedata.location?(
<div>
<img src={placedata.current.condition.icon} alt="" />
   <h1>{placedata.current.temp_c}</h1>
   <p>{placedata.current.condition.text}</p>
   <h3>{placedata.location.name}</h3>
   <div className="weatherrow">

    <div className="weatherdatacol">
      <p>Wind Now</p>
      <h2>{placedata.current.wind_kph}</h2>
      <span>KM</span>
    </div>
    <div className="weatherdatacol">
      <p>Humidity</p>
      <h2>{placedata.current.humidity}</h2>
      <span>%</span>
    </div>
    <div className="weatherdatacol">
      <p>Precipitation</p>
      <h2>{placedata.current.preip_in}</h2>
      <span>%</span>
    </div>
   </div>
</div>
  ):(
    <h2>Place not Found</h2>
  )
}
   


</div>
    </div>
  );
}

export default App;
