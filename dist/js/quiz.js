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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"creationViewInit\", function() { return creationViewInit; });\n/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/View */ \"./src/js/views/View.js\");\n/* harmony import */ var _views_Creation_questionBuilderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Creation/questionBuilderView */ \"./src/js/views/Creation/questionBuilderView.js\");\n/* harmony import */ var _views_Creation_quizBuilderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Creation/quizBuilderView */ \"./src/js/views/Creation/quizBuilderView.js\");\n/* harmony import */ var _views_Creation_questionListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Creation/questionListView */ \"./src/js/views/Creation/questionListView.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n/* harmony import */ var _models_Quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Quiz */ \"./src/js/models/Quiz.js\");\n/* harmony import */ var _models_Question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Question */ \"./src/js/models/Question.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet creationView = null;\r\nlet questionBuilder = null;\r\nlet quizBuilder = null;\r\nlet questionListView = null;\r\n\r\nconst creationViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_creation.html', html => {\r\n        _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(html,_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].mainPanel,true) \r\n\r\n        creationView = _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(creationView,_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].mainPanel);\r\n\r\n        quizBuilder = new _views_Creation_quizBuilderView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].quizBuiler,handleQuizEvents);\r\n        questionBuilder = new _views_Creation_questionBuilderView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].questionBuilder,handleQuestionBuildEvents);\r\n        questionListView = new _views_Creation_questionListView__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].questionListView,handleListEvents);\r\n        \r\n\r\n        _models_Quiz__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getQuizCategorys().then(categorys => {\r\n            quizBuilder.renderCategorys(categorys);\r\n        });\r\n\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].creation).children());\r\n    \r\n    },'html');\r\n};\r\n\r\nconst handleQuestionBuildEvents = (action,view) => {\r\n\r\n    if(action !== 'addQuestion' ) {\r\n        return;\r\n    };\r\n\r\n    if(!questionBuilder.validateInput()) {\r\n        return;\r\n    };\r\n\r\n\r\n};\r\n\r\nconst handleQuizEvents = (action,view) => {\r\n\r\n\r\n\r\n};\r\n\r\nconst handleListEvents = (action,view) => {\r\n\r\n\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/controller/CreationViewController.js?");

/***/ }),

/***/ "./src/js/controller/LoginViewController.js":
/*!**************************************************!*\
  !*** ./src/js/controller/LoginViewController.js ***!
  \**************************************************/
/*! exports provided: loginViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginViewInit\", function() { return loginViewInit; });\n/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/View */ \"./src/js/views/View.js\");\n/* harmony import */ var _views_Login_loginView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Login/loginView */ \"./src/js/views/Login/loginView.js\");\n/* harmony import */ var _views_Login_registrationView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Login/registrationView */ \"./src/js/views/Login/registrationView.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ \"./src/js/models/User.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet loginView = null;\r\nlet registerView = null;\r\n\r\n//LOGINCONTROLLER\r\nconst loginViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_login.html', (html) => {\r\n        _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(html,_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].mainPanel,true);\r\n        \r\n        loginView = new _views_Login_loginView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].login,handleLoginEvents);\r\n\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].mainPanel).children());\r\n            \r\n    },'html');\r\n};\r\n\r\nconst handleLoginEvents = (action) => {\r\n\r\n    //User tapped register. We fade the view out and initialize the registerView.\r\n    if (action === 'register') {\r\n        $(loginView.jObject).fadeOut('fast', () => {\r\n            registerViewInit();\r\n        });\r\n        return;\r\n    };\r\n\r\n    //Validate the user input for empty values and invalid characters\r\n    if(!loginView.validateUserInput()){\r\n        return;\r\n    }\r\n\r\n    let values = loginView.getData();\r\n\r\n    //We log the user in and handle the servers response accordingly\r\n    _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login(values, true).then(response => {\r\n\r\n        if (response.error) {\r\n            loginView.showErrors(response.error);\r\n            return;\r\n        };\r\n\r\n        if (response.success) {\r\n            Object(_index__WEBPACK_IMPORTED_MODULE_4__[\"showSnackbarMessage\"])('Login successfull');\r\n\r\n            setTimeout(() => {\r\n                window.location = 'index.html';\r\n            }, 1500);\r\n        }\r\n\r\n    }, reason => {\r\n        Object(_index__WEBPACK_IMPORTED_MODULE_4__[\"showSnackbarMessage\"])(`${reason}}`);\r\n    });\r\n}\r\n\r\n//REGISTERCONTROLLER\r\nconst registerViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_registration.html', (html) => {\r\n        _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(html,_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].mainPanel,true) \r\n\r\n        registerView = new _views_Login_registrationView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].register,handleRegistrationEvents);\r\n\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_4__[\"container\"].mainPanel).children());\r\n\r\n    },'html');\r\n};\r\n\r\n\r\nconst handleRegistrationEvents = (action) => {\r\n\r\n    //Validate the user input for empty values and invalid characters\r\n    if (!registerView.validateUserInput()) {\r\n        return;\r\n    };\r\n\r\n    let values = registerView.getData();\r\n\r\n    //We register the user and handle the servers response accordingly. Fades to loginView on success.\r\n    _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(values).then(response => {\r\n\r\n        if (response.error) {\r\n            registerView.showErrors(response.error);\r\n        };\r\n\r\n        if (response.success) {\r\n            Object(_index__WEBPACK_IMPORTED_MODULE_4__[\"showSnackbarMessage\"])('Registraion successfull. You can login now.');\r\n\r\n            setTimeout(() => {\r\n               loginViewInit();\r\n            }, 2000);\r\n\r\n        }\r\n    }, failure => {\r\n        console.log('Failure');\r\n    });\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/controller/LoginViewController.js?");

/***/ }),

/***/ "./src/js/controller/MainViewController.js":
/*!*************************************************!*\
  !*** ./src/js/controller/MainViewController.js ***!
  \*************************************************/
/*! exports provided: mainViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainViewInit\", function() { return mainViewInit; });\n/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/View */ \"./src/js/views/View.js\");\n/* harmony import */ var _views_Main_searchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Main/searchView */ \"./src/js/views/Main/searchView.js\");\n/* harmony import */ var _models_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Query */ \"./src/js/models/Query.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\n\r\n\r\n\r\nlet mainView = null;\r\nlet searchView = null;\r\nlet quizIDs = null;\r\n\r\nconst mainViewInit = () => {\r\n\r\n    $.get('../dist/html/quiz_main.html', html => {\r\n        _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(html,_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel,true) \r\n\r\n        //we register out \"main\" view to access its overlay\r\n        mainView = _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(mainView,_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel);\r\n        \r\n        //we initialize a new SearchView to handle search and quiz events\r\n        searchView = new _views_Main_searchView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#searchView',handleSearchEvents);\r\n\r\n        //mdl upgrade..\r\n        componentHandler.upgradeElements($(_index__WEBPACK_IMPORTED_MODULE_3__[\"container\"].mainPanel).children());\r\n\r\n        //we initalize an empty query to get quiz results\r\n        let query = new _models_Query__WEBPACK_IMPORTED_MODULE_2__[\"default\"](searchView.getInput());\r\n\r\n        //we fill our searchview with the infos we get\r\n        updateUIWithQuery(query);\r\n\r\n    },'html');\r\n};\r\n\r\nconst handleSearchEvents = async (action,view) => {\r\n\r\n    //User tapped filter chip and wants to remove it\r\n    if(action === 'clickedFilter') {\r\n      \r\n        searchView.removeChip(view);\r\n\r\n        return;\r\n    };\r\n\r\n    //User tapped Quiz info and wants to play\r\n    if(action === 'play') {\r\n\r\n        console.log(view,action);\r\n        return;\r\n    }\r\n\r\n    //User tapped the seach button\r\n    const input = searchView.getInput();\r\n\r\n    //we initialize a query with the input\r\n    let query = new _models_Query__WEBPACK_IMPORTED_MODULE_2__[\"default\"](input);\r\n    \r\n    //render the chip and clear the searchview for further input\r\n    searchView.renderChips();\r\n    searchView.clearInput();\r\n    \r\n    //display results..\r\n    updateUIWithQuery(query);\r\n\r\n};\r\n\r\nconst updateUIWithQuery = async query => {\r\n\r\n    try {\r\n\r\n        $(mainView.overlay).fadeIn('fast');\r\n\r\n        await query.getResults();\r\n\r\n        //fake 'response time'\r\n        setTimeout( () => {\r\n            $(mainView.overlay).fadeOut('fast');\r\n\r\n            searchView.renderQueryResults(query.results);\r\n\r\n        },1000);\r\n        \r\n    } catch (error) {\r\n\r\n        console.log(`Something went wrong: ${error}`);\r\n\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/js/controller/MainViewController.js?");

