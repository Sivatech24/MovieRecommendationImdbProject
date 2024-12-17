import React, { useState } from 'react';
import './save.css';

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
  { src: 'https://i.ibb.co/Z2Mb45s/The-Merry-Gentlemen.jpg', alt: 'The Merry Gentlemen', page: '/dune' },
  { src: 'https://i.ibb.co/Jmc52vj/Thor.jpg', alt: 'Thor', page: 'Thor' },
  { src: 'https://i.ibb.co/1K8yCg7/wicked.jpg', alt: 'Wicked', page: 'Wicked' },
];

const Save = () => {
  const [savedItems, setSavedItems] = useState([]);

  // Handle saving an item
  const handleSaveItem = (item) => {
    if (!savedItems.includes(item)) {
      setSavedItems([...savedItems, item]);
    }
  };

  // Handle removing a saved item
  const handleRemoveItem = (item) => {
    setSavedItems(savedItems.filter(savedItem => savedItem !== item));
  };

  return (
    <div className="save-page">
      <h1>Save Your Favorite Movies and Shows</h1>
      <div className="carousel">
        {carouselImages.map((image) => (
          <div key={image.alt} className="carousel-item">
            <img src={image.src} alt={image.alt} />
            <button onClick={() => handleSaveItem(image)}>Save</button>
          </div>
        ))}
      </div>

      <h2>Your Saved Movies/Shows</h2>
      <ul className="saved-list">
        {savedItems.length > 0 ? (
          savedItems.map((item, index) => (
            <li key={index}>
              {item.alt}
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No saved items yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Save;
