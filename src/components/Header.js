import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="title">
          <div className="logo"></div>
          <h1>The Place Image Search</h1>
        </li>
        <li>
          <div className="d20"></div>
        </li>
        <li>
          <div className="dnd"></div>
        </li>
        <li>
          <div className="saron"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
