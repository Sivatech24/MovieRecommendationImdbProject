import React, { useState, useEffect } from 'react';
import './UserPage.css';

// navigation bar element import
import Imdb from'./imdb';
import User from './user';
import Recommendation from './recommendation';
import Search from './search';
import Save from './save';
import Featured from './featured';
import Menu from './menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

const UserPage = () => {
  // Sample data for demonstration purposes, including image URLs
  const [userData, setUserData] = useState({
    totalUsers: 83000000,
    mostWatchedMovies: [],
    mostReviewedMovies: [],
  });
  const [currentName, setCurrentName] = useState(null);

  // Simulating an API call to fetch user data
  useEffect(() => {
    // Example data fetched from an API
    const fetchUserData = async () => {
      const data = {
        totalUsers: 83000000, // Example total number of users
        mostWatchedMovies: [
          { title: 'Avatar 2', views: 1500000, image: 'https://i.ibb.co/ZY4Gjfj/Avatar-2.jpg' },
          { title: 'Avengers: Endgame', views: 1200000, image: 'https://i.ibb.co/ZmZj9bC/Avengers-Endgame1.jpg' },
          { title: 'The Lion King', views: 1000000, image: 'https://i.ibb.co/ZBKTZx1/The-Lion-King.jpg' },
        ],
        mostReviewedMovies: [
          { title: 'Inception', reviews: 85000, image: 'https://i.ibb.co/cwLx384/Inception.jpg' },
          { title: 'The Dark Knight', reviews: 79000, image: 'https://i.ibb.co/sCXRK9L/The-Dark-Knight.jpg' },
          { title: 'Interstellar', reviews: 75000, image: 'https://i.ibb.co/7CPbkLW/Interstellar.jpg' },
        ],
      };
      setUserData(data);
    };

    fetchUserData();
  }, []);
  // navigation bar

  const navigateToNav = (name) => {
    switch (name) {
      case 'imdb':
        setCurrentName('imdb');
        break;
      case 'menu':
        setCurrentName('menu');
        break;
      case 'featured':
        setCurrentName('featured');
        break;
      case 'recommendation':
        setCurrentName('recommendation');
        break;
      case 'search':
        setCurrentName('search');
        break;
      case 'save':
        setCurrentName('save');
        break;
      case 'user':
        setCurrentName('user');
        break;
        default:
         window.location.href = name; // Navigate to other URLs
          break;
    }
  };

  if (currentName === 'imdb') {
    return <Imdb />;
  } 
  if (currentName === 'user') {
    return <User />;
  }
  if (currentName === 'save') {
    return <Save />;
  }
  if (currentName === 'menu') {
    return <Menu />;
  }
  if (currentName === 'featured') {
    return <Featured />;
  }
  if (currentName === 'recommendation') {
    return <Recommendation />;
  }
  if (currentName === 'search') {
    return <Search />;
  }

  return (
    <div className="user-page">
      {/* Navigation Bar */}
            <div className="navbar">
            <div className="nav-container">
                <button onClick={() => navigateToNav('imdb')}>IMDb</button>
                <button onClick={() => navigateToNav('menu')}>Menu</button>
                <button onClick={() => navigateToNav('featured')}>Featured Films</button>
                <button onClick={() => navigateToNav('recommendation')}>Recommendation</button>
                <button onClick={() => navigateToNav('search')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                </button>
                <button onClick={() => navigateToNav('save')}>
                  <FontAwesomeIcon icon={faBookmark} /> Save
                </button>
                <button onClick={() => navigateToNav('user')}>
                  <FontAwesomeIcon icon={faUser} /> User
                </button>
              </div>
            </div>
      <h1 className="user-header">IMDb User Stats</h1>

      <div className="stats-container">
        <section className="stat-card">
          <h2>Total IMDb Users</h2>
          <p className="user-count">{userData.totalUsers.toLocaleString()}</p>
          <p>Registered users worldwide on IMDb.</p>
        </section>

        <section className="stat-card">
          <h2>Most Watched Movies</h2>
          <ul className="movie-list">
            {userData.mostWatchedMovies.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                  <p className="movie-title">{movie.title}</p>
                  <p className="movie-stat">{movie.views.toLocaleString()} views</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="stat-card">
          <h2>Most Reviewed Movies</h2>
          <ul className="movie-list">
            {userData.mostReviewedMovies.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                  <p className="movie-title">{movie.title}</p>
                  <p className="movie-stat">{movie.reviews.toLocaleString()} reviews</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserPage;
