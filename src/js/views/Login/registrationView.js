import ViewDecorator from '../ViewDecorator'
import Validation from '../Validation';

export default class RegisterView {
    
    constructor(parent,handler) {
        this.item = $(parent);
       
        ViewDecorator.DataSetDecorator(this,['[data-info]','[data-input]']);
        ViewDecorator.EventListenerDecorator(this,'click',handler);
    };

    get() {
        return this.item;
    };
    
    getData() {
        return this.item.children().serialize();
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
};