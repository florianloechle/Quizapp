import View from '../View';
import Validation from '../Validation';

export default class LoginView {

    constructor(parent,handler) {
        View.register(this,parent,handler);
    };

    getData() {
        return $(this.jObject).children().serialize();
    };

    validateUserInput() {
        return Validation.validateText(this.text) && Validation.validateSanitization(this.text);
    };

    showErrors(errors) {
        errors.forEach(error => {

            for(let i = 0; i<this.text.length;i++) {
                if(error.for !== this.text[i].error.dataset['error']) {
                    continue;
                };
    
                this.text[i].error.innerHTML = error.message;
                this.text[i].error.parentElement.classList.add('is-invalid');
            };
        });
    };
}

