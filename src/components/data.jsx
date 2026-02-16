import Form from "./form.jsx";
import Weather from "./weather.jsx";
import {useState} from "react";
import {apiKey, baseURL} from "../utils/const.js";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState('Enter city name')

    const getWeather = (city) => {
        fetch(`${baseURL}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000),
                })
                setMessage('')
            })
            .catch(error => {
                console.log(error)
                setMessage('Enter correct city name')
                setWeatherInfo({})
            });
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );
};

export default Data;