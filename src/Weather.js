import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" className="btn btn-primary" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
        </div>
        <div className="col-2">10°C</div>
        <div className="col-2">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 59%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>New York</li>
            <li>Sunday 11:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
