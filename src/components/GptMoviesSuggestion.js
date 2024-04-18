import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const GptMoviesSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black, opacity-90 text-white">
      <div>
        {movieNames.map((movie, index) => (
          <MoviesList
            key={movieNames}
            title={movieNames}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
