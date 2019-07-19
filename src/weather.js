const getweather = (location) => {
  // URL (required), options (optional)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e104d887ccda4bc1fccc4a474a3d7347`)
    .then(function(response) {
        console.log(response.json());
  }).catch(function(err) {
    // Error :(
    console.log('location not found');
  });
}

export {getweather}