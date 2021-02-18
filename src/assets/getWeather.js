import displayWeather from './displayWeather';
import errorDisplay from './errorDisplay';

const getWeather = async (location, uni) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${uni}&appid=7c2315507d35c92ae1a4e90c22ae3426`);
    const result = await response.json();
    const weather = result.weather[0].id;
    const { country } = result.sys;
    const locationName = result.name;
    const tempC = result.main.temp;
    displayWeather(tempC, locationName, country, weather, uni);
  } catch (err) {
    errorDisplay();
  }
};

export { getWeather as default };