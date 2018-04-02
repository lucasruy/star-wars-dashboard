(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _darkmode = require('./components/darkmode');

var _darkmode2 = _interopRequireDefault(_darkmode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
window.addEventListener('load', function () {
  (0, _darkmode2.default)();
}); // =========================================
// Import Functions  -----------------------

// Example -------------------------------

},{"./components/darkmode":2}],2:[function(require,module,exports){
'use strict';

var _setActive = require('./interactions/setActive');

var _setActive2 = _interopRequireDefault(_setActive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
(0, _setActive2.default)(); // =========================================
// Import Functions  -----------------------

// Active dark mode ------------------------

},{"./interactions/setActive":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setActive = function setActive() {
  var bodyElement = document.querySelector('body');
  var darkButton = document.querySelector('.navigation__mode');

  var enableMode = function enableMode() {
    bodyElement.classList.toggle('dark-theme');
  };

  darkButton.addEventListener('click', enableMode, false);
};

exports.default = setActive;

},{}]},{},[1]);
