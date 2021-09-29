import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[],
}

const movieSclice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovie(state,action){
            state.movies=action.payload;
        }
    }
})

export const selectMovie=state=>state.movie.movies;
export const {setMovie} =movieSclice.actions;
export default movieSclice.reducer
