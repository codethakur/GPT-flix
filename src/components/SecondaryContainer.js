import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies } = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-[190px] pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={popularMovies} /> 
          <MoviesList title={"Top Rated"} movies={nowPlayingMovies} />
          <MoviesList title={"Upcoming"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
