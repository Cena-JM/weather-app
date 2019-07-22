const renderWeather = (weatherImg, city, country, desc, clds, geoc, hum, temC, temF, mntemC, mxtemC, mntemF, mxtemF, win) => {
    // Select container
    const outputContainer = document.querySelector('.output-container');

    // Create elements
    const outputImage = document.createElement('div');
    const outputDescription = document.createElement('div');
    const outputHead = document.createElement('h3');
    const outputName = document.createElement('span');
    const outputTemp = document.createElement('p');
    const tempC = document.createElement('span');
    const tempF = document.createElement('span');
    const rgtempC = document.createElement('span');
    const rgtempF = document.createElement('span');
    const wind = document.createElement('p');
    const humidity = document.createElement('p');
    const clouds = document.createElement('p');
    const geoCoords = document.createElement('p');
    const geo = document.createElement('span');
    const weatherImage = document.createElement('img');


    geoCoords.innerHTML = 'Geo coords - ';
    
    // Set element attributes
    outputImage.setAttribute('id', 'output-image');
    weatherImage.setAttribute('src', `images/${weatherImg}`);
    weatherImage.setAttribute('alt', 'weather image');
    outputDescription.setAttribute('id', 'output-description');
    outputName.classList.add('high-light', 'name');
    tempC.classList.add('temp');
    tempF.classList.add('temp', 'hidden');
    tempC.setAttribute('id', 'temp-c');
    tempF.setAttribute('id', 'temp-f');
    rgtempC.classList.add('rg-tempc');
    rgtempF.classList.add('rg-tempf', 'hidden');
    geo.classList.add('high-light', 'geo');

    outputImage.appendChild(weatherImage);
    outputContainer.appendChild(outputImage);
    outputContainer.appendChild(outputDescription);
    outputDescription.appendChild(outputHead);
    outputHead.appendChild(outputName);
    outputDescription.appendChild(outputTemp);
    outputTemp.appendChild(tempC);
    outputTemp.appendChild(tempF);
    outputTemp.appendChild(rgtempC);
    outputTemp.appendChild(rgtempF);
    outputDescription.appendChild(wind);
    outputDescription.appendChild(humidity);
    outputDescription.appendChild(clouds);
    outputDescription.appendChild(geoCoords);
    geoCoords.appendChild(geo);

    // Add data to elements
    outputName.innerHTML = `${city}, ${country} `;
    outputHead.innerHTML += `<i class='desc'> ~ ${desc}</i>`;

    tempC.innerHTML = `${temC}<sup>o</sup>C`;
    tempF.innerHTML = `${temF}<sup>o</sup>F`;
    rgtempC.innerHTML = ` temperature from ${mntemC} to ${mxtemC}<sup>o</sup>C`;
    rgtempF.innerHTML = ` temperature from ${mntemF} to ${mxtemF}<sup>o</sup>F`;

    wind.innerHTML = `Wind - ${win}m/s`;

    humidity.innerHTML = `Humidity - ${hum}%`;

    clouds.innerHTML = `Clouds - ${clds}%`;

    geo.innerHTML = geoc;

}

export { renderWeather }