import getWeather from './getWeather';

const weatherGetButton = () => {
  const btn = document.querySelector('#values-weather');
  btn.addEventListener('click', () => { 
    const input = document.querySelector('#location-city');
    const units = document.querySelector('#f-or-c');
    const name = input.value;
    getWeather(name, units.value);
    input.value = "";
  })
}

export { weatherGetButton as default }