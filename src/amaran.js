import React, { useState } from 'react';
import './movie_display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [userRating, setUserRating] = useState(9); // Default rating by the user

  // Function to handle modal open/close
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle user rating
  const handleRating = (rating) => {
    setUserRating(rating);
    toggleModal();
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
            <div className="navbar">
              <div className="nav-container">
                <button>IMDb</button>
                <button>Menu</button>
                <button>Featured Films</button>
                <button>Recommendation</button>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
                <button><FontAwesomeIcon icon={faBookmark} /> Save</button>
                <button><FontAwesomeIcon icon={faUser} /> User</button>
              </div>
            </div>
      {/* Main Movie Section */}
      <div className="movie-container">
        <div className="movie-header">
          <img
            src="/images/amaran.jpg" // Replace with actual movie poster
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
            src="https://www.youtube.com/embed/H7FT-d4YA74" // Replace with actual YouTube trailer
            title="Amaran Trailer"
            className="trailer-video"
          />
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="top-picks">
        <h2>You May like.</h2>
        <div className="movie-list">
          <div className="movie-card small">
            <img src="/images/moana2.jpg" alt="Moana 2" />
            <div className="movie-info">
              <p>Moana 2</p>
              <span>⭐ 8.7</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="/images/gladiator.jpg" alt="Gladiator" />
            <div className="movie-info">
              <p>Gladiator</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="/images/wicked.jpg" alt="Wicked" />
            <div className="movie-info">
              <p>Wicked</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
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
