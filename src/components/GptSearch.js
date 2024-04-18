import React from 'react'
import GptMoviesSuggestion from './GptMoviesSuggestion';
import GptSearchBar from './GptSearchBar';
import { bg_IMG } from '../utils/constants';

const GptSearch = () => {
  return(
    <div>
      <div className='fixed -z-10'>
      <img
          src={bg_IMG}
          alt="bgimg"
          className="w-full "
        />
      </div>
      <GptSearchBar/> 
      <GptMoviesSuggestion/>
    </div>
  );
}

export default GptSearch;
