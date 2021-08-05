import React from "react";
import { Link } from "react-scroll";

import logo from "../../pictures/logo1.png";

const Navbar = () => {
  const offset = -57;
  return (
    <nav className="navbar">
      <ul className="navbar__list-item">
        <li className="navbar__logo">
          <Link to="header" smooth={true} duration={1000}>
            <img src={logo} alt="page logo" className="logo" />
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="header" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="projects" smooth={true} duration={1000} offset={offset}>
            Projects
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="skills" smooth={true} duration={1000} offset={offset}>
            Skills
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="contact" smooth={true} duration={1000} offset={offset}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;