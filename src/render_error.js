const renderError = () => {
    const errorContainer = document.querySelector('#error-container');
    const err = document.createElement('span');
    err.setAttribute('id', 'location-error')
    errorContainer.appendChild(err);
    err.innerHTML = 'Location could not be found!';
}

export { renderError }