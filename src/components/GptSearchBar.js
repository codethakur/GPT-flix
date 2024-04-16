import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  

  return (
    <div className="pt-[20%] flex justify-center  ">
      <form className="w-1/2 bg-zinc-900 opacity-75 flex rounded-md">
        <input
          type="text"
          className="p-4 m-4 flex-grow rounded-md bg-zinc-900  text-white font-semibold "
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-600 opacity-100 text-white rounded-lg">
          {lang[langKey].search} 
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
