const processWeatherdesc = (condition) => {
  let atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
  if (condition === 'Thunderstorm') {
    return 'thunderstorm.png';
  }else if (condition === 'Drizzle') {
    return 'shower-rain.png'
  }else if (condition === 'Rain') {
    return 'rain.png'
  }else if (condition === 'Snow') {
    return 'snow.png'
  }else if (atmosphere.includes(condition)) {
    return 'mist.png'
  }else if (condition === 'Clear') {
    return 'clear-sky.png'
  }else if (condition === 'Clouds') {
    return 'broken-clouds.png'
  }
  return 'scattered-clouds.png'
}

const temperature = (temp, unit) => {
  let tp
  if (unit === 'C') {
    tp = Number((temp - 273.15).toFixed(2));
    return tp;
  }else if (unit === 'F') {
    tp = Number(((temp - 273.15) * 9/5 + 32).toFixed(2));
    return tp
  }
  return temp;
}

const checkOutput = () => {
  const outputContainer = document.querySelector('.output-container');
  if (outputContainer.childNodes.length > 0) { return true}
  return false;
}

const optStatus = () => {
  const outputContainer = document.querySelector('.output-container');
  if (outputContainer.childNodes.length > 0) {
    let optImg = document.querySelector('#output-image');
    let optdesc = document.querySelector('#output-description')
    outputContainer.removeChild(optImg);
    outputContainer.removeChild(optdesc);
  }
}

const eStatus = () => {
  let errorContainer = document.querySelector('#error-container');
  if (errorContainer.childNodes.length > 0) {
    let err = document.querySelector('#location-error');
    errorContainer.removeChild(err);
  }
}

const hidePageloder = () => {
  let pageloader = document.querySelector('.page-loader');
  pageloader.classList.add('hidden');
}

export {
  processWeatherdesc,
  temperature,
  checkOutput,
  optStatus,
  eStatus,
  hidePageloder
}