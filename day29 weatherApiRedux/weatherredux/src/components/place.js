import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
   import {weather ,placedata} from "../action/placeweather"

const Place = () => {
    const place = useSelector(state => state.weather)
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" value={place}
                onChange={(e)=>{
                    dispatch(weather(e.target.value))
                }}
            />
            <button onClick={(e)=>{
                dispatch(placedata(place))
            }}>Submit</button>
        </div>
    )
}

export default Place
