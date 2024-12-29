import React from 'react'
import { useWeather } from '../context/weather'

export default function WeatherCard() {
  const weather = useWeather();
  return (
    <div className="weather-card">
      <div style={{display:"flex", justifyContent:"center",gap:"10px"}}>
          <img src={weather.data?.current?.condition?.icon} alt="image here" /> 
          <h3 style={{color:"gray"}}>{weather.data?.current?.condition?.text}</h3>
        </div>
        <h2>{weather.data?.current?.temp_c} C <span style={{color:"grey",fontSize:"medium"}}>  Feels Like {weather.data?.current?.feelslike_c}C</span> </h2>
        <h3>{weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country}</h3>
      
    </div>
  )
}
