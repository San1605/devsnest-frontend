const weather=(place)=>{
    return{
        type:"searchCity",
        payload:place,
    }
}
const placedata=(place)=>{

    return (dispatch)=>{
        fetch(`http://api.weatherapi.com/v1/current.json?key=e094d7540bd84074af465043210108&q=${place}`)
        .then((res)=>res.json())
        .then((data)=>{
         dispatch({
            type:"placeSearchdata",
            payload:data,
         })
        })
    }

}

export {weather,placedata}
