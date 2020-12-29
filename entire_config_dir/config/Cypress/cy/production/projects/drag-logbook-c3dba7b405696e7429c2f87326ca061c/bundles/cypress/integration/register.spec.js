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

/***/ "./cypress/integration/register.spec.js":
/*!**********************************************!*\
  !*** ./cypress/integration/register.spec.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


describe('Register', function () {
  before(function () {
    // cy.refreshDatabase().seed();
    cy.refreshDatabase();
  });
  describe('with valid data', function () {
    it('works', function () {
      cy.visit('/register');
      cy.get('#name').clear().type('New Guy');
      cy.get('#email').clear().type('newuser@gmail.com');
      cy.get('#password').clear().type('michael');
      cy.get('#password_confirm').clear().type('michael');
      cy.contains('button', 'Register').click();
      cy.assertRedirect('/dashboard');
    });
  });
  describe('without valid data', function () {
    it('requires a password greater than 5 chars', function () {
      cy.visit('/register');
      cy.get('#name').clear().type('New Guy');
      cy.get('#email').clear().type('newuser@gmail.com');
      cy.get('#password').clear().type('123');
      cy.get('#password_confirm').clear().type('123');
      cy.contains('button', 'Register').click();
      cy.contains('The password must be at least 5 characters.');
    });
    it('requires to be a unique email', function () {
      cy.createUser({
        name: 'The New Guy',
        email: 'newuser@gmail.com',
        password: 'michael'
      });
      cy.visit('/register');
      cy.get('#name').clear().type('New Guy');
      cy.get('#email').clear().type('newuser@gmail.com');
      cy.get('#password').clear().type('password');
      cy.get('#password_confirm').clear().type('password');
      cy.contains('button', 'Register').click();
      cy.contains('The email has already been taken.');
    });
  });
});

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./cypress/integration/register.spec.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mmillis/Code/mmillis/drag-logbook/cypress/integration/register.spec.js */"./cypress/integration/register.spec.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9pbnRlZ3JhdGlvbi9yZWdpc3Rlci5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlIiwiY3kiLCJyZWZyZXNoRGF0YWJhc2UiLCJpdCIsInZpc2l0IiwiZ2V0IiwiY2xlYXIiLCJ0eXBlIiwiY29udGFpbnMiLCJjbGljayIsImFzc2VydFJlZGlyZWN0IiwiY3JlYXRlVXNlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLFFBQVEsQ0FBQyxVQUFELEVBQWEsWUFBTTtBQUN2QkMsUUFBTSxDQUFDLFlBQU07QUFDVDtBQUNBQyxNQUFFLENBQUNDLGVBQUg7QUFDSCxHQUhLLENBQU47QUFLQUgsVUFBUSxDQUFDLGlCQUFELEVBQW9CLFlBQU07QUFFOUJJLE1BQUUsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUVkRixRQUFFLENBQUNHLEtBQUgsQ0FBUyxXQUFUO0FBRUFILFFBQUUsQ0FBQ0ksR0FBSCxDQUFPLE9BQVAsRUFBZ0JDLEtBQWhCLEdBQXdCQyxJQUF4QixDQUE2QixTQUE3QjtBQUVBTixRQUFFLENBQUNJLEdBQUgsQ0FBTyxRQUFQLEVBQWlCQyxLQUFqQixHQUF5QkMsSUFBekIsQ0FBOEIsbUJBQTlCO0FBRUFOLFFBQUUsQ0FBQ0ksR0FBSCxDQUFPLFdBQVAsRUFBb0JDLEtBQXBCLEdBQTRCQyxJQUE1QixDQUFpQyxTQUFqQztBQUNBTixRQUFFLENBQUNJLEdBQUgsQ0FBTyxtQkFBUCxFQUE0QkMsS0FBNUIsR0FBb0NDLElBQXBDLENBQXlDLFNBQXpDO0FBRUFOLFFBQUUsQ0FBQ08sUUFBSCxDQUFZLFFBQVosRUFBc0IsVUFBdEIsRUFBa0NDLEtBQWxDO0FBRUFSLFFBQUUsQ0FBQ1MsY0FBSCxDQUFrQixZQUFsQjtBQUNILEtBZEMsQ0FBRjtBQWVILEdBakJPLENBQVI7QUFtQkFYLFVBQVEsQ0FBQyxvQkFBRCxFQUF1QixZQUFNO0FBRWpDSSxNQUFFLENBQUMsMENBQUQsRUFBNkMsWUFBTTtBQUVqREYsUUFBRSxDQUFDRyxLQUFILENBQVMsV0FBVDtBQUVBSCxRQUFFLENBQUNJLEdBQUgsQ0FBTyxPQUFQLEVBQWdCQyxLQUFoQixHQUF3QkMsSUFBeEIsQ0FBNkIsU0FBN0I7QUFFQU4sUUFBRSxDQUFDSSxHQUFILENBQU8sUUFBUCxFQUFpQkMsS0FBakIsR0FBeUJDLElBQXpCLENBQThCLG1CQUE5QjtBQUVBTixRQUFFLENBQUNJLEdBQUgsQ0FBTyxXQUFQLEVBQW9CQyxLQUFwQixHQUE0QkMsSUFBNUIsQ0FBaUMsS0FBakM7QUFDQU4sUUFBRSxDQUFDSSxHQUFILENBQU8sbUJBQVAsRUFBNEJDLEtBQTVCLEdBQW9DQyxJQUFwQyxDQUF5QyxLQUF6QztBQUVBTixRQUFFLENBQUNPLFFBQUgsQ0FBWSxRQUFaLEVBQXNCLFVBQXRCLEVBQWtDQyxLQUFsQztBQUVBUixRQUFFLENBQUNPLFFBQUgsQ0FBWSw2Q0FBWjtBQUNILEtBZEMsQ0FBRjtBQWdCQUwsTUFBRSxDQUFDLCtCQUFELEVBQWtDLFlBQU07QUFFdENGLFFBQUUsQ0FBQ1UsVUFBSCxDQUFjO0FBQ1ZDLFlBQUksRUFBRSxhQURJO0FBRVZDLGFBQUssRUFBRSxtQkFGRztBQUdWQyxnQkFBUSxFQUFFO0FBSEEsT0FBZDtBQU1BYixRQUFFLENBQUNHLEtBQUgsQ0FBUyxXQUFUO0FBRUFILFFBQUUsQ0FBQ0ksR0FBSCxDQUFPLE9BQVAsRUFBZ0JDLEtBQWhCLEdBQXdCQyxJQUF4QixDQUE2QixTQUE3QjtBQUVBTixRQUFFLENBQUNJLEdBQUgsQ0FBTyxRQUFQLEVBQWlCQyxLQUFqQixHQUF5QkMsSUFBekIsQ0FBOEIsbUJBQTlCO0FBRUFOLFFBQUUsQ0FBQ0ksR0FBSCxDQUFPLFdBQVAsRUFBb0JDLEtBQXBCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFqQztBQUNBTixRQUFFLENBQUNJLEdBQUgsQ0FBTyxtQkFBUCxFQUE0QkMsS0FBNUIsR0FBb0NDLElBQXBDLENBQXlDLFVBQXpDO0FBRUFOLFFBQUUsQ0FBQ08sUUFBSCxDQUFZLFFBQVosRUFBc0IsVUFBdEIsRUFBa0NDLEtBQWxDO0FBRUFSLFFBQUUsQ0FBQ08sUUFBSCxDQUFZLG1DQUFaO0FBQ0gsS0FwQkMsQ0FBRjtBQXFCSCxHQXZDTyxDQUFSO0FBd0NILENBakVPLENBQVIsQyIsImZpbGUiOiJyZWdpc3Rlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZGVzY3JpYmUoJ1JlZ2lzdGVyJywgKCkgPT4ge1xuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICAgIC8vIGN5LnJlZnJlc2hEYXRhYmFzZSgpLnNlZWQoKTtcbiAgICAgICAgY3kucmVmcmVzaERhdGFiYXNlKCk7XG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCd3aXRoIHZhbGlkIGRhdGEnLCAoKSA9PiB7XG5cbiAgICAgICAgaXQoJ3dvcmtzJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjeS52aXNpdCgnL3JlZ2lzdGVyJyk7XG5cbiAgICAgICAgICAgIGN5LmdldCgnI25hbWUnKS5jbGVhcigpLnR5cGUoJ05ldyBHdXknKTtcblxuICAgICAgICAgICAgY3kuZ2V0KCcjZW1haWwnKS5jbGVhcigpLnR5cGUoJ25ld3VzZXJAZ21haWwuY29tJyk7XG5cbiAgICAgICAgICAgIGN5LmdldCgnI3Bhc3N3b3JkJykuY2xlYXIoKS50eXBlKCdtaWNoYWVsJyk7XG4gICAgICAgICAgICBjeS5nZXQoJyNwYXNzd29yZF9jb25maXJtJykuY2xlYXIoKS50eXBlKCdtaWNoYWVsJyk7XG5cbiAgICAgICAgICAgIGN5LmNvbnRhaW5zKCdidXR0b24nLCAnUmVnaXN0ZXInKS5jbGljaygpO1xuXG4gICAgICAgICAgICBjeS5hc3NlcnRSZWRpcmVjdCgnL2Rhc2hib2FyZCcpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3dpdGhvdXQgdmFsaWQgZGF0YScsICgpID0+IHtcblxuICAgICAgICBpdCgncmVxdWlyZXMgYSBwYXNzd29yZCBncmVhdGVyIHRoYW4gNSBjaGFycycsICgpID0+IHtcblxuICAgICAgICAgICAgY3kudmlzaXQoJy9yZWdpc3RlcicpO1xuXG4gICAgICAgICAgICBjeS5nZXQoJyNuYW1lJykuY2xlYXIoKS50eXBlKCdOZXcgR3V5Jyk7XG5cbiAgICAgICAgICAgIGN5LmdldCgnI2VtYWlsJykuY2xlYXIoKS50eXBlKCduZXd1c2VyQGdtYWlsLmNvbScpO1xuXG4gICAgICAgICAgICBjeS5nZXQoJyNwYXNzd29yZCcpLmNsZWFyKCkudHlwZSgnMTIzJyk7XG4gICAgICAgICAgICBjeS5nZXQoJyNwYXNzd29yZF9jb25maXJtJykuY2xlYXIoKS50eXBlKCcxMjMnKTtcblxuICAgICAgICAgICAgY3kuY29udGFpbnMoJ2J1dHRvbicsICdSZWdpc3RlcicpLmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGN5LmNvbnRhaW5zKCdUaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaXQoJ3JlcXVpcmVzIHRvIGJlIGEgdW5pcXVlIGVtYWlsJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjeS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlIE5ldyBHdXknLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnbmV3dXNlckBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnbWljaGFlbCdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGN5LnZpc2l0KCcvcmVnaXN0ZXInKTtcblxuICAgICAgICAgICAgY3kuZ2V0KCcjbmFtZScpLmNsZWFyKCkudHlwZSgnTmV3IEd1eScpO1xuXG4gICAgICAgICAgICBjeS5nZXQoJyNlbWFpbCcpLmNsZWFyKCkudHlwZSgnbmV3dXNlckBnbWFpbC5jb20nKTtcblxuICAgICAgICAgICAgY3kuZ2V0KCcjcGFzc3dvcmQnKS5jbGVhcigpLnR5cGUoJ3Bhc3N3b3JkJyk7XG4gICAgICAgICAgICBjeS5nZXQoJyNwYXNzd29yZF9jb25maXJtJykuY2xlYXIoKS50eXBlKCdwYXNzd29yZCcpO1xuXG4gICAgICAgICAgICBjeS5jb250YWlucygnYnV0dG9uJywgJ1JlZ2lzdGVyJykuY2xpY2soKTtcblxuICAgICAgICAgICAgY3kuY29udGFpbnMoJ1RoZSBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLicpO1xuICAgICAgICB9KVxuICAgIH0pXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=