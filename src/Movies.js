import React from 'react';
import { useGlobalContext } from './Context';
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useGlobalContext();

  // Limit the number of movies to be displayed
  const moviesToShow = movie.slice(0, 3);

  // Example array of dates (replace with your actual dates)
  const dates =
  ["December 8th, 2023 | Kathmandu, Nepal",
   "December 9th, 2023 | Kathmandu, Nepal",
    "December 10th, 2023 | Kathmandu, Nepal"
  ];

  return (
    <div className="movies-container">
      {moviesToShow.map((currMovie, index) => (
        <div key={currMovie.imdbID} className="movie-card">
          <NavLink to={`movie/${currMovie.imdbID}`}>
            <div className="movie-poster-container">
              <img src={currMovie.Poster} alt={currMovie.Title} />
              <div className="text-box">Movies</div>
            </div>
            <h2>{currMovie.Title}</h2>
          </NavLink>
          <h1>{dates[index]}</h1>
        </div>
      ))}
    </div>
  );
};

export default Movies;
