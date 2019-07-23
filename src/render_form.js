import { getWeatherData } from './load_weather';
import { toggleTemp } from "./convert_temperature";

const weatherForm = () => {
    // Select container
    const container = document.querySelector('.container');

    // Create elements
    const head = document.createElement('h1');
    const toggle = document.createElement('div');
    const celsiusBtn = document.createElement('button');
    const fahrenheitBtn = document.createElement('button')
    const inputContainer = document.createElement('form');
    const inputField = document.createElement('input');
    const inputBtn = document.createElement('button');
    const search = document.createElement('i');

    // Set element attributes
    head.classList.add('title');
    toggle.classList.add('toggle');
    celsiusBtn.classList.add('temp-btn', 'current-temp');
    celsiusBtn.setAttribute('id', 'celsius-btn');
    celsiusBtn.setAttribute('value', 'C')
    fahrenheitBtn.classList.add('temp-btn');
    fahrenheitBtn.setAttribute('id', 'fahrenheit-btn');
    fahrenheitBtn.setAttribute('value', 'F')
    inputContainer.setAttribute('id', 'form');
    inputContainer.classList.add('input-container');
    inputField.setAttribute('id', 'input-field');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('required', true);
    inputField.setAttribute('placeholder', 'What location are you looking for?');
    inputBtn.setAttribute('id', 'input-btn');
    inputBtn.setAttribute('type', 'submit');
    search.classList.add('fas', 'fa-search');

    // Arrange elements
    toggle.appendChild(celsiusBtn);
    toggle.appendChild(fahrenheitBtn);
    inputBtn.appendChild(search);
    inputContainer.appendChild(inputField);
    inputContainer.appendChild(inputBtn);
    container.appendChild(head);
    container.appendChild(toggle);
    container.appendChild(inputContainer);

    // Add data to elements
    head.innerHTML = 'Weather app';
    celsiusBtn.innerHTML = `<sup>o</sup>C`;
    fahrenheitBtn.innerHTML = `<sup>o</sup>F`;

    // Add Event Listeners
    celsiusBtn.addEventListener('click', () => {
        fahrenheitBtn.classList.remove('current-temp');
        celsiusBtn.classList.add('current-temp');
        toggleTemp(celsiusBtn.value);
    });

    fahrenheitBtn.addEventListener('click', () => {
        celsiusBtn.classList.remove('current-temp');
        fahrenheitBtn.classList.add('current-temp');
        toggleTemp(fahrenheitBtn.value);
    });

    inputContainer.addEventListener('submit', (e) => {
        e.preventDefault();
        let pageloader = document.querySelector('.page-loader');
        celsiusBtn.classList.add('current-temp');
        fahrenheitBtn.classList.remove('current-temp');
        pageloader.classList.remove('hidden');
        getWeatherData(inputField.value);
        inputField.value = '';
    });
}

export { weatherForm }