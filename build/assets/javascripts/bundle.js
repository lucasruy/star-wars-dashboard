(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _darkmode = require('./components/darkmode');

var _darkmode2 = _interopRequireDefault(_darkmode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
var loadInteractions = function loadInteractions() {
  (0, _darkmode2.default)();
}; // =========================================
// Import Functions  -----------------------

// Active dark mode ----------------------


document.addEventListener('DOMContentLoaded', loadInteractions, false);

},{"./components/darkmode":2}],2:[function(require,module,exports){
'use strict';

var _setActive = require('./interactions/setActive');

var _setActive2 = _interopRequireDefault(_setActive);

var _saveChoice = require('./interactions/saveChoice');

var _saveChoice2 = _interopRequireDefault(_saveChoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
// =========================================
// Import Functions  -----------------------

// Active dark mode ------------------------
(0, _setActive2.default)();

// Save theme selected ---------------------

(0, _saveChoice2.default)();

},{"./interactions/saveChoice":3,"./interactions/setActive":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var saveChoice = function saveChoice() {
  var themeButton = document.querySelector('.navigation__mode');

  var makeStorage = function makeStorage() {
    var bodyElement = document.body;

    if (bodyElement.classList.contains('dark-theme')) {
      localStorage.setItem('themeStatus', 'dark');
    } else {
      localStorage.setItem('themeStatus', 'light');
    }
  };
  var checkStorage = function checkStorage() {
    var themeStatus = localStorage.getItem('themeStatus');

    if (themeStatus === 'dark') {
      document.body.classList.add('dark-theme');
    } else if (themeStatus === 'light') {
      document.body.classList.remove('dark-theme');
    }
  };

  themeButton.addEventListener('click', makeStorage, false);
  document.addEventListener('DOMContentLoaded', checkStorage, false);
};

exports.default = saveChoice;

},{}],4:[function(require,module,exports){
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