/***/ }),

/***/ "./src/js/controller/YourQuizViewController.js":
/*!*****************************************************!*\
  !*** ./src/js/controller/YourQuizViewController.js ***!
  \*****************************************************/
/*! exports provided: yourQuizViewInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yourQuizViewInit\", function() { return yourQuizViewInit; });\n\r\n\r\nconst yourQuizViewInit = () => {\r\n\r\n   console.log('test');\r\n\r\n};\n\n//# sourceURL=webpack:///./src/js/controller/YourQuizViewController.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: container, request, showSnackbarMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container\", function() { return container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSnackbarMessage\", function() { return showSnackbarMessage; });\n/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/View */ \"./src/js/views/View.js\");\n/* harmony import */ var _controller_MainViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/MainViewController */ \"./src/js/controller/MainViewController.js\");\n/* harmony import */ var _controller_CreationViewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/CreationViewController */ \"./src/js/controller/CreationViewController.js\");\n/* harmony import */ var _controller_YourQuizViewController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/YourQuizViewController */ \"./src/js/controller/YourQuizViewController.js\");\n/* harmony import */ var _controller_LoginViewController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/LoginViewController */ \"./src/js/controller/LoginViewController.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/User */ \"./src/js/models/User.js\");\n//Global Controller\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    init();\r\n};\r\n\r\n//GLOBAL EXPORTS\r\nconst container = {\r\n    mainPanel: '#quiz-panel',\r\n    navigation: '#navigation-container',\r\n    login: '#login-view',\r\n    register: '#registration-view',\r\n    creation: '#creation-view',\r\n    quizBuiler: '#quiz-builder-view',\r\n    questionBuilder: '#question-builder-view',\r\n    questionListView: '#question-list-view'\r\n};\r\n\r\n/**\r\n * .\r\n * @param {String} path - The request path eg. server/quiz.php..\r\n * @param {Object} values - The data that gets send to the server. \r\n * @param {String} type - Request methods. Either 'POST' or 'GET'.\r\n */\r\nconst request =  async (path,values,type) => {\r\n\r\n    if (typeof values === 'undefined') {\r\n        values = \"\";\r\n    } else if (values === 'POST' || values === 'GET') {\r\n        type = values;\r\n    };\r\n\r\n    let response = await $.ajax({\r\n        url: path,\r\n        type: type,\r\n        data: values\r\n    });\r\n    return response;\r\n};\r\n\r\n/**\r\n * Display a snackbarMessage.\r\n * @param {string} message - MessageText\r\n * @param {int} timeout - Timeout in ms.\r\n * @param {string} actionTxt - Text on actionbutton\r\n * @param {function} handler - actionHandler\r\n */\r\nconst showSnackbarMessage = (message, timeout, actionText, handler) => {\r\n    let notification = document.querySelector('.mdl-js-snackbar');\r\n    notification.MaterialSnackbar.showSnackbar({\r\n        message: message,\r\n        timeout: timeout,\r\n        actionText: actionText,\r\n        actionHandler: handler\r\n    });\r\n}\r\n\r\n\r\n//NAVIGATION CONTROLLER\r\nconst nav = [\r\n    ['nav-login',[_controller_LoginViewController__WEBPACK_IMPORTED_MODULE_4__[\"loginViewInit\"],\"Einloggen\"]],\r\n    ['nav-creation',[_controller_CreationViewController__WEBPACK_IMPORTED_MODULE_2__[\"creationViewInit\"],\"Erstelle ein Quiz\"]],\r\n    ['nav-main',[_controller_MainViewController__WEBPACK_IMPORTED_MODULE_1__[\"mainViewInit\"],\"Spiel ein Quiz\"]],\r\n    ['nav-yourquiz',[_controller_YourQuizViewController__WEBPACK_IMPORTED_MODULE_3__[\"yourQuizViewInit\"],\"Deine erstellten Quizze\"]]\r\n];\r\n\r\nconst navMap = new Map(nav);\r\n\r\nlet activePanel = 'nav-main';\r\n\r\nconst controlNavigation = (action,view) => {\r\n    let controller;\r\n\r\n    if (controller = navMap.get(action)) {\r\n        activePanel = action;\r\n        controller[0]();\r\n\r\n        $('#panel-titel').html(controller[1]);\r\n        return;\r\n    };\r\n\r\n    if (action === 'logout') {\r\n        _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].logout().then(response => {\r\n\r\n            showSnackbarMessage('Ausgeloggt', 1000);\r\n\r\n            init();\r\n\r\n        }, failure => {\r\n            showSnackbarMessage('Could not reach server.')\r\n        });\r\n    };\r\n};\r\n\r\n//GLOBAL INIT\r\nconst init = () => {\r\n\r\n    $.ajaxSetup({\r\n        global: false,\r\n        dataType: 'json',\r\n        cache: false\r\n    });\r\n\r\n    _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].checkLoginStatus().then(status => {\r\n\r\n        $.get(`../dist/html/${status ? 'nav_login' : 'nav_logout'}.html`, html => {\r\n            _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(html,container.navigation,true)\r\n\r\n                let navigation = _views_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(null,container.navigation,controlNavigation);\r\n            \r\n        },'html');\r\n\r\n        Object(_controller_MainViewController__WEBPACK_IMPORTED_MODULE_1__[\"mainViewInit\"])();\r\n\r\n    });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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

