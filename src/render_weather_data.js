const renderWeather = (weatherImg, city, country, desc, clds, geoc, hum, tem, rgtem, win) => {
    // Select container
    const container = document.querySelector('.container');

    // Create elements
    const outputContainer = document.createElement('div');
    const outputImage = document.createElement('div');
    const outputDescription = document.createElement('div');
    const outputHead = document.createElement('h3');
    const outputName = document.createElement('span');
    const outputTemp = document.createElement('p');
    const temp = document.createElement('span');
    const wind = document.createElement('p');
    const humidity = document.createElement('p');
    const clouds = document.createElement('p');
    const geoCoords = document.createElement('p');
    const geo = document.createElement('span');
    const weatherImage = document.createElement('img');


    geoCoords.innerHTML = 'Geo coords - ';
    
    // Add classes and ids to elements
    outputContainer.classList.add('output-container');
    outputImage.setAttribute('id', 'output-image');
    weatherImage.setAttribute('src', `images/${weatherImg}`);
    weatherImage.setAttribute('alt', 'weather image');
    outputDescription.setAttribute('id', 'output-description');
    outputName.classList.add('high-light', 'name');
    temp.classList.add('temp');
    geo.classList.add('high-light', 'geo');

    // Arrange elements
    container.appendChild(outputContainer);
    outputImage.appendChild(weatherImage);
    outputContainer.appendChild(outputImage);
    outputContainer.appendChild(outputDescription);
    outputDescription.appendChild(outputHead);
    outputHead.appendChild(outputName);
    outputDescription.appendChild(outputTemp);
    outputTemp.appendChild(temp);
    outputDescription.appendChild(wind);
    outputDescription.appendChild(humidity);
    outputDescription.appendChild(clouds);
    outputDescription.appendChild(geoCoords);
    geoCoords.appendChild(geo);

    // Add data to elements
    // outputImage.innerHTML = `<img src="${rain}" alt="weather image"> `;

    outputName.innerHTML = `${city}, ${country} `;
    outputHead.innerHTML += `<i class='desc'> ~ ${desc}</i>`;

    temp.innerHTML = `${tem}<sup>o</sup>C`;
    outputTemp.innerHTML += ` temperature from ${rgtem}<sup>o</sup>C`;

    wind.innerHTML = `Wind - ${win}m/s`;

    humidity.innerHTML = `Humidity - ${hum}`;

    clouds.innerHTML = `Clouds - ${clds}%`;

    geo.innerHTML = geoc;



}

export { renderWeather }