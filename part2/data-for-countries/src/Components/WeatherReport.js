import React, { useState, useEffect } from "react";
import axios from "axios";

const REACT_APP_DATA_API = process.env.REACT_APP_WEATHER_DATA_API_KEY;

const WeatherReport = ({ country }) => {
  const [weather, setWeather] = useState({});
  const [iconUrl, setIconUrl] = useState("");

  useEffect(() => {
    if (country) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${REACT_APP_DATA_API}`
        )
        .then((response) => {
          setWeather(response.data);
          setIconUrl(
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [country]);

  if (!country || !weather.main) {
    return null;
  }

  const temperatureInCelsius = Math.round(weather.main.temp - 273.15);

  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>Temperature: {temperatureInCelsius}ºC</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherReport;