/***/ "./src/js/models/Question.js":
/*!***********************************!*\
  !*** ./src/js/models/Question.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\nclass Question {\r\n\r\n    constructor(text,answers) {\r\n        this.text = text;\r\n        this.answers = answers;\r\n    };\r\n\r\n    \r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/models/Question.js?");

/***/ }),

/***/ "./src/js/models/Quiz.js":
/*!*******************************!*\
  !*** ./src/js/models/Quiz.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\r\n\r\nconst path = {\r\n    quizCategorys: '../srv/quiz_management/quiz_categorys.php',\r\n    createQuiz: '../srv/quiz_management/quiz_creation.php',\r\n    fetchQuiz: '../srv/quiz_management/quiz_fetchQuiz.php',\r\n    deleteQuiz: '../srv/quiz_management/quiz_deleteQuiz.php',\r\n}\r\n\r\nclass Quiz {\r\n\r\n    constructor() {\r\n        \r\n        this.questionCount = 0;\r\n    };\r\n\r\n    addQuestion(question) {\r\n        this.questions.push(question);\r\n        this.questionCount++;\r\n    }\r\n\r\n    removeQuestion(question) {\r\n\r\n        for (let i = 0; i < this.questions.length; i++) {\r\n            if (question == this.questions[i]) {\r\n                this.questions.splice(i, 1);\r\n                this.questionCount--;\r\n                break;\r\n            };\r\n        };\r\n    };\r\n\r\n    static async getQuizCategorys() {\r\n       return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(path.quizCategorys,'GET');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/models/Quiz.js?");

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

/***/ "./src/js/views/Creation/questionBuilderView.js":
/*!******************************************************!*\
  !*** ./src/js/views/Creation/questionBuilderView.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuestionBuilderView; });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ \"./src/js/views/View.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass QuestionBuilderView {\r\n\r\n    constructor(parent,handler) {\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n\r\n        this.categorys = [];\r\n        this.answers = [];\r\n    };\r\n\r\n    init() {\r\n    \r\n           \r\n    }\r\n\r\n    validateInput() {\r\n        return _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateText(this.text);\r\n    };\r\n\r\n    getInputForQuestion() {\r\n        \r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/views/Creation/questionBuilderView.js?");

/***/ }),

