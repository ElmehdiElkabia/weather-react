import React from 'react';
import './Weather.css';

export default function Weather(props) {
  const { list, city } = props.weatherData;
  if (!list || list.length === 0) {
    return null;
  }
  const Weather = list[0];
  const temperature = Weather.main.temp;
  const iconCode = Weather.weather[0].icon;
  const humidity = Weather.main.humidity;
  const wind = Weather.wind.speed;
  const description = Weather.weather[0].description;

  const getWeatherIconUrl = (iconCode) => {
    return `./images/${iconCode}.svg`;
  };

  return (
    <div className="weather">
      <h2>{city.name}, {city.country}</h2>
      <div className="temp">
        <img src={getWeatherIconUrl(iconCode)} alt="" />
        <p className="temperature">{Math.round(temperature - 273.15)} °C</p>
      </div>
      <div className="temp-ml">
        <i className='bx bx-water'></i>
        <p>{humidity} %</p>
      </div>
      <div className="temp-km">
        <i className='bx bx-wind'></i>
        <p>{Math.round(wind * 3.6)} km/h</p>
      </div>
      <span className="clouds">{description}</span>
    </div>
  );
}
