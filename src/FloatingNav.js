import React from "react";
import { Link } from "react-router-dom"; // Use react-router for navigation
import { IconHome, IconMessage, IconUser, IconFilm } from "@tabler/icons-react"; // Import icons from Tabler Icons

const FloatingNav = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="icon" />,
    },
    {
      name: "Films",
      link: "/films",
      icon: <IconFilm className="icon" />,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: <IconMessage className="icon" />,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <IconUser className="icon" />,
    },
  ];

  return (
    <div className="floating-nav">
      <ul className="nav-items">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <Link to={item.link} className="nav-link">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingNav;
