import React from 'react';
import './Today.css';

export default function Today(props) {

const kelvinToCelsius =(temperature) => Math.round(temperature - 273.15);
const getFormattedTime = (dtTxt) => {
  const date = new Date(dtTxt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${formattedHours}:${minutes}${period}`;
};
  const { list } = props.weatherData;

  if (!list || list.length === 0) {
    return null; 
  }

  const forecastData = list.slice(1, 6);

  return (
    <div className="forecast">
      <p className="cart">Upcoming Forecast</p>
      <div className="temp-list">
        {forecastData.map((forecast, index) => (
          <div key={index} className="next">
            <div>
              <p className="time">{getFormattedTime(forecast.dt_txt)}</p>
              <nav className="today">
                <img src={`./images/${forecast.weather[0].icon}.svg`} alt="" />
                <p> {kelvinToCelsius(forecast.main.temp)} °C </p>
              </nav>
            </div>
            <p className="desc">{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


