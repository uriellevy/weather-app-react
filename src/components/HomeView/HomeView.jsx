import React from "react";
import "./HomeView.scss";
import { FaSearch } from "react-icons/fa";

const HomeView = () => {
  return (
    <div className="homeview-container">
      <div className="homeview-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="search..." />
      </div>
      <div className="homeview-main">main</div>
    </div>
  );
};

export default HomeView;
