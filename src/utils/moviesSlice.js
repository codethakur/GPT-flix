import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null, // Change here to include popularMovies in the initial state
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload; // Update popularMovies instead of nowPlayingMovies
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
       
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
