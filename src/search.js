import React, { useState } from "react";
import "./SearchPage.css";

// Import movie components
import Amaran from './amaran';  
import Moana from './moana';
import Dune from './dune';
import Gladiator from './gladiator';
import Gladiator1 from './Gladiator1';
import Luckybaskhar from './luckybaskhar';
import Wicked from './wicked';
import IronMan from './IronMan';
import OurLittleSecret from './OurLittleSecret';
import Pushpa from './Pushpa';
import Conclave from './Conclave';
import SnowWhite from './SnowWhite';
import DeadpoolWolverine from './DeadpoolWolverine';
import Smile2 from './Smile2';
import TheMerryGentlemen from './TheMerryGentlemen';
import Thor from './Thor';
import AvengersEndgame from './AvengersEndgame';
import SquidGame from './SquidGame';

const Search = () => {
  const [query, setQuery] = useState(""); // Search input state
  const [results, setResults] = useState([]); // Search results state
  const [currentPage, setCurrentPage] = useState(null); // Track the current page for rendering

  const carouselImages = [
    { src: 'https://i.ibb.co/C6MfLLh/moana2.jpg', alt: 'Moana 2', page: 'moana' },
    { src: 'https://i.ibb.co/3pCfZ8c/amaran.jpg', alt: 'Amaran', page: 'amaran' },
    { src: 'https://i.ibb.co/0mFszX8/dune.jpg', alt: 'Dune', page: 'dune' },
    { src: 'https://i.ibb.co/ZmZj9bC/Avengers-Endgame1.jpg', alt: 'Avengers Endgame', page: 'AvengersEndgame' },
    { src: 'https://i.ibb.co/9NZHsYn/Conclave.jpg', alt: 'Conclave', page: 'Conclave' },
    { src: 'https://i.ibb.co/pw7g16M/Deadpool-Wolverine.jpg', alt: 'Deadpool & Wolverine', page: 'DeadpoolWolverine' },
    { src: 'https://i.ibb.co/FbZmTjk/gladiator.jpg', alt: 'Gladiator', page: 'Gladiator' },
    { src: 'https://i.ibb.co/yP55dpy/gladiator1.jpg', alt: 'Gladiator1', page: 'Gladiator1' },
    { src: 'https://i.ibb.co/5M11sx2/IronMan.jpg', alt: 'IronMan', page: 'IronMan' },
    { src: 'https://i.ibb.co/7bX8f88/lucky-baskhar.jpg', alt: 'LuckyBaskhar', page: 'Luckybaskhar' },
    { src: 'https://i.ibb.co/m0ys75J/Our-Little-Secret.jpg', alt: 'Our Little Secret', page: 'OurLittleSecret' },
    { src: 'https://i.ibb.co/WpkRfzX/Pushpa.jpg', alt: 'Pushpa 2', page: 'Pushpa' },
    { src: 'https://i.ibb.co/WGDxM5z/Smile-2.jpg', alt: 'Smile 2', page: 'Smile2' },
    { src: 'https://i.ibb.co/V3WThWT/Snow-White.jpg', alt: 'Snow White', page: 'SnowWhite' },
    { src: 'https://i.ibb.co/nkSYfQg/Squid-Game.jpg', alt: 'Squid Game', page: 'SquidGame' },
    { src: 'https://i.ibb.co/Z2Mb45s/The-Merry-Gentlemen.jpg', alt: 'The Merry Gentlemen', page: 'TheMerryGentlemen' },
    { src: 'https://i.ibb.co/Jmc52vj/Thor.jpg', alt: 'Thor', page: 'Thor' },
    { src: 'https://i.ibb.co/1K8yCg7/wicked.jpg', alt: 'Wicked', page: 'Wicked' },
  ];

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Filter the carousel data based on the search query
  const filterResults = (query) => {
    return carouselImages.filter((item) =>
      item.alt.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearch = () => {
    const filteredResults = filterResults(query);
    setResults(filteredResults);
  };

  const navigateToMovie = (page) => {
    setCurrentPage(page); // Set the current page to the selected movie
  };

  // Rendering movie component based on the selected page
  if (currentPage) {
    const MovieComponent = {
      amaran: Amaran,
      moana: Moana,
      dune: Dune,
      gladiator: Gladiator,
      gladiator1: Gladiator1,
      luckybaskhar: Luckybaskhar,
      wicked: Wicked,
      ironman: IronMan,
      ourlittlesecret: OurLittleSecret,
      pushpa: Pushpa,
      conclave: Conclave,
      snowwhite: SnowWhite,
      deadpoolwolverine: DeadpoolWolverine,
      smile2: Smile2,
      themerrygentlemen: TheMerryGentlemen,
      thor: Thor,
      avengersendgame: AvengersEndgame,
      squidgame: SquidGame,
    }[currentPage];

    return <MovieComponent />; // Render the selected movie component
  }

  return (
    <div className="search-container">
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for movies or shows..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      
      {/* Displaying results as movie cards */}
      <div className="results">
        {results.length > 0 ? (
          results.map((result) => (
            <div
              key={result.page}
              className="movie-card"
              onClick={() => navigateToMovie(result.page)} // On click, navigate to the selected movie page
            >
              <img src={result.src} alt={result.alt} className="movie-img" />
              <div className="movie-info">
                <h3>{result.alt}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
