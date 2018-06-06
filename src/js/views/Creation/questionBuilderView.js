import ViewDecorator from '../ViewDecorator';
import Validation from '../../manager/Validation';
import { isArray } from 'util';

export default class QuestionBuilderView {

    constructor(parent,handler) {
        this.item = $(parent);

        ViewDecorator.DataSetDecorator(this,['[data-info]','[data-input]']);
        ViewDecorator.EventListenerDecorator(this,'click',handler);

        this.init();
    };

    get() {
        return this.item;
    };

    init() {
        
        for(let ans of this.answer) {
            let container = $(ans.input).parents('.answer');

            ans.correct = false;
            ans.container = container;

            container.on('click', (e) => {
                if(e.target !== ans.input) {
                    ans.correct = !ans.correct
                    container.toggleClass('is-correct');
                };
            });
        };
    };

    validateInput() {
        let isValidAnswer = Validation.validateText(this.answer);
        let isValidQuestion = Validation.validateText(this.question);

        return isValidAnswer && isValidQuestion
    };

    getQuestionText() {
        return this.question.input.value;
    };

    getAnswers() {
        let answers = [];

        for (let ans of this.answer) {

            let answer = {
                text: ans.input.value,
                correct: ans.correct
            };

            answers.push(answer);
        }
        return answers;
    };

    showErrors(errors) {
        if(Array.isArray(errors)) {

            for(let error of errors) {
                show.call(this,error);
            };

        } else {
           show.call(this,errors);
        };

        function show(error) {

            for(let answer of this.answer) {

                if(error.for !== answer.error.dataset['error']) {
                    continue;
                };

                answer.error.innerHTML = error.message;
                answer.error.parentElement.classList.add('is-invalid');
                
            };   
        };
    };

    clear() {

        for (let ans of this.answer) {
            ans.input.parentElement.MaterialTextfield.change();
            ans.correct = false;

            ans.container.removeClass('is-correct');
        };

        this.question.input.parentElement.MaterialTextfield.change();

    };
}