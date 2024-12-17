import React, { useState } from 'react';
import './movie_display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { auth } from './firebase';
// import { MongoClient } from 'mongodb';
// firebase import
// Correct import for Firestore instance (db)
import { db } from './firebaseConfig';  // Import db from firebase.js, assuming you exported it as db

// Correct import for Firestore methods
import { addDoc, collection } from 'firebase/firestore';  // Import Firestore methods from firebase/firestore
// navigation bar element import
import Imdb from'./imdb';
import User from './user';
import Recommendation from './recommendation';
import Search from './search';
import Save from './save';
import Featured from './featured';
import Menu from './menu';
// import of movies
import Amaran from './amaran';  // Ensure Amaran is a React component
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


const App = () => {
  const [currentPage, setCurrentPage] = useState(null); // Track the current page for rendering

  // const MongoClient = new MongoClient('mongodb+srv://tech:tech2410@movierecommendation.nwujz.mongodb.net/collection?retryWrites=true&w=majority&appName=MovieRecommendation');
  const [currentName, setCurrentName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userRating, setUserRating] = useState(9); // Default rating by the user

  // firebase mail
  const user = auth.currentUser;

  //movie name
  // Assuming you have the Firebase Firestore and other necessary imports above
  const [name, setName] = useState("Lucky Baskhar");  // Correctly initialize the state
  const [email, setEmail] = useState(user.email);  // Set email based on current user

  

  // Function to handle modal open/close
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle user rating
  const handleRating = (rating) => {
    setUserRating(rating);
    toggleModal();
  };

  

  // connect of mongodb
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'mongodb+srv://myAtlasDBUser:<db_password>@movierecommendation.nwujz.mongodb.net/?retryWrites=true&w=majority&appName=MovieRecommendation', {
        method: "post",
        body: JSON.stringify({ name, email, userRating }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        setEmail("");
        setName("");
        setUserRating("");
    }
  }

  const ref = collection(db, "movies"); // Firestore reference for "movies" collection

  const handleSave = async (e) => {
  e.preventDefault();

  // Prepare the data object to save
  let data = {
    name: name,          // name from the state
    email: email,        // email from the state
    userRating: userRating, // userRating from the state
  };

  try {
    // set name 
    // Reset name and email to their initial values
    setName("Lucky Baskhar");
    setEmail(user.email);
    // Add data to Firestore
    const docRef = await addDoc(ref, data);
    console.log("Document written with ID: ", docRef.id);
    alert("Data saved successfully!");
    // toggleModal();

    // Optionally clear the state after saving
    setName("");
    setEmail("");
    setUserRating(0);
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to save data");
  }
  };
  const handleRateAndSave = (e) => {
    // Call toggleModal first
    toggleModal();
  
    // Then call handleSave
    handleSave(e);
  };
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
  // pages
  

  const navigateToMovie = (page) => {
    switch (page) {
      case 'amaran':
        setCurrentPage('amaran'); // Set the page to Amaran
        break;
      case 'moana':
        setCurrentPage('moana'); // Set the page to Avatar
        break;
      case 'dune':
        setCurrentPage('dune'); // Set the page to Inception
        break;
      case 'Gladiator':
        setCurrentPage('Gladiator'); // Set the page to Inception
        break;
      case 'Gladiator1':
        setCurrentPage('Gladiator1'); // Set the page to Inception
        break;
      case 'Luckybaskhar':
        setCurrentPage('Luckybaskhar'); // Set the page to Inception
        break;
      case 'Wicked':
        setCurrentPage('Wicked'); // Set the page to Inception
        break;
      case 'IronMan':
        setCurrentPage('IronMan'); // Set the page to Inception
        break;
      case 'OurLittleSecret':
        setCurrentPage('OurLittleSecret'); // Set the page to Inception
        break;
      case 'Pushpa':
        setCurrentPage('Pushpa'); // Set the page to Inception
        break;
      case 'Conclave':
        setCurrentPage('Conclave'); // Set the page to Inception
        break;
      case 'SnowWhite':
        setCurrentPage('SnowWhite'); // Set the page to Inception
        break;
      case 'DeadpoolWolverine':
        setCurrentPage('DeadpoolWolverine'); // Set the page to Inception
        break;
      case 'Smile2':
        setCurrentPage('Smile2'); // Set the page to Inception
        break;
      case 'TheMerryGentlemen':
        setCurrentPage('TheMerryGentlemen'); // Set the page to Inception
        break;
      case 'Thor':
        setCurrentPage('Thor'); // Set the page to Inception
        break;
      case 'AvengersEndgame':
        setCurrentPage('AvengersEndgame'); // Set the page to Inception
        break;
      case 'SquidGame':
        setCurrentPage('SquidGame'); // Set the page to Inception
        break;
      default:
        window.location.href = page; // Navigate to other URLs
        break;
    }
  };

  if (currentPage === 'amaran') {
    return <Amaran />; // Render the Amaran component
  }
  if (currentPage === 'moana') {
    return <Moana />; // Render the Avatar component
  }
  if (currentPage === 'dune') {
    return <Dune />; // Render the Inception component
  }
  if (currentPage === 'Gladiator') {
    return <Gladiator />; // Render the Inception component
  }
  if (currentPage === 'Gladiator1') {
    return <Gladiator1 />; // Render the Inception component
  }
  if (currentPage === 'Luckybaskhar') {
    return <Luckybaskhar />; // Render the Inception component
  }
  if (currentPage === 'Wicked') {
    return <Wicked />; // Render the Inception component
  }
  if (currentPage === 'IronMan') {
    return <IronMan />; // Render the Inception component
  }
  if (currentPage === 'OurLittleSecret') {
    return <OurLittleSecret />; // Render the Inception component
  }
  if (currentPage === 'Pushpa') {
    return <Pushpa />; // Render the Inception component
  }
  if (currentPage === 'Conclave') {
    return <Conclave />; // Render the Inception component
  }
  if (currentPage === 'SnowWhite') {
    return <SnowWhite />; // Render the Inception component
  }
  if (currentPage === 'DeadpoolWolverine') {
    return <DeadpoolWolverine />; // Render the Inception component
  }
  if (currentPage === 'Smile2') {
    return <Smile2 />; // Render the Inception component
  }
  if (currentPage === 'TheMerryGentlemen') {
    return <TheMerryGentlemen />; // Render the Inception component
  }
  if (currentPage === 'Thor') {
    return <Thor />; // Render the Inception component
  }
  if (currentPage === 'AvengersEndgame') {
    return <AvengersEndgame />; // Render the Inception component
  }
  if (currentPage === 'SquidGame') {
    return <SquidGame />; // Render the Inception component
  }

  return (
    <div className="app-container">
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
      {/* Main Movie Section */}
      <div className="movie-container">
        <div className="movie-header">
          <img
            src="https://i.ibb.co/7bX8f88/lucky-baskhar.jpg" // Replace with actual movie poster
            alt="Lucky Baskhar"
            className="movie-poster"
          />
          <div className="movie-details">
            <h1>Lucky Baskhar <span className="year">Lucky Baskhar (2024)</span></h1>
            <p className="movie-description">
            A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering.<br></br>
            </p>
            <br></br>
            <div className="tags">
              <span>Superhero</span>
              <span>Time Travel</span>
              <span>Space Sci-Fi</span>
              <span>Action</span>
              <span>Adventure</span>
              <span>Tragedy</span>
              <span>Sci-Fi</span>
              <span>Drama</span>
		      <span>War</span>
            </div>
            <div className="rating-section">
              <div>
                <strong>IMDb Rating:</strong> ⭐ 8.9/10
              </div>
              <div>
                <strong>Your Rating:</strong> ⭐ {userRating}/10{' '}
                <button onClick={toggleModal} className="rate-button">Rate</button>
                <button onClick={handleSave} className="rate-button">Submit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>Lucky Baskhar | Official Trailer</h2>
          <iframe
            src="https://www.youtube.com/embed/vs6JMdKjoVI?loop=1&autoplay=1&fs=0&modestbranding=1" // Replace with actual YouTube trailer
            title="Lucky Baskhar Trailer"
            className="trailer-video"
          />
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="top-picks">
        <h2>You May like.</h2>
        <div className="movie-list">
          <div className="movie-card small">
            <img src="https://i.ibb.co/h9XCZzW/moana2.jpg" alt="Moana 2" />
            <div className="movie-info">
              <p>Moana 2</p>
              <span>⭐ 8.7</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/fdMqmMM/Gladiator1.jpg" alt="Gladiator" />
            <div className="movie-info">
              <p>Gladiator</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/9ss1PrX/wicked.jpg" alt="Wicked" />
            <div className="movie-info">
              <p>Wicked</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/hDxwqgQ/lucky-baskhar.jpg" alt="lucky-baskhar" />
            <div className="movie-info">
              <p>Lucky-baskhar</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/1XN8w6Z/IronMan.jpg" alt="IronMan" />
            <div className="movie-info">
              <p>IronMan</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/4M10dP5/Our-Little-Secret.jpg" alt="WOur-Little-Secret" />
            <div className="movie-info">
              <p>Our Little Secret</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/cCz9WyJ/Pushpa.jpg" alt="Pushpa2" />
            <div className="movie-info">
              <p>Pushpa 2</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/HCkVrxq/Conclave.jpg" alt="Conclave" />
            <div className="movie-info">
              <p>Conclave</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/343PDx9/Snow-White.jpg" alt="Snow-White" />
            <div className="movie-info">
              <p>Snow White</p>
              <span>⭐ 8.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/tY9L6Yj/The-Merry-Gentlemen.jpg" alt="The-Merry-Gentlemen" />
            <div className="movie-info">
              <p>The Merry Gentlemen</p>
              <span>⭐ 8.5</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/TmZTG6N/Avengers-Endgame.jpg" alt="Avengers-Endgame" />
            <div className="movie-info">
              <p>Avengers Endgame</p>
              <span>⭐ 9.0</span>
              <br></br>
              <br></br>
              <button onClick={toggleModal} className="rate-button">Rate</button>
            </div>
          </div>
          <div className="movie-card small">
            <img src="https://i.ibb.co/dfPLzCD/Squid-Game.jpg" alt="Squid-Game" />
            <div className="movie-info">
              <p>Squid Game</p>
              <span>⭐ 8.0</span>
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
