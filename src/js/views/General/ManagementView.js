import {ViewDecorator} from '../ViewDecorator'
import Validation from '../../manager/Validation';

export default class ManagementView {

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

            for(let text of this.text) {
                if(error.for !== text.error.dataset['error']) {
                    continue;
                };
    
                text.error.innerHTML = error.message;
                text.error.parentElement.classList.add('is-invalid');
            };
        });
    };
}