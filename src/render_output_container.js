const outputContainer = () => {
    const container = document.querySelector('.container');
    const optContainer = document.createElement('div');
    optContainer.classList.add('output-container');
    container.appendChild(optContainer);
}

export { outputContainer }