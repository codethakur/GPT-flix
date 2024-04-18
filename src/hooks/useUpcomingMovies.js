import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const Upcoming_movie = useSelector(store=>store.movies.upcomingMovies);


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

    if(!Upcoming_movie){
      fetchuseUpcomingMovies();
    }
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  // Optionally, you can return any cleanup function or additional data here
};

export default useUpcomingMovies;
