import './styles.css';
import React, {useState} from "react"
import Weather from './components/Weather';
import WeatherBoxes from './components/WeatherBoxes';

function App() {

  const API_KEY = process.env.REACT_APP_DEFAULT_API;

  const [ query, setQuery ] = useState("");
  const [ weather, setWeather ] = useState({});
  const [ defaultHeading, setDefaultHeading ] = useState("Find Your Weather");
  const [ forecast, setForecast ] = useState({});
  const [ todaysDay, setTodaysDay ] = useState("");
  const [ thisMonth, setThisMonth ] = useState("");
  const [ thisDate, setThisDate ] = useState("");

  function submitCityName (event) {

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wendnesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    var n = weekday[d.getDay()];
    setTodaysDay(n);

    var months = new Array(12);
    months[0] = "January"
    months[1] = "Febuary"
    months[2] = "Mars"
    months[3] = "April"
    months[4] = "May"
    months[5] = "June"
    months[6] = "July"
    months[7] = "Agust"
    months[8] = "September"
    months[9] = "October"
    months[10] = "November"
    months[11] = "December"
    var m = months[d.getMonth()];
    var s = d.getDate();
    setThisDate(s);
    setThisMonth(m);

    if (event.key === "Enter") {
      var weatherData;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      }) 
      .then((data) => {
        weatherData = data;
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?&lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=alerts&appid=${API_KEY}&units=metric`)
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(res);
          }
        })
        .then((forecastData) => {
          setForecast(forecastData);
          setWeather(weatherData);
      }).catch((error) => {
        console.warn(error);
        setDefaultHeading("Sorry! Cant find your city..");
        setWeather({});
      });
      setDefaultHeading("");
      setQuery("");
    }
  }

  function handleCityName (event) {
    setQuery(event.target.value)
  }

  return (
  <div className="App">
    <div className="main-container">
    
      <div className="search-div">
       <h1>{defaultHeading}</h1>
        <input 
          value={query}
          className="search"
          placeholder="Enter city..." 
          onChange={handleCityName} 
          onKeyPress={submitCityName}
          type="search"/>
      </div>

      {(typeof weather.main != "undefined") ?
      <Weather Day={todaysDay} Month={thisMonth} Date={thisDate} weather={weather} /> : ("")}
      {(typeof weather.main != "undefined") ?
      <WeatherBoxes Day={todaysDay} forecast={forecast} weather={weather}/> : ("")}   
    </div>
  </div>
  );
}


export default App;