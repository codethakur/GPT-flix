import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map((movie, index) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
