import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState(null);

 

  function handleResponse(response) {
    setInfo(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(info);
     let imageSource = `/img/${info[0].weather[0].icon}.png`;
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">{info[0].dt}</div>
            <div className="ForecastIcon">
              <img
                src={window.location.origin + imageSource}
                alt={info[0].weather[0].main}
                width={60}
                height={60}
              />
            </div>
            <div className="ForecastTemperature">
              <span className="ForecastTemperatureMax">
                {Math.round(info[0].temp.max)}°
              </span>
              <span className="ForecastTemperatureMin">
                {Math.round(info[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longtitude = props.data.coordinates.lon;
    let latitude = props.data.coordinates.lat;
    const apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
