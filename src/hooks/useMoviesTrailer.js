import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const TrailerVideo  = useSelector(store=>store.movies.trailerVideo);

  const getVideoBackground = async () => {
    const data = await fetch(
     "https://api.themoviedb.org/3/movie/693134/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((video) => video.type === "Trailer");//type: "Trailer
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if(!TrailerVideo){
      getVideoBackground();
    }
  }, []);
};

export default useMoviesTrailer;
