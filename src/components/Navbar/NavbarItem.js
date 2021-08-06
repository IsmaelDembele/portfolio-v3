import React from "react";
import { Link } from "react-scroll";

const NavbarItem = () => {
  const offset = -57;

  return (
    <div class="navbar__Item_group">
      <li className="navbar__item">
        <Link to="header" smooth={true} duration={1000}>
          <button>Home</button>
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="projects" smooth={true} duration={1000} offset={offset}>
          <button>Projects</button>
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="skills" smooth={true} duration={1000} offset={offset}>
          <button>Skills</button>
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="contact" smooth={true} duration={1000} offset={offset}>
          <button>Contact</button>
        </Link>
      </li>
    </div>
  );
};

export default NavbarItem;
