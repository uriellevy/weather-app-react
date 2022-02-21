import React, { useContext, useState } from "react";
import "./HomeView.scss";
import { FaSearch } from "react-icons/fa";
import HomeViewAddModal from "./HomeViewAddModal";
import { WeatherContext } from "../context/WeatherContext";

const HomeView = () => {
  const {
    closeHomeViewAddModal,
    setCloseHomeViewAddModal,
    cityNameSearch,
    setCityNameSearch,
    currentCityData,
    fiveDaysData,
  } = useContext(WeatherContext);
  const [text, setText] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };
  // console.log(text);
  // console.log(cityNameSearch);

  const searchCityHandler = (e) => {
    if (e.key === "Enter") {
      setCityNameSearch(text);
      setText("");
    }
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(currentCityData.LocalObservationDateTime);
  let dayName = days[d.getDay()];
  // console.log(dayName);

  return (
    <>
      {closeHomeViewAddModal && <HomeViewAddModal />}

      <div className="homeview-container">
        <div className="homeview-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="search by city name..."
            onKeyPress={searchCityHandler}
            onChange={textHandler}
            value={text}
          />
        </div>

        <div className="homeview-main">
          <div className="main-top">
            <div className="top-left">
              <div className="top-left-img"></div>
              <div className="top-left-content">
                <h3>{cityNameSearch}</h3>
                {/* {currentCityData !== [] ? (
                  <h3>{currentCityData.Temperature.Metric.Value} c°</h3>
                ) : (
                  <h3>Loading...</h3>
                )} */}
                <h3>
                  {currentCityData &&
                    typeof currentCityData.LocalObservationDateTime}
                </h3>
              </div>
            </div>
            <button className="btn-top-right">add to favorites</button>
          </div>
          <div className="main">
            <h1>{currentCityData.WeatherText}</h1>
            <div className="main-bottom">
              {fiveDaysData.map((day, index) => (
                <div key={index} className="day-wrapper">
                  <div className="bottom-day">Mon</div>
                  <div className="bottom-temp">38c</div>
                  <div className="bottom-desc">rainy</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
