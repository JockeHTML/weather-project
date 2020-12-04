import React from 'react';

function WeatherBoxes({weather, forecast, Day}) {

    return (
        <div className="bottom-container">
        <div className="single-box" style={{border: Day === "Monday" ? "solid 1px black"  : null}}>              
            <span>Monday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[1].temp.day)}°</h4>
        </div>

        <div className="single-box" style={{border: Day === "Tuesday" ? "solid 1px black"  : null}}>               
            <span>Tuesday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[2].temp.day)}°</h4>
        </div>
            
        <div className="single-box" style={{border: Day === "Wednesday" ? "solid 1px black"  : null}}>                
            <span>Wednesday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[3].temp.day)}°</h4>
        </div>
           
        <div className="single-box" style={{border: Day === "Thursday" ? "solid 1px black"  : null}}>               
            <span>Thursday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[4].temp.day)}°</h4>
        </div>
            
        <div className="single-box" style={{border: Day === "Friday" ? "solid 1px black"  : null}}>                
            <span>Friday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[5].temp.day)}°</h4>
        </div>

        <div className="single-box" style={{border: Day === "Saturday" ? "solid 1px black"  : null}}>
            <span>Saturday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[6].temp.day)}°</h4>
        </div>
        <div className="single-box" style={{border: Day === "Sunday" ? "solid 1px black"  : null}}>
            <span>Sunday</span>
            <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <h4>{Math.round(forecast.daily[7].temp.day)}°</h4>
        </div>
    </div>
    );
}

export default WeatherBoxes;