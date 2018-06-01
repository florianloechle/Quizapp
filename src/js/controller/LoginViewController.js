import View from '../views/View';
import LoginView from '../views/Login/loginView';
import RegisterView from '../views/Login/registrationView';
import User from '../models/User';
import { container, showSnackbarMessage } from '../index';

let loginView = null;
let registerView = null;

//LOGINCONTROLLER
export const loginViewInit = () => {

    $.get('../dist/html/quiz_login.html', (html) => {
        View.render(html,container.mainPanel,true);
        
        loginView = new LoginView(container.login,handleLoginEvents);

        componentHandler.upgradeElements($(container.mainPanel).children());
            
    },'html');
};

const handleLoginEvents = (action) => {

    if (action === 'register') {
        $(loginView.jObject).fadeOut('fast', () => {
            registerViewInit();
        });
        return;
    };

    if(!loginView.validateUserInput()){
        return;
    }

    let values = loginView.getData();

    User.login(values, true).then(response => {

        if (response.error) {
            loginView.showErrors(response.error);
            return;
        };

        if (response.success) {
            showSnackbarMessage('Login successfull');

            setTimeout(() => {
                window.location = 'index.html';
            }, 1500);
        }

    }, reason => {
        showSnackbarMessage(`${reason}}`);
    });
}

//REGISTERCONTROLLER
const registerViewInit = () => {

    $.get('../dist/html/quiz_registration.html', (html) => {
        View.render(html,container.mainPanel,true) 

        registerView = new RegisterView(container.register,handleRegistrationEvents);

        componentHandler.upgradeElements($(container.mainPanel).children());

    },'html');
};


const handleRegistrationEvents = (action) => {

    if (!registerView.validateUserInput()) {
        return;
    };

    let values = registerView.getData();

    User.register(values).then(response => {

        if (response.error) {
            registerView.showErrors(response.error);
        };

        if (response.success) {
            showSnackbarMessage('Registraion successfull. You can login now.');

            setTimeout(() => {
               loginViewInit();
            }, 2000);

        }
    }, failure => {
        console.log('Failure');
    });
};



