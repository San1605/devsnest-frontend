import React from 'react'
import { useSelector } from 'react-redux'
const Weatherplacedata = () => {
    const placedata = useSelector(state => state.weatherdata)
    return (
        <div className="App">
   
       
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

export default Weatherplacedata
