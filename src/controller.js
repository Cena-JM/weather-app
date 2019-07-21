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
  console.log(errorContainer);
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
  optStatus,
  eStatus,
  hidePageloder
}