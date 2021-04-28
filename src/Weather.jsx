import React, { useEffect, useState } from "react";
import Card from "./Card";
import APIKEY from "./key.jsx";
const Weather = ({ fetchCity }) => {
  const [cityData, setCityData] = useState(null);
  const [Temp, setTemp] = useState(null);
  const [Pressure, setPressure] = useState(null);
  const [Humidity, setHumidity] = useState(null);
  const [Sunrise, setSunrise] = useState(null);
  const [Sunset, setSunset] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${fetchCity}&appid=${APIKEY}`;
      // const url2 = `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${fetchCity}&appid=fcdfb43473706adea505bc115c588a7d`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCityData(resJson);
    };
    fetchApi();
    if (cityData !== null) {
      setTemp(cityData.main.temp);
      setPressure(cityData.main.pressure);
      setHumidity(cityData.main.humidity);
      setSunrise(cityData.sys.sunrise);
      setSunset(cityData.sys.sunset);
    }
  }, [fetchCity]);
  return (
    <Card
      Temp={Temp}
      Pressure={Pressure}
      Humidity={Humidity}
      Sunrise={Sunrise}
      Sunset={Sunset}
    />
  );
};

export default Weather;
