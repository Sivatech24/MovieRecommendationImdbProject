import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./menu.css";

// Import movie components
import Amaran from "./amaran";
import Moana from "./moana";
import Dune from "./dune";
import Gladiator from "./gladiator";
import Gladiator1 from "./Gladiator1";
import Luckybaskhar from "./luckybaskhar";
import Wicked from "./wicked";
import IronMan from "./IronMan";
import OurLittleSecret from "./OurLittleSecret";
import Pushpa from "./Pushpa";
import Conclave from "./Conclave";
import SnowWhite from "./SnowWhite";
import DeadpoolWolverine from "./DeadpoolWolverine";
import Smile2 from "./Smile2";
import TheMerryGentlemen from "./TheMerryGentlemen";
import Thor from "./Thor";
import AvengersEndgame from "./AvengersEndgame";
import SquidGame from "./SquidGame";


const carouselImages = [
  { src: "https://i.ibb.co/C6MfLLh/moana2.jpg", alt: "Moana 2", page: "moana" },
  { src: "https://i.ibb.co/3pCfZ8c/amaran.jpg", alt: "Amaran", page: "amaran" },
  { src: "https://i.ibb.co/0mFszX8/dune.jpg", alt: "Dune", page: "dune" },
  { src: "https://i.ibb.co/ZmZj9bC/Avengers-Endgame1.jpg", alt: "Avengers Endgame", page: "AvengersEndgame" },
  { src: "https://i.ibb.co/9NZHsYn/Conclave.jpg", alt: "Conclave", page: "Conclave" },
  { src: "https://i.ibb.co/pw7g16M/Deadpool-Wolverine.jpg", alt: "Deadpool & Wolverine", page: "DeadpoolWolverine" },
  { src: "https://i.ibb.co/FbZmTjk/gladiator.jpg", alt: "Gladiator", page: "Gladiator" },
  { src: "https://i.ibb.co/yP55dpy/gladiator1.jpg", alt: "Gladiator1", page: "Gladiator1" },
  { src: "https://i.ibb.co/5M11sx2/IronMan.jpg", alt: "IronMan", page: "IronMan" },
  { src: "https://i.ibb.co/7bX8f88/lucky-baskhar.jpg", alt: "LuckyBaskhar", page: "Luckybaskhar" },
  { src: "https://i.ibb.co/m0ys75J/Our-Little-Secret.jpg", alt: "Our Little Secret", page: "OurLittleSecret" },
  { src: "https://i.ibb.co/WpkRfzX/Pushpa.jpg", alt: "Pushpa 2", page: "Pushpa" },
  { src: "https://i.ibb.co/WGDxM5z/Smile-2.jpg", alt: "Smile 2", page: "Smile2" },
  { src: "https://i.ibb.co/V3WThWT/Snow-White.jpg", alt: "Snow White", page: "SnowWhite" },
  { src: "https://i.ibb.co/nkSYfQg/Squid-Game.jpg", alt: "Squid Game", page: "SquidGame" },
  { src: "https://i.ibb.co/Z2Mb45s/The-Merry-Gentlemen.jpg", alt: "The Merry Gentlemen", page: "TheMerryGentlemen" },
  { src: "https://i.ibb.co/Jmc52vj/Thor.jpg", alt: "Thor", page: "Thor" },
  { src: "https://i.ibb.co/1K8yCg7/wicked.jpg", alt: "Wicked", page: "Wicked" },
];

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(null); // Track the current page for rendering

  const navigateToMovie = (page) => {
    setCurrentPage(page); // Set the current page based on the movie
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (currentPage) {
    const MovieComponents = {
      amaran: <Amaran />,
      moana: <Moana />,
      dune: <Dune />,
      Gladiator: <Gladiator />,
      Gladiator1: <Gladiator1 />,
      Luckybaskhar: <Luckybaskhar />,
      Wicked: <Wicked />,
      IronMan: <IronMan />,
      OurLittleSecret: <OurLittleSecret />,
      Pushpa: <Pushpa />,
      Conclave: <Conclave />,
      SnowWhite: <SnowWhite />,
      DeadpoolWolverine: <DeadpoolWolverine />,
      Smile2: <Smile2 />,
      TheMerryGentlemen: <TheMerryGentlemen />,
      Thor: <Thor />,
      AvengersEndgame: <AvengersEndgame />,
      SquidGame: <SquidGame />,
    };
    return MovieComponents[currentPage] || null; // Render the selected movie component
  }

  return (
    <div>
      <header className="imdb-header">
        <div className="imdb-logo">
          <h1>IMDb</h1>
        </div>
        <nav className="imdb-nav">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Watchlist</li>
            <li className="nav-item">Top Rated</li>
            
          </ul>
        </nav>
      </header>

      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              onClick={() => navigateToMovie(image.page)}
            >
              <img src={image.src} alt={image.alt} className="carousel-image" />
              <p className="carousel-caption">{image.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Menu;
