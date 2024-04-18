import React from 'react';
import { IMG_CDN_URL, poster_path_Not_found } from '../utils/constants';

const MovieCard = ({ poster_path }) => {
  if (!poster_path) {
    return <img src={poster_path_Not_found} alt="Not Found" />;
  }
  return (
    <div className="w-36 md:w-44 pr-4 md:shadow-md">
      <img alt="Movie Card" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
