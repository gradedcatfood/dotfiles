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

/***/ "../../../.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/mmillis/.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty.js ***!
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

/***/ "../../../.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************************************!*\
  !*** /home/mmillis/.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
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

/***/ "../../../.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************************************!*\
  !*** /home/mmillis/.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof.js ***!
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


var _interopRequireDefault = __webpack_require__(/*! /home/mmillis/.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault */ "../../../.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! /home/mmillis/.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty */ "../../../.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! /home/mmillis/.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof */ "../../../.cache/Cypress/6.1.0/Cypress/resources/app/packages/server/node_modules/@babel/runtime/helpers/typeof.js"));

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
      log: false
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
    times = null;
  }

  return cy.csrfToken().then(function (token) {
    return cy.request({
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

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./cypress/support/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mmillis/Projects/sa/orientation/cypress/support/index.js */"./cypress/support/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL21taWxsaXMvLmNhY2hlL0N5cHJlc3MvNi4xLjAvQ3lwcmVzcy9yZXNvdXJjZXMvYXBwL3BhY2thZ2VzL3NlcnZlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvbW1pbGxpcy8uY2FjaGUvQ3lwcmVzcy82LjEuMC9DeXByZXNzL3Jlc291cmNlcy9hcHAvcGFja2FnZXMvc2VydmVyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvbW1pbGxpcy8uY2FjaGUvQ3lwcmVzcy82LjEuMC9DeXByZXNzL3Jlc291cmNlcy9hcHAvcGFja2FnZXMvc2VydmVyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvYXNzZXJ0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9zdXBwb3J0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2N5cHJlc3Mvc3VwcG9ydC9sYXJhdmVsLWNvbW1hbmRzLmpzIl0sIm5hbWVzIjpbIkN5cHJlc3MiLCJDb21tYW5kcyIsImFkZCIsInBhdGgiLCJjeSIsImxvY2F0aW9uIiwic2hvdWxkIiwicmVwbGFjZSIsImJlZm9yZSIsInRhc2siLCJsb2ciLCJhZnRlciIsImF0dHJpYnV0ZXMiLCJjc3JmVG9rZW4iLCJ0aGVuIiwidG9rZW4iLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsIl90b2tlbiIsIm5hbWUiLCJtZXNzYWdlIiwiY29uc29sZVByb3BzIiwidXNlciIsIml0cyIsIm1vZGVsIiwidGltZXMiLCJyZXNwb25zZSIsIm9wdGlvbnMiLCJhcnRpc2FuIiwic2VlZGVyQ2xhc3MiLCJjb21tYW5kIiwicGFyYW1ldGVycyIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7O0FDaEJBQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLEdBQWpCLENBQXFCLGdCQUFyQixFQUF1QyxVQUFBQyxJQUFJLEVBQUk7QUFDM0NDLElBQUUsQ0FBQ0MsUUFBSCxDQUFZLFVBQVosRUFBd0JDLE1BQXhCLENBQStCLElBQS9CLEVBQXFDLFdBQUlILElBQUosRUFBV0ksT0FBWCxDQUFtQixPQUFuQixFQUE0QixHQUE1QixDQUFyQztBQUNILENBRkQsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOztBQUNBOztBQUNBOztBQWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUFDLE1BQU0sQ0FBQyxZQUFNO0FBQ1RKLElBQUUsQ0FBQ0ssSUFBSCxDQUFRLHdCQUFSLEVBQWtDLEVBQWxDLEVBQXNDO0FBQUNDLE9BQUcsRUFBRTtBQUFOLEdBQXRDO0FBQ0gsQ0FGSyxDQUFOO0FBSUFDLEtBQUssQ0FBQyxZQUFNO0FBQ1JQLElBQUUsQ0FBQ0ssSUFBSCxDQUFRLHNCQUFSLEVBQWdDLEVBQWhDLEVBQW9DO0FBQUNDLE9BQUcsRUFBRTtBQUFOLEdBQXBDO0FBQ0gsQ0FGSSxDQUFMLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVYsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyxHQUFqQixDQUFxQixPQUFyQixFQUE4QixZQUFxQjtBQUFBLE1BQXBCVSxVQUFvQix1RUFBUCxFQUFPO0FBQy9DLFNBQU9SLEVBQUUsQ0FBQ1MsU0FBSCxHQUNGQyxJQURFLENBQ0csVUFBQUMsS0FBSyxFQUFJO0FBQ1gsV0FBT1gsRUFBRSxDQUFDWSxPQUFILENBQVc7QUFDZEMsWUFBTSxFQUFFLE1BRE07QUFFZEMsU0FBRyxFQUFFLG9CQUZTO0FBR2RDLFVBQUksRUFBRTtBQUFFUCxrQkFBVSxFQUFWQSxVQUFGO0FBQWNRLGNBQU0sRUFBRUw7QUFBdEIsT0FIUTtBQUlkTCxTQUFHLEVBQUU7QUFKUyxLQUFYLENBQVA7QUFNSCxHQVJFLEVBU0ZJLElBVEUsQ0FTRyxnQkFBWTtBQUFBLFFBQVZLLElBQVUsUUFBVkEsSUFBVTtBQUNkbkIsV0FBTyxDQUFDVSxHQUFSLENBQVk7QUFDUlcsVUFBSSxFQUFFLE9BREU7QUFFUkMsYUFBTyxFQUFFVixVQUZEO0FBR1JXLGtCQUFZLEVBQUU7QUFBQSxlQUFPO0FBQUVDLGNBQUksRUFBRUw7QUFBUixTQUFQO0FBQUE7QUFITixLQUFaO0FBS0gsR0FmRSxFQWVBTSxHQWZBLENBZUksTUFmSixFQWVZO0FBQUNmLE9BQUcsRUFBRTtBQUFOLEdBZlosQ0FBUDtBQWdCSCxDQWpCRDtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBVixPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCLEVBQStCLFlBQU07QUFDakMsU0FBT0UsRUFBRSxDQUFDUyxTQUFILEdBQ0ZDLElBREUsQ0FDRyxVQUFBQyxLQUFLLEVBQUk7QUFDWCxXQUFPWCxFQUFFLENBQUNZLE9BQUgsQ0FBVztBQUNkQyxZQUFNLEVBQUUsTUFETTtBQUVkQyxTQUFHLEVBQUUscUJBRlM7QUFHZEMsVUFBSSxFQUFFO0FBQUVDLGNBQU0sRUFBRUw7QUFBVixPQUhRO0FBSWRMLFNBQUcsRUFBRTtBQUpTLEtBQVgsQ0FBUDtBQU1ILEdBUkUsRUFTRkksSUFURSxDQVNHLFlBQU07QUFDUmQsV0FBTyxDQUFDVSxHQUFSLENBQVk7QUFBRVcsVUFBSSxFQUFFLFFBQVI7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUFaO0FBQ0gsR0FYRSxDQUFQO0FBWUgsQ0FiRDtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F0QixPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLEdBQWpCLENBQXFCLFdBQXJCLEVBQWtDLFlBQU07QUFDcEMsU0FBT0UsRUFBRSxDQUNKWSxPQURFLENBQ007QUFDTEMsVUFBTSxFQUFFLEtBREg7QUFFTEMsT0FBRyxFQUFFLHlCQUZBO0FBR0xSLE9BQUcsRUFBRTtBQUhBLEdBRE4sRUFNRmUsR0FORSxDQU1FLE1BTkYsRUFNVTtBQUFDZixPQUFHLEVBQUU7QUFBTixHQU5WLENBQVA7QUFPSCxDQVJEO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVYsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixVQUFDd0IsS0FBRCxFQUEwQztBQUFBLE1BQWxDQyxLQUFrQyx1RUFBMUIsSUFBMEI7QUFBQSxNQUFwQmYsVUFBb0IsdUVBQVAsRUFBTzs7QUFDckUsTUFBSSx5QkFBT2UsS0FBUCxNQUFpQixRQUFqQixJQUE2QkEsS0FBSyxLQUFLLElBQTNDLEVBQWlEO0FBQzdDZixjQUFVLEdBQUdlLEtBQWI7QUFDQUEsU0FBSyxHQUFHLElBQVI7QUFDSDs7QUFFRCxTQUFPdkIsRUFBRSxDQUNKUyxTQURFLEdBRUZDLElBRkUsQ0FFRyxVQUFBQyxLQUFLLEVBQUk7QUFDWCxXQUFPWCxFQUFFLENBQUNZLE9BQUgsQ0FBVztBQUNkQyxZQUFNLEVBQUUsTUFETTtBQUVkQyxTQUFHLEVBQUUsc0JBRlM7QUFHZEMsVUFBSSxFQUFFO0FBQUVQLGtCQUFVLEVBQVZBLFVBQUY7QUFBY2MsYUFBSyxFQUFMQSxLQUFkO0FBQXFCQyxhQUFLLEVBQUxBLEtBQXJCO0FBQTRCUCxjQUFNLEVBQUVMO0FBQXBDLE9BSFE7QUFJZEwsU0FBRyxFQUFFO0FBSlMsS0FBWCxDQUFQO0FBTUgsR0FURSxFQVVGSSxJQVZFLENBVUcsVUFBQWMsUUFBUSxFQUFJO0FBQ2Q1QixXQUFPLENBQUNVLEdBQVIsQ0FBWTtBQUNSVyxVQUFJLEVBQUUsUUFERTtBQUVSQyxhQUFPLEVBQUVJLEtBQUssSUFBSUMsS0FBSyxjQUFPQSxLQUFQLGVBQXdCLEVBQWpDLENBRk47QUFHUkosa0JBQVksRUFBRTtBQUFBLG9EQUFVRyxLQUFWLEVBQWtCRSxRQUFRLENBQUNULElBQTNCO0FBQUE7QUFITixLQUFaO0FBS0gsR0FoQkUsRUFpQkZNLEdBakJFLENBaUJFLE1BakJGLEVBaUJVO0FBQUNmLE9BQUcsRUFBRTtBQUFOLEdBakJWLENBQVA7QUFrQkgsQ0F4QkQ7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVYsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyxHQUFqQixDQUFxQixpQkFBckIsRUFBd0MsWUFBa0I7QUFBQSxNQUFqQjJCLE9BQWlCLHVFQUFQLEVBQU87QUFDdEQsU0FBT3pCLEVBQUUsQ0FBQzBCLE9BQUgsQ0FBVyxlQUFYLEVBQTRCRCxPQUE1QixDQUFQO0FBQ0gsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E3QixPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCLEVBQTZCLFVBQUM2QixXQUFELEVBQWlCO0FBQzFDLFNBQU8zQixFQUFFLENBQUMwQixPQUFILENBQVcsU0FBWCxFQUFzQjtBQUN6QixlQUFXQztBQURjLEdBQXRCLENBQVA7QUFHSCxDQUpEO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQS9CLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQkMsR0FBakIsQ0FBcUIsU0FBckIsRUFBZ0MsVUFBQzhCLE9BQUQsRUFBOEI7QUFBQSxNQUFwQkMsVUFBb0IsdUVBQVAsRUFBTztBQUMxRGpDLFNBQU8sQ0FBQ1UsR0FBUixDQUFZO0FBQ1JXLFFBQUksRUFBRSxTQURFO0FBRVJDLFdBQU8sRUFBRVUsT0FGRDtBQUdSVCxnQkFBWSxFQUFFO0FBQUEsYUFBTztBQUFFUyxlQUFPLEVBQVBBLE9BQUY7QUFBV0Msa0JBQVUsRUFBVkE7QUFBWCxPQUFQO0FBQUE7QUFITixHQUFaO0FBTUEsU0FBTzdCLEVBQUUsQ0FBQ1MsU0FBSCxHQUNGQyxJQURFLENBQ0csVUFBQUMsS0FBSyxFQUFJO0FBQ1gsV0FBT1gsRUFBRSxDQUFDWSxPQUFILENBQVc7QUFDZEMsWUFBTSxFQUFFLE1BRE07QUFFZEMsU0FBRyxFQUFFLHNCQUZTO0FBR2RDLFVBQUksRUFBRTtBQUFFYSxlQUFPLEVBQUVBLE9BQVg7QUFBb0JDLGtCQUFVLEVBQUVBLFVBQWhDO0FBQTRDYixjQUFNLEVBQUVMO0FBQXBELE9BSFE7QUFJZEwsU0FBRyxFQUFFO0FBSlMsS0FBWCxDQUFQO0FBTUgsR0FSRSxDQUFQO0FBU0gsQ0FoQkQ7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVYsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyxHQUFqQixDQUFxQixLQUFyQixFQUE0QixVQUFBOEIsT0FBTyxFQUFJO0FBQ25DLFNBQU81QixFQUFFLENBQ0pTLFNBREUsR0FFRkMsSUFGRSxDQUVHLFVBQUNDLEtBQUQsRUFBVztBQUNiLFdBQU9YLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXO0FBQ2RDLFlBQU0sRUFBRSxNQURNO0FBRWRDLFNBQUcsRUFBRSxzQkFGUztBQUdkQyxVQUFJLEVBQUU7QUFBRWEsZUFBTyxFQUFFQSxPQUFYO0FBQW9CWixjQUFNLEVBQUVMO0FBQTVCLE9BSFE7QUFJZEwsU0FBRyxFQUFFO0FBSlMsS0FBWCxDQUFQO0FBTUgsR0FURSxFQVVGSSxJQVZFLENBVUcsVUFBQWMsUUFBUSxFQUFJO0FBQ2Q1QixXQUFPLENBQUNVLEdBQVIsQ0FBWTtBQUNSVyxVQUFJLEVBQUUsS0FERTtBQUVSQyxhQUFPLEVBQUVVLE9BRkQ7QUFHUlQsa0JBQVksRUFBRTtBQUFBLGVBQU87QUFBRVcsZ0JBQU0sRUFBRU4sUUFBUSxDQUFDVCxJQUFULENBQWNlO0FBQXhCLFNBQVA7QUFBQTtBQUhOLEtBQVo7QUFLSCxHQWhCRSxFQWlCRlQsR0FqQkUsQ0FpQkUsYUFqQkYsRUFpQmlCO0FBQUNmLE9BQUcsRUFBRTtBQUFOLEdBakJqQixDQUFQO0FBa0JILENBbkJELEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2Fzc2VydFJlZGlyZWN0JywgcGF0aCA9PiB7XG4gICAgY3kubG9jYXRpb24oJ3BhdGhuYW1lJykuc2hvdWxkKCdlcScsIGAvJHtwYXRofWAucmVwbGFjZSgvXlxcL1xcLy8sICcvJykpO1xufSk7XG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIGNvbW1hbmRzLmpzIHNob3dzIHlvdSBob3cgdG9cbi8vIGNyZWF0ZSB2YXJpb3VzIGN1c3RvbSBjb21tYW5kcyBhbmQgb3ZlcndyaXRlXG4vLyBleGlzdGluZyBjb21tYW5kcy5cbi8vXG4vLyBGb3IgbW9yZSBjb21wcmVoZW5zaXZlIGV4YW1wbGVzIG9mIGN1c3RvbVxuLy8gY29tbWFuZHMgcGxlYXNlIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2N1c3RvbS1jb21tYW5kc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIHBhcmVudCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImxvZ2luXCIsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZChcImRyYWdcIiwgeyBwcmV2U3ViamVjdDogJ2VsZW1lbnQnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBkdWFsIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKFwiZGlzbWlzc1wiLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoXCJ2aXNpdFwiLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuIiwiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoaXMgZXhhbXBsZSBzdXBwb3J0L2luZGV4LmpzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCAnLi9jb21tYW5kcydcbmltcG9ydCAnLi9sYXJhdmVsLWNvbW1hbmRzJztcbmltcG9ydCAnLi9hc3NlcnRpb25zJztcblxuYmVmb3JlKCgpID0+IHtcbiAgICBjeS50YXNrKCdhY3RpdmF0ZUN5cHJlc3NFbnZGaWxlJywge30sIHtsb2c6IGZhbHNlfSk7XG59KTtcblxuYWZ0ZXIoKCkgPT4ge1xuICAgIGN5LnRhc2soJ2FjdGl2YXRlTG9jYWxFbnZGaWxlJywge30sIHtsb2c6IGZhbHNlfSk7XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlIGEgbmV3IHVzZXIgYW5kIGxvZyB0aGVtIGluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKlxuICogQGV4YW1wbGUgY3kubG9naW4oKTtcbiAqICAgICAgICAgIGN5LmxvZ2luKHsgbmFtZTogJ0pvaG5Eb2UnIH0pO1xuICovXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnbG9naW4nLCAoYXR0cmlidXRlcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIGN5LmNzcmZUb2tlbigpXG4gICAgICAgIC50aGVuKHRva2VuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjeS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvX19jeXByZXNzX18vbG9naW4nLFxuICAgICAgICAgICAgICAgIGJvZHk6IHsgYXR0cmlidXRlcywgX3Rva2VuOiB0b2tlbiB9LFxuICAgICAgICAgICAgICAgIGxvZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7Ym9keX0pID0+IHtcbiAgICAgICAgICAgIEN5cHJlc3MubG9nKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgY29uc29sZVByb3BzOiAoKSA9PiAoeyB1c2VyOiBib2R5IH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuaXRzKCdib2R5Jywge2xvZzogZmFsc2V9KTtcbn0pO1xuXG4vKipcbiAqIExvZ291dCB0aGUgY3VycmVudCB1c2VyLlxuICpcbiAqIEBleGFtcGxlIGN5LmxvZ291dCgpO1xuICovXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnbG9nb3V0JywgKCkgPT4ge1xuICAgIHJldHVybiBjeS5jc3JmVG9rZW4oKVxuICAgICAgICAudGhlbih0b2tlbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3kucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL19fY3lwcmVzc19fL2xvZ291dCcsXG4gICAgICAgICAgICAgICAgYm9keTogeyBfdG9rZW46IHRva2VuIH0sXG4gICAgICAgICAgICAgICAgbG9nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEN5cHJlc3MubG9nKHsgbmFtZTogJ2xvZ291dCcsIG1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICB9KTtcbn0pO1xuXG4vKipcbiAqIEZldGNoIGEgQ1NSRiB0b2tlbi5cbiAqXG4gKiBAZXhhbXBsZSBjeS5jc3JmVG9rZW4oKTtcbiAqL1xuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2NzcmZUb2tlbicsICgpID0+IHtcbiAgICByZXR1cm4gY3lcbiAgICAgICAgLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJy9fX2N5cHJlc3NfXy9jc3JmX3Rva2VuJyxcbiAgICAgICAgICAgIGxvZzogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIC5pdHMoJ2JvZHknLCB7bG9nOiBmYWxzZX0pO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IEVsb3F1ZW50IGZhY3RvcnkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsXG4gKiBAcGFyYW0ge051bWJlcnxudWxsfSB0aW1lc1xuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqXG4gKiBAZXhhbXBsZSBjeS5jcmVhdGUoJ0FwcFxcXFxVc2VyJyk7XG4gKiAgICAgICAgICBjeS5jcmVhdGUoJ0FwcFxcXFxVc2VyJywgMik7XG4gKiAgICAgICAgICBjeS5jcmVhdGUoJ0FwcFxcXFxVc2VyJywgMiwgeyBhY3RpdmU6IGZhbHNlIH0pO1xuICovXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnY3JlYXRlJywgKG1vZGVsLCB0aW1lcyA9IG51bGwsIGF0dHJpYnV0ZXMgPSB7fSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZXMgPT09ICdvYmplY3QnICYmIHRpbWVzICE9PSBudWxsKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMgPSB0aW1lcztcbiAgICAgICAgdGltZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjeVxuICAgICAgICAuY3NyZlRva2VuKClcbiAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGN5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9fX2N5cHJlc3NfXy9mYWN0b3J5JyxcbiAgICAgICAgICAgICAgICBib2R5OiB7IGF0dHJpYnV0ZXMsIG1vZGVsLCB0aW1lcywgX3Rva2VuOiB0b2tlbiB9LFxuICAgICAgICAgICAgICAgIGxvZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIEN5cHJlc3MubG9nKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY3JlYXRlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtb2RlbCArICh0aW1lcyA/IGAoJHt0aW1lc30gdGltZXMpYCA6ICcnKSxcbiAgICAgICAgICAgICAgICBjb25zb2xlUHJvcHM6ICgpID0+ICh7IFttb2RlbF06IHJlc3BvbnNlLmJvZHkgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuaXRzKCdib2R5Jywge2xvZzogZmFsc2V9KTtcbn0pO1xuXG4vKipcbiAqIFJlZnJlc2ggdGhlIGRhdGFiYXNlIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKlxuICogQGV4YW1wbGUgY3kucmVmcmVzaERhdGFiYXNlKCk7XG4gKiAgICAgICAgICBjeS5yZWZyZXNoRGF0YWJhc2UoeyAnLS1kcm9wLXZpZXdzJzogdHJ1ZSB9KTtcbiAqL1xuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ3JlZnJlc2hEYXRhYmFzZScsIChvcHRpb25zID0ge30pID0+IHtcbiAgICByZXR1cm4gY3kuYXJ0aXNhbignbWlncmF0ZTpmcmVzaCcsIG9wdGlvbnMpO1xufSk7XG5cbi8qKlxuICogU2VlZCB0aGUgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlZWRlckNsYXNzXG4gKlxuICogQGV4YW1wbGUgY3kuc2VlZCgpO1xuICogICAgICAgICAgY3kuc2VlZCgnUGxhbnNUYWJsZVNlZWRlcicpO1xuICovXG5DeXByZXNzLkNvbW1hbmRzLmFkZCgnc2VlZCcsIChzZWVkZXJDbGFzcykgPT4ge1xuICAgIHJldHVybiBjeS5hcnRpc2FuKCdkYjpzZWVkJywge1xuICAgICAgICAnLS1jbGFzcyc6IHNlZWRlckNsYXNzLFxuICAgIH0pO1xufSk7XG5cbi8qKlxuICogVHJpZ2dlciBhbiBBcnRpc2FuIGNvbW1hbmQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzXG4gKlxuICogQGV4YW1wbGUgY3kuYXJ0aXNhbignY2FjaGU6Y2xlYXInKTtcbiAqL1xuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2FydGlzYW4nLCAoY29tbWFuZCwgcGFyYW1ldGVycyA9IHt9KSA9PiB7XG4gICAgQ3lwcmVzcy5sb2coe1xuICAgICAgICBuYW1lOiAnYXJ0aXNhbicsXG4gICAgICAgIG1lc3NhZ2U6IGNvbW1hbmQsXG4gICAgICAgIGNvbnNvbGVQcm9wczogKCkgPT4gKHsgY29tbWFuZCwgcGFyYW1ldGVycyB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN5LmNzcmZUb2tlbigpXG4gICAgICAgIC50aGVuKHRva2VuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjeS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvX19jeXByZXNzX18vYXJ0aXNhbicsXG4gICAgICAgICAgICAgICAgYm9keTogeyBjb21tYW5kOiBjb21tYW5kLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzLCBfdG9rZW46IHRva2VuIH0sXG4gICAgICAgICAgICAgICAgbG9nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG59KTtcblxuLyoqXG4gKiBFeGVjdXRlIGFyYml0cmFyeSBQSFAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmRcbiAqXG4gKiBAZXhhbXBsZSBjeS5waHAoJzIgKyAyJyk7XG4gKiAgICAgICAgICBjeS5waHAoJ0FwcFxcXFxVc2VyOjpjb3VudCgpKTtcbiAqL1xuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ3BocCcsIGNvbW1hbmQgPT4ge1xuICAgIHJldHVybiBjeVxuICAgICAgICAuY3NyZlRva2VuKClcbiAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3kucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL19fY3lwcmVzc19fL3J1bi1waHAnLFxuICAgICAgICAgICAgICAgIGJvZHk6IHsgY29tbWFuZDogY29tbWFuZCwgX3Rva2VuOiB0b2tlbiB9LFxuICAgICAgICAgICAgICAgIGxvZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBDeXByZXNzLmxvZyh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BocCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY29tbWFuZCxcbiAgICAgICAgICAgICAgICBjb25zb2xlUHJvcHM6ICgpID0+ICh7IHJlc3VsdDogcmVzcG9uc2UuYm9keS5yZXN1bHQgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuaXRzKCdib2R5LnJlc3VsdCcsIHtsb2c6IGZhbHNlfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=