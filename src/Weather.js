import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";
import Forecast from "./Forecast";
import { ThreeDots } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function getInfo() {
    const apiKey = "27218fb510ea3727370c3caaa80041fc";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getInfo();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn w-100 search-button"
                value="Search"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn w-100 search-button"
                value="Current"
              />
            </div>
          </div>
        </form>
        <Info data={weather} />
        <Forecast data={weather} />
      </div>
    );
  } else {
    getInfo();
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#e0218a"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
