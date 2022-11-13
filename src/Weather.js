import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
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
        <div className="row mt-4">
          <div className="col-6">
            <ul>
              <li className="mainCity">
                {weather.city}, {weather.country}
              </li>
              <li>Sunday 11:00</li>
              <li className="text-capitalize">{weather.description}</li>
            </ul>
          </div>
          <div className="col-1">
            <img
              src={weather.icon}
              alt={weather.description}
              className="mainImage"
            />
          </div>
          <div className="col-2">
            {" "}
            <span className="temperature ps-3">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-3">
            <ul className="weatherFeatures pt-2">
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "27218fb510ea3727370c3caaa80041fc";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
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