/***/ "./src/js/views/Creation/questionListView.js":
/*!***************************************************!*\
  !*** ./src/js/views/Creation/questionListView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuestionListView; });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ \"./src/js/views/View.js\");\n\r\n\r\nclass QuestionListView {\r\n\r\n    constructor(parent,handler) {\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n    };\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/views/Creation/questionListView.js?");

/***/ }),

/***/ "./src/js/views/Creation/quizBuilderView.js":
/*!**************************************************!*\
  !*** ./src/js/views/Creation/quizBuilderView.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizBuilderView; });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ \"./src/js/views/View.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass QuizBuilderView {\r\n\r\n    constructor(parent,handler) {\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n    };\r\n\r\n    renderCategorys(categorys) {\r\n        this.categorys = categorys;\r\n\r\n        categorys.forEach(category => {\r\n            $(this.category.input).append(`<option>${category.name}</option>`)\r\n        });\r\n\r\n    };\r\n\r\n    validateInput() {\r\n        return _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateText(this.text);\r\n    };\r\n\r\n    _isValidDifficulty() {\r\n        let isValid = false;\r\n\r\n        isValid = this.difficulty.input.value === 'Medium' || 'Hard' || 'Easy' ? true : false;\r\n        this.quiz.difficulty = isValid ? this.difficulty.input.value : null;\r\n\r\n        return isValid;\r\n    }\r\n\r\n    _validateCategory() {\r\n        let isValid = false;\r\n\r\n        for (let i = 0; i < this.categorys.length; i++) {\r\n            if (this.category.input.value === this.categorys[i].name) {\r\n                isValid = true;\r\n                this.quiz.category = this.categorys[i].id;\r\n                break;\r\n            };\r\n        };\r\n        return isValid;\r\n    }\r\n\r\n    _validateQuestion() {\r\n        if (this.quiz.questionCount <= 1) {\r\n            this.tooltip.innerHTML = 'Must be more than 5 questions'\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    updateVisual() {\r\n        if (this._validateQuestion()) {\r\n            this.tooltip.innerHTML = 'Publish now! :)'\r\n        };\r\n\r\n        this.questionCount.innerHTML = this.quiz.getQuestionCount();\r\n    }\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/views/Creation/quizBuilderView.js?");

/***/ }),

/***/ "./src/js/views/Login/loginView.js":
/*!*****************************************!*\
  !*** ./src/js/views/Login/loginView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginView; });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ \"./src/js/views/View.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass LoginView {\r\n\r\n    constructor(parent,handler) {\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n    };\r\n\r\n    getData() {\r\n        return $(this.jObject).children().serialize();\r\n    };\r\n\r\n    validateUserInput() {\r\n        return _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateText(this.text) && _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateSanitization(this.text);\r\n    };\r\n\r\n    showErrors(errors) {\r\n        errors.forEach(error => {\r\n\r\n            for(let i = 0; i<this.text.length;i++) {\r\n                if(error.for !== this.text[i].error.dataset['error']) {\r\n                    continue;\r\n                };\r\n    \r\n                this.text[i].error.innerHTML = error.message;\r\n                this.text[i].error.parentElement.classList.add('is-invalid');\r\n            };\r\n        });\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/Login/loginView.js?");

/***/ }),

/***/ "./src/js/views/Login/registrationView.js":
/*!************************************************!*\
  !*** ./src/js/views/Login/registrationView.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegisterView; });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ \"./src/js/views/View.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\nclass RegisterView {\r\n    \r\n    constructor(parent,handler) {\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n    };\r\n    \r\n    getData() {\r\n        return $(this.jObject).children().serialize();\r\n    };\r\n\r\n    validateUserInput() {\r\n        return _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateText(this.text) && _Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateSanitization(this.text);\r\n    };\r\n\r\n    showErrors(errors) {\r\n        errors.forEach(error => {\r\n\r\n            for(let i = 0; i<this.text.length;i++) {\r\n                if(error.for !== this.text[i].error.dataset['error']) {\r\n                    continue;\r\n                };\r\n    \r\n                this.text[i].error.innerHTML = error.message;\r\n                this.text[i].error.parentElement.classList.add('is-invalid');\r\n            };\r\n        });\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/js/views/Login/registrationView.js?");

/***/ }),

/***/ "./src/js/views/Main/searchView.js":
/*!*****************************************!*\
  !*** ./src/js/views/Main/searchView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchView; });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ \"./src/js/views/View.js\");\n/* harmony import */ var _ViewAnimator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ViewAnimator */ \"./src/js/views/ViewAnimator.js\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Validation */ \"./src/js/views/Validation.js\");\n\r\n\r\n\r\n\r\nconst container = {\r\n    chip: \"#filter-list-container\"\r\n};\r\n\r\nconst tArray = [\r\n    ['Easy', '#quiz-overview-Easy'],\r\n    ['Medium', '#quiz-overview-Medium'],\r\n    ['Hard', '#quiz-overview-Hard']\r\n]\r\n\r\nconst tabMap = new Map(tArray);\r\n\r\nclass SearchView {\r\n\r\n    constructor(parent,handler) {\r\n        this.handler = handler;\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n\r\n        this.chips = [];\r\n        this.showCase = [];\r\n    };\r\n\r\n    getInput() {\r\n        return $(this.jObject[0]).children().serialize();\r\n    };\r\n\r\n    removeChip(chip) {\r\n        for (let i = 0; i < this.chips.length; i++) {\r\n            if (chip == this.chips[i]) {\r\n                this.chips.splice(i,1);\r\n\r\n                _ViewAnimator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fadeOut(chip);\r\n                break;\r\n            };\r\n        };\r\n    };\r\n\r\n    clearInput() {\r\n        this.filter.forEach(filter => {\r\n            filter.input.parentElement.MaterialTextfield.change();\r\n        });\r\n    };\r\n\r\n    renderChips() {\r\n\r\n        this.filter.forEach(filter => {\r\n            let present = false;\r\n\r\n            for (let i = 0; i < this.chips.length; i++) {\r\n                if (filter.name === this.chips[i].setFilter.name) {\r\n                    present = true;\r\n                    this.chips[i].update();\r\n                    break;\r\n                };\r\n            };\r\n\r\n            if (!present && filter.input.value) {\r\n\r\n                let chip = new Chip(filter)\r\n                this.chips.push(chip);\r\n                \r\n                chip.jObject = _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(chipMarkup,container.chip,false);\r\n                chip = _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(chip,this.handler);\r\n                chip.update();\r\n\r\n            };\r\n        });\r\n    };\r\n\r\n    renderQueryResults(results) {\r\n        this.emptyResults();\r\n\r\n        results.forEach(quiz => {\r\n\r\n            let quizInfo = new QuizInfoView(tabMap.get(quiz.difficulty),this.handler,quiz);\r\n            this.showCase.push(quizInfo);\r\n\r\n        });\r\n    }\r\n\r\n    emptyResults() {\r\n        for (var value of tabMap.values()) {\r\n            $(value).empty();\r\n        };\r\n        this.showCase = [];\r\n    };\r\n\r\n}\r\n\r\nclass Chip  {\r\n\r\n    constructor(filter,handler) {\r\n    \r\n        this.setFilter = filter;\r\n    };\r\n\r\n    update() {\r\n        if (this.setFilter.input.value) {\r\n            $(this.filter).html(`<strong>${this.setFilter.name}:</strong> ${this.setFilter.input.value}`);\r\n        };\r\n    };\r\n    \r\n};\r\n\r\nclass QuizInfoView {\r\n\r\n    constructor(parent,handler,quiz) {\r\n        this.quiz = quiz;\r\n        this.jObject = _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(quizInfoMarkup,parent,false);\r\n\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register(this,parent,handler);\r\n        this.init();\r\n    };\r\n\r\n    init() {\r\n\r\n        for (let v in this.quiz) {\r\n            if (this[v]) {\r\n                this[v].innerHTML = this.quiz[v];\r\n            };\r\n        };\r\n\r\n        this.picture.style.backgroundImage = `url(img/category/${this.quiz.category}.jpg)`;\r\n    };\r\n\r\n}\r\n\r\n\r\n\r\nconst chipMarkup = \r\n`<span class=\"mdl-chip mdl-chip--deletable\">\r\n<span data-info=\"filter\" class=\"mdl-chip__text\"></span>\r\n<button type=\"button\" class=\"mdl-chip__action\"><i data-action=\"clickedFilter\" class=\"material-icons\">cancel</i></button>\r\n</span>`;\r\n\r\nconst quizInfoMarkup = \r\n`<div style=\"display: none\" class=\"mdl-cell mdl-cell--4-col mdl-cell--6-col-phone mdl-cell--5-col-tablet\">\r\n<div  class=\"shadow-container mdl-card mdl-shadow--2dp\">\r\n    <div data-info=\"picture\">\r\n    <div class=\"mdl-card__title info-text\">\r\n        <h2 data-info=\"name\" class=\"mdl-card__title-text\" style=\"font-size: 20px; font-weight: bold\"></h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text mdl-grid\">\r\n            <div class=\"mdl-cell mdl-cell--12-col\"><a class=\"info-text\"><strong>Ersteller: </strong> \r\n            </a><a data-info=\"user\" class=\"info-text\"></a></div>\r\n            <div class=\"mdl-cell mdl-cell--12-col\"><a class=\"info-text\"><strong>Kategorie: </strong>\r\n            </a><a data-info=\"category\" class=\"info-text\"></a></div>\r\n            <div class=\"mdl-cell mdl-cell--12-col\"><a class=\"info-text\"><strong>Anzahl Fragen: </strong> </a>\r\n            <a data-info=\"questionCount\" class=\"info-text\"></a></div>\r\n    </div>\r\n   </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        <a data-info=\"description\"></a>\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a data-action=\"play\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n        Jetzt spielen\r\n        </a>\r\n    </div>\r\n</div>\r\n</div>`;\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/Main/searchView.js?");

/***/ }),

/***/ "./src/js/views/Validation.js":
/*!************************************!*\
  !*** ./src/js/views/Validation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validation; });\nclass Validation {\r\n\r\n\r\n    static validateText(textFields) {\r\n        let isValid = true;\r\n\r\n        if(!Array.isArray(textFields)) {\r\n            isValid = validateTextField.bind(this,textFields)();\r\n            return isValid;\r\n        };\r\n\r\n        for (let i = 0; i < textFields.length; i++) {\r\n            isValid = validateTextField.bind(this,textFields[i])();\r\n        };\r\n\r\n        return isValid;\r\n    };\r\n\r\n    static validateSanitization(textFields) {\r\n        let isValid = true;\r\n        let regEx = new RegExp(\"[^A-Za-z0-9]\");\r\n\r\n        for (let i = 0; i < textFields.length; i++) {\r\n            let value;\r\n\r\n            if (!(value = textFields[i].input.value) || textFields[i].input.type === 'password') {\r\n                continue;\r\n            };\r\n\r\n            if(textFields[i].input.type === 'email') {\r\n                continue;\r\n            };\r\n\r\n            let match = regEx.exec(value);\r\n\r\n            if(!match) {\r\n                continue;\r\n            };\r\n\r\n            let isValid = false;\r\n            textFields[i].error.innerHTML = `${match} is an invalid character.`\r\n            textFields[i].error.parentElement.classList.add('is-invalid');\r\n\r\n        };\r\n        return isValid;\r\n    }\r\n\r\n};\r\n\r\nconst validateTextField = (textField) => {\r\n    let isValid = true;\r\n\r\n    if (!textField.input.value) {\r\n        isValid = false;\r\n        textField.error.innerHTML = 'Field can not be empty';\r\n        textField.error.parentElement.classList.add('is-invalid');\r\n    };\r\n\r\n    return isValid;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/Validation.js?");

/***/ }),

