import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";
import { cleanup } from "@testing-library/react";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.data]);

  function handleResponse(response) {
    setInfo(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          {info.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let longtitude = props.data.lon;
    let latitude = props.data.lat;
    const apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
