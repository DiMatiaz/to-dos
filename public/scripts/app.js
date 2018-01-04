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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonsNames = ["All", "Active", "Completed"];

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: "onClick",
        value: function onClick(e) {
            e.preventDefault();
            this.props.handleButtonOnClick(buttonsNames.indexOf(this.props.name));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: "#", onClick: this.onClick, className: this.props.string },
                this.props.name
            );
        }
    }]);

    return Button;
}(React.Component);

var Todo = function (_React$Component2) {
    _inherits(Todo, _React$Component2);

    function Todo(props) {
        _classCallCheck(this, Todo);

        var _this2 = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

        _this2.state = {
            show: false
        };
        _this2.onMouseEnter = _this2.onMouseEnter.bind(_this2);
        _this2.onMouseExit = _this2.onMouseExit.bind(_this2);
        _this2.removeOnClick = _this2.removeOnClick.bind(_this2);
        _this2.selectOnClick = _this2.selectOnClick.bind(_this2);
        return _this2;
    }

    _createClass(Todo, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
            this.setState({ show: true });
        }
    }, {
        key: "onMouseExit",
        value: function onMouseExit() {
            this.setState({ show: false });
        }
    }, {
        key: "removeOnClick",
        value: function removeOnClick(e) {
            e.preventDefault();
            this.props.handleRemoveOnClick(this.props.index);
        }
    }, {
        key: "selectOnClick",
        value: function selectOnClick(e) {
            e.preventDefault();
            this.props.handleSelectOnClick(this.props.index);
        }
    }, {
        key: "render",
        value: function render() {
            var List = [React.createElement(
                "a",
                { key: "check", href: "#", className: "to-check", onClick: this.selectOnClick },
                this.props.selected && React.createElement("i", { className: "fa fa-check", "aria-hidden": "true" })
            ), React.createElement(
                "p",
                { key: "name" },
                this.props.name
            ), React.createElement(
                "a",
                { key: "x", href: "#", className: "x", onClick: this.removeOnClick },
                this.state.show && React.createElement("i", { className: "fa fa-times", "aria-hidden": "true" })
            )];
            return this.props.selected && React.createElement(
                "div",
                { className: "todo row td-selected", onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseExit },
                List
            ) || React.createElement(
                "div",
                { className: "todo row", onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseExit },
                List
            );
        }
    }]);

    return Todo;
}(React.Component);

var Todos = function (_React$Component3) {
    _inherits(Todos, _React$Component3);

    function Todos(props) {
        _classCallCheck(this, Todos);

        var _this3 = _possibleConstructorReturn(this, (Todos.__proto__ || Object.getPrototypeOf(Todos)).call(this, props));

        _this3.state = {
            todos: [],
            selected: [],
            btnBool: [true, false, false],
            sizeShownTodos: 0
        };
        _this3.onSubmit = _this3.onSubmit.bind(_this3);
        _this3.handleRemoveOnClick = _this3.handleRemoveOnClick.bind(_this3);
        _this3.handleSelectOnClick = _this3.handleSelectOnClick.bind(_this3);
        _this3.getTodosList = _this3.getTodosList.bind(_this3);
        _this3.handleButtonOnClick = _this3.handleButtonOnClick.bind(_this3);
        return _this3;
    }

    _createClass(Todos, [{
        key: "onSubmit",
        value: function onSubmit(e) {
            var _this4 = this;

            e.preventDefault();
            var todo = e.target.elements.todo.value;

            this.setState(function (prevState, props) {
                if (todo) {
                    var todos = prevState.todos;
                    todos.push(todo);
                    return todos;
                }
                alert("Insert a to-do");
            });
            this.setState(function (prevState, props) {
                var selected = _this4.state.selected;
                selected.push(false);
                return selected;
            });
            this.setState(function (prevState, props) {
                return prevState.sizeShownTodos + 1;
            });
        }
    }, {
        key: "handleRemoveOnClick",
        value: function handleRemoveOnClick(index) {
            this.setState(function (prevState, props) {
                var todos = prevState.todos;
                todos.splice(index, 1);
                return todos;
            });
            this.setState(function (prevState, props) {
                var selected = prevState.selected;
                selected.splice(index, 1);
                return selected;
            });
            this.setState(function (prevState, props) {
                return prevState.sizeShownTodos - 1;
            });
        }
    }, {
        key: "handleSelectOnClick",
        value: function handleSelectOnClick(index) {
            var _this5 = this;

            this.setState(function (prevState, props) {
                var selected = _this5.state.selected;
                selected[index] = !selected[index];
                return selected;
            });
        }
    }, {
        key: "handleButtonOnClick",
        value: function handleButtonOnClick(index) {
            var list = [false, false, false];
            list[index] = true;
            this.setState({
                btnBool: list
            });
        }
    }, {
        key: "getTodosList",
        value: function getTodosList() {
            var _this6 = this;

            var shownTodos = this.state.todos.map(function (todo, index) {
                return React.createElement(Todo, { name: todo, selected: _this6.state.selected[index], key: index, index: index, handleRemoveOnClick: _this6.handleRemoveOnClick, handleSelectOnClick: _this6.handleSelectOnClick });
            });;
            if (this.state.btnBool[0]) {
                return shownTodos;
            } else if (this.state.btnBool[1]) {
                return shownTodos.filter(function (todo, index) {
                    return !_this6.state.selected[index];
                });
            }
            return shownTodos.filter(function (todo, index) {
                return _this6.state.selected[index];
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            var Todos = this.getTodosList();
            return React.createElement(
                "div",
                { className: "todos col" },
                React.createElement(
                    "form",
                    { onSubmit: this.onSubmit },
                    React.createElement("input", { type: "text", name: "todo", placeholder: "What needs to be done?" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Add to-do"
                    )
                ),
                Todos,
                this.state.todos.length > 0 && React.createElement(
                    "div",
                    { className: "row buttons" },
                    React.createElement(
                        "p",
                        null,
                        Todos.length,
                        " items left"
                    ),
                    this.state.todos.length > 0 && React.createElement(
                        "div",
                        { className: "row" },
                        this.state.btnBool.map(function (btn, index) {
                            return React.createElement(Button, { handleButtonOnClick: _this7.handleButtonOnClick, key: index, name: buttonsNames[index], string: btn ? "btn btn-selected" : "btn" });
                        })
                    )
                )
            );
        }
    }]);

    return Todos;
}(React.Component);

var Main = function (_React$Component4) {
    _inherits(Main, _React$Component4);

    function Main(props) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Todos"
                ),
                React.createElement(Todos, null)
            );
        }
    }]);

    return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById("app"));

/***/ })
/******/ ]);