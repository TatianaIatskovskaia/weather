import {applyMiddleware, legacy_createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src/index.js";

export const initialState = {
    weather: {},
    message: ''
}

export const store = legacy_createStore(weatherReducer, initialState, applyMiddleware(thunk, logger))