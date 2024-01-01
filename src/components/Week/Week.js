import React from 'react';
import './Week.css';

export default function Week(props) {
  const { list } = props.weatherData;
  if (!list || list.length === 0) {
    return null;
  }
  const weeklyForecastData = list.filter((item, index) => index % 6 === 0);

  return (
    <footer>
      <p className="cart">Upcoming Forecast</p>
      <div className="week">
        {weeklyForecastData.map((forecast, index) => (
          <div key={index} className="days">
            <p className="date">{getFormattedDate(forecast.dt_txt)}</p>
            <p>{`${kelvinToCelsius(forecast.main.temp)} °C`}</p>
            <img src={`./images/${forecast.weather[0].icon}.svg`} alt="" />
            <p className="desc">{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}

const getFormattedDate = (dtTxt) => {
  const date = new Date(dtTxt);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

const kelvinToCelsius = (temperature) => Math.round(temperature - 273.15);
