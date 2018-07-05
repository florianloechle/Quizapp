import { ViewDecorator , CompositeController } from '../ViewDecorator';
import { WriteableAnswer } from '../Views';

export default class QuestionBuilderView {

    constructor(parent,handler) {
        this.item = $(parent);
        this.answers = [];

        ViewDecorator.DataSetDecorator(this,['[data-input]']);
        ViewDecorator.EventListenerDecorator(this,'click',handler);

        this.init();
    };

    get() {
        return this.item;
    };

    init() {
        let container = this.item.children('.answer');

        for(let con of container) {
            this.answers.push(new WriteableAnswer(con));
        };

        this.answerComposite = new CompositeController(this.answers);
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

        for(let ans of this.answers) {
            answers.push(ans.getValues());
        };
     
        return answers;
    };

    showErrors(error) {
        this.answerComposite.action('showError',error);
    };

    clear() {
        this.answerComposite.action('clear');
        this.question.input.parentElement.MaterialTextfield.change();
    };
}