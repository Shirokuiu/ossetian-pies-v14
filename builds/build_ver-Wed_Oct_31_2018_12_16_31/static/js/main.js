/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(1);
	
	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	  window.util = {
	    // add spaces from numbers
	    addSpaceNumbers: function addSpaceNumbers(num) {
	      var newNum = num + '';
	
	      return newNum.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	    },
	    // remove spaces from numbers
	    removeSpaceNumbers: function removeSpaceNumbers(num) {
	      var newNum = num + '';
	
	      return newNum.replace(/\s/g, '');
	    }
	  };
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDYyNTFiMWYxNTY0MGI1ZTg2MjgiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3V0aWwuanMiXSwibmFtZXMiOlsid2luZG93IiwidXRpbCIsImFkZFNwYWNlTnVtYmVycyIsIm51bSIsIm5ld051bSIsInJlcGxhY2UiLCJyZW1vdmVTcGFjZU51bWJlcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7Ozs7O0FDRkE7O0FBRUEsRUFBQyxZQUFZO0FBQ1hBLFVBQU9DLElBQVAsR0FBYztBQUNaO0FBQ0FDLHNCQUFpQix5QkFBVUMsR0FBVixFQUFlO0FBQzlCLFdBQUlDLFNBQVNELE1BQU0sRUFBbkI7O0FBRUEsY0FBT0MsT0FBT0MsT0FBUCxDQUFlLDZCQUFmLEVBQThDLEtBQTlDLENBQVA7QUFDRCxNQU5XO0FBT1o7QUFDQUMseUJBQW9CLDRCQUFVSCxHQUFWLEVBQWU7QUFDakMsV0FBSUMsU0FBU0QsTUFBTSxFQUFuQjs7QUFFQSxjQUFPQyxPQUFPQyxPQUFQLENBQWUsS0FBZixFQUFzQixFQUF0QixDQUFQO0FBQ0Q7QUFaVyxJQUFkO0FBY0QsRUFmRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjI1MWIxZjE1NjQwYjVlODYyOCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAnY29tcG9uZW50cy91dGlsLmpzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnV0aWwgPSB7XG4gICAgLy8gYWRkIHNwYWNlcyBmcm9tIG51bWJlcnNcbiAgICBhZGRTcGFjZU51bWJlcnM6IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgIGxldCBuZXdOdW0gPSBudW0gKyAnJztcblxuICAgICAgcmV0dXJuIG5ld051bS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcbiAgICB9LFxuICAgIC8vIHJlbW92ZSBzcGFjZXMgZnJvbSBudW1iZXJzXG4gICAgcmVtb3ZlU3BhY2VOdW1iZXJzOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICBsZXQgbmV3TnVtID0gbnVtICsgJyc7XG5cbiAgICAgIHJldHVybiBuZXdOdW0ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9jb21wb25lbnRzL3V0aWwuanMiXSwic291cmNlUm9vdCI6IiJ9