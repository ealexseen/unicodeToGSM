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

/***/ "./src/UnicodeToGSM.js":
/*!*****************************!*\
  !*** ./src/UnicodeToGSM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnicodeToGSM\": () => (/* binding */ UnicodeToGSM),\n/* harmony export */   \"unicode\": () => (/* binding */ unicode)\n/* harmony export */ });\nconst unicode = {\n    \"\\u00A0\": \"'\",\n    \"\\u00AB\": '\"',\n    \"\\u00B4\": \"'\",\n    \"\\u00BB\": '\"',\n    \"\\u00BC\": '1/4',\n    \"\\u00BD\": '1/2',\n    \"\\u00BE\": '3/4',\n    \"\\u00F7\": '/',\n    \"\\u0000\": '',\n    \"\\u01C3\": '!',\n    \"\\u1D0A\": 'J',\n    \"\\u1D0B\": 'K',\n    \"\\u1D0D\": 'M',\n    \"\\u1D0F\": 'O',\n    \"\\u1D00\": 'A',\n    \"\\u1D1B\": 'T',\n    \"\\u1D1C\": 'U',\n    \"\\u1D04\": 'C',\n    \"\\u1D05\": 'D',\n    \"\\u1D07\": 'E',\n    \"\\u1D18\": 'P',\n    \"\\u1D20\": 'V',\n    \"\\u1D21\": 'W',\n    \"\\u1D22\": 'Z',\n    \"\\u1DCD\": '^',\n    \"\\u02B9\": \"'\",\n    \"\\u02BA\": '\"',\n    \"\\u02BB\": \"'\",\n    \"\\u02BC\": \"'\",\n    \"\\u02BD\": \"'\",\n    \"\\u02C6\": '^',\n    \"\\u02C8\": \"'\",\n    \"\\u02CA\": \"'\",\n    \"\\u02CB\": \"'\",\n    \"\\u02D0\": ':',\n    \"\\u02D6\": '+',\n    \"\\u02DC\": '~',\n    \"\\u02EE\": '\"',\n    \"\\u02F7\": '~',\n    \"\\u02F8\": ':',\n    \"\\u0003\": '',\n    \"\\u0004\": '',\n    \"\\u008D\": '',\n    \"\\u0009\": '',\n    \"\\u009B\": '',\n    \"\\u009F\": '',\n    \"\\u0010\": '',\n    \"\\u0011\": '',\n    \"\\u0012\": '',\n    \"\\u0013\": '',\n    \"\\u0014\": '',\n    \"\\u0017\": '',\n    \"\\u0019\": '',\n    \"\\u20D2\": '|',\n    \"\\u20D3\": '|',\n    \"\\u20E5\": '\\\\',\n    \"\\u23B8\": '|',\n    \"\\u23B9\": '|',\n    \"\\u23BC\": '-',\n    \"\\u23BD\": '-',\n    \"\\u23D0\": '|',\n    \"\\u026A\": 'I',\n    \"\\u27EE\": '(',\n    \"\\u27EF\": ')',\n    \"\\u028F\": 'Y',\n    \"\\u029C\": 'H',\n    \"\\u029F\": 'L',\n    \"\\u29C6\": '*',\n    \"\\u29F5\": '\\\\',\n    \"\\u29F8\": '/',\n    \"\\u29F9\": '\\\\',\n    \"\\u0060\": \"'\",\n    \"\\u0080\": '',\n    \"\\u0090\": '',\n    \"\\u200A\": '',\n    \"\\u200B\": '',\n    \"\\u201A\": \"'\",\n    \"\\u201B\": \"'\",\n    \"\\u201C\": '\"',\n    \"\\u201D\": '\"',\n    \"\\u201E\": '\"',\n    \"\\u201F\": '\"',\n    \"\\u202F\": '',\n    \"\\u203A\": '<',\n    \"\\u203C\": '!!',\n    \"\\u204E\": '*',\n    \"\\u204F\": ';',\n    \"\\u205F\": '',\n    \"\\u223C\": '~',\n    \"\\u229B\": '*',\n    \"\\u239C\": '|',\n    \"\\u239F\": '|',\n    \"\\u0262\": 'G',\n    \"\\u273A\": '*',\n    \"\\u273B\": '*',\n    \"\\u273C\": '*',\n    \"\\u273D\": '*',\n    \"\\u0274\": 'N',\n    \"\\u274A\": '*',\n    \"\\u274B\": '*',\n    \"\\u275B\": \"'\",\n    \"\\u275C\": \"'\",\n    \"\\u275D\": '\"',\n    \"\\u275E\": '\"',\n    \"\\u276A\": '(',\n    \"\\u276B\": ')',\n    \"\\u0280\": 'R',\n    \"\\u0299\": 'B',\n    \"\\u301D\": '\"',\n    \"\\u301E\": '\"',\n    \"\\u0302\": '^',\n    \"\\u0303\": '~',\n    \"\\u0313\": \"'\",\n    \"\\u0314\": \"'\",\n    \"\\u0326\": ',',\n    \"\\u0330\": '~',\n    \"\\u0332\": '_',\n    \"\\u0334\": '~',\n    \"\\u0337\": '/',\n    \"\\u0338\": '/',\n    \"\\u0347\": '=',\n    \"\\u2000\": \"'\",\n    \"\\u2001\": '',\n    \"\\u2002\": '',\n    \"\\u2003\": '',\n    \"\\u2004\": '',\n    \"\\u2005\": '',\n    \"\\u2006\": '',\n    \"\\u2007\": '',\n    \"\\u2008\": '',\n    \"\\u2009\": '',\n    \"\\u2010\": '-',\n    \"\\u2013\": '-',\n    \"\\u2014\": '-',\n    \"\\u2015\": '-',\n    \"\\u2017\": '_',\n    \"\\u2018\": \"'\",\n    \"\\u2019\": \"'\",\n    \"\\u2022\": '-',\n    \"\\u2026\": '...',\n    \"\\u2028\": '',\n    \"\\u2029\": '',\n    \"\\u2039\": '>',\n    \"\\u2043\": '-',\n    \"\\u2044\": '/',\n    \"\\u2060\": '',\n    \"\\u2215\": '/',\n    \"\\u2217\": '*',\n    \"\\u2223\": '|',\n    \"\\u2722\": '*',\n    \"\\u2723\": '*',\n    \"\\u2724\": '*',\n    \"\\u2725\": '*',\n    \"\\u2731\": '*',\n    \"\\u2732\": '*',\n    \"\\u2733\": '*',\n    \"\\u2743\": '*',\n    \"\\u2749\": '*',\n    \"\\u2768\": '(',\n    \"\\u2769\": ')',\n    \"\\u2774\": '{',\n    \"\\u2775\": '}',\n    \"\\u2982\": ':',\n    \"\\u2985\": '(',\n    \"\\u2986\": ')',\n    \"\\u3000\": '',\n    \"\\u3001\": ',',\n    \"\\u3002\": '.',\n    \"\\uA78A\": '=',\n    \"\\uA730\": 'F',\n    \"\\uA731\": 'S',\n    \"\\uA789\": ':',\n    \"\\uFE5A\": ')',\n    \"\\uFE5B\": '{',\n    \"\\uFE5C\": '}',\n    \"\\uFE5F\": '#',\n    \"\\uFE6A\": '%',\n    \"\\uFE6B\": '@',\n    \"\\uFE10\": \"'\",\n    \"\\uFE11\": \"'\",\n    \"\\uFE13\": ':',\n    \"\\uFE14\": ';',\n    \"\\uFE15\": '!',\n    \"\\uFE16\": '?',\n    \"\\uFE50\": ',',\n    \"\\uFE51\": ',',\n    \"\\uFE52\": '.',\n    \"\\uFE54\": ';',\n    \"\\uFE56\": '?',\n    \"\\uFE57\": '!',\n    \"\\uFE59\": '(',\n    \"\\uFE60\": '&',\n    \"\\uFE61\": '*',\n    \"\\uFE62\": '+',\n    \"\\uFE63\": '-',\n    \"\\uFE64\": '<',\n    \"\\uFE65\": '>',\n    \"\\uFE66\": '=',\n    \"\\uFE68\": '\\\\',\n    \"\\uFE69\": '$',\n    \"\\uFEFF\": '',\n    \"\\uFF0A\": '*',\n    \"\\uFF0B\": '+',\n    \"\\uFF0C\": ',',\n    \"\\uFF0D\": '-',\n    \"\\uFF0E\": '.',\n    \"\\uFF0F\": '/',\n    \"\\uFF01\": '!',\n    \"\\uFF1A\": ':',\n    \"\\uFF1B\": ';',\n    \"\\uFF1C\": '<',\n    \"\\uFF1D\": '=',\n    \"\\uFF1E\": '>',\n    \"\\uFF1F\": '?',\n    \"\\uFF02\": '\"',\n    \"\\uFF2A\": 'J',\n    \"\\uFF2B\": 'K',\n    \"\\uFF2C\": 'L',\n    \"\\uFF2D\": 'M',\n    \"\\uFF2E\": 'N',\n    \"\\uFF2F\": 'O',\n    \"\\uFF03\": '#',\n    \"\\uFF3A\": 'Z',\n    \"\\uFF3B\": '[',\n    \"\\uFF3C\": '\\\\',\n    \"\\uFF3D\": ']',\n    \"\\uFF3E\": '^',\n    \"\\uFF3F\": '_',\n    \"\\uFF04\": '$',\n    \"\\uFF05\": '%',\n    \"\\uFF5B\": '{',\n    \"\\uFF5C\": '|',\n    \"\\uFF5D\": '}',\n    \"\\uFF5E\": '~',\n    \"\\uFF06\": '&',\n    \"\\uFF07\": \"'\",\n    \"\\uFF08\": '(',\n    \"\\uFF09\": ')',\n    \"\\uFF10\": '0',\n    \"\\uFF11\": '1',\n    \"\\uFF12\": '2',\n    \"\\uFF13\": '3',\n    \"\\uFF14\": '4',\n    \"\\uFF15\": '5',\n    \"\\uFF16\": '6',\n    \"\\uFF17\": '7',\n    \"\\uFF18\": '8',\n    \"\\uFF19\": '9',\n    \"\\uFF20\": '@',\n    \"\\uFF21\": 'A',\n    \"\\uFF22\": 'B',\n    \"\\uFF23\": 'C',\n    \"\\uFF24\": 'D',\n    \"\\uFF25\": 'E',\n    \"\\uFF26\": 'F',\n    \"\\uFF27\": 'G',\n    \"\\uFF28\": 'H',\n    \"\\uFF29\": 'I',\n    \"\\uFF30\": 'P',\n    \"\\uFF31\": 'Q',\n    \"\\uFF32\": 'R',\n    \"\\uFF33\": 'S',\n    \"\\uFF34\": 'T',\n    \"\\uFF35\": 'U',\n    \"\\uFF36\": 'V',\n    \"\\uFF37\": 'W',\n    \"\\uFF38\": 'X',\n    \"\\uFF39\": 'Y',\n    \"\\uFF61\": '.',\n    \"\\uFF64\": ',',\n};\n\nconst UnicodeToGSM = (string) => {\n    const stringArray = string.split('');\n\n    for (let key in unicode) {\n        const origin = unicode[key];\n        const exist = stringArray.find(i => i === key);\n\n        if (exist) {\n            string = string.replaceAll(key, origin);\n        }\n    }\n\n    return string;\n};\n\n\n//# sourceURL=webpack://unicodetogsm/./src/UnicodeToGSM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnicodeToGSM\": () => (/* reexport safe */ _UnicodeToGSM__WEBPACK_IMPORTED_MODULE_0__.UnicodeToGSM),\n/* harmony export */   \"unicode\": () => (/* reexport safe */ _UnicodeToGSM__WEBPACK_IMPORTED_MODULE_0__.unicode)\n/* harmony export */ });\n/* harmony import */ var _UnicodeToGSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnicodeToGSM */ \"./src/UnicodeToGSM.js\");\n\n\n\n\n\n//# sourceURL=webpack://unicodetogsm/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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