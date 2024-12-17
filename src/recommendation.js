// Recommendation.js
import React, { useEffect, useState } from "react";
import "./rec.css";

const Recommendation = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = [
      { title: "Inception", year: 2010, poster: "https://i.ibb.co/cwLx384/Inception.jpg" },
      { title: "The Dark Knight", year: 2008, poster: "https://i.ibb.co/sCXRK9L/The-Dark-Knight.jpg" },
      { title: "Interstellar", year: 2014, poster: "https://i.ibb.co/7CPbkLW/Interstellar.jpg" },
      { title: "Titanic", year: 1997, poster: "https://i.ibb.co/yhxSFSr/Titanic.jpg" },
      { title: "The Matrix", year: 1999, poster: "https://i.ibb.co/FHP64C9/The-Matrix.jpg" },
    ];
    setMovies(movieData);
  }, []);

  return (
    <div className="recommendation-container">
      <h1>Recommended Movies</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-year">{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
