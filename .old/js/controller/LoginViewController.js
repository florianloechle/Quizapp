import ManagementView from '../views/General/ManagementView';
import User from '../models/User';
import { container, showSnackbarMessage } from '../app';

let loginView = null;
let registerView = null;

//LOGINCONTROLLER
export const loginViewInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_login.html', () => {
        loginView = new ManagementView(container.login,handleLoginEvents);

        loginView.get().fadeIn('slow');

        componentHandler.upgradeElements($(container.mainPanel).children());
            
    });
};

const handleLoginEvents = (action) => {

    //User tapped register. We fade the view out and initialize the registerView.
    if (action === 'register') {
        $(loginView.get()).fadeOut('fast', () => {
            registerViewInit();
        });
        return;
    };

    //Validate the user input for empty values and invalid characters
    if(!loginView.validateUserInput()){
        return;
    }

    let values = loginView.getData();

    //We log the user in and handle the servers response accordingly
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
        };

    }, reason => {
        showSnackbarMessage(`${reason}}`);
    });
}

//REGISTERCONTROLLER
const registerViewInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_registration.html', () => {
       
        registerView = new ManagementView(container.register,handleRegistrationEvents);

        registerView.get().fadeIn('slow');

        componentHandler.upgradeElements($(container.mainPanel).children());

    });
};


const handleRegistrationEvents = (action) => {

    //Validate the user input for empty values and invalid characters
    if (!registerView.validateUserInput()) {
        return;
    };

    let values = registerView.getData();

    //We register the user and handle the servers response accordingly. Fades to loginView on success.
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



