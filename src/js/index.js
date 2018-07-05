import { mainViewInit } from './controller/MainViewController';
import { creationViewInit } from './controller/CreationViewController';
import { yourQuizViewInit } from './controller/YourQuizViewController';
import { loginViewInit } from './controller/LoginViewController';
import User from './models/User';
import { ViewDecorator } from './views/ViewDecorator';

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

//NAVIGATION CONTROLLER
const nav = [
  ['nav-login', [loginViewInit, 'Einloggen']],
  ['nav-creation', [creationViewInit, 'Erstelle ein Quiz']],
  ['nav-main', [mainViewInit, 'Spiel ein Quiz']],
  ['nav-yourquiz', [yourQuizViewInit, 'Deine erstellten Quizze']]
];

const navMap = new Map(nav);

let activePanel = 'nav-main';

const controlNavigation = (action, target) => {
  let controller;

  if ((controller = navMap.get(action))) {
    activePanel = action;
    controller[0]();

    $('#panel-titel').html(controller[1]);
    return;
  }

  if (action === 'logout') {
    User.logout().then(
      response => {
        showSnackbarMessage('Ausgeloggt', 1000);

        init();
      },
      failure => {
        showSnackbarMessage('Ausgeloggt', 1000);

        init();
      }
    );
  }
};

//GLOBAL INIT
const init = () => {
  $.ajaxSetup({
    global: false,
    dataType: 'json',
    cache: false
  });

  User.checkLoginStatus().then(status => {
    $.get(
      `../dist/html/${status ? 'nav_login' : 'nav_logout'}.html`,
      html => {
        let item = $(container.navigation).html(html);

        let navigation = {
          item: item
        };

        ViewDecorator.EventListenerDecorator(navigation, 'click', controlNavigation);
      },
      'html'
    );

    mainViewInit();
  });
};
