import React from 'react'
import {useWeather} from '../context/weather'

export default function Input() {
  const weather = useWeather();
  console.log(weather)
  return (
    <div>
        <input type="text" 
                placeholder="Search your city"
                value = {weather.searchCity}
                onChange={(e)=> weather.setSearchCity(e.target.value)} />
    </div>
  )
}