/***/ "./src/js/views/View.js":
/*!******************************!*\
  !*** ./src/js/views/View.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\r\n\r\n    constructor() {\r\n        throw new Exception(\"Can't create abstract class.\");\r\n    };\r\n\r\n    static register(view,selector,handler) {\r\n        if(!view) { view = {}; }\r\n\r\n        if(typeof selector === 'function') {\r\n            handler = selector;\r\n        };\r\n\r\n        if(!view.jObject) { view.jObject = $(selector) };\r\n      \r\n        if(handler) { View.observe(view,handler) };\r\n        \r\n        this.getDataSet(view);\r\n\r\n        return view\r\n    }\r\n\r\n    static render(data,parent,force) {\r\n        let html = $.parseHTML(data);\r\n\r\n        if(force) {\r\n            $(parent).html(html);\r\n        } else {\r\n            $(parent).append(html);\r\n        };\r\n\r\n        $(html).fadeIn('slow');\r\n\r\n        componentHandler.upgradeElements($(parent).children())\r\n\r\n        return $(html);\r\n    };\r\n\r\n    static getDataSet(view) {\r\n        const sets = ['[data-info]','[data-input]'];\r\n        let tArray = ['text', 'textarea', 'password', 'username', 'email'];\r\n\r\n        sets.forEach(set => {\r\n            let data = view.jObject[0].querySelectorAll(set);\r\n\r\n            for(let element of data) {\r\n                let object = {};\r\n               \r\n                if(set === '[data-info]') {\r\n                    object = element;\r\n                    this.appendDataToView(view,element.dataset['info'],object);\r\n                };\r\n\r\n                if(set === '[data-input]') {\r\n                    object = {\r\n                        input: element,\r\n                        name: element.dataset['name']\r\n                    };\r\n                    if(tArray.includes(element.type)) {\r\n                        object.error = element.parentElement.querySelector('[data-error]');\r\n                    };\r\n                    this.appendDataToView(view,element.dataset['input'],object);\r\n                };\r\n            };\r\n        });\r\n    }\r\n\r\n    static appendDataToView(view,name,object) {\r\n\r\n        if(!view[name]) {\r\n\r\n            view[name] = object;\r\n\r\n        } else {\r\n\r\n            if (!Array.isArray(view[name])) {\r\n                view[name] = $.makeArray(view[name]);\r\n            }; \r\n\r\n            view[name].push(object);\r\n        };\r\n    };\r\n    \r\n    static observe(view,handler) {\r\n       \r\n        view.jObject.on('click', (e) => {\r\n            if (e.target.dataset['action'] || e.target.parentElement.dataset['action']) {\r\n                handler(e.target.dataset['action'] || e.target.parentElement.dataset['action'], view);\r\n                e.preventDefault();\r\n            };\r\n            return false;\r\n        });\r\n    };\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/views/View.js?");

/***/ }),

/***/ "./src/js/views/ViewAnimator.js":
/*!**************************************!*\
  !*** ./src/js/views/ViewAnimator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ViewAnimator; });\nclass ViewAnimator {\r\n\r\n    static fadeOut(view) {\r\n\r\n        $(view.jObject).fadeOut('slow', () => {\r\n             view.jObject.remove();\r\n        });\r\n\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/js/views/ViewAnimator.js?");

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