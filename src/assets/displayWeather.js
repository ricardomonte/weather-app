import classGenerator from "./classGenerator"

const changeUnit = (unit) => {
  if(unit === 'metric') {
    return 'C'
  } else {
    return 'F'
  }
}

const rounding = (temp) => {
  return Math.round(temp)
}

const displayWeather = (temp, location, country, weather, unit) => {
  const display = document.querySelector('#scores');
  const pTemp = document.createElement('p');
  const pCountry = document.createElement('p');
  const roundedTemp = rounding(temp)
  const farenCels = changeUnit(unit)
  pTemp.innerHTML = `Temperature: ${roundedTemp}&deg;${farenCels}`
  pCountry.textContent = `${location}/${country}`
  display.innerHTML = ""
  console.log(weather)
  classGenerator(display, parseInt(weather))
  display.append(pCountry)
  display.append(pTemp)
}

export { displayWeather as default }