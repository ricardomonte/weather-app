import classGenerator from './classGenerator';

const celciusToFahrenheit = (value) => Math.round(value * 1.8 + 32);

const fahrenheitsToCelcius = (value) => Math.round((value - 32) / 1.8);

const toggleMetric = (element) => {
  element.addEventListener('click', () => {
    if (element.textContent.includes('C')) {
      const currentTemp = element.dataset.temp;
      const fTemp = celciusToFahrenheit(currentTemp);
      element.textContent = `${fTemp}°F`;
      element.dataset.temp = fTemp;
    } else {
      const currentTemp = element.dataset.temp;
      const celcius = fahrenheitsToCelcius(currentTemp);
      element.textContent = `${celcius}°C`;
      element.dataset.temp = celcius;
    }
  });
};

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
  pTemp.dataset.temp = roundedTemp;
  pTemp.classList.add('temperature');
  pCountry.classList.add('country');
  display.innerHTML = '';
  classGenerator(contBack, parseInt(weather, 10));
  display.classList.add('container-current__weather');
  display.append(pCountry);
  display.append(pTemp);
  display.append(contBack);

  toggleMetric(pTemp);
};

export { displayWeather as default };