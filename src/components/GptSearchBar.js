import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch()
//search movies in TMDB data base

  const searchMoviesTMDB = async(movie)=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='
      +{movie}+
      '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json()
    return  json.results;

  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to get Movies

    const gptQuery =
      "Act as a movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ".only give me top five movies name, comma separated like the example result ahead, Example: 12th Fail, Ramayana: The Legend of Prince Rama, Nayakan, Gol Maal, Edge of Tomorrow";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content:gptQuery}],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult.choices);
    if(!gptResult.choices){
      //Todo:Error   Handling
    }
    const gptMovies = gptResult.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie)=>searchMoviesTMDB(movie));

    const TMDBResults =  await Promise.all(promiseArray);
    dispatch(addGptMoviesResult({movieNames:gptMovies, movieResults:TMDBResults}));
  };

  return (
    <div className="pt-[40%]  md:pt-[20%] flex justify-center">
      
      <form
        className="w-full md:w-1/2 bg-zinc-900 opacity-75 flex rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 flex-grow rounded-md bg-zinc-900  text-white font-semibold"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="m-4 py-2 px-16 bg-red-600 opacity-100 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
