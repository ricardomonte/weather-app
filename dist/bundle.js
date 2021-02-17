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

/***/ "./src/assets/displayWeather.js":
/*!**************************************!*\
  !*** ./src/assets/displayWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\nconst changeUnit = (unit) => {\n  if(unit === 'metric') {\n    return 'C'\n  } else {\n    return 'F'\n  }\n}\n\nconst rounding = (temp) => {\n  return Math.round(temp)\n}\n\nconst displayWeather = (temp, location, country, weather, unit) => {\n  const display = document.querySelector('#scores');\n  const pTemp = document.createElement('p');\n  const pCountry = document.createElement('p');\n  const roundedTemp = rounding(temp)\n  const farenCels = changeUnit(unit)\n  pTemp.innerHTML = `Temperature: ${roundedTemp}&deg;${farenCels}`\n  pCountry.textContent = `${location}/${country}`\n  display.innerHTML = \"\"\n  display.append(pCountry)\n  display.append(pTemp)\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/displayWeather.js?");

/***/ }),

/***/ "./src/assets/getWeather.js":
/*!**********************************!*\
  !*** ./src/assets/getWeather.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ \"./src/assets/displayWeather.js\");\n\n\nconst apKey = '7c2315507d35c92ae1a4e90c22ae3426';\n\nconst getWeather = async (location, unit) => {\n  try{\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apKey}`);\n    const result = await response.json();\n    const weather = result.weather.main;\n    const country = result.sys.country;\n    const locationName = result.name;\n    const tempC = result.main.temp;\n    (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__.default)(tempC, locationName, country, weather, unit);\n    console.log(result)\n  } catch(err) {\n    alert(err)\n  }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/getWeather.js?");

/***/ }),

/***/ "./src/assets/init.js":
/*!****************************!*\
  !*** ./src/assets/init.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _weatherGetButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherGetButton */ \"./src/assets/weatherGetButton.js\");\n\n\nconst init = () => {\n  (0,_weatherGetButton__WEBPACK_IMPORTED_MODULE_0__.default)()\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/init.js?");

/***/ }),

/***/ "./src/assets/weatherGetButton.js":
/*!****************************************!*\
  !*** ./src/assets/weatherGetButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ weatherGetButton)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/assets/getWeather.js\");\n\n\nconst weatherGetButton = () => {\n  const btn = document.querySelector('#submite-player-score');\n  btn.addEventListener('click', () => { \n    const input = document.querySelector('#player-score');\n    const units = document.querySelector('#f-or-c');\n    console.log(units.value)\n    const name = input.value;\n    (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.default)(name, units.value);\n    input.value = \"\";\n  })\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/assets/weatherGetButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _assets_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/init */ \"./src/assets/init.js\");\n\n\n\n(0,_assets_init__WEBPACK_IMPORTED_MODULE_1__.default)()\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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