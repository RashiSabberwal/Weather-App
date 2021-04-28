import React from "react";

export default function Card({ Temp, Pressure, Humidity, Sunrise, Sunset }) {
  const sunset = new Date(Sunset * 1000).toLocaleTimeString().slice(0, 4);
  const sunrise = new Date(Sunrise * 1000).toLocaleTimeString().slice(0, 4);
  return (
    <div>
      <h1 className="Temp">{(Temp - 273.15).toString().slice(0, 2)}°C </h1>
      <div className="Card">
        <div className="Card1">
          <div className="Pressure">
            <h3>Pressure </h3>
            <h4>{Pressure} hpa</h4>
          </div>
          <div className="sun">
            <h3>Sunrise </h3>
            <h4>{sunrise}</h4>
          </div>
        </div>
        <div className="Card2">
          <div className="humidity">
            <h3>Humidity </h3>
            <h4>{Humidity} %</h4>
          </div>
          <div className="sun">
            <h3>Sunset </h3>
            <h4>{sunset}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
