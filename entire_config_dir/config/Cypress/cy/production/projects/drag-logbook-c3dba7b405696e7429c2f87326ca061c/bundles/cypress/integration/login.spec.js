/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cypress/integration/login.spec.js":
/*!*******************************************!*\
  !*** ./cypress/integration/login.spec.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


describe('Login', function () {
  before(function () {
    // cy.refreshDatabase().seed();
    cy.refreshDatabase();
    cy.createUser({
      name: 'The New Guy',
      email: 'meow@gmail.com',
      password: 'michael'
    });
  });
  describe('with valid credentials', function () {
    it('works', function () {
      cy.visit('/login');
      cy.get('#email').clear().type('meow@gmail.com');
      cy.get('#password').clear().type('michael');
      cy.contains('button', 'Sign In').click();
      cy.assertRedirect('/dashboard');
    });
  });
  describe('without valid credentials', function () {
    it('requires the correct password', function () {
      cy.visit('/login');
      cy.get('#email').clear().type('meow@gmail.com');
      cy.get('#password').clear().type('WRONG');
      cy.contains('button', 'Sign In').click();
      cy.contains('These credentials do not match our records.');
    });
  });
});

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./cypress/integration/login.spec.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mmillis/Code/mmillis/drag-logbook/cypress/integration/login.spec.js */"./cypress/integration/login.spec.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9pbnRlZ3JhdGlvbi9sb2dpbi5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlIiwiY3kiLCJyZWZyZXNoRGF0YWJhc2UiLCJjcmVhdGVVc2VyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpdCIsInZpc2l0IiwiZ2V0IiwiY2xlYXIiLCJ0eXBlIiwiY29udGFpbnMiLCJjbGljayIsImFzc2VydFJlZGlyZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLFFBQVEsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUNwQkMsUUFBTSxDQUFDLFlBQU07QUFDVDtBQUNBQyxNQUFFLENBQUNDLGVBQUg7QUFFQUQsTUFBRSxDQUFDRSxVQUFILENBQWM7QUFDVkMsVUFBSSxFQUFFLGFBREk7QUFFVkMsV0FBSyxFQUFFLGdCQUZHO0FBR1ZDLGNBQVEsRUFBRTtBQUhBLEtBQWQ7QUFLSCxHQVRLLENBQU47QUFZQVAsVUFBUSxDQUFDLHdCQUFELEVBQTJCLFlBQU07QUFDckNRLE1BQUUsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUNkTixRQUFFLENBQUNPLEtBQUgsQ0FBUyxRQUFUO0FBRUFQLFFBQUUsQ0FBQ1EsR0FBSCxDQUFPLFFBQVAsRUFBaUJDLEtBQWpCLEdBQXlCQyxJQUF6QixDQUE4QixnQkFBOUI7QUFFQVYsUUFBRSxDQUFDUSxHQUFILENBQU8sV0FBUCxFQUFvQkMsS0FBcEIsR0FBNEJDLElBQTVCLENBQWlDLFNBQWpDO0FBRUFWLFFBQUUsQ0FBQ1csUUFBSCxDQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUNDLEtBQWpDO0FBRUFaLFFBQUUsQ0FBQ2EsY0FBSCxDQUFrQixZQUFsQjtBQUNILEtBVkMsQ0FBRjtBQVdILEdBWk8sQ0FBUjtBQWNBZixVQUFRLENBQUMsMkJBQUQsRUFBOEIsWUFBTTtBQUN4Q1EsTUFBRSxDQUFDLCtCQUFELEVBQWtDLFlBQU07QUFDdENOLFFBQUUsQ0FBQ08sS0FBSCxDQUFTLFFBQVQ7QUFFQVAsUUFBRSxDQUFDUSxHQUFILENBQU8sUUFBUCxFQUFpQkMsS0FBakIsR0FBeUJDLElBQXpCLENBQThCLGdCQUE5QjtBQUVBVixRQUFFLENBQUNRLEdBQUgsQ0FBTyxXQUFQLEVBQW9CQyxLQUFwQixHQUE0QkMsSUFBNUIsQ0FBaUMsT0FBakM7QUFFQVYsUUFBRSxDQUFDVyxRQUFILENBQVksUUFBWixFQUFzQixTQUF0QixFQUFpQ0MsS0FBakM7QUFFQVosUUFBRSxDQUFDVyxRQUFILENBQVksNkNBQVo7QUFDSCxLQVZDLENBQUY7QUFXSCxHQVpPLENBQVI7QUFhSCxDQXhDTyxDQUFSLEMiLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRlc2NyaWJlKCdMb2dpbicsICgpID0+IHtcbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgICAvLyBjeS5yZWZyZXNoRGF0YWJhc2UoKS5zZWVkKCk7XG4gICAgICAgIGN5LnJlZnJlc2hEYXRhYmFzZSgpO1xuXG4gICAgICAgIGN5LmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgbmFtZTogJ1RoZSBOZXcgR3V5JyxcbiAgICAgICAgICAgIGVtYWlsOiAnbWVvd0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdtaWNoYWVsJ1xuICAgICAgICB9KVxuICAgIH0pXG5cblxuICAgIGRlc2NyaWJlKCd3aXRoIHZhbGlkIGNyZWRlbnRpYWxzJywgKCkgPT4ge1xuICAgICAgICBpdCgnd29ya3MnLCAoKSA9PiB7XG4gICAgICAgICAgICBjeS52aXNpdCgnL2xvZ2luJyk7XG5cbiAgICAgICAgICAgIGN5LmdldCgnI2VtYWlsJykuY2xlYXIoKS50eXBlKCdtZW93QGdtYWlsLmNvbScpO1xuXG4gICAgICAgICAgICBjeS5nZXQoJyNwYXNzd29yZCcpLmNsZWFyKCkudHlwZSgnbWljaGFlbCcpO1xuXG4gICAgICAgICAgICBjeS5jb250YWlucygnYnV0dG9uJywgJ1NpZ24gSW4nKS5jbGljaygpO1xuXG4gICAgICAgICAgICBjeS5hc3NlcnRSZWRpcmVjdCgnL2Rhc2hib2FyZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd3aXRob3V0IHZhbGlkIGNyZWRlbnRpYWxzJywgKCkgPT4ge1xuICAgICAgICBpdCgncmVxdWlyZXMgdGhlIGNvcnJlY3QgcGFzc3dvcmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjeS52aXNpdCgnL2xvZ2luJyk7XG5cbiAgICAgICAgICAgIGN5LmdldCgnI2VtYWlsJykuY2xlYXIoKS50eXBlKCdtZW93QGdtYWlsLmNvbScpO1xuXG4gICAgICAgICAgICBjeS5nZXQoJyNwYXNzd29yZCcpLmNsZWFyKCkudHlwZSgnV1JPTkcnKTtcblxuICAgICAgICAgICAgY3kuY29udGFpbnMoJ2J1dHRvbicsICdTaWduIEluJykuY2xpY2soKTtcblxuICAgICAgICAgICAgY3kuY29udGFpbnMoJ1RoZXNlIGNyZWRlbnRpYWxzIGRvIG5vdCBtYXRjaCBvdXIgcmVjb3Jkcy4nKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=