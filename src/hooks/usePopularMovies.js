import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular_Movies = useSelector(store=>store.movies.popularMovies);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          API_OPTIONS
        );
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    if(!popular_Movies)fetchPopularMovies();
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  // Optionally, you can return any cleanup function or additional data here
};

export default usePopularMovies;
