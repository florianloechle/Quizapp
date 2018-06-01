import View from '../View';
import Validation from '../Validation';

export default class QuestionBuilderView {

    constructor(parent,handler) {
        View.register(this,parent,handler);

        this.categorys = [];
        this.answers = [];
    };

    init() {
    
           
    }

    validateInput() {
        return Validation.validateText(this.answers) && Validation.validateText(this.question);
    };

    getInputForQuestion() {
        

    }
}