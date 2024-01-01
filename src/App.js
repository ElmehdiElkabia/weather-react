import React,{useEffect, useState} from 'react'
import Header from "./components/Header/Header"
import Weather from './components/Weather/Weather'
import Today from './components/Today/Today'
import Week from './components/Week/Week'
import './App.css'
import axios from 'axios';

export default function App() {

  const [city, setCity] = useState('marrakech');
  const [content, setContent] = useState([]);
  const changeCity = (newCity) => {
    setCity(newCity);
  };
    const test = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=a225e49e6972e12572d6f28d5a23a867`
      )
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  };
  useEffect(()=>{
    test()
  },[city])
  return (
    <>
      <Header dataCity={changeCity} Search={test}/>
      <main>
      <Weather weatherData={content}/>
      <div className="der1"></div>
      <Today weatherData={content}/>
      </main>
      <Week weatherData={content} />
    </>
  )
}