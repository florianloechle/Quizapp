import { ViewDecorator , CompositeController } from '../ViewDecorator';
import { StaticAnswer } from '../Views';

export default class QuizView {

    constructor(id,quiz) {
        this.item = $(id);
        this.answers = [];

        ViewDecorator.DataSetDecorator(this,['[data-info]']);

        this.creator.innerHTML = quiz.user;
        this.name.innerHTML = quiz.name;
        this.init();
    };

    init() {
        let container = this.item.children('.answer');

        for(let con of container) {
            this.answers.push(new StaticAnswer(con));
        };

        this.answerComposite = new CompositeController(this.answers);
    };

    newQuestion(question) {
        this.question.innerHTML = question.questionText;

        for(let choice of question.answers) {
            for(let answer of this.answers) {
                answer.setNewAnswer(choice);
            };
        };


    };

}