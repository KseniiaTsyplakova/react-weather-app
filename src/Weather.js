import "./Weather.css";
import snow from "./images/snow.png";
import geotag from "./images/geotag.png";
import SearchEngine from "./SearchEngine";
import rainyDay from "./images/rainy-day.png";

export default function Weather() {
  let weatherData = {
    city: "Tbilisi",
    temperature: 4,
    date: "Sat, 3 Dec 20:34",
    description: "Light snow",
    humidity: 87,
    wind: 22,
    maxTemp: 4,
    minTemp: 2,
  };

  return (
    <div className="Weather">
      <div className="container border border-2 p-5 mt-3">
        <SearchEngine />

        <div className="row mt-2">
          <div className="col-9">
            <div className="coords">
              <h1 id="city">{weatherData.city}</h1>
              <span>
                <img
                  src={geotag}
                  alt="geoposition"
                  width="30"
                  id="current-position"
                  className="current-position"
                />
              </span>
            </div>
            <h2 id="current-date">{weatherData.date}</h2>
          </div>
          <div className="col-3 p-4 additionalInfo">
            <p>
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </p>
            <p>
              Humidity: <span id="humidity">{weatherData.humidity}</span> %
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
            <img src={snow} id="iconWeather" alt="cloudy-sun" width="200" />
          </div>
          <div className="col-1"></div>
          <div className="col-7 p-4 mt-4">
            <h2 className="current-values" id="current-values">
              <span className="temperature" id="temperature"></span>
              <a href="/" id="temp" rel="noreferrer">
                {weatherData.temperature}
              </a>
              <span className="units">
                <a
                  href="/"
                  id="celsius-link"
                  className="active"
                  rel="noreferrer"
                >
                  °C
                </a>{" "}
                |
                <a href="/" id="fahrenheit-link" rel="noreferrer">
                  °F
                </a>
              </span>
              <span id="temperature-description">
                {weatherData.description}
              </span>
            </h2>
            <p className="bold currentMinMaxTemp">
              <span id="max-temp">{weatherData.maxTemp}</span>° /
              <span id="min-temp" className="min-temp">
                {weatherData.minTemp}
              </span>{" "}
              °
            </p>
          </div>
        </div>
        <div className="weather-forecast" id="forecast">
          <div className="forecast-item">
            <div className="weather-forecast-date">Sun</div>
            <img src={rainyDay} alt="" width="50" />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">13° </span>
              <span className="weather-forecast-temperature-min">9° </span>
            </div>
          </div>
          <div className="forecast-item">
            <div className="weather-forecast-date">Mon</div>
            <img src={rainyDay} alt="" width="50" />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">13° </span>
              <span className="weather-forecast-temperature-min">9° </span>
            </div>
          </div>
          <div className="forecast-item">
            <div className="weather-forecast-date">Tue</div>
            <img src={rainyDay} alt="" width="50" />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">13° </span>
              <span className="weather-forecast-temperature-min">9° </span>
            </div>
          </div>
          <div className="forecast-item">
            <div className="weather-forecast-date">Wed</div>
            <img src={rainyDay} alt="" width="50" />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">13° </span>
              <span className="weather-forecast-temperature-min">9° </span>
            </div>
          </div>
          <div className="forecast-item">
            <div className="weather-forecast-date">Thur</div>
            <img src={rainyDay} alt="" width="50" />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">13° </span>
              <span className="weather-forecast-temperature-min">9° </span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/KseniiaTsyplakova/my-weather-app"
            target="_blank"
            rel="noreferrer"
            className="gitLink"
          >
            Open-source by{" "}
          </a>
          by Kseniia Tsyplakova
        </p>
      </footer>
    </div>
  );
}
