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

/***/ "../../../.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/mmillis/.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../../.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************************************!*\
  !*** /home/mmillis/.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../../.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************************************!*\
  !*** /home/mmillis/.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./cypress/support/assertions.js":
/*!***************************************!*\
  !*** ./cypress/support/assertions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Cypress.Commands.add('assertRedirect', function (path) {
  cy.location('pathname').should('eq', "/".concat(path).replace(/^\/\//, '/'));
});

/***/ }),

/***/ "./cypress/support/commands.js":
/*!*************************************!*\
  !*** ./cypress/support/commands.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/***/ }),

/***/ "./cypress/support/index.js":
/*!**********************************!*\
  !*** ./cypress/support/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./commands */ "./cypress/support/commands.js");

__webpack_require__(/*! ./laravel-commands */ "./cypress/support/laravel-commands.js");

__webpack_require__(/*! ./assertions */ "./cypress/support/assertions.js");

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
before(function () {
  cy.task('activateCypressEnvFile', {}, {
    log: false
  });
});
after(function () {
  cy.task('activateLocalEnvFile', {}, {
    log: false
  });
});

/***/ }),

/***/ "./cypress/support/laravel-commands.js":
/*!*********************************************!*\
  !*** ./cypress/support/laravel-commands.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! /home/mmillis/.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault */ "../../../.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! /home/mmillis/.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty */ "../../../.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! /home/mmillis/.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof */ "../../../.cache/Cypress/5.6.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Create a new user and log them in.
 *
 * @param {Object} attributes
 *
 * @example cy.login();
 *          cy.login({ name: 'JohnDoe' });
 */
Cypress.Commands.add('login', function () {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return cy.csrfToken().then(function (token) {
    return cy.request({
      method: 'POST',
      url: '/__cypress__/login',
      body: {
        attributes: attributes,
        _token: token
      },
      log: true
    });
  }).then(function (_ref) {
    var body = _ref.body;
    Cypress.log({
      name: 'login',
      message: attributes,
      consoleProps: function consoleProps() {
        return {
          user: body
        };
      }
    });
  }).its('body', {
    log: false
  });
});
/**
 * Logout the current user.
 *
 * @example cy.logout();
 */

Cypress.Commands.add('logout', function () {
  return cy.csrfToken().then(function (token) {
    return cy.request({
      method: 'POST',
      url: '/__cypress__/logout',
      body: {
        _token: token
      },
      log: false
    });
  }).then(function () {
    Cypress.log({
      name: 'logout',
      message: ''
    });
  });
});
/**
 * Fetch a CSRF token.
 *
 * @example cy.csrfToken();
 */

Cypress.Commands.add('csrfToken', function () {
  return cy.request({
    method: 'GET',
    url: '/__cypress__/csrf_token',
    log: false
  }).its('body', {
    log: false
  });
});
/**
 * Create a new Eloquent factory.
 *
 * @param {String} model
 * @param {Number|null} times
 * @param {Object} attributes
 *
 * @example cy.create('App\\User');
 *          cy.create('App\\User', 2);
 *          cy.create('App\\User', 2, { active: false });
 */

Cypress.Commands.add('create', function (model) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _typeof2["default"])(times) === 'object' && times !== null) {
    attributes = times;
    times = 1;
  }

  return cy.csrfToken().then(function (token) {
    return cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: '/__cypress__/factory',
      body: {
        attributes: attributes,
        model: model,
        times: times,
        _token: token
      },
      log: false
    });
  }).then(function (response) {
    Cypress.log({
      name: 'create',
      message: model + (times ? "(".concat(times, " times)") : ''),
      consoleProps: function consoleProps() {
        return (0, _defineProperty2["default"])({}, model, response.body);
      }
    });
  }).its('body', {
    log: false
  });
});
/**
 * Refresh the database state.
 *
 * @param {Object} options
 *
 * @example cy.refreshDatabase();
 *          cy.refreshDatabase({ '--drop-views': true });
 */

Cypress.Commands.add('refreshDatabase', function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return cy.artisan('migrate:fresh', options);
});
/**
 * Seed the database.
 *
 * @param {String} seederClass
 *
 * @example cy.seed();
 *          cy.seed('PlansTableSeeder');
 */

Cypress.Commands.add('seed', function (seederClass) {
  return cy.artisan('db:seed', {
    '--class': seederClass
  });
});
/**
 * Trigger an Artisan command.
 *
 * @param {String} command
 * @param {Object} parameters
 *
 * @example cy.artisan('cache:clear');
 */

Cypress.Commands.add('artisan', function (command) {
  var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Cypress.log({
    name: 'artisan',
    message: command,
    consoleProps: function consoleProps() {
      return {
        command: command,
        parameters: parameters
      };
    }
  });
  return cy.csrfToken().then(function (token) {
    return cy.request({
      method: 'POST',
      url: '/__cypress__/artisan',
      body: {
        command: command,
        parameters: parameters,
        _token: token
      },
      log: false
    });
  });
});
/**
 * Execute arbitrary PHP.
 *
 * @param {String} command
 *
 * @example cy.php('2 + 2');
 *          cy.php('App\\User::count());
 */

Cypress.Commands.add('php', function (command) {
  return cy.csrfToken().then(function (token) {
    return cy.request({
      method: 'POST',
      url: '/__cypress__/run-php',
      body: {
        command: command,
        _token: token
      },
      log: false
    });
  }).then(function (response) {
    Cypress.log({
      name: 'php',
      message: command,
      consoleProps: function consoleProps() {
        return {
          result: response.body.result
        };
      }
    });
  }).its('body.result', {
    log: false
  });
});
Cypress.Commands.add('createUser', function () {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return cy.php('bcrypt("' + attributes.password + '")').then(function (bcryptPassword) {
    cy.create("App\\Models\\User", _objectSpread(_objectSpread({}, attributes), {
      password: bcryptPassword
    }));
  });
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./cypress/support/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mmillis/Code/mmillis/drag-logbook/cypress/support/index.js */"./cypress/support/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL21taWxsaXMvLmNhY2hlL0N5cHJlc3MvNS42LjAvQ3lwcmVzcy9yZXNvdXJjZXMvYXBwL3BhY2thZ2VzL3NlcnZlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvbW1pbGxpcy8uY2FjaGUvQ3lwcmVzcy81LjYuMC9DeXByZXNzL3Jlc291cmNlcy9hcHAvcGFja2FnZXMvc2VydmVyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvbW1pbGxpcy8uY2FjaGUvQ3lwcmVzcy81LjYuMC9DeXByZXNzL3Jlc291cmNlcy9hcHAvcGFja2FnZXMvc2VydmVyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvYXNzZXJ0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9zdXBwb3J0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2N5cHJlc3Mvc3VwcG9ydC9sYXJhdmVsLWNvbW1hbmRzLmpzIl0sIm5hbWVzIjpbIkN5cHJlc3MiLCJDb21tYW5kcyIsImFkZCIsInBhdGgiLCJjeSIsImxvY2F0aW9uIiwic2hvdWxkIiwicmVwbGFjZSIsImJlZm9yZSIsInRhc2siLCJsb2ciLCJhZnRlciIsImF0dHJpYnV0ZXMiLCJjc3JmVG9rZW4iLCJ0aGVuIiwidG9rZW4iLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsIl90b2tlbiIsIm5hbWUiLCJtZXNzYWdlIiwiY29uc29sZVByb3BzIiwidXNlciIsIml0cyIsIm1vZGVsIiwidGltZXMiLCJmYWlsT25TdGF0dXNDb2RlIiwicmVzcG9uc2UiLCJvcHRpb25zIiwiYXJ0aXNhbiIsInNlZWRlckNsYXNzIiwiY29tbWFuZCIsInBhcmFtZXRlcnMiLCJyZXN1bHQiLCJwaHAiLCJwYXNzd29yZCIsImJjcnlwdFBhc3N3b3JkIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7QUNoQkFBLE9BQU8sQ0FBQ0MsUUFB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RUFBRTtBQUFOLEdBakJqQixDQUFQO0FBa0JILENBbkJEO0FBc0JBVixPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLEdBQWpCLENBQXFCLFlBQXJCLEVBQW1DLFlBQXFCO0FBQUEsTUFBcEJVLFVBQW9CLHVFQUFQLEVBQU87QUFDcEQsU0FBT1IsRUFBRSxDQUNKZ0MsR0FERSxDQUNFLGFBQWF4QixVQUFVLENBQUN5QixRQUF4QixHQUFtQyxJQURyQyxFQUMyQ3ZCLElBRDNDLENBQ2dELFVBQUN3QixjQUFELEVBQW9CO0FBQ25FbEMsTUFBRSxDQUFDbUMsTUFBSCxDQUFVLG1CQUFWLGtDQUNPM0IsVUFEUCxHQUVPO0FBQUN5QixjQUFRLEVBQUVDO0FBQVgsS0FGUDtBQUlILEdBTkUsQ0FBUDtBQU9ILENBUkQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJDeXByZXNzLkNvbW1hbmRzLmFkZCgnYXNzZXJ0UmVkaXJlY3QnLCBwYXRoID0+IHtcbiAgICBjeS5sb2NhdGlvbigncGF0aG5hbWUnKS5zaG91bGQoJ2VxJywgYC8ke3BhdGh9YC5yZXBsYWNlKC9eXFwvXFwvLywgJy8nKSk7XG59KTtcbiIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMuanMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwibG9naW5cIiwgKGVtYWlsLCBwYXNzd29yZCkgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIGNoaWxkIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwiZHJhZ1wiLCB7IHByZXZTdWJqZWN0OiAnZWxlbWVudCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIGR1YWwgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5hZGQoXCJkaXNtaXNzXCIsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZShcInZpc2l0XCIsIChvcmlnaW5hbEZuLCB1cmwsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvaW5kZXguanMgaXMgcHJvY2Vzc2VkIGFuZFxuLy8gbG9hZGVkIGF1dG9tYXRpY2FsbHkgYmVmb3JlIHlvdXIgdGVzdCBmaWxlcy5cbi8vXG4vLyBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcHV0IGdsb2JhbCBjb25maWd1cmF0aW9uIGFuZFxuLy8gYmVoYXZpb3IgdGhhdCBtb2RpZmllcyBDeXByZXNzLlxuLy9cbi8vIFlvdSBjYW4gY2hhbmdlIHRoZSBsb2NhdGlvbiBvZiB0aGlzIGZpbGUgb3IgdHVybiBvZmZcbi8vIGF1dG9tYXRpY2FsbHkgc2VydmluZyBzdXBwb3J0IGZpbGVzIHdpdGggdGhlXG4vLyAnc3VwcG9ydEZpbGUnIGNvbmZpZ3VyYXRpb24gb3B0aW9uLlxuLy9cbi8vIFlvdSBjYW4gcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY29uZmlndXJhdGlvblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuaW1wb3J0ICcuL2NvbW1hbmRzJ1xuaW1wb3J0ICcuL2xhcmF2ZWwtY29tbWFuZHMnO1xuaW1wb3J0ICcuL2Fzc2VydGlvbnMnO1xuXG5iZWZvcmUoKCkgPT4ge1xuICAgIGN5LnRhc2soJ2FjdGl2YXRlQ3lwcmVzc0VudkZpbGUnLCB7fSwge2xvZzogZmFsc2V9KTtcbn0pO1xuXG5hZnRlcigoKSA9PiB7XG4gICAgY3kudGFzaygnYWN0aXZhdGVMb2NhbEVudkZpbGUnLCB7fSwge2xvZzogZmFsc2V9KTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGUgYSBuZXcgdXNlciBhbmQgbG9nIHRoZW0gaW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqXG4gKiBAZXhhbXBsZSBjeS5sb2dpbigpO1xuICogICAgICAgICAgY3kubG9naW4oeyBuYW1lOiAnSm9obkRvZScgfSk7XG4gKi9cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChhdHRyaWJ1dGVzID0ge30pID0+IHtcbiAgICByZXR1cm4gY3kuY3NyZlRva2VuKClcbiAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGN5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9fX2N5cHJlc3NfXy9sb2dpbicsXG4gICAgICAgICAgICAgICAgYm9keToge2F0dHJpYnV0ZXMsIF90b2tlbjogdG9rZW59LFxuICAgICAgICAgICAgICAgIGxvZzogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHtib2R5fSkgPT4ge1xuICAgICAgICAgICAgQ3lwcmVzcy5sb2coe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBjb25zb2xlUHJvcHM6ICgpID0+ICh7dXNlcjogYm9keX0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuaXRzKCdib2R5Jywge2xvZzogZmFsc2V9KTtcbn0pO1xuXG4vKipcbiAqIExvZ291dCB0aGUgY3VycmVudCB1c2VyLlxuICpcbiAqIEBleGFtcGxlIGN5LmxvZ291dCgpO1xuICovXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnbG9nb3V0JywgKCkgPT4ge1xuICAgIHJldHVybiBjeS5jc3JmVG9rZW4oKVxuICAgICAgICAudGhlbih0b2tlbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3kucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL19fY3lwcmVzc19fL2xvZ291dCcsXG4gICAgICAgICAgICAgICAgYm9keToge190b2tlbjogdG9rZW59LFxuICAgICAgICAgICAgICAgIGxvZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBDeXByZXNzLmxvZyh7bmFtZTogJ2xvZ291dCcsIG1lc3NhZ2U6ICcnfSk7XG4gICAgICAgIH0pO1xufSk7XG5cbi8qKlxuICogRmV0Y2ggYSBDU1JGIHRva2VuLlxuICpcbiAqIEBleGFtcGxlIGN5LmNzcmZUb2tlbigpO1xuICovXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnY3NyZlRva2VuJywgKCkgPT4ge1xuICAgIHJldHVybiBjeVxuICAgICAgICAucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnL19fY3lwcmVzc19fL2NzcmZfdG9rZW4nLFxuICAgICAgICAgICAgbG9nOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgLml0cygnYm9keScsIHtsb2c6IGZhbHNlfSk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgRWxvcXVlbnQgZmFjdG9yeS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWxcbiAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IHRpbWVzXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICpcbiAqIEBleGFtcGxlIGN5LmNyZWF0ZSgnQXBwXFxcXFVzZXInKTtcbiAqICAgICAgICAgIGN5LmNyZWF0ZSgnQXBwXFxcXFVzZXInLCAyKTtcbiAqICAgICAgICAgIGN5LmNyZWF0ZSgnQXBwXFxcXFVzZXInLCAyLCB7IGFjdGl2ZTogZmFsc2UgfSk7XG4gKi9cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKCdjcmVhdGUnLCAobW9kZWwsIHRpbWVzID0gbnVsbCwgYXR0cmlidXRlcyA9IHt9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lcyA9PT0gJ29iamVjdCcgJiYgdGltZXMgIT09IG51bGwpIHtcbiAgICAgICAgYXR0cmlidXRlcyA9IHRpbWVzO1xuICAgICAgICB0aW1lcyA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5XG4gICAgICAgIC5jc3JmVG9rZW4oKVxuICAgICAgICAudGhlbih0b2tlbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3kucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZmFpbE9uU3RhdHVzQ29kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL19fY3lwcmVzc19fL2ZhY3RvcnknLFxuICAgICAgICAgICAgICAgIGJvZHk6IHthdHRyaWJ1dGVzLCBtb2RlbCwgdGltZXMsIF90b2tlbjogdG9rZW59LFxuICAgICAgICAgICAgICAgIGxvZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIEN5cHJlc3MubG9nKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtb2RlbCArICh0aW1lcyA/IGAoJHt0aW1lc30gdGltZXMpYCA6ICcnKSxcbiAgICAgICAgICAgICAgICBjb25zb2xlUHJvcHM6ICgpID0+ICh7W21vZGVsXTogcmVzcG9uc2UuYm9keX0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLml0cygnYm9keScsIHtsb2c6IGZhbHNlfSk7XG59KTtcblxuLyoqXG4gKiBSZWZyZXNoIHRoZSBkYXRhYmFzZSBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICpcbiAqIEBleGFtcGxlIGN5LnJlZnJlc2hEYXRhYmFzZSgpO1xuICogICAgICAgICAgY3kucmVmcmVzaERhdGFiYXNlKHsgJy0tZHJvcC12aWV3cyc6IHRydWUgfSk7XG4gKi9cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKCdyZWZyZXNoRGF0YWJhc2UnLCAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGN5LmFydGlzYW4oJ21pZ3JhdGU6ZnJlc2gnLCBvcHRpb25zKTtcbn0pO1xuXG4vKipcbiAqIFNlZWQgdGhlIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWVkZXJDbGFzc1xuICpcbiAqIEBleGFtcGxlIGN5LnNlZWQoKTtcbiAqICAgICAgICAgIGN5LnNlZWQoJ1BsYW5zVGFibGVTZWVkZXInKTtcbiAqL1xuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ3NlZWQnLCAoc2VlZGVyQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gY3kuYXJ0aXNhbignZGI6c2VlZCcsIHtcbiAgICAgICAgJy0tY2xhc3MnOiBzZWVkZXJDbGFzcyxcbiAgICB9KTtcbn0pO1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gQXJ0aXNhbiBjb21tYW5kLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21tYW5kXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVyc1xuICpcbiAqIEBleGFtcGxlIGN5LmFydGlzYW4oJ2NhY2hlOmNsZWFyJyk7XG4gKi9cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKCdhcnRpc2FuJywgKGNvbW1hbmQsIHBhcmFtZXRlcnMgPSB7fSkgPT4ge1xuICAgIEN5cHJlc3MubG9nKHtcbiAgICAgICAgbmFtZTogJ2FydGlzYW4nLFxuICAgICAgICBtZXNzYWdlOiBjb21tYW5kLFxuICAgICAgICBjb25zb2xlUHJvcHM6ICgpID0+ICh7Y29tbWFuZCwgcGFyYW1ldGVyc30pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3kuY3NyZlRva2VuKClcbiAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGN5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9fX2N5cHJlc3NfXy9hcnRpc2FuJyxcbiAgICAgICAgICAgICAgICBib2R5OiB7Y29tbWFuZDogY29tbWFuZCwgcGFyYW1ldGVyczogcGFyYW1ldGVycywgX3Rva2VuOiB0b2tlbn0sXG4gICAgICAgICAgICAgICAgbG9nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG59KTtcblxuLyoqXG4gKiBFeGVjdXRlIGFyYml0cmFyeSBQSFAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmRcbiAqXG4gKiBAZXhhbXBsZSBjeS5waHAoJzIgKyAyJyk7XG4gKiAgICAgICAgICBjeS5waHAoJ0FwcFxcXFxVc2VyOjpjb3VudCgpKTtcbiAqL1xuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ3BocCcsIGNvbW1hbmQgPT4ge1xuICAgIHJldHVybiBjeVxuICAgICAgICAuY3NyZlRva2VuKClcbiAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3kucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL19fY3lwcmVzc19fL3J1bi1waHAnLFxuICAgICAgICAgICAgICAgIGJvZHk6IHtjb21tYW5kOiBjb21tYW5kLCBfdG9rZW46IHRva2VufSxcbiAgICAgICAgICAgICAgICBsb2c6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgQ3lwcmVzcy5sb2coe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwaHAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvbW1hbmQsXG4gICAgICAgICAgICAgICAgY29uc29sZVByb3BzOiAoKSA9PiAoe3Jlc3VsdDogcmVzcG9uc2UuYm9keS5yZXN1bHR9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5pdHMoJ2JvZHkucmVzdWx0Jywge2xvZzogZmFsc2V9KTtcbn0pO1xuXG5cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKCdjcmVhdGVVc2VyJywgKGF0dHJpYnV0ZXMgPSB7fSkgPT4ge1xuICAgIHJldHVybiBjeVxuICAgICAgICAucGhwKCdiY3J5cHQoXCInICsgYXR0cmlidXRlcy5wYXNzd29yZCArICdcIiknKS50aGVuKChiY3J5cHRQYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgY3kuY3JlYXRlKCdBcHBcXFxcTW9kZWxzXFxcXFVzZXInLCB7XG4gICAgICAgICAgICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICAuLi57cGFzc3dvcmQ6IGJjcnlwdFBhc3N3b3JkfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9