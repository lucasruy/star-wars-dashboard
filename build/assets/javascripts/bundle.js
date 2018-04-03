(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _darkmode = require('./components/darkmode');

var _darkmode2 = _interopRequireDefault(_darkmode);

var _search = require('./components/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
// =========================================
// Import Functions  -----------------------

// Active dark mode ----------------------
var loadInteractions = function loadInteractions() {
  (0, _darkmode2.default)();
  (0, _search2.default)();
};

// Search StarWars Pearsons --------------


document.addEventListener('DOMContentLoaded', loadInteractions, false);

},{"./components/darkmode":2,"./components/search":5}],2:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var _searchPearson = require('./interactions/searchPearson');

var _searchPearson2 = _interopRequireDefault(_searchPearson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =========================================
// Init Events  ----------------------------
(0, _searchPearson2.default)(); // =========================================
// Import Functions  -----------------------

// Search StarWars Pearsons ----------------

},{"./interactions/searchPearson":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getURL = require('./getURL');

var _getURL2 = _interopRequireDefault(_getURL);

var _makeCard = require('./makeCard');

var _makeCard2 = _interopRequireDefault(_makeCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enableSearch = function enableSearch(id, itemWrapper) {
  var dataValues = (0, _getURL2.default)('https://swapi.co/api/people/' + id + '/?format=json');
  var pearsonInfos = itemWrapper.querySelector('.banner__result__item .result-item');

  dataValues.then(function (response) {
    pearsonInfos.innerHTML = (0, _makeCard2.default)(response);
    itemWrapper.classList.remove('is-searching');
  });
};

exports.default = enableSearch;

},{"./getURL":7,"./makeCard":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getURL = function getURL(urlGet) {
  var Exception = function Exception(message) {
    undefined.message = message;
    undefined.name = 'UserException';
  };

  var responseValues = fetch(urlGet, { method: 'GET' }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  }).catch(function (error) {
    throw new Exception(error);
  });

  return responseValues;
};

exports.default = getURL;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var makeCard = function makeCard(pearsonInfos) {
  var name = pearsonInfos.name,
      height = pearsonInfos.height,
      mass = pearsonInfos.mass,
      hair_color = pearsonInfos.hair_color,
      birth_year = pearsonInfos.birth_year,
      gender = pearsonInfos.gender;


  return "\n    <h4 class=\"result-item__name\">" + name + "</h4>\n    <div class=\"result-item__infos\">\n      <p class=\"result-item__infos__item\">Height:<span>" + height + "</span></p>\n      <p class=\"result-item__infos__item\">Mass:<span>" + mass + "</span></p>\n      <p class=\"result-item__infos__item\">Hair color:<span>" + hair_color + "</span></p>\n      <p class=\"result-item__infos__item\">Birth Year:<span>" + birth_year + "</span></p>\n      <p class=\"result-item__infos__item\">Gender:<span>" + gender + "</span></p>\n    </div>\n  ";
};

exports.default = makeCard;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enableSearch = require('./enableSearch');

var _enableSearch2 = _interopRequireDefault(_enableSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchPearson = function searchPearson() {
  var searchField = document.querySelector('.field');
  var pearsonCard = document.querySelector('.banner__result__item');
  var title = document.querySelector('.banner__result__title');
  searchField.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      title.textContent = 'Search result: ';
      pearsonCard.classList.add('is-searching');
      (0, _enableSearch2.default)(searchField.value, pearsonCard);
    }
  }, false);

  (0, _enableSearch2.default)(4, pearsonCard);
};

exports.default = searchPearson;

},{"./enableSearch":6}]},{},[1]);
