import React from 'react';
import './imdb.css';
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
import { useState } from 'react';

const ImdbPage = () => {
  // navigation bar
  const [currentName, setCurrentName] = useState(null);

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
    <div className="imdb-page">
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
      <div className="header">
        <h1>About IMDb</h1>
      </div>
      <div className="content">
        <p>
          IMDb (Internet Movie Database) is an online database of information related to movies, TV shows, 
          video games, and streaming content online. It is the largest and most authoritative source of movie and 
          TV-related information available.
        </p>
        
        <h2>How IMDb Works</h2>
        <p>
          IMDb provides detailed information about films, TV series, and other media. Users can browse and search 
          through its vast collection of movies, actors, directors, writers, reviews, and ratings. IMDb offers 
          ratings and user-generated content, which helps others make decisions about which films to watch.
        </p>

        <p>
          Users can create accounts, rate films, write reviews, and even contribute to the database by adding new 
          movies or TV shows. IMDb also provides news and trivia related to the entertainment industry.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Search and browse movies, TV shows, and celebrities.</li>
          <li>User ratings and reviews for films and TV series.</li>
          <li>Personalized watchlists to track what you’ve seen or plan to watch.</li>
          <li>Recommendations based on your preferences.</li>
          <li>Industry news, trailers, and interviews.</li>
        </ul>

        <p>
          IMDb is used by millions of movie enthusiasts, filmmakers, and professionals in the entertainment industry 
          to find comprehensive information and stay updated on the latest content.
        </p>
      </div>
    </div>
  );
};

export default ImdbPage;
