import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [closeHomeViewAddModal, setCloseHomeViewAddModal] = useState(false);
  // const [city, setCity] = useState();
  const apiKey = "w1B0oqUDkLzkIiuxyC6Agc4bolPrw4Gt";

  const getCity = async (cityName) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`
    );
    const data = await res.json();

    return data[0].Key;
  };

  const currentCondition = async (id) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${id}`
    );

    const data = await res.json();

    return data;
  };

  getCity("munich").then((data) => console.log(data));
  // .then((data) => {
  //   return currentCondition(data.Key);
  // });

  const value = { closeHomeViewAddModal, setCloseHomeViewAddModal };

  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  );
};
