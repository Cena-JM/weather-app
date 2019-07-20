const getWeatherData = (location) => {
  // URL (required), options (optional)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e104d887ccda4bc1fccc4a474a3d7347`)
    .then(function(response) {
        return response.json();
  }).then(function(response) {
    // console.log(response.main)
    processWeatherData(response)
  });
}

const processWeatherData = (weatherData) => {
  // let data = getWeatherData(location);
  // return weatherData
  console.log(weatherData.main)
  console.log(`temp - ${weatherData.main.temp}`)
  console.log(`range temp - ${weatherData.main.temp_min} to ${weatherData.main.temp_max}`)
  console.log(`humidity - ${weatherData.main.humidity}`)
  console.log(`wind - ${weatherData.wind.speed}m/s`)
  console.log(`clouds - ${weatherData.clouds.all}%`)
  console.log(`Country - ${weatherData.sys.country} City - ${weatherData.name}`)
}

export {getWeatherData}

// processWeatherData('kampala');
