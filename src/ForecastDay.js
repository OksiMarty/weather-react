import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  let imageSource = `/img/${props.data.weather[0].icon}.png`;

  function dayofweek() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="ForecastDayofWeek pt-3">{dayofweek()}</div>
      <div className="ForecastIcon">
        <img
          src={window.location.origin + imageSource}
          alt={props.data.weather[0].main}
          height={40}
        />
      </div>
      <div className="ForecastTemperature">
        <span className="ForecastTemperatureMax">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="ForecastTemperatureMin">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
