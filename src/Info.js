import React from "react";
import TempUnits from "./TempUnits";
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
            width={60}
            height={60}
          />
        </div>
        <div className="col-2">
          <TempUnits unitinfo = {props.data.temperature} />
          
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
