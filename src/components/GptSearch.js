import React from 'react'
import GptMoviesSuggestion from './GptMoviesSuggestion';
import GptSearchBar from './GptSearchBar';
import { bg_IMG } from '../utils/constants';

const GptSearch = () => {
  return(
    <>
    
      <div className='absolute -z-10'>
      <img
          src={bg_IMG}
          alt="bgimg"
          className="h-screen object-cover md:w-full md:h-full"
        />
        </div>
      <div className="">
        <GptSearchBar/> 
        <GptMoviesSuggestion/>
    </div>
    </>
  );
}

export default GptSearch;
