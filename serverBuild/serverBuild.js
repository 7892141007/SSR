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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import Axios from "axios";

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_USERS_SUCCESS = exports.FETCH_USERS_SUCCESS = 'fetch_users_success';
var FETCH_USERS_FAILURE = exports.FETCH_USERS_FAILURE = 'fetch_users_failure';

// export const fetchUsers = async dispatch =>  {
//     const res = await Axios.get('http://react-ssr-api.herokuapp.com/users');
//     console.log('$$ res', res);
//     console.log('$$$ dispatching dispatch', dispatch);

//     dispatch({
//         type: FETCH_USERS,
//         payload: res
//     });
// };

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return { type: FETCH_USERS };
};

var fetchUsersSuccess = exports.fetchUsersSuccess = function fetchUsersSuccess(data) {
  return { type: FETCH_USERS_SUCCESS, payload: data };
};

var fetchUsersFailure = exports.fetchUsersFailure = function fetchUsersFailure(data) {
  return { type: FETCH_USERS_FAILURE, payload: data };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _store = __webpack_require__(13);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _store2.default)();

    res.send((0, _renderer2.default)(req, store));
});

app.listen(3003, function () {
    console.log('Listing on Port 3003');
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderer(req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )
  ));

  return '\n     <html>\n       <head></head>\n       <body>\n        <div id=\'root\'>' + content + '</div>\n        <script src="clientBundle.js"></script>\n       </body>\n     </html>\n    ';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouterDom = __webpack_require__(3);

var _UserList = __webpack_require__(12);

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _UserList2.default })
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            'SSR Home Page'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    console.log('Deals are needed!');
                } },
            'Get Deals!'
        )
    );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_React$Component) {
    _inherits(UserList, _React$Component);

    function UserList() {
        _classCallCheck(this, UserList);

        return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
    }

    _createClass(UserList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log('$$ mounted');
            this.props.fetchUser();
        }
    }, {
        key: "renderUsers",
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    "li",
                    null,
                    user.name
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log('$$$ this.props.users', this.props.users);
            return _react2.default.createElement(
                "div",
                null,
                "User list component",
                _react2.default.createElement(
                    "ul",
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UserList;
}(_react2.default.Component);

function mapStateToProps(state) {
    console.log('$$ state', state.users);
    return { users: state.users || [] };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: function fetchUser() {
            return dispatch((0, _actions.fetchUsers)());
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserList);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reduxSaga = __webpack_require__(14);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _sagas = __webpack_require__(17);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var sagaMiddleware = (0, _reduxSaga2.default)();
    var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(sagaMiddleware));
    sagaMiddleware.run(_sagas2.default);

    return store;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _users = __webpack_require__(16);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _users2.default
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    console.log('$$$ reducer', action.type);
    switch (action.type) {
        case _actions.FETCH_USERS_SUCCESS:
            console.log('$$ FETCH_USERS_SUCCESS reducer');
            return action.payload.data;
        case _actions.FETCH_USERS_FAILURE:
            console.log('$$ FETCH_USERS_FAILURE reducer');
            return action.payload;
        default:
            return state;
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = userSaga;

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _effects = __webpack_require__(19);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUsers),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(userSaga);

var getUsersAPI = function getUsersAPI() {
    return _axios2.default.get('http://react-ssr-api.herokuapp.com/users');
};

function fetchUsers() {
    var res;
    return regeneratorRuntime.wrap(function fetchUsers$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.call)(getUsersAPI);

                case 2:
                    res = _context.sent;

                    console.log('$$$ res', res);

                    if (!(res.status === 200)) {
                        _context.next = 10;
                        break;
                    }

                    console.log('$$$ 200');
                    _context.next = 8;
                    return (0, _effects.put)((0, _index.fetchUsersSuccess)(res));

                case 8:
                    _context.next = 12;
                    break;

                case 10:
                    _context.next = 12;
                    return (0, _effects.put)(fetchUsersFailure(res));

                case 12:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function userSaga() {
    return regeneratorRuntime.wrap(function userSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)(_index.FETCH_USERS, fetchUsers);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })
/******/ ]);