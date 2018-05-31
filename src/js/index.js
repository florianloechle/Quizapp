//Global Controller
import DynamicView from './views/DynamicView';
import { mainViewInit } from './controller/MainViewController';
import { creationViewInit } from './controller/CreationViewController';
import { yourQuizViewInit } from './controller/YourQuizController';
import { loginViewInit } from './controller/LoginController';
import User from './models/User';

window.onload = () => {
    init();
};

export const container = {
    mainPanel: 'quiz-panel',
    searchView: 'searchView',
};


/**
 * Constructor constructs a new quiz model object.
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

    if (controller = navMap.get(action.name)) {
        activePanel = action.name;
        controller[0]();

        $('#panel-titel').html(controller[1]);
        return;
    };

    if (action.name === 'logout') {
        User.logout();

        showSnackbarMessage('Ausgeloggt', 1000);

        init();
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

        $.get(`../dist/html/${status ? 'nav_login' : 'nav_logout'}.html`, Data => {

            let navigation = new DynamicView('navigation-container',controlNavigation);
            navigation.loadView(Data);
           
        },'html');

        mainViewInit();

    });
}



