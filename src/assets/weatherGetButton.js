import getWeather from './getWeather';

const weatherGetButton = () => {
  const btn = document.querySelector('#submite-player-score');
  btn.addEventListener('click', () => { 
    const input = document.querySelector('#location-city');
    const units = document.querySelector('#f-or-c');
    console.log(units.value)
    const name = input.value;
    getWeather(name, units.value);
    input.value = "";
  })
}

export { weatherGetButton as default }