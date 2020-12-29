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

/***/ "./cypress/integration/examples/actions.spec.js":
/*!******************************************************!*\
  !*** ./cypress/integration/examples/actions.spec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/// <reference types="cypress" />
context('Actions', function () {
  beforeEach(function () {
    cy.visit('https://example.cypress.io/commands/actions');
  }); // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', function () {
    // https://on.cypress.io/type
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com') // .type() with special character sequences
    .type('{leftarrow}{rightarrow}{uparrow}{downarrow}').type('{del}{selectall}{backspace}') // .type() with key modifiers
    .type('{alt}{option}') //these are equivalent
    .type('{ctrl}{control}') //these are equivalent
    .type('{meta}{command}{cmd}') //these are equivalent
    .type('{shift}') // Delay each keypress by 0.1 sec
    .type('slow.typing@email.com', {
      delay: 100
    }).should('have.value', 'slow.typing@email.com');
    cy.get('.action-disabled') // Ignore error checking prior to type
    // like whether the input is visible or disabled
    .type('disabled error checking', {
      force: true
    }).should('have.value', 'disabled error checking');
  });
  it('.focus() - focus on a DOM element', function () {
    // https://on.cypress.io/focus
    cy.get('.action-focus').focus().should('have.class', 'focus').prev().should('have.attr', 'style', 'color: orange;');
  });
  it('.blur() - blur off a DOM element', function () {
    // https://on.cypress.io/blur
    cy.get('.action-blur').type('About to blur').blur().should('have.class', 'error').prev().should('have.attr', 'style', 'color: red;');
  });
  it('.clear() - clears an input or textarea element', function () {
    // https://on.cypress.io/clear
    cy.get('.action-clear').type('Clear this text').should('have.value', 'Clear this text').clear().should('have.value', '');
  });
  it('.submit() - submit a form', function () {
    // https://on.cypress.io/submit
    cy.get('.action-form').find('[type="text"]').type('HALFOFF');
    cy.get('.action-form').submit().next().should('contain', 'Your form has been submitted!');
  });
  it('.click() - click on a DOM element', function () {
    // https://on.cypress.io/click
    cy.get('.action-btn').click(); // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------
    // clicking in the center of the element is the default

    cy.get('#action-canvas').click();
    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('topRight');
    cy.get('#action-canvas').click('left');
    cy.get('#action-canvas').click('right');
    cy.get('#action-canvas').click('bottomLeft');
    cy.get('#action-canvas').click('bottom');
    cy.get('#action-canvas').click('bottomRight'); // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    cy.get('#action-canvas').click(80, 75) // click 80px on x coord and 75px on y coord
    .click(170, 75).click(80, 165).click(100, 185).click(125, 190).click(150, 185).click(170, 165); // click multiple elements by passing multiple: true

    cy.get('.action-labels>.label').click({
      multiple: true
    }); // Ignore error checking prior to clicking

    cy.get('.action-opacity>.btn').click({
      force: true
    });
  });
  it('.dblclick() - double click on a DOM element', function () {
    // https://on.cypress.io/dblclick
    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    cy.get('.action-div').dblclick().should('not.be.visible');
    cy.get('.action-input-hidden').should('be.visible');
  });
  it('.rightclick() - right click on a DOM element', function () {
    // https://on.cypress.io/rightclick
    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible');
    cy.get('.rightclick-action-input-hidden').should('be.visible');
  });
  it('.check() - check a checkbox or radio element', function () {
    // https://on.cypress.io/check
    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked');
    cy.get('.action-radios [type="radio"]').not('[disabled]').check().should('be.checked'); // .check() accepts a value argument

    cy.get('.action-radios [type="radio"]').check('radio1').should('be.checked'); // .check() accepts an array of values

    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2']).should('be.checked'); // Ignore error checking prior to checking

    cy.get('.action-checkboxes [disabled]').check({
      force: true
    }).should('be.checked');
    cy.get('.action-radios [type="radio"]').check('radio3', {
      force: true
    }).should('be.checked');
  });
  it('.uncheck() - uncheck a checkbox element', function () {
    // https://on.cypress.io/uncheck
    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]').not('[disabled]').uncheck().should('not.be.checked'); // .uncheck() accepts a value argument

    cy.get('.action-check [type="checkbox"]').check('checkbox1').uncheck('checkbox1').should('not.be.checked'); // .uncheck() accepts an array of values

    cy.get('.action-check [type="checkbox"]').check(['checkbox1', 'checkbox3']).uncheck(['checkbox1', 'checkbox3']).should('not.be.checked'); // Ignore error checking prior to unchecking

    cy.get('.action-check [disabled]').uncheck({
      force: true
    }).should('not.be.checked');
  });
  it('.select() - select an option in a <select> element', function () {
    // https://on.cypress.io/select
    // at first, no option should be selected
    cy.get('.action-select').should('have.value', '--Select a fruit--'); // Select option(s) with matching text content

    cy.get('.action-select').select('apples'); // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML

    cy.get('.action-select').should('have.value', 'fr-apples');
    cy.get('.action-select-multiple').select(['apples', 'oranges', 'bananas']) // when getting multiple values, invoke "val" method first
    .invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']); // Select option(s) with matching value

    cy.get('.action-select').select('fr-bananas') // can attach an assertion right away to the element
    .should('have.value', 'fr-bananas');
    cy.get('.action-select-multiple').select(['fr-apples', 'fr-oranges', 'fr-bananas']).invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']); // assert the selected values include oranges

    cy.get('.action-select-multiple').invoke('val').should('include', 'fr-oranges');
  });
  it('.scrollIntoView() - scroll an element into view', function () {
    // https://on.cypress.io/scrollintoview
    // normally all of these buttons are hidden,
    // because they're not within
    // the viewable area of their parent
    // (we need to scroll to see them)
    cy.get('#scroll-horizontal button').should('not.be.visible'); // scroll the button into view, as if the user had scrolled

    cy.get('#scroll-horizontal button').scrollIntoView().should('be.visible');
    cy.get('#scroll-vertical button').should('not.be.visible'); // Cypress handles the scroll direction needed

    cy.get('#scroll-vertical button').scrollIntoView().should('be.visible');
    cy.get('#scroll-both button').should('not.be.visible'); // Cypress knows to scroll to the right and down

    cy.get('#scroll-both button').scrollIntoView().should('be.visible');
  });
  it('.trigger() - trigger an event on a DOM element', function () {
    // https://on.cypress.io/trigger
    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed
    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get('.trigger-input-range').invoke('val', 25).trigger('change').get('input[type=range]').siblings('p').should('have.text', '25');
  });
  it('cy.scrollTo() - scroll the window or element to a position', function () {
    // https://on.cypress.io/scrollTo
    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------
    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo('bottom');
    cy.get('#scrollable-horizontal').scrollTo('right'); // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels

    cy.get('#scrollable-vertical').scrollTo(250, 250); // or you can scroll to a specific percentage
    // of the (width, height) of the element

    cy.get('#scrollable-both').scrollTo('75%', '25%'); // control the easing of the scroll (default is 'swing')

    cy.get('#scrollable-vertical').scrollTo('center', {
      easing: 'linear'
    }); // control the duration of the scroll (in ms)

    cy.get('#scrollable-both').scrollTo('center', {
      duration: 2000
    });
  });
});

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./cypress/integration/examples/actions.spec.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mmillis/Code/mmillis/drag-logbook/cypress/integration/examples/actions.spec.js */"./cypress/integration/examples/actions.spec.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9pbnRlZ3JhdGlvbi9leGFtcGxlcy9hY3Rpb25zLnNwZWMuanMiXSwibmFtZXMiOlsiY29udGV4dCIsImJlZm9yZUVhY2giLCJjeSIsInZpc2l0IiwiaXQiLCJnZXQiLCJ0eXBlIiwic2hvdWxkIiwiZGVsYXkiLCJmb3JjZSIsImZvY3VzIiwicHJldiIsImJsdXIiLCJjbGVhciIsImZpbmQiLCJzdWJtaXQiLCJuZXh0IiwiY2xpY2siLCJtdWx0aXBsZSIsImRibGNsaWNrIiwicmlnaHRjbGljayIsIm5vdCIsImNoZWNrIiwidW5jaGVjayIsInNlbGVjdCIsImludm9rZSIsInNjcm9sbEludG9WaWV3IiwidHJpZ2dlciIsInNpYmxpbmdzIiwic2Nyb2xsVG8iLCJlYXNpbmciLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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RUE1QnFFLENBOEJyRTs7QUFDQTNCLE1BQUUsQ0FBQ0csR0FBSCxDQUFPLHNCQUFQLEVBQStCd0IsUUFBL0IsQ0FBd0MsUUFBeEMsRUFBa0Q7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBbEQsRUEvQnFFLENBaUNyRTs7QUFDQTVCLE1BQUUsQ0FBQ0csR0FBSCxDQUFPLGtCQUFQLEVBQTJCd0IsUUFBM0IsQ0FBb0MsUUFBcEMsRUFBOEM7QUFBRUUsY0FBUSxFQUFFO0FBQVosS0FBOUM7QUFDRCxHQW5DQyxDQUFGO0FBb0NELENBeFNNLENBQVAsQyIsImZpbGUiOiJhY3Rpb25zLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb250ZXh0KCdBY3Rpb25zJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvYWN0aW9ucycpXG4gIH0pXG5cbiAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2ludGVyYWN0aW5nLXdpdGgtZWxlbWVudHNcblxuICBpdCgnLnR5cGUoKSAtIHR5cGUgaW50byBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby90eXBlXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJylcbiAgICAgIC50eXBlKCdmYWtlQGVtYWlsLmNvbScpLnNob3VsZCgnaGF2ZS52YWx1ZScsICdmYWtlQGVtYWlsLmNvbScpXG5cbiAgICAgIC8vIC50eXBlKCkgd2l0aCBzcGVjaWFsIGNoYXJhY3RlciBzZXF1ZW5jZXNcbiAgICAgIC50eXBlKCd7bGVmdGFycm93fXtyaWdodGFycm93fXt1cGFycm93fXtkb3duYXJyb3d9JylcbiAgICAgIC50eXBlKCd7ZGVsfXtzZWxlY3RhbGx9e2JhY2tzcGFjZX0nKVxuXG4gICAgICAvLyAudHlwZSgpIHdpdGgga2V5IG1vZGlmaWVyc1xuICAgICAgLnR5cGUoJ3thbHR9e29wdGlvbn0nKSAvL3RoZXNlIGFyZSBlcXVpdmFsZW50XG4gICAgICAudHlwZSgne2N0cmx9e2NvbnRyb2x9JykgLy90aGVzZSBhcmUgZXF1aXZhbGVudFxuICAgICAgLnR5cGUoJ3ttZXRhfXtjb21tYW5kfXtjbWR9JykgLy90aGVzZSBhcmUgZXF1aXZhbGVudFxuICAgICAgLnR5cGUoJ3tzaGlmdH0nKVxuXG4gICAgICAvLyBEZWxheSBlYWNoIGtleXByZXNzIGJ5IDAuMSBzZWNcbiAgICAgIC50eXBlKCdzbG93LnR5cGluZ0BlbWFpbC5jb20nLCB7IGRlbGF5OiAxMDAgfSlcbiAgICAgIC5zaG91bGQoJ2hhdmUudmFsdWUnLCAnc2xvdy50eXBpbmdAZW1haWwuY29tJylcblxuICAgIGN5LmdldCgnLmFjdGlvbi1kaXNhYmxlZCcpXG4gICAgICAvLyBJZ25vcmUgZXJyb3IgY2hlY2tpbmcgcHJpb3IgdG8gdHlwZVxuICAgICAgLy8gbGlrZSB3aGV0aGVyIHRoZSBpbnB1dCBpcyB2aXNpYmxlIG9yIGRpc2FibGVkXG4gICAgICAudHlwZSgnZGlzYWJsZWQgZXJyb3IgY2hlY2tpbmcnLCB7IGZvcmNlOiB0cnVlIH0pXG4gICAgICAuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ2Rpc2FibGVkIGVycm9yIGNoZWNraW5nJylcbiAgfSlcblxuICBpdCgnLmZvY3VzKCkgLSBmb2N1cyBvbiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9mb2N1c1xuICAgIGN5LmdldCgnLmFjdGlvbi1mb2N1cycpLmZvY3VzKClcbiAgICAgIC5zaG91bGQoJ2hhdmUuY2xhc3MnLCAnZm9jdXMnKVxuICAgICAgLnByZXYoKS5zaG91bGQoJ2hhdmUuYXR0cicsICdzdHlsZScsICdjb2xvcjogb3JhbmdlOycpXG4gIH0pXG5cbiAgaXQoJy5ibHVyKCkgLSBibHVyIG9mZiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9ibHVyXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWJsdXInKS50eXBlKCdBYm91dCB0byBibHVyJykuYmx1cigpXG4gICAgICAuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ2Vycm9yJylcbiAgICAgIC5wcmV2KCkuc2hvdWxkKCdoYXZlLmF0dHInLCAnc3R5bGUnLCAnY29sb3I6IHJlZDsnKVxuICB9KVxuXG4gIGl0KCcuY2xlYXIoKSAtIGNsZWFycyBhbiBpbnB1dCBvciB0ZXh0YXJlYSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jbGVhclxuICAgIGN5LmdldCgnLmFjdGlvbi1jbGVhcicpLnR5cGUoJ0NsZWFyIHRoaXMgdGV4dCcpXG4gICAgICAuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ0NsZWFyIHRoaXMgdGV4dCcpXG4gICAgICAuY2xlYXIoKVxuICAgICAgLnNob3VsZCgnaGF2ZS52YWx1ZScsICcnKVxuICB9KVxuXG4gIGl0KCcuc3VibWl0KCkgLSBzdWJtaXQgYSBmb3JtJywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zdWJtaXRcbiAgICBjeS5nZXQoJy5hY3Rpb24tZm9ybScpXG4gICAgICAuZmluZCgnW3R5cGU9XCJ0ZXh0XCJdJykudHlwZSgnSEFMRk9GRicpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tZm9ybScpLnN1Ym1pdCgpXG4gICAgICAubmV4dCgpLnNob3VsZCgnY29udGFpbicsICdZb3VyIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkIScpXG4gIH0pXG5cbiAgaXQoJy5jbGljaygpIC0gY2xpY2sgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vY2xpY2tcbiAgICBjeS5nZXQoJy5hY3Rpb24tYnRuJykuY2xpY2soKVxuXG4gICAgLy8gWW91IGNhbiBjbGljayBvbiA5IHNwZWNpZmljIHBvc2l0aW9ucyBvZiBhbiBlbGVtZW50OlxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgdG9wTGVmdCAgICAgICAgdG9wICAgICAgIHRvcFJpZ2h0IHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8IGxlZnQgICAgICAgICAgY2VudGVyICAgICAgICByaWdodCB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCBib3R0b21MZWZ0ICAgYm90dG9tICAgYm90dG9tUmlnaHQgfFxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gY2xpY2tpbmcgaW4gdGhlIGNlbnRlciBvZiB0aGUgZWxlbWVudCBpcyB0aGUgZGVmYXVsdFxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygpXG5cbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ3RvcExlZnQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygndG9wJylcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ3RvcFJpZ2h0JylcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ2xlZnQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygncmlnaHQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygnYm90dG9tTGVmdCcpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKCdib3R0b20nKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygnYm90dG9tUmlnaHQnKVxuXG4gICAgLy8gLmNsaWNrKCkgYWNjZXB0cyBhbiB4IGFuZCB5IGNvb3JkaW5hdGVcbiAgICAvLyB0aGF0IGNvbnRyb2xzIHdoZXJlIHRoZSBjbGljayBvY2N1cnMgOilcblxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKVxuICAgICAgLmNsaWNrKDgwLCA3NSkgLy8gY2xpY2sgODBweCBvbiB4IGNvb3JkIGFuZCA3NXB4IG9uIHkgY29vcmRcbiAgICAgIC5jbGljaygxNzAsIDc1KVxuICAgICAgLmNsaWNrKDgwLCAxNjUpXG4gICAgICAuY2xpY2soMTAwLCAxODUpXG4gICAgICAuY2xpY2soMTI1LCAxOTApXG4gICAgICAuY2xpY2soMTUwLCAxODUpXG4gICAgICAuY2xpY2soMTcwLCAxNjUpXG5cbiAgICAvLyBjbGljayBtdWx0aXBsZSBlbGVtZW50cyBieSBwYXNzaW5nIG11bHRpcGxlOiB0cnVlXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWxhYmVscz4ubGFiZWwnKS5jbGljayh7IG11bHRpcGxlOiB0cnVlIH0pXG5cbiAgICAvLyBJZ25vcmUgZXJyb3IgY2hlY2tpbmcgcHJpb3IgdG8gY2xpY2tpbmdcbiAgICBjeS5nZXQoJy5hY3Rpb24tb3BhY2l0eT4uYnRuJykuY2xpY2soeyBmb3JjZTogdHJ1ZSB9KVxuICB9KVxuXG4gIGl0KCcuZGJsY2xpY2soKSAtIGRvdWJsZSBjbGljayBvbiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9kYmxjbGlja1xuXG4gICAgLy8gT3VyIGFwcCBoYXMgYSBsaXN0ZW5lciBvbiAnZGJsY2xpY2snIGV2ZW50IGluIG91ciAnc2NyaXB0cy5qcydcbiAgICAvLyB0aGF0IGhpZGVzIHRoZSBkaXYgYW5kIHNob3dzIGFuIGlucHV0IG9uIGRvdWJsZSBjbGlja1xuICAgIGN5LmdldCgnLmFjdGlvbi1kaXYnKS5kYmxjbGljaygpLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1pbnB1dC1oaWRkZW4nKS5zaG91bGQoJ2JlLnZpc2libGUnKVxuICB9KVxuXG4gIGl0KCcucmlnaHRjbGljaygpIC0gcmlnaHQgY2xpY2sgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vcmlnaHRjbGlja1xuXG4gICAgLy8gT3VyIGFwcCBoYXMgYSBsaXN0ZW5lciBvbiAnY29udGV4dG1lbnUnIGV2ZW50IGluIG91ciAnc2NyaXB0cy5qcydcbiAgICAvLyB0aGF0IGhpZGVzIHRoZSBkaXYgYW5kIHNob3dzIGFuIGlucHV0IG9uIHJpZ2h0IGNsaWNrXG4gICAgY3kuZ2V0KCcucmlnaHRjbGljay1hY3Rpb24tZGl2JykucmlnaHRjbGljaygpLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuICAgIGN5LmdldCgnLnJpZ2h0Y2xpY2stYWN0aW9uLWlucHV0LWhpZGRlbicpLnNob3VsZCgnYmUudmlzaWJsZScpXG4gIH0pXG5cbiAgaXQoJy5jaGVjaygpIC0gY2hlY2sgYSBjaGVja2JveCBvciByYWRpbyBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jaGVja1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgLmNoZWNrKCkgd2lsbCBjaGVjayBhbGxcbiAgICAvLyBtYXRjaGluZyBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cyBpbiBzdWNjZXNzaW9uLCBvbmUgYWZ0ZXIgYW5vdGhlclxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVja2JveGVzIFt0eXBlPVwiY2hlY2tib3hcIl0nKS5ub3QoJ1tkaXNhYmxlZF0nKVxuICAgICAgLmNoZWNrKCkuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIGN5LmdldCgnLmFjdGlvbi1yYWRpb3MgW3R5cGU9XCJyYWRpb1wiXScpLm5vdCgnW2Rpc2FibGVkXScpXG4gICAgICAuY2hlY2soKS5zaG91bGQoJ2JlLmNoZWNrZWQnKVxuXG4gICAgLy8gLmNoZWNrKCkgYWNjZXB0cyBhIHZhbHVlIGFyZ3VtZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLXJhZGlvcyBbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgIC5jaGVjaygncmFkaW8xJykuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIC8vIC5jaGVjaygpIGFjY2VwdHMgYW4gYXJyYXkgb2YgdmFsdWVzXG4gICAgY3kuZ2V0KCcuYWN0aW9uLW11bHRpcGxlLWNoZWNrYm94ZXMgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAuY2hlY2soWydjaGVja2JveDEnLCAnY2hlY2tib3gyJ10pLnNob3VsZCgnYmUuY2hlY2tlZCcpXG5cbiAgICAvLyBJZ25vcmUgZXJyb3IgY2hlY2tpbmcgcHJpb3IgdG8gY2hlY2tpbmdcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2tib3hlcyBbZGlzYWJsZWRdJylcbiAgICAgIC5jaGVjayh7IGZvcmNlOiB0cnVlIH0pLnNob3VsZCgnYmUuY2hlY2tlZCcpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tcmFkaW9zIFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgLmNoZWNrKCdyYWRpbzMnLCB7IGZvcmNlOiB0cnVlIH0pLnNob3VsZCgnYmUuY2hlY2tlZCcpXG4gIH0pXG5cbiAgaXQoJy51bmNoZWNrKCkgLSB1bmNoZWNrIGEgY2hlY2tib3ggZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vdW5jaGVja1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgLnVuY2hlY2soKSB3aWxsIHVuY2hlY2sgYWxsIG1hdGNoaW5nXG4gICAgLy8gY2hlY2tib3ggZWxlbWVudHMgaW4gc3VjY2Vzc2lvbiwgb25lIGFmdGVyIGFub3RoZXJcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAubm90KCdbZGlzYWJsZWRdJylcbiAgICAgIC51bmNoZWNrKCkuc2hvdWxkKCdub3QuYmUuY2hlY2tlZCcpXG5cbiAgICAvLyAudW5jaGVjaygpIGFjY2VwdHMgYSB2YWx1ZSBhcmd1bWVudFxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgIC5jaGVjaygnY2hlY2tib3gxJylcbiAgICAgIC51bmNoZWNrKCdjaGVja2JveDEnKS5zaG91bGQoJ25vdC5iZS5jaGVja2VkJylcblxuICAgIC8vIC51bmNoZWNrKCkgYWNjZXB0cyBhbiBhcnJheSBvZiB2YWx1ZXNcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAuY2hlY2soWydjaGVja2JveDEnLCAnY2hlY2tib3gzJ10pXG4gICAgICAudW5jaGVjayhbJ2NoZWNrYm94MScsICdjaGVja2JveDMnXSkuc2hvdWxkKCdub3QuYmUuY2hlY2tlZCcpXG5cbiAgICAvLyBJZ25vcmUgZXJyb3IgY2hlY2tpbmcgcHJpb3IgdG8gdW5jaGVja2luZ1xuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbZGlzYWJsZWRdJylcbiAgICAgIC51bmNoZWNrKHsgZm9yY2U6IHRydWUgfSkuc2hvdWxkKCdub3QuYmUuY2hlY2tlZCcpXG4gIH0pXG5cbiAgaXQoJy5zZWxlY3QoKSAtIHNlbGVjdCBhbiBvcHRpb24gaW4gYSA8c2VsZWN0PiBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zZWxlY3RcblxuICAgIC8vIGF0IGZpcnN0LCBubyBvcHRpb24gc2hvdWxkIGJlIHNlbGVjdGVkXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpXG4gICAgICAuc2hvdWxkKCdoYXZlLnZhbHVlJywgJy0tU2VsZWN0IGEgZnJ1aXQtLScpXG5cbiAgICAvLyBTZWxlY3Qgb3B0aW9uKHMpIHdpdGggbWF0Y2hpbmcgdGV4dCBjb250ZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpLnNlbGVjdCgnYXBwbGVzJylcbiAgICAvLyBjb25maXJtIHRoZSBhcHBsZXMgd2VyZSBzZWxlY3RlZFxuICAgIC8vIG5vdGUgdGhhdCBlYWNoIHZhbHVlIHN0YXJ0cyB3aXRoIFwiZnItXCIgaW4gb3VyIEhUTUxcbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0Jykuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ2ZyLWFwcGxlcycpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0LW11bHRpcGxlJylcbiAgICAgIC5zZWxlY3QoWydhcHBsZXMnLCAnb3JhbmdlcycsICdiYW5hbmFzJ10pXG4gICAgICAvLyB3aGVuIGdldHRpbmcgbXVsdGlwbGUgdmFsdWVzLCBpbnZva2UgXCJ2YWxcIiBtZXRob2QgZmlyc3RcbiAgICAgIC5pbnZva2UoJ3ZhbCcpXG4gICAgICAuc2hvdWxkKCdkZWVwLmVxdWFsJywgWydmci1hcHBsZXMnLCAnZnItb3JhbmdlcycsICdmci1iYW5hbmFzJ10pXG5cbiAgICAvLyBTZWxlY3Qgb3B0aW9uKHMpIHdpdGggbWF0Y2hpbmcgdmFsdWVcbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0Jykuc2VsZWN0KCdmci1iYW5hbmFzJylcbiAgICAgIC8vIGNhbiBhdHRhY2ggYW4gYXNzZXJ0aW9uIHJpZ2h0IGF3YXkgdG8gdGhlIGVsZW1lbnRcbiAgICAgIC5zaG91bGQoJ2hhdmUudmFsdWUnLCAnZnItYmFuYW5hcycpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tc2VsZWN0LW11bHRpcGxlJylcbiAgICAgIC5zZWxlY3QoWydmci1hcHBsZXMnLCAnZnItb3JhbmdlcycsICdmci1iYW5hbmFzJ10pXG4gICAgICAuaW52b2tlKCd2YWwnKVxuICAgICAgLnNob3VsZCgnZGVlcC5lcXVhbCcsIFsnZnItYXBwbGVzJywgJ2ZyLW9yYW5nZXMnLCAnZnItYmFuYW5hcyddKVxuXG4gICAgLy8gYXNzZXJ0IHRoZSBzZWxlY3RlZCB2YWx1ZXMgaW5jbHVkZSBvcmFuZ2VzXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdC1tdWx0aXBsZScpXG4gICAgICAuaW52b2tlKCd2YWwnKS5zaG91bGQoJ2luY2x1ZGUnLCAnZnItb3JhbmdlcycpXG4gIH0pXG5cbiAgaXQoJy5zY3JvbGxJbnRvVmlldygpIC0gc2Nyb2xsIGFuIGVsZW1lbnQgaW50byB2aWV3JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zY3JvbGxpbnRvdmlld1xuXG4gICAgLy8gbm9ybWFsbHkgYWxsIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGhpZGRlbixcbiAgICAvLyBiZWNhdXNlIHRoZXkncmUgbm90IHdpdGhpblxuICAgIC8vIHRoZSB2aWV3YWJsZSBhcmVhIG9mIHRoZWlyIHBhcmVudFxuICAgIC8vICh3ZSBuZWVkIHRvIHNjcm9sbCB0byBzZWUgdGhlbSlcbiAgICBjeS5nZXQoJyNzY3JvbGwtaG9yaXpvbnRhbCBidXR0b24nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuXG4gICAgLy8gc2Nyb2xsIHRoZSBidXR0b24gaW50byB2aWV3LCBhcyBpZiB0aGUgdXNlciBoYWQgc2Nyb2xsZWRcbiAgICBjeS5nZXQoJyNzY3JvbGwtaG9yaXpvbnRhbCBidXR0b24nKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAuc2hvdWxkKCdiZS52aXNpYmxlJylcblxuICAgIGN5LmdldCgnI3Njcm9sbC12ZXJ0aWNhbCBidXR0b24nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuXG4gICAgLy8gQ3lwcmVzcyBoYW5kbGVzIHRoZSBzY3JvbGwgZGlyZWN0aW9uIG5lZWRlZFxuICAgIGN5LmdldCgnI3Njcm9sbC12ZXJ0aWNhbCBidXR0b24nKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAuc2hvdWxkKCdiZS52aXNpYmxlJylcblxuICAgIGN5LmdldCgnI3Njcm9sbC1ib3RoIGJ1dHRvbicpXG4gICAgICAuc2hvdWxkKCdub3QuYmUudmlzaWJsZScpXG5cbiAgICAvLyBDeXByZXNzIGtub3dzIHRvIHNjcm9sbCB0byB0aGUgcmlnaHQgYW5kIGRvd25cbiAgICBjeS5nZXQoJyNzY3JvbGwtYm90aCBidXR0b24nKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAuc2hvdWxkKCdiZS52aXNpYmxlJylcbiAgfSlcblxuICBpdCgnLnRyaWdnZXIoKSAtIHRyaWdnZXIgYW4gZXZlbnQgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vdHJpZ2dlclxuXG4gICAgLy8gVG8gaW50ZXJhY3Qgd2l0aCBhIHJhbmdlIGlucHV0IChzbGlkZXIpXG4gICAgLy8gd2UgbmVlZCB0byBzZXQgaXRzIHZhbHVlICYgdHJpZ2dlciB0aGVcbiAgICAvLyBldmVudCB0byBzaWduYWwgaXQgY2hhbmdlZFxuXG4gICAgLy8gSGVyZSwgd2UgaW52b2tlIGpRdWVyeSdzIHZhbCgpIG1ldGhvZCB0byBzZXRcbiAgICAvLyB0aGUgdmFsdWUgYW5kIHRyaWdnZXIgdGhlICdjaGFuZ2UnIGV2ZW50XG4gICAgY3kuZ2V0KCcudHJpZ2dlci1pbnB1dC1yYW5nZScpXG4gICAgICAuaW52b2tlKCd2YWwnLCAyNSlcbiAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgLmdldCgnaW5wdXRbdHlwZT1yYW5nZV0nKS5zaWJsaW5ncygncCcpXG4gICAgICAuc2hvdWxkKCdoYXZlLnRleHQnLCAnMjUnKVxuICB9KVxuXG4gIGl0KCdjeS5zY3JvbGxUbygpIC0gc2Nyb2xsIHRoZSB3aW5kb3cgb3IgZWxlbWVudCB0byBhIHBvc2l0aW9uJywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9zY3JvbGxUb1xuXG4gICAgLy8gWW91IGNhbiBzY3JvbGwgdG8gOSBzcGVjaWZpYyBwb3NpdGlvbnMgb2YgYW4gZWxlbWVudDpcbiAgICAvLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB8IHRvcExlZnQgICAgICAgIHRvcCAgICAgICB0b3BSaWdodCB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCBsZWZ0ICAgICAgICAgIGNlbnRlciAgICAgICAgcmlnaHQgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgYm90dG9tTGVmdCAgIGJvdHRvbSAgIGJvdHRvbVJpZ2h0IHxcbiAgICAvLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIGlmIHlvdSBjaGFpbiAuc2Nyb2xsVG8oKSBvZmYgb2YgY3ksIHdlIHdpbGxcbiAgICAvLyBzY3JvbGwgdGhlIGVudGlyZSB3aW5kb3dcbiAgICBjeS5zY3JvbGxUbygnYm90dG9tJylcblxuICAgIGN5LmdldCgnI3Njcm9sbGFibGUtaG9yaXpvbnRhbCcpLnNjcm9sbFRvKCdyaWdodCcpXG5cbiAgICAvLyBvciB5b3UgY2FuIHNjcm9sbCB0byBhIHNwZWNpZmljIGNvb3JkaW5hdGU6XG4gICAgLy8gKHggYXhpcywgeSBheGlzKSBpbiBwaXhlbHNcbiAgICBjeS5nZXQoJyNzY3JvbGxhYmxlLXZlcnRpY2FsJykuc2Nyb2xsVG8oMjUwLCAyNTApXG5cbiAgICAvLyBvciB5b3UgY2FuIHNjcm9sbCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2VcbiAgICAvLyBvZiB0aGUgKHdpZHRoLCBoZWlnaHQpIG9mIHRoZSBlbGVtZW50XG4gICAgY3kuZ2V0KCcjc2Nyb2xsYWJsZS1ib3RoJykuc2Nyb2xsVG8oJzc1JScsICcyNSUnKVxuXG4gICAgLy8gY29udHJvbCB0aGUgZWFzaW5nIG9mIHRoZSBzY3JvbGwgKGRlZmF1bHQgaXMgJ3N3aW5nJylcbiAgICBjeS5nZXQoJyNzY3JvbGxhYmxlLXZlcnRpY2FsJykuc2Nyb2xsVG8oJ2NlbnRlcicsIHsgZWFzaW5nOiAnbGluZWFyJyB9KVxuXG4gICAgLy8gY29udHJvbCB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCAoaW4gbXMpXG4gICAgY3kuZ2V0KCcjc2Nyb2xsYWJsZS1ib3RoJykuc2Nyb2xsVG8oJ2NlbnRlcicsIHsgZHVyYXRpb246IDIwMDAgfSlcbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9