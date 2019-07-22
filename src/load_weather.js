import { renderWeather } from "./render_weather_data";
import { processWeatherdesc, optStatus, eStatus, hidePageloder } from './controller';
import { renderError } from "./render_error";

const getWeatherData = (location) => {
  // URL (required), options (optional)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e104d887ccda4bc1fccc4a474a3d7347`)
    .then(function(response) {
        return response.json();
  }).then(function(response) {
    hidePageloder();
    setWeatherData(response);
  }).catch(() => {
    renderError();
  });
}

const setWeatherData = (weatherData) => {
  optStatus();
  eStatus();

  let temp, rangeTemp, humidity, wind, clouds, country, city, geoCoords, description, weatherImage, condition, data;
  temp = Number((weatherData.main.temp - 273.15).toFixed(2));
  rangeTemp = `${Number((weatherData.main.temp_min - 273.15).toFixed(2))} to ${Number((weatherData.main.temp_max - 273.15).toFixed(2))}`;
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  clouds = weatherData.clouds.all;
  country = weatherData.sys.country;
  city = weatherData.name;
  geoCoords = `[${weatherData.coord.lat}, ${weatherData.coord.lat}]`;
  description = weatherData.weather[0].description;
  condition = weatherData.weather[0].main;
  weatherImage = processWeatherdesc(condition);

  data  = {'temp': temp, 'rangeTemp': rangeTemp, 'humidity': humidity, 'wind': wind, 'clouds': clouds, 'country': country, 'city': city, 'geoCoords': geoCoords, 'description': description, 'weatherImage': weatherImage};
  renderWeather(data.weatherImage, data.city, data.country, data.description, data.clouds, data.geoCoords, data.humidity, data.temp, data.rangeTemp, data.wind);
}

export {getWeatherData}

