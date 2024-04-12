import {useSelector} from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
  useMoviesTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
