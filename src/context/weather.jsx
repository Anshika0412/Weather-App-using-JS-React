import React,{createContext,useContext, useState} from 'react'
import { getWeatherDataCity , getWeatherDataLocation} from '../api';

const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider =(props)=>{

    const [searchCity, setSearchCity] = useState(null);
    const [data, setData] = useState(null);
   

    const fetchData = async ()=>{
        const response = await getWeatherDataCity(searchCity);
        setData(response)

    }

    const fetchUserLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            // console.log(position) })
            getWeatherDataLocation(position.coords.latitude,position.coords.longitude).then((data)=>{setData(data)})
        })
    }


    return <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchUserLocation}}>
        {props.children}
    </WeatherContext.Provider>
}
