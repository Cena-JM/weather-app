import { getWeatherData } from './load_weather';

const weatherForm = () => {
    // Select container
    const container = document.querySelector('.container');

    // Create elements
    const head = document.createElement('h1');
    const inputContainer = document.createElement('form');
    const inputField = document.createElement('input');
    const inputBtn = document.createElement('button');
    const search = document.createElement('i');

    // Set element attributes
    head.classList.add('title');
    inputContainer.setAttribute('id', 'form');
    inputContainer.classList.add('input-container');
    inputField.setAttribute('id', 'input-field');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('required', true);
    inputBtn.setAttribute('id', 'input-btn');
    inputBtn.setAttribute('type', 'submit');
    search.classList.add('fas', 'fa-search');

    // Arrange elements
    inputBtn.appendChild(search);
    inputContainer.appendChild(inputField);
    inputContainer.appendChild(inputBtn);
    container.appendChild(head);
    container.appendChild(inputContainer);

    // Add data to elements
    head.innerHTML = 'What location are you looking for?'

    inputContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        let pageloader = document.querySelector('.page-loader');
        pageloader.classList.remove('hidden');
        getWeatherData(inputField.value);
        inputField.value = '';
    });
}

export { weatherForm }