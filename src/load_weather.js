import { renderWeather } from "./render_weather_data";
import { processWeatherdesc, temperature, optStatus, eStatus, hidePageloder } from './controller';
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
  let tempC, tempF, minTempC, maxTempC, minTempF, maxTempF, humidity, wind, clouds, country, city, geoCoords, description, weatherImage, condition, data;
  tempC = temperature(weatherData.main.temp, 'C');
  tempF = temperature(weatherData.main.temp, 'F');
  minTempC = temperature(weatherData.main.temp_min, 'C');
  maxTempC = temperature(weatherData.main.temp_max, 'C');
  minTempF = temperature(weatherData.main.temp_min, 'F');
  maxTempF = temperature(weatherData.main.temp_max, 'F');
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  clouds = weatherData.clouds.all;
  country = weatherData.sys.country;
  city = weatherData.name;
  geoCoords = `[${weatherData.coord.lat}, ${weatherData.coord.lat}]`;
  description = weatherData.weather[0].description;
  condition = weatherData.weather[0].main;
  weatherImage = processWeatherdesc(condition);

  data  = {
    'tempC': tempC, 
    'tempF': tempF,
    'minTempC': minTempC,
    'maxTempC': maxTempC,
    'minTempF': minTempF,
    'maxTempF': maxTempF, 
    'humidity': humidity, 
    'wind': wind, 
    'clouds': clouds, 
    'country': country, 
    'city': city, 
    'geoCoords': geoCoords, 
    'description': description, 
    'weatherImage': weatherImage
  };
  renderWeather(
    data.weatherImage, 
    data.city, 
    data.country, 
    data.description, 
    data.clouds, 
    data.geoCoords, 
    data.humidity, 
    data.tempC, 
    data.tempF,  
    data.minTempC,
    data.maxTempC, 
    data.minTempF,
    data.maxTempF, 
    data.wind,
  );
}

export {getWeatherData}

