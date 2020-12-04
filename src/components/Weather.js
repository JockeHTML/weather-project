import React from 'react';

function Weather({weather, Day, Date, Month}) {

    return (
  <div className="middle-container">
    
    <div className="left-container">  
        <div className="city-title">
          <h1>{weather.name}, {weather.sys.country}</h1> 
          <h2>{Day} {Date} {Month}</h2>
        </div>
        
        
      <div className="left-info-box">
        <div className="image-div">
          <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
        </div>
        <div className="temp-div">
          <h1>{Math.round(weather.main.temp)}°</h1>
          <h2>{weather.weather[0].main.charAt(0).toUpperCase() + weather.weather[0].main.slice(1) }</h2>  
        </div>
      </div>   
    </div> 

    <div className="right-container">
      <div className="first-box">
      <div className="box">
        <h3>{weather.main.temp_max}°</h3>
        <span>Max</span>
      </div>
      <div className="box">
        <h3>{weather.wind.deg}</h3>
        <span>Wind</span>
      </div>
      <div className="box">
        <h3>{weather.coord.lat}</h3>
        <span>Coord:lat</span>
      </div>
      </div>
      <div className="second-box">
      <div className="box">
        <h3>{weather.main.temp_min}°</h3>
        <span>Min</span>
      </div>
      <div className="box">
      <h3>{weather.wind.speed}mph</h3>
        <span>Speed</span>
      </div>
      <div className="box">
      <h3>{weather.coord.lon}</h3>
        <span>Coord:lon</span>
      </div>
      </div>
      
    </div>

  </div>
    );
}

export default Weather;
