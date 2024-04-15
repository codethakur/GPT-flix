import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchuseUpcomingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming",
          API_OPTIONS
        );
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchuseUpcomingMovies();
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  // Optionally, you can return any cleanup function or additional data here
};

export default useUpcomingMovies;
