import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
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
    getVideoBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMoviesTrailer;
