import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
        <span>amazon</span>
      </div>
      <div className="right">
        <div className="bars" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className="menu">
          <ul
            className="menu"
            style={{ display: showMenu ? "inherit" : "none" }}
          >
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>

        <input type="text" className="search" placeholder="Search" />
        <CgShoppingBag className="card" />
      </div>
    </div>
  );
};

export default Header;
