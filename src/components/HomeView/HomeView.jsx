import React, { useContext } from "react";
import "./HomeView.scss";
import { FaSearch } from "react-icons/fa";
import HomeViewAddModal from "./HomeViewAddModal";
import { WeatherContext } from "../context/WeatherContext";

const HomeView = () => {
  const { closeHomeViewAddModal, setCloseHomeViewAddModal } =
    useContext(WeatherContext);
  console.log(closeHomeViewAddModal);
  return (
    <>
      {closeHomeViewAddModal && <HomeViewAddModal />}

      <div className="homeview-container">
        <div className="homeview-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="search by city name..." />
        </div>

        <div className="homeview-main">
          <div className="main-top">
            <div className="top-left">jerusalem</div>
            <div className="top-right">add to favorites</div>
          </div>
          <div className="main">
            <h1>weather condition</h1>
            <div className="main-bottom">
              <div className="bottom-day">Mon</div>
              <div className="bottom-temp">38c</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
