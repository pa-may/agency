import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <img className="logo" src="img/logo.png" />
        <p className="logo-text">Logiciel solution</p>
        <Link to="/">Who we are</Link>
        <Link to="/">What we do</Link>
        <Link to="/">Work</Link>
        <Link to="/">Insight</Link>
        <Link to="/">Partners</Link>
        <Link to="/">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
