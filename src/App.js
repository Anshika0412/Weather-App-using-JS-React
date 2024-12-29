import { useEffect } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard';
import Input from './Components/Input';
import Button from './Components/Button';
import { useWeather } from './context/weather';
// import { getWeatherDataLocation } from './api';

function App() {
  const weather = useWeather();
  
  useEffect(()=>{
    weather.fetchUserLocation();
  },[])

  return (
    <>
    <h1 style={{marginTop:"50px"}}><center>Weather Forcast </center></h1>
    <div className='container'> 
      
      <div className='searchBar'>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/> 
      </div>
      <center><WeatherCard/> </center>
    </div>
    <center> <Button onClick={weather.fetchUserLocation} value="Refresh"/></center>
    </>
  );
}

export default App;
