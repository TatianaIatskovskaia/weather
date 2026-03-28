import {configureStore} from "@reduxjs/toolkit";
import message from "../feachers/message/messageSlice.js";
import weather from "../feachers/weather/weatherSlice.js";

export const store = configureStore({
    reducer: {message, weather}
})