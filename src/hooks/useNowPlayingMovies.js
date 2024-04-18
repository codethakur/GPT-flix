import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector(store => store.movies.nowPlayingMovies);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_OPTIONS
        );
        const jsonData = await data.json();
        if (jsonData.results) {
          dispatch(addNowPlayingMovies(jsonData.results));
        } else {
          // Handle empty response or null results
          console.error("No results found for now playing movies.");
        }
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
        // Handle error gracefully
      }
    };

    if (!nowPlaying) {
      getNowPlayingMovies();
    }
  }, [nowPlaying, dispatch]);

  // Return anything here if needed
};

export default useNowPlayingMovies;
