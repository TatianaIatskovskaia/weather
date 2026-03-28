import {useDispatch} from "react-redux";
import {fetchWeather} from "../feachers/api/weatherAction.js";
import {useState} from "react";

const Form = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchWeather(city))
        setCity('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
