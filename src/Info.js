import React from "react";
import "./Info.css";
import RightDate from "./RightDate";

export default function Info(props) {
  let imageSource = `/img/${props.data.icon}.png`;
  return (
    <div className="Info">
      <div className="row mt-4">
        <div className="col-md-6">
          <ul>
            <li className="mainCity">
              {props.data.city}, {props.data.country}
            </li>
            <li>
              <RightDate date={props.data.date} />
            </li>
            <li className="text-capitalize fw-bolder">
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <img
            src={window.location.origin + imageSource}
            alt={props.data.description}
            className="mainImage"
            height={75}
          />
        </div>
        <div className="col-md-2">
          <div className="temperature ps-3">
            {Math.round(props.data.temperature)}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-md-2">
          <ul className="weatherFeatures pt-2">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
