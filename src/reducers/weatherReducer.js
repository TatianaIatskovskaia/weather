import {SET_MESSAGE} from "../actions/messageAction.js";
import {PUT_WEATHER} from "../actions/weatherAction.js";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weather: action.payload}
        case SET_MESSAGE:
            return {...state, message: action.payload}
        default: return state;
    }
};