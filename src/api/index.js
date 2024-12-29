const baseURL = "https://api.weatherapi.com/v1/current.json?key=89a062a1e2fe4f508d4173724240711"

export const getWeatherDataCity = async(city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json()
}

export const getWeatherDataLocation = async(lat,lon)=>{
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json()
}