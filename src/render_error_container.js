const errorContainer = () => {
    const container = document.querySelector('.container');
    const eContainer = document.createElement('div');
    eContainer.setAttribute('id', 'error-container');
    container.appendChild(eContainer);
}

export { errorContainer }