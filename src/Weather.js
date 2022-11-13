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
            <li className="mainCity">San Francisco</li>
            <li>Sunday 11:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
        <div className="col-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
            className="mainImage"
          />
        </div>
        <div className="col-2">
          {" "}
          <span className="temperature ps-3">10</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul className="weatherFeatures pt-2">
            <li>Precipitation: 2%</li>
            <li>Humidity: 59%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
