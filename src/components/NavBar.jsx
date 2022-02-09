import React from "react";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <TiWeatherWindyCloudy className="logo-icon" />
        <h1 className="logo-title">logo</h1>
      </div>

      <ul className="nav-list">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="nav-link active"
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          exact
          className="nav-link"
          activeClassName="nav-link active"
        >
          Favorites
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
