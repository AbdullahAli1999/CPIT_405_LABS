import { useState } from "react";
import './SearchBox.css';

export default function SearchBox(){
    const [cityName, setCityName] = useState("");
    const [forecasts, setForecasts] = useState([]);

 

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && cityName.trim().length > 2){
        const URL ="https://api.weatherapi.com/v1/forecast.json?key=47112afca4aa44dfbb8215656231705&q="+cityName+"&days=3&aqi=no&alerts=no";
        try {
            const response = await fetch(URL,{method: 'GET', headers:{Accept: 'application/json'}});
            if (!response.ok) {
                throw new Error(`Error failed to send an HTTP GET Requset: ${response.status}`);
                
            }
            const data = await response.json();
            console.log(data.forecasts.forecastsday);
            setForecasts(data.forecasts.forecastsday);
        }
        catch(err){
            console.error(err);
        }
    }
  }
  function handleChange(event){
    setCityName(event.target.value);
}
    return(
        <div>
            <input type="text" className="searchBox"
            placeholder="Enter city name"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />

            <h3>Weather for {cityName}</h3>
            <ui>
                {forecasts.map(function(forecasts, i){
                    return(
                        <li key={i}>
                            <span>{forecasts.date}</span>
                            <span>{forecasts.day.maxtemp_c}</span>
                        </li>
                    )}
                )
                }
            </ui>
        </div>
    )
}