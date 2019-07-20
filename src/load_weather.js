import { renderWeather } from "./render_weather_data";
const getWeatherData = (location) => {
  // URL (required), options (optional)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e104d887ccda4bc1fccc4a474a3d7347`)
    .then(function(response) {
        return response.json();
  }).then(function(response) {
    setWeatherData(response)
  });
}

const setWeatherData = (weatherData) => {
  let temp, rangeTemp, humidity, wind, clouds, country, city, geoCoords, description;
  temp = weatherData.main.temp;
  rangeTemp = `${weatherData.main.temp_min} to ${weatherData.main.temp_max}`;
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  clouds = weatherData.clouds.all;
  country = weatherData.sys.country;
  city = weatherData.name;
  geoCoords = `[${weatherData.coord.lat}, ${weatherData.coord.lat}]`;
  description = weatherData.weather[0].description;
  let data  = {'temp': temp, 'rangeTemp': rangeTemp, 'humidity': humidity, 'wind': wind, 'clouds': clouds, 'country': country, 'city': city, 'geoCoords': geoCoords, 'description': description};
  console.log(data);
  renderWeather(data.city, data.country, data.description, data.clouds, data.geoCoords, data.humidity, data.temp, data.rangeTemp, data.wind);
}

export {getWeatherData}

