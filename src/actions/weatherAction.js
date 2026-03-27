import {apiKey, baseURL} from "../utils/const.js";
import {setMessage} from "./messageAction.js";

export const PUT_WEATHER = 'PUT_WEATHER';

export const putWeather = (weather) => ({
    type: PUT_WEATHER,
    payload: weather
});

export const fetchWeather = (city) => {
    return (dispatch) => {
        fetch(`${baseURL}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                dispatch(putWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000),
                }))
                dispatch(setMessage(''))
            })
            .catch(error => {
                console.log(error)
                dispatch(setMessage('Enter correct city name'))
                dispatch(putWeather({}))
            });
    };
};