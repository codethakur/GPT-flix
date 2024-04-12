import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_OPTIONS
        );
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getNowPlayingMovies();
  }, []); 
};

export default useNowPlayingMovies;
