const errorDisplay = () => {
  const display = document.querySelector('#current-weather');
  const pMessage = document.createElement('p');
  pMessage.textContent = 'Sorry, we could not get the location, please try again';
  display.classList.add('container-current__weather');
  pMessage.classList.add('message-error');
  display.innerHTML = '';
  display.insertAdjacentElement('beforeend', pMessage);
};

export { errorDisplay as default };