import React from "react";
import { Link } from "react-scroll";
import NavbarItem from "./NavbarItem";
import NavbarMenu from "./NavbarMenu";
// import MyDrawer from "./MyDrawer";

import logo from "../../pictures/logo1.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list-item">
        <li className="navbar__logo">
          <Link to="header" smooth={true} duration={1000}>
            <img src={logo} alt="page logo" className="logo" />
          </Link>
        </li>
        <NavbarItem />
        {/* <MyDrawer /> */}
        <NavbarMenu />
      </ul>
    </nav>
  );
};

export default Navbar;
