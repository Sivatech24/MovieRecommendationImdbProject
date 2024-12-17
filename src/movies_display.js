import React, { useState } from 'react';
import './movie_display.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [userRating, setUserRating] = useState(9);
  const [username, setUsername] = useState('exampleUser'); // Replace with Firebase email username extraction logic
  const movieName = 'Amaran';

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRating = async (rating) => {
    setUserRating(rating);
    toggleModal();

    try {
      const message = await saveRating(movieName, rating, username);
      alert(message);
    } catch (error) {
      alert('Failed to save rating. Please try again.');
    }
  };

  return (
    <div className="app-container">
      {/* Main Movie Section */}
      <div className="movie-container">
        <div className="movie-header">
          <img
            src="https://via.placeholder.com/200x300" // Replace with actual movie poster
            alt="Amaran Poster"
            className="movie-poster"
          />
          <div className="movie-details">
            <h1>Amaran <span className="year">2024 • 2h 47m</span></h1>
            <p className="movie-description">
              The life of Major Mukund Varadarajan and is set against the backdrop
              of the Qazipathri Operation in Shopian, Kashmir, which took place back in 2014.
            </p>
            <div className="tags">
              <span>Action</span>
              <span>Drama</span>
              <span>Biography</span>
            </div>
            <div className="rating-section">
              <div>
                <strong>IMDb Rating:</strong> ⭐ 8.9/10
              </div>
              <div>
                <strong>Your Rating:</strong> ⭐ {userRating}/10{' '}
                <button onClick={toggleModal} className="rate-button">Rate</button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>Amaran | Official Trailer</h2>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual YouTube trailer
            title="Amaran Trailer"
            className="trailer-video"
          />
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="recommendation-section">
        <h2>You may like</h2>
        <div className="movie-recommendations">
          <div className="recommendation-card">Movie 1</div>
          <div className="recommendation-card">Movie 2</div>
          <div className="recommendation-card">Movie 3</div>
        </div>
      </div>

      {/* Rating Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Rate this</h2>
            <p>Amaran</p>
            <div className="stars">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={index < userRating ? 'star selected' : 'star'}
                  onClick={() => handleRating(index + 1)}
                >
                  ⭐
                </span>
              ))}
            </div>
            <div className="modal-actions">
              <button onClick={toggleModal} className="cancel-button">Cancel</button>
              <button onClick={() => handleRating(userRating)} className="rate-button">Rate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
