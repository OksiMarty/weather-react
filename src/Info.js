import React from "react";

import RightDate from "./RightDate";

export default function Info(props) {
  let imageSource = `/img/${props.data.icon}.png`;
  return (
    <div className="Info">
      <div className="row mt-4">
        <div className="col-6">
          <ul>
            <li className="mainCity">
              {props.data.city}, {props.data.country}
            </li>
            <li>
              <RightDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <img
            src={window.location.origin + imageSource}
            alt={props.data.description}
            className="mainImage"
            width={50}
            height={50}
          />
        </div>
        <div className="col-2">
          {" "}
          <span className="temperature ps-3">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul className="weatherFeatures pt-2">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
