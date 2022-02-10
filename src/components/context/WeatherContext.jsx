import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  // const [city, setCity] = useState();
  const apiKey = "w1B0oqUDkLzkIiuxyC6Agc4bolPrw4Gt";

  const getCity = async (cityName) => {
    const res = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`
    );
    const data = await res.json();

    return data[0];
  };

  getCity("munich");

  console.log(getCity("munich"));

  return <WeatherContext.Provider>{props.children}</WeatherContext.Provider>;
};
