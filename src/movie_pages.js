// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; // Add your custom CSS here

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">IMDb</Link>
      <Link to="/featured-films">Featured Films</Link>
      <Link to="/recommendation">Recommendation</Link>
      <button>Save</button>
      <button>Search</button>
      <button>You!</button>
    </nav>
  );
};

// HomePage Component
const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="main">
        <div className="movie-header">
          <img src="/path/to/amaran-poster.jpg" alt="Amaran Poster" className="movie-poster" />
          <div className="movie-info">
            <h1>Amaran</h1>
            <p>
              The life of Major Mukund Varadarajan and is set against the backdrop of
              the Qazipathri Operation in Shopian, Kashmir, which took place back in
              2014.
            </p>
            <button className="watch-button">Watch on Netflix</button>
          </div>
        </div>
      </div>
      <div className="movies-list">
        <h2>You may like</h2>
        <div className="movies">
          <div className="movie">
            <img src="/path/to/movie1.jpg" alt="Movie 1" />
            <p>Moana 2</p>
          </div>
          <div className="movie">
            <img src="/path/to/movie2.jpg" alt="Movie 2" />
            <p>Gladiator</p>
          </div>
          <div className="movie">
            <img src="/path/to/movie3.jpg" alt="Movie 3" />
            <p>Wicked</p>
          </div>
          <div className="movie">
            <img src="/path/to/movie4.jpg" alt="Movie 4" />
            <p>Dune</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// MovieDetails Component
const MovieDetails = () => {
  return (
    <div className="moviedetails">
      <Navbar />
      <div className="main">
        <div className="movie-header">
          <img src="/path/to/amaran-poster.jpg" alt="Amaran Poster" className="movie-poster" />
          <div className="movie-info">
            <h1>Amaran</h1>
            <p>IMDB Rating: 8.9</p>
            <p>
              The life of Major Mukund Varadarajan and is set against the backdrop of
              the Qazipathri Operation in Shopian, Kashmir, which took place back in
              2014.
            </p>
          </div>
        </div>
      </div>
      <div className="top-picks">
        <h2>Top Picks</h2>
        <div className="movies">
          <div className="movie">
            <img src="/path/to/movie1.jpg" alt="Moana 2" />
            <p>Moana 2</p>
          </div>
          <div className="movie">
            <img src="/path/to/movie2.jpg" alt="Gladiator" />
            <p>Gladiator</p>
          </div>
          <div className="movie">
            <img src="/path/to/movie3.jpg" alt="Wicked" />
            <p>Wicked</p>
          </div>
          <div className="movie">
            <img src="/path/to/movie4.jpg" alt="Dune" />
            <p>Dune</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/featured-films" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
