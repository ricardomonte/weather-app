import classGenerator from './classGenerator';

const changeUnit = (unit) => {
  if (unit === 'metric') {
    return 'C';
  }
  return 'F';
};

const rounding = (temp) => Math.round(temp);

const displayWeather = (temp, location, country, weather, unit) => {
  const display = document.querySelector('#current-weather');
  const contBack = document.createElement('div');
  const pTemp = document.createElement('p');
  const pCountry = document.createElement('p');
  const roundedTemp = rounding(temp);
  const farenCels = changeUnit(unit);
  pTemp.innerHTML = `${roundedTemp}&deg;${farenCels}`;
  pCountry.textContent = `${location}/${country}`;
  pTemp.classList.add('temperature');
  pCountry.classList.add('country');
  display.innerHTML = '';
  classGenerator(contBack, parseInt(weather, 10));
  display.classList.add('container-current__weather');
  display.append(pCountry);
  display.append(pTemp);
  display.append(contBack);
};

export { displayWeather as default };