import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [closeHomeViewAddModal, setCloseHomeViewAddModal] = useState(false);
  const [cityNameSearch, setCityNameSearch] = useState("tel aviv");
  const [currentCityData, setCurrentCityData] = useState([]);
  const [fiveDaysData, setFiveDaysData] = useState([]);
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
      `http://dataservice.accuweather.com/currentconditions/v1/${number}?apikey=${apiKey}&details=true`
    );
    const data = await res.json();

    setCurrentCityData(data[0]);
  };

  const get5DaysForcast = async (number) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${number}?apikey=${apiKey}&metric=true`
    );
    const data = await res.json();

    setFiveDaysData(data.DailyForecasts);
  };

  useEffect(() => {
    getCity(cityNameSearch)
      .then((data) => {
        // console.log(data.Key);
        // console.log(cityNameSearch);
        // console.log(currentCityData);
        return getWeather(data.Key);
      })
      .catch((err) => console.log(err));
  }, [cityNameSearch]);

  useEffect(() => {
    getCity(cityNameSearch)
      .then((data) => {
        // console.log(fiveDaysData);
        return get5DaysForcast(data.Key);
      })
      .catch((err) => console.log(err));
  }, [cityNameSearch]);

  const value = {
    closeHomeViewAddModal,
    setCloseHomeViewAddModal,
    cityNameSearch,
    setCityNameSearch,
    currentCityData,
    setCurrentCityData,
    fiveDaysData,
  };

  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  );
};
