/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/main.scss?");

/***/ }),

/***/ "./src/assets/classGenerator.js":
/*!**************************************!*\
  !*** ./src/assets/classGenerator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ classGenerator)\n/* harmony export */ });\nconst classGenerator = (element, id) => {\n  const thunder = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];\n  const drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];\n  const ligthRain = [500, 501, 502, 503, 504];\n  const freezRain = [511];\n  const rain = [520, 521, 522, 531];\n  const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];\n  const mist = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];\n  const clear = [800];\n  const partialClouds = [801];\n  const scatClouds = [802];\n  const clouds = [803, 804];\n\n  if (thunder.includes(id)) {\n    element.classList.add('thumderstorm');\n  }\n\n  if (drizzle.includes(id)) {\n    element.classList.add('rainsmall');\n  }\n\n  if (ligthRain.includes(id)) {\n    element.classList.add('rainWsun');\n  }\n\n  if (freezRain.includes(id)) {\n    element.classList.add('rainWsnow');\n  }\n\n  if (rain.includes(id)) {\n    element.classList.add('rainyRain');\n  }\n\n  if (snow.includes(id)) {\n    element.classList.add('snowing');\n  }\n\n  if (mist.includes(id)) {\n    element.classList.add('misty');\n  }\n  if (clear.includes(id)) {\n    element.classList.add('sunshine');\n  }\n\n  if (partialClouds.includes(id)) {\n    element.classList.add('sunshineWclodus');\n  }\n\n  if (scatClouds.includes(id)) {\n    element.classList.add('cloudspartial');\n  }\n\n  if (clouds.includes(id)) {\n    element.classList.add('darkclouds');\n  }\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/classGenerator.js?");

/***/ }),

/***/ "./src/assets/displayWeather.js":
/*!**************************************!*\
  !*** ./src/assets/displayWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _classGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classGenerator */ \"./src/assets/classGenerator.js\");\n\n\nconst changeUnit = (unit) => {\n  if (unit === 'metric') {\n    return 'C';\n  }\n  return 'F';\n};\n\nconst rounding = (temp) => Math.round(temp);\n\nconst displayWeather = (temp, location, country, weather, unit) => {\n  const display = document.querySelector('#current-weather');\n  const contBack = document.createElement('div');\n  const pTemp = document.createElement('p');\n  const pCountry = document.createElement('p');\n  const roundedTemp = rounding(temp);\n  const farenCels = changeUnit(unit);\n  pTemp.innerHTML = `${roundedTemp}&deg;${farenCels}`;\n  pCountry.textContent = `${location}/${country}`;\n  pTemp.classList.add('temperature');\n  pCountry.classList.add('country');\n  display.innerHTML = '';\n  (0,_classGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(contBack, parseInt(weather, 10));\n  display.classList.add('container-current__weather');\n  display.append(pCountry);\n  display.append(pTemp);\n  display.append(contBack);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/displayWeather.js?");

/***/ }),

/***/ "./src/assets/errorDisplay.js":
/*!************************************!*\
  !*** ./src/assets/errorDisplay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ errorDisplay)\n/* harmony export */ });\nconst errorDisplay = () => {\n  const display = document.querySelector('#current-weather');\n  const pMessage = document.createElement('p');\n  pMessage.textContent = 'Sorry, we could not get the location, please try again';\n  display.classList.add('container-current__weather');\n  pMessage.classList.add('message-error');\n  display.innerHTML = \"\"; \n  display.insertAdjacentElement('beforeend', pMessage);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/errorDisplay.js?");

/***/ }),

/***/ "./src/assets/getWeather.js":
/*!**********************************!*\
  !*** ./src/assets/getWeather.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ \"./src/assets/displayWeather.js\");\n/* harmony import */ var _errorDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorDisplay */ \"./src/assets/errorDisplay.js\");\n\n\n\nconst getWeather = async (location, unit) => {\n  try {\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=7c2315507d35c92ae1a4e90c22ae3426`);\n    const result = await response.json();\n    const weather = result.weather[0].id;\n    const { country } = result.sys;\n    const locationName = result.name;\n    const tempC = result.main.temp;\n    (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__.default)(tempC, locationName, country, weather, unit);\n  } catch (err) {\n    (0,_errorDisplay__WEBPACK_IMPORTED_MODULE_1__.default)();\n  }\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/getWeather.js?");

/***/ }),

/***/ "./src/assets/init.js":
/*!****************************!*\
  !*** ./src/assets/init.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _weatherGetButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherGetButton */ \"./src/assets/weatherGetButton.js\");\n\n\nconst init = () => {\n  (0,_weatherGetButton__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/init.js?");

/***/ }),

/***/ "./src/assets/weatherGetButton.js":
/*!****************************************!*\
  !*** ./src/assets/weatherGetButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ weatherGetButton)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/assets/getWeather.js\");\n\n\nconst weatherGetButton = () => {\n  const btn = document.querySelector('#values-weather');\n  btn.addEventListener('click', () => {\n    const input = document.querySelector('#location-city');\n    const units = document.querySelector('#f-or-c');\n    const name = input.value;\n    (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.default)(name, units.value);\n    input.value = '';\n  });\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/weatherGetButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _assets_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/init */ \"./src/assets/init.js\");\n\n\n\n(0,_assets_init__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;