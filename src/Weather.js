import React from 'react'
import './weather.css'
import { useState } from 'react'
import axios from 'axios'

const Weather = () => {
  const [data, setdata] = useState({})
  const [coord, setcoord] = useState({})
  const [main, setmain] = useState({})
  const [wind, setwind] = useState({})

  

  const [country, setcountry] = useState('')
  const ApiKey = '3b04ff4f70043b14de64f0810de46965'

  const check = () =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${ApiKey}`)
        
    .then((res)=>{
        console.log(res.data);
        // console.log(data);
        setdata(res.data)
        setcoord(res.data.coord)
        setmain(res.data.main)
        setwind(res.data.wind)

        
        console.log(data);
        setcountry('')
    }).catch((err)=>{
        console.log(err);
        setcountry('')
    })
    
  }
  return (
    <>
      <div className='all'>

      <div className="input">
      <div className="flex">
      <input value={country} type="text" onChange={((e)=>setcountry(e.target.value))} />
        <button onClick={check}>CHECK</button>
      </div>
      </div>

      <div className="content">

       

        <h1 style={{color: 'white'}}>{data.name} </h1>
        <h3 style={{color: 'white'}}>Latitide : {coord.lat} </h3>
        <h3 style={{color: 'white'}}>Longitude : {coord.lon} </h3>
        <h4 style={{color: 'white'}}>Humidity : {main.humidity} </h4>
        <h4 style={{color: 'white'}}>Sea level : {main.sea_level} </h4>
        <h4 style={{color: 'white'}}>Pressure : {main.pressure} </h4>
        <h4 style={{color: 'white'}}>Temperature : {main.temp} </h4>

        <h4 style={{color: 'white'}}>Degree : {wind.deg} </h4>
        <h4 style={{color: 'white'}}>Gust : {wind.gust} </h4>
        <h4 style={{color: 'white'}}>Speed : {wind.speed} </h4>






        

       
      
      
        </div> 


      </div>

      
  
    
    </>
  )
}

export default Weather