const pageloader = () => {
    const main = document.querySelector('.main');

    const pLoader = document.createElement('div');
    const gif = document.createElement('img');

    pLoader.classList.add('page-loader', 'hidden');
    gif.setAttribute('src', 'images/loading.gif');
    gif.setAttribute('alt', 'loading');
    
    pLoader.appendChild(gif);
    main.appendChild(pLoader);
}

export { pageloader }
