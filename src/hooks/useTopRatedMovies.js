import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchuseRatedMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated",
          API_OPTIONS
        );
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchuseRatedMovies();
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  // Optionally, you can return any cleanup function or additional data here
};

export default useTopRatedMovies;
