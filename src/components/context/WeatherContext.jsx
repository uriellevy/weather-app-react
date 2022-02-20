import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [closeHomeViewAddModal, setCloseHomeViewAddModal] = useState(false);
  const [cityNameSearch, setCityNameSearch] = useState("tel aviv");
  const [currentCityData, setCurrentCityData] = useState([]);
  const apiKey = "aQtIbvgakOnAROCUb61WDULQYmGNuTKO";

  const getCity = async (city) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`
    );

    const data = await res.json();

    return data[0];
  };

  const getWeather = async (number) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${number}?apikey=${apiKey}`
    );
    const data = await res.json();

    setCurrentCityData(data[0]);
  };
  useEffect(() => {
    getCity(cityNameSearch)
      // .then((data) => console.log(data.Key))
      .then((data) => {
        return getWeather(data.Key);
      })

      .catch((err) => console.log(err));
    console.log(cityNameSearch);
  }, [cityNameSearch]);

  const value = {
    closeHomeViewAddModal,
    setCloseHomeViewAddModal,
    cityNameSearch,
    setCityNameSearch,
    currentCityData,
    setCurrentCityData,
  };

  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  );
};
