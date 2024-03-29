import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

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
            if (index < 8) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longtitude = props.data.lon;
    let latitude = props.data.lat;
    const apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
