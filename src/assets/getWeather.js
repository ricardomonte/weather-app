import displayWeather from './displayWeather';
import errorDisplay from './errorDisplay';

const getWeather = async (location, unit) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${process.env.WEATHER_KEY}`);
    const result = await response.json();
    const weather = result.weather[0].id;
    const { country } = result.sys;
    const locationName = result.name;
    const tempC = result.main.temp;
    displayWeather(tempC, locationName, country, weather, unit);
  } catch (err) {
    errorDisplay();
  }
};

export { getWeather as default };