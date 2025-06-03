import React, { useEffect, useState } from 'react';
import "./Home.css"
import image2 from "./weather-image.jpg";

import bgVideo from "./video-5.mp4";



function Home() {

  const api_key = "fa551b710721e0b323e7f3101f3550e3";

  const [weatherData, setweatherData] = useState({});

  const [city, setCity] = useState("");

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(JSON.stringify(data));
      setweatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

  }
  useEffect(() => {
    search(city);
  }, []);

  // Prepare weather icon URL
  const iconUrl = weatherData.weather ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` : '';



  return (

    <div className="container-fluid d-flex justify-content-center align-items-center home-container  ">

      {/* <img src={image2} className="image" ></img> */}
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>


      <div className="container text-center mt-0">
        <div className="search-box mb-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter a city name" value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && search(city)} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => search(city)}>
              🔍
            </button>
          </div>
        </div>

<div className="text-icon-box">
        <h4 className="mb-2">{weatherData.name}</h4>
        <p className="mb-2">{weatherData?.weather?.[0]?.description}</p>

        {iconUrl && <img src={iconUrl} className="weather-icon" />}

        <div className="icon display-4">{weatherData?.weather?.icon}</div>
        {/* <div className="icon display-4">🌧</div> */}
        <h2 className="my-3">{weatherData?.main?.temp}°C</h2>

        </div>

        <div className="container ">
       
          <div className="row justify-content-center  gap-4 ">
            <div className=" col-md-2">
              <div className="p-1 temp-box rounded shadow-sm">
                <span>
                  Min<br />
                  <span id="min">{weatherData?.main?.temp_min}°C </span>
                </span>
              </div>
            </div>
            <div className=" col-md-2">
              <div className="  temp-box p-1 rounded shadow-sm">
                <span>
                  Max<br />
                  <span id="max">{weatherData?.main?.temp_max}°C</span>
                </span>
              </div>
            </div>

            <div className=" col-md-2 ">
              <div className=" temp-box p-1 rounded shadow-sm">
               💧 Humidity<br />
                <strong>{weatherData?.main?.humidity}%</strong>
              </div>
            </div>
            <div className=" col-md-2">
              <div className=" temp-box p-1 rounded shadow-sm">
                🎚 Sealevel<br />
                <strong>{weatherData?.main?.sea_level}%</strong>
              </div>
            </div>

            </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center gap-4">
            
            <div className=" col-md-2">
              <div className=" temp-box p-1 rounded shadow-sm">
                ⛅ Grndlevel<br />
                <strong>{weatherData?.main?.grnd_level}%</strong>
              </div>
            </div>
            <div className=" col-md-2">
              <div className=" temp-box p-1 rounded shadow-sm">
               💨 Windspeed<br />
                <strong>{weatherData?.wind?.speed}%</strong>
              </div>
            </div>

            <div className=" col-md-2">
              <div className=" temp-box p-1 rounded shadow-sm">
               ☀ Sunrise<br />
                <strong>{weatherData?.sys?.sunrise}%</strong>
              </div>
            </div>

            <div className=" col-md-2">
              <div className=" temp-box p-1 rounded shadow-sm">
                🌥 Sunset<br />
                <strong>{weatherData?.sys?.sunset}%</strong>
              </div>
            </div>
          
          </div>
        </div>

      </div>
    </div>


  )
}
export default Home;