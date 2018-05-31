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

/***/ "./src/js/controller/CreationViewController.js":
/*!*****************************************************!*\
  !*** ./src/js/controller/CreationViewController.js ***!
  \*****************************************************/
/*! exports provided: creationViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"creationViewInit\", function() { return creationViewInit; });\n/* harmony import */ var _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/DynamicView */ \"./src/js/views/DynamicView.js\");\n\r\n\r\nconst creationViewInit = () => {\r\n\r\n  \r\n    \r\n\r\n\r\n    \r\n};\n\n//# sourceURL=webpack:///./src/js/controller/CreationViewController.js?");

/***/ }),

/***/ "./src/js/controller/LoginViewController.js":
/*!**************************************************!*\
  !*** ./src/js/controller/LoginViewController.js ***!
  \**************************************************/
/*! exports provided: loginViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginViewInit\", function() { return loginViewInit; });\n/* harmony import */ var _views_Login_loginView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Login/loginView */ \"./src/js/views/Login/loginView.js\");\n/* harmony import */ var _views_Login_registrationView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Login/registrationView */ \"./src/js/views/Login/registrationView.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"./src/js/models/User.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\n\r\n\r\n\r\nlet loginView = null;\r\nlet registerView = null;\r\n\r\n//LOGINCONTROLLER\r\nconst loginViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_login.html', (html) => {\r\n\r\n        loginView = new _views_Login_loginView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel,handleLoginEvents);\r\n        loginView.renderView(html,false);\r\n\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel).children());\r\n\r\n    },'html');\r\n};\r\n\r\nconst handleLoginEvents = (action) => {\r\n\r\n    if (action.name === 'register') {\r\n        $(loginView.jObject).fadeOut('fast', () => {\r\n            registerViewInit();\r\n        });\r\n        return;\r\n    };\r\n\r\n    if(!loginView.validateUserInput()){\r\n        return;\r\n    }\r\n\r\n    let values = loginView.getData();\r\n\r\n    _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login(values, true).then(response => {\r\n\r\n        if (response.error) {\r\n            loginView.showErrors(response.error);\r\n            return;\r\n        };\r\n\r\n        if (response.success) {\r\n            Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"showSnackbarMessage\"])('Login successfull');\r\n\r\n            setTimeout(() => {\r\n                window.location = 'index.html';\r\n            }, 1500);\r\n        }\r\n\r\n    }, reason => {\r\n        Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"showSnackbarMessage\"])(`${reason}}`);\r\n    });\r\n}\r\n\r\n//REGISTERCONTROLLER\r\nconst registerViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_registration.html', (html) => {\r\n\r\n        registerView = new _views_Login_registrationView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel,handleRegistrationEvents);\r\n        registerView.renderView(html,false);\r\n\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel).children());\r\n\r\n    },'html');\r\n};\r\n\r\n\r\nconst handleRegistrationEvents = (action) => {\r\n\r\n    if (!registerView.validateUserInput()) {\r\n        return;\r\n    };\r\n\r\n    let values = registerView.getData();\r\n\r\n    _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(values).then(response => {\r\n\r\n        if (response.error) {\r\n            registerView.showErrors(response.error);\r\n        };\r\n\r\n        if (response.success) {\r\n            Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"showSnackbarMessage\"])('Registraion successfull. You can login now.');\r\n\r\n            setTimeout(() => {\r\n               loginViewInit();\r\n            }, 2000);\r\n\r\n        }\r\n    }, failure => {\r\n        console.log('Failure');\r\n    });\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/controller/LoginViewController.js?");

/***/ }),

/***/ "./src/js/controller/MainViewController.js":
/*!*************************************************!*\
  !*** ./src/js/controller/MainViewController.js ***!
  \*************************************************/
/*! exports provided: mainViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainViewInit\", function() { return mainViewInit; });\n/* harmony import */ var _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/DynamicView */ \"./src/js/views/DynamicView.js\");\n/* harmony import */ var _views_Main_searchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Main/searchView */ \"./src/js/views/Main/searchView.js\");\n/* harmony import */ var _models_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Query */ \"./src/js/models/Query.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\n\r\n\r\n\r\nlet view = null;\r\nlet searchView = null;\r\n\r\nconst mainViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_main.html', (html) => {\r\n\r\n        view = new _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel);\r\n        view.renderView(html,false);\r\n\r\n        searchView = new _views_Main_searchView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('searchView',handleSearchEvents);\r\n        _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerView(searchView,$(_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].searchView));\r\n\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel).children());\r\n\r\n    },'html');\r\n};\r\n\r\nconst handleSearchEvents = async (action,searchView) => {\r\n\r\n    const input = searchView.getInput();\r\n\r\n    if(!input) { return };\r\n\r\n    let query = new _models_Query__WEBPACK_IMPORTED_MODULE_2__[\"default\"](input);\r\n    \r\n    searchView.renderChips();\r\n\r\n    searchView.clearInput();\r\n    \r\n    try {\r\n\r\n        $(view.overlay).fadeIn('fast');\r\n\r\n        await query.getResults();\r\n\r\n        setTimeout( () => {\r\n            $(view.overlay).fadeOut('fast');\r\n            searchView.renderResults(query.result);\r\n        },1000);\r\n        \r\n    } catch (error) {\r\n\r\n        console.log(`Something went wrong: ${error}`);\r\n\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/js/controller/MainViewController.js?");

/***/ }),

/***/ "./src/js/controller/YourQuizViewController.js":
/*!*****************************************************!*\
  !*** ./src/js/controller/YourQuizViewController.js ***!
  \*****************************************************/
/*! exports provided: yourQuizViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yourQuizViewInit\", function() { return yourQuizViewInit; });\n/* harmony import */ var _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/DynamicView */ \"./src/js/views/DynamicView.js\");\n\r\n\r\nconst yourQuizViewInit = () => {\r\n\r\n   console.log('test');\r\n\r\n};\n\n//# sourceURL=webpack:///./src/js/controller/YourQuizViewController.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: state, container, request, showSnackbarMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container\", function() { return container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSnackbarMessage\", function() { return showSnackbarMessage; });\n/* harmony import */ var _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/DynamicView */ \"./src/js/views/DynamicView.js\");\n/* harmony import */ var _controller_MainViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/MainViewController */ \"./src/js/controller/MainViewController.js\");\n/* harmony import */ var _controller_CreationViewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/CreationViewController */ \"./src/js/controller/CreationViewController.js\");\n/* harmony import */ var _controller_YourQuizViewController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/YourQuizViewController */ \"./src/js/controller/YourQuizViewController.js\");\n/* harmony import */ var _controller_LoginViewController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/LoginViewController */ \"./src/js/controller/LoginViewController.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/User */ \"./src/js/models/User.js\");\n//Global Controller\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    init();\r\n};\r\n\r\n//Global state of the app..User...Quiz etc..\r\nconst state = {}\r\n\r\n\r\n//GLOBAL EXPORTS\r\nconst container = {\r\n    mainPanel: 'quiz-panel',\r\n    searchView: '#searchView',\r\n};\r\n\r\n/**\r\n * Constructor constructs a new quiz model object.\r\n * @param {String} path - The request path eg. server/quiz.php..\r\n * @param {Object} values - The data that gets send to the server. \r\n * @param {String} type - Request methods. Either 'POST' or 'GET'.\r\n */\r\nconst request =  async (path,values,type) => {\r\n\r\n    if (typeof values === 'undefined') {\r\n        values = \"\";\r\n    } else if (values === 'POST' || values === 'GET') {\r\n        type = values;\r\n    };\r\n\r\n    let response = await $.ajax({\r\n        url: path,\r\n        type: type,\r\n        data: values\r\n    });\r\n    return response;\r\n};\r\n\r\n/**\r\n * Display a snackbarMessage.\r\n * @param {string} message - MessageText\r\n * @param {int} timeout - Timeout in ms.\r\n * @param {string} actionTxt - Text on actionbutton\r\n * @param {function} handler - actionHandler\r\n */\r\nconst showSnackbarMessage = (message, timeout, actionText, handler) => {\r\n    let notification = document.querySelector('.mdl-js-snackbar');\r\n    notification.MaterialSnackbar.showSnackbar({\r\n        message: message,\r\n        timeout: timeout,\r\n        actionText: actionText,\r\n        actionHandler: handler\r\n    });\r\n}\r\n\r\n\r\n//NAVIGATION CONTROLLER\r\nconst nav = [\r\n    ['nav-login',[_controller_LoginViewController__WEBPACK_IMPORTED_MODULE_4__[\"loginViewInit\"],\"Einloggen\"]],\r\n    ['nav-creation',[_controller_CreationViewController__WEBPACK_IMPORTED_MODULE_2__[\"creationViewInit\"],\"Erstelle ein Quiz\"]],\r\n    ['nav-main',[_controller_MainViewController__WEBPACK_IMPORTED_MODULE_1__[\"mainViewInit\"],\"Spiel ein Quiz\"]],\r\n    ['nav-yourquiz',[_controller_YourQuizViewController__WEBPACK_IMPORTED_MODULE_3__[\"yourQuizViewInit\"],\"Deine erstellten Quizze\"]]\r\n];\r\n\r\nconst navMap = new Map(nav);\r\n\r\nlet activePanel = 'nav-main';\r\n\r\nconst controlNavigation = (action,view) => {\r\n    let controller;\r\n\r\n    if (controller = navMap.get(action.name)) {\r\n        activePanel = action.name;\r\n        controller[0]();\r\n\r\n        $('#panel-titel').html(controller[1]);\r\n        return;\r\n    };\r\n\r\n    if (action.name === 'logout') {\r\n        _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].logout().then(response => {\r\n\r\n            showSnackbarMessage('Ausgeloggt', 1000);\r\n\r\n            init();\r\n\r\n        }, failure => {\r\n            showSnackbarMessage('Could not reach server.')\r\n        });\r\n    };\r\n};\r\n\r\n//GLOBAL INIT\r\nconst init = () => {\r\n\r\n    $.ajaxSetup({\r\n        global: false,\r\n        dataType: 'json',\r\n        cache: false\r\n    });\r\n\r\n    _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].checkLoginStatus().then(status => {\r\n\r\n        $.get(`../dist/html/${status ? 'nav_login' : 'nav_logout'}.html`, Data => {\r\n\r\n            let navigation = new _views_DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('navigation-container',controlNavigation);\r\n            navigation.renderView(Data);\r\n           \r\n        },'html');\r\n\r\n        Object(_controller_MainViewController__WEBPACK_IMPORTED_MODULE_1__[\"mainViewInit\"])();\r\n\r\n    });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Query.js":
/*!********************************!*\
  !*** ./src/js/models/Query.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Query; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\nconst path = {\r\n    fetchQuiz: '../srv/quiz_management/quiz_fetchQuiz.php',\r\n};\r\n\r\nclass Query {\r\n\r\n    constructor(query) {\r\n        this.query = query;\r\n    };\r\n\r\n    async getResults() {\r\n\r\n        try {\r\n            let results = await Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(path.fetchQuiz,this.query,'GET');\r\n            this.results = results;\r\n\r\n        } catch(error) {\r\n            Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"showSnackbarMessage\"])(`Could not reach server: ${error}`)\r\n        };\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/models/Query.js?");

/***/ }),

/***/ "./src/js/models/User.js":
/*!*******************************!*\
  !*** ./src/js/models/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\nconst path = {\r\n    registration: '../srv/user_management/user_registration.php',\r\n    login: '../srv/user_management/user_login.php',\r\n    logout: '../srv/user_management/user_logout.php',\r\n};\r\n\r\nclass User {\r\n\r\n    static async checkLoginStatus() {\r\n        return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(path.login,{check: true},'POST');\r\n    };\r\n\r\n    static async logout() {\r\n        return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(path.logout,'POST');\r\n    };\r\n    \r\n    static async login(values) {\r\n        return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(path.login,values,'POST');\r\n    };\r\n\r\n    static async register(values) {\r\n        return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(path.registration,values,'POST');\r\n    };\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/models/User.js?");

/***/ }),

/***/ "./src/js/views/DynamicView.js":
/*!*************************************!*\
  !*** ./src/js/views/DynamicView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DynamicView; });\nclass DynamicView {\r\n\r\n    constructor(parent,handler) {\r\n        this.jObject = null;\r\n        this.handler = handler;\r\n        this.parent = parent;\r\n    };\r\n\r\n    /**\r\n     * Takes an html string and appends and registers the view on the dom.\r\n     * @param {String} data - A html string.\r\n     */\r\n    renderView(data,append) {\r\n        let html;\r\n\r\n        if(typeof data === 'boolean') {\r\n            html = $.parseHTML(this.markup)\r\n            append = data;\r\n        } else {\r\n            html = data ? $.parseHTML(data) : $.parseHTML(this.markup);\r\n        };\r\n\r\n        if(append) {  \r\n            $(`#${this.parent}`).append(html);\r\n        } else {\r\n            $(`#${this.parent}`).html(html);\r\n        };\r\n        \r\n        this.jObject = $(html);\r\n\r\n        componentHandler.upgradeElements($(this.jObject).children());\r\n\r\n        this.fetchDataSet();\r\n\r\n        $(this.jObject).fadeIn('slow');\r\n\r\n    };\r\n\r\n    removeSubView(view,animation) {\r\n       \r\n        if(!animation) {\r\n            animation = 'minimize';\r\n        };\r\n    \r\n       view.jObject.fadeOut('slow', ()  => {\r\n           view.jObject.remove();\r\n       });          \r\n    }\r\n\r\n    static registerView(view,jQueryObject) {\r\n       \r\n        view.jObject = jQueryObject;\r\n        view.fetchDataSet();\r\n        \r\n    };\r\n\r\n    /**\r\n     * \r\n     * @param {} \r\n     */\r\n    fetchDataSet() {\r\n        let tArray = ['text', 'textarea', 'password', 'username', 'email'];\r\n\r\n        sets.forEach(set => {\r\n            \r\n            let data = this.jObject[0].querySelectorAll(set);\r\n            let key = null;\r\n    \r\n            for(let element of data) {\r\n                let object = {};\r\n\r\n                if(element.dataset['info']) {\r\n                    object = element;\r\n                    key = 'info';\r\n                };\r\n\r\n                if(element.dataset['action']) {\r\n                    key = 'action';\r\n                    object.obj = element;\r\n                    object.name = element.dataset['action'];\r\n                    if(this.handler) { this.observe(object) }\r\n                };\r\n\r\n                if(element.dataset['input']) {\r\n                    key = 'input';\r\n                    object.obj = element;\r\n                    object.name = element.dataset['name'];\r\n                    if(tArray.includes(element.type)) {\r\n                        object.error = element.parentElement.querySelector('[data-error]');\r\n                    };\r\n                }\r\n\r\n                if (!this[element.dataset[key]]) {\r\n                    this[element.dataset[key]] = object;\r\n\r\n                } else {\r\n    \r\n                    if (Array.isArray(this[element.dataset[key]])) {\r\n                        this[element.dataset[key]].push(object);\r\n    \r\n                    } else {\r\n                        this[element.dataset[key]] = $.makeArray(this[element.dataset[key]]);\r\n                        this[element.dataset[key]].push(object);\r\n                    };\r\n                };\r\n            }\r\n        });\r\n    };\r\n\r\n    observe(dObject, internalHandler, type) {\r\n        let object = dObject.obj ? dObject.obj : dObject;\r\n\r\n        $(object).on(`${type = type ? type : 'click'}`, (event) => {\r\n            if (!event.target.dataset || !event.target.parentElement.dataset) {\r\n                event.preventDefault(); return false;\r\n            };\r\n\r\n            if (internalHandler) {\r\n                internalHandler(dObject, this);\r\n                event.stopPropagation();\r\n\r\n            } else {\r\n\r\n                this.handler(dObject, this);\r\n            };\r\n            \r\n        });\r\n    };\r\n\r\n}\r\n\r\nconst sets = ['[data-info]','[data-action]','[data-input]'];\n\n//# sourceURL=webpack:///./src/js/views/DynamicView.js?");

/***/ }),

/***/ "./src/js/views/Login/loginView.js":
/*!*****************************************!*\
  !*** ./src/js/views/Login/loginView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginView; });\n/* harmony import */ var _DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DynamicView */ \"./src/js/views/DynamicView.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass LoginView extends _DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    getData() {\r\n        return $(this.jObject).children().serialize();\r\n    };\r\n\r\n    validateUserInput() {\r\n        return _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateText(this.text) && _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateSanitization(this.text);\r\n    };\r\n\r\n    showErrors(errors) {\r\n        errors.forEach(error => {\r\n\r\n            for(let i = 0; i<this.text.length;i++) {\r\n                if(error.for !== this.text[i].error.dataset['error']) {\r\n                    continue;\r\n                };\r\n    \r\n                this.text[i].error.innerHTML = error.message;\r\n                this.text[i].error.parentElement.classList.add('is-invalid');\r\n            };\r\n        });\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/Login/loginView.js?");

/***/ }),

/***/ "./src/js/views/Login/registrationView.js":
/*!************************************************!*\
  !*** ./src/js/views/Login/registrationView.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegisterView; });\n/* harmony import */ var _DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DynamicView */ \"./src/js/views/DynamicView.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass RegisterView extends _DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    getData() {\r\n        return $(this.jObject).children().serialize();\r\n    };\r\n\r\n    validateUserInput() {\r\n        return _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateText(this.text) && _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateSanitization(this.text);\r\n    };\r\n\r\n    showErrors(errors) {\r\n        errors.forEach(error => {\r\n\r\n            for(let i = 0; i<this.text.length;i++) {\r\n                if(error.for !== this.text[i].error.dataset['error']) {\r\n                    continue;\r\n                };\r\n    \r\n                this.text[i].error.innerHTML = error.message;\r\n                this.text[i].error.parentElement.classList.add('is-invalid');\r\n            };\r\n        });\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/js/views/Login/registrationView.js?");

/***/ }),

/***/ "./src/js/views/Main/searchView.js":
/*!*****************************************!*\
  !*** ./src/js/views/Main/searchView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchView; });\n/* harmony import */ var _DynamicView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DynamicView */ \"./src/js/views/DynamicView.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass SearchView extends _DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(parent,handler) {\r\n        super(parent, handler);\r\n\r\n        this.chips = [];\r\n        this.quizInfo = []\r\n\r\n    };\r\n\r\n    getInput() {\r\n\r\n        let validFilter = false;\r\n\r\n            for (let i = 0; i < this.filter.length; i++)  {\r\n                if (this.filter[i].obj.value) {\r\n                    validFilter = true;\r\n                    this.isSet = false;\r\n                    break;\r\n                };\r\n            };\r\n            if (validFilter) {\r\n                return $(this.jObject[0]).children().serialize();\r\n            };\r\n            if (!this.isSet) {\r\n                this.isSet = true;\r\n                return $(this.jObject[0]).children().serialize();\r\n            };\r\n\r\n    };\r\n\r\n    clearInput() {\r\n        this.filter.forEach(filter => {\r\n            filter.obj.parentElement.MaterialTextfield.change();\r\n        });\r\n    };\r\n\r\n    async renderChips() {\r\n\r\n        this.filter.forEach(filter => {\r\n            let present = false;\r\n\r\n            for (let i = 0; i < this.chips.length; i++) {\r\n                if (filter.name === this.chips[i].setFilter.name) {\r\n                    present = true;\r\n                    this.chips[i].update();\r\n                    break;\r\n                };\r\n            };\r\n\r\n            if (!present && filter.obj.value) {\r\n\r\n                let chip = new Chip(filter,this.handler)\r\n                this.chips.push(chip);\r\n                \r\n                chip.renderView(true);\r\n                chip.update();\r\n\r\n            };\r\n        });\r\n    }\r\n}\r\n\r\nclass Chip extends _DynamicView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(filter,handler) {\r\n        super('filter-list-container',handler);\r\n\r\n        this.setFilter = filter;\r\n        this.markup = `<span class=\"mdl-chip mdl-chip--deletable\">\r\n        <span data-info=\"filter\" class=\"mdl-chip__text\"></span>\r\n        <button type=\"button\" class=\"mdl-chip__action\"><i data-action=\"clickedFilter\" class=\"material-icons\">cancel</i></button>\r\n        </span>`;\r\n    };\r\n\r\n    update() {\r\n        if (this.setFilter.obj.value) {\r\n            $(this.filter).html(`<strong>${this.setFilter.name}:</strong> ${this.setFilter.obj.value}`);\r\n        };\r\n    };\r\n    \r\n};\r\n    \r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/Main/searchView.js?");

/***/ }),

/***/ "./src/js/views/Validation.js":
/*!************************************!*\
  !*** ./src/js/views/Validation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validation; });\nclass Validation {\r\n\r\n\r\n    static validateText(textFields) {\r\n        let isValid = true;\r\n\r\n        if(!Array.isArray(textFields)) {\r\n            isValid = validateTextField.bind(this,textFields)();\r\n            return isValid;\r\n        };\r\n\r\n        for (let i = 0; i < textFields.length; i++) {\r\n            isValid = validateTextField.bind(this,textFields[i])();\r\n        };\r\n\r\n        return isValid;\r\n    };\r\n\r\n    static validateSanitization(textFields) {\r\n        let isValid = true;\r\n        let regEx = new RegExp(\"[^A-Za-z0-9]\");\r\n\r\n        for (let i = 0; i < textFields.length; i++) {\r\n            let value;\r\n\r\n            if (!(value = textFields[i].obj.value) || textFields[i].obj.type === 'password') {\r\n                continue;\r\n            };\r\n\r\n            if(textFields[i].obj.type === 'email') {\r\n                continue;\r\n            };\r\n\r\n            let match = regEx.exec(value);\r\n\r\n            if(!match) {\r\n                continue;\r\n            };\r\n\r\n            let isValid = false;\r\n            textFields[i].error.innerHTML = `${match} is an invalid character.`\r\n            textFields[i].error.parentElement.classList.add('is-invalid');\r\n\r\n        };\r\n        return isValid;\r\n    }\r\n\r\n};\r\n\r\nconst validateTextField = (textField) => {\r\n    let isValid = true;\r\n\r\n    if (!textField.obj.value) {\r\n        isValid = false;\r\n        textField.error.innerHTML = 'Field can not be empty';\r\n        textField.error.parentElement.classList.add('is-invalid');\r\n    };\r\n\r\n    return isValid;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/Validation.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });