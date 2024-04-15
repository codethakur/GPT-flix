import React from "react";
import language from "../utils/languageConstants";
const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center  ">
      <form className="w-1/2 bg-zinc-900 opacity-75 flex rounded-md">
        <input
          type="text"
          className="p-4 m-4 flex-grow rounded-md bg-zinc-900  text-white font-semibold "
          placeholder="What would you like to watch Today?"
        />
        <button className="m-4 py-2 px-4 bg-red-600 opacity-100 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
