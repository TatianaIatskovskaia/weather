import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        putWeather: (state, action) => action.payload
    }
})

export default weatherSlice.reducer
export const {putWeather} = weatherSlice.actions