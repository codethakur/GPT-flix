import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topratedMovies,upcomingMovies } = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-[190px] pl-12 relative z-20">
          <MoviesList title={"Upcoming"} movies={upcomingMovies} />
          <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
          <MoviesList title={"Top Rated"} movies={topratedMovies} />
          <MoviesList title={"Popular"} movies={popularMovies} /> 
      </div>
    </div>
  );
};

export default SecondaryContainer;
