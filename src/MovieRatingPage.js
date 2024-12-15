import React, { useState } from "react";
import "./MovieRatingPage.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const handleStarClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <div className="app">
      {/* Movie Details */}
      <div className="movie-details">
        <h1>Amaran</h1>
        <p>2024 • 2h 47m</p>
        <img
          src="https://via.placeholder.com/300"
          alt="Amaran Poster"
          className="movie-poster"
        />
        <p className="description">
          The life of Major Mukund Varadarajan and is set against the backdrop
          of the Qazipathri Operation in Shopian, Kashmir, which took place back
          in 2014.
        </p>

        <div className="rating-info">
          <span>IMDb Rating: </span>
          <strong>8.9/10</strong>
          <br />
          <span>Your Rating: </span>
          <strong>{userRating > 0 ? `${userRating}/10` : "Not Rated"}</strong>
        </div>

        <button className="rate-button" onClick={() => setIsModalOpen(true)}>
          Rate This Movie
        </button>
      </div>

      {/* Modal for Rating */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Rate this</h2>
            <p>Amaran</p>

            <div className="stars">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={`star ${userRating > index ? "filled" : ""}`}
                  onClick={() => handleStarClick(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="modal-actions">
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button onClick={() => setIsModalOpen(false)}>Rate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;