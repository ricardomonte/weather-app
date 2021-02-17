import displayWeather from './displayWeather';

const apKey = '7c2315507d35c92ae1a4e90c22ae3426';

const getWeather = async (location, unit) => {
  try{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apKey}`);
    const result = await response.json();
    const weather = result.weather.main;
    const country = result.sys.country;
    const locationName = result.name;
    const tempC = result.main.temp;
    displayWeather(tempC, locationName, country, weather, unit);
    console.log(result)
  } catch(err) {
    alert(err)
  }
}

export { getWeather as default}