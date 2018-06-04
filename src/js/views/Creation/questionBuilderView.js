import View from '../View';
import Validation from '../Validation';

export default class QuestionBuilderView {

    constructor(parent,handler) {
        View.register(this,parent,handler);
        this.init();
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
       for(let error of errors) {
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