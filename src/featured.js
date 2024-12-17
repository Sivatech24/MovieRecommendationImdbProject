// featured.js
import React, { useState, useEffect } from 'react';
import './FeaturedPage.css'; // Import CSS styles

const Featured = () => {
  const [featuredFilms, setFeaturedFilms] = useState([]);

  // Fetch featured films (you can replace this with an actual API call)
  useEffect(() => {
    const fetchFeaturedFilms = async () => {
      // Example of static data
      const films = [
        {
          id: 1,
          title: "Inception",
          description: "A mind-bending thriller about dreams within dreams.",
          imageUrl: "https://i.ibb.co/7CPbkLW/Interstellar.jpg",
        },
        {
          id: 2,
          title: "The Dark Knight",
          description: "Batman faces his toughest challenge yet with the Joker.",
          imageUrl: "https://i.ibb.co/sCXRK9L/The-Dark-Knight.jpg",
        },
        {
          id: 3,
          title: "The Matrix",
          description: "A hacker discovers a reality beyond the one he knows.",
          imageUrl: "https://i.ibb.co/FHP64C9/The-Matrix.jpg",
        },
      ];
      setFeaturedFilms(films);
    };

    fetchFeaturedFilms();
  }, []);

  return (
    <div className="featured-container">
      <h1>Featured Films</h1>
      <div className="featured-films">
        {featuredFilms.map((film) => (
          <div key={film.id} className="film-card">
            <img src={film.imageUrl} alt={film.title} />
            <div className="film-info">
              <h2>{film.title}</h2>
              <p>{film.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
