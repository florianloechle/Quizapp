//Global Controller
import View from './views/View';
import { mainViewInit } from './controller/MainViewController';
import { creationViewInit } from './controller/CreationViewController';
import { yourQuizViewInit } from './controller/YourQuizViewController';
import { loginViewInit } from './controller/LoginViewController';
import User from './models/User';

window.onload = () => {
    init();
};

//GLOBAL EXPORTS
export const container = {
    mainPanel: '#quiz-panel',
    navigation: '#navigation-container',
    login: '#login-view',
    register: '#registration-view',
    creation: '#creation-view',
    quizBuiler: '#quiz-builder-view',
    questionBuilder: '#question-builder-view',
    questionListView: '#question-list-view'
};

/**
 * .
 * @param {String} path - The request path eg. server/quiz.php..
 * @param {Object} values - The data that gets send to the server. 
 * @param {String} type - Request methods. Either 'POST' or 'GET'.
 */
export const request =  async (path,values,type) => {

    if (typeof values === 'undefined') {
        values = "";
    } else if (values === 'POST' || values === 'GET') {
        type = values;
    };

    let response = await $.ajax({
        url: path,
        type: type,
        data: values
    });
    return response;
};

/**
 * Display a snackbarMessage.
 * @param {string} message - MessageText
 * @param {int} timeout - Timeout in ms.
 * @param {string} actionTxt - Text on actionbutton
 * @param {function} handler - actionHandler
 */
export const showSnackbarMessage = (message, timeout, actionText, handler) => {
    let notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar({
        message: message,
        timeout: timeout,
        actionText: actionText,
        actionHandler: handler
    });
}


//NAVIGATION CONTROLLER
const nav = [
    ['nav-login',[loginViewInit,"Einloggen"]],
    ['nav-creation',[creationViewInit,"Erstelle ein Quiz"]],
    ['nav-main',[mainViewInit,"Spiel ein Quiz"]],
    ['nav-yourquiz',[yourQuizViewInit,"Deine erstellten Quizze"]]
];

const navMap = new Map(nav);

let activePanel = 'nav-main';

const controlNavigation = (action,view) => {
    let controller;

    if (controller = navMap.get(action)) {
        activePanel = action;
        controller[0]();

        $('#panel-titel').html(controller[1]);
        return;
    };

    if (action === 'logout') {
        User.logout().then(response => {

            showSnackbarMessage('Ausgeloggt', 1000);

            init();

        }, failure => {

            showSnackbarMessage('Ausgeloggt', 1000);

            init();
        });
    };
};

//GLOBAL INIT
const init = () => {

    $.ajaxSetup({
        global: false,
        dataType: 'json',
        cache: false
    });

    User.checkLoginStatus().then(status => {

        $.get(`../dist/html/${status ? 'nav_login' : 'nav_logout'}.html`, html => {
            View.render(html,container.navigation,true)

            let navigation = View.register(null,container.navigation,controlNavigation);
            
        },'html');

        mainViewInit();

    });
}



