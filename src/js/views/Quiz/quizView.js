import { ViewDecorator , CompositeController } from '../ViewDecorator';
import { StaticAnswer } from '../Views';


export default class QuizView {

    constructor(id,quiz) {
        this.item = $(id);
        this.answers = [];
        this.quiz = quiz;

        ViewDecorator.DataSetDecorator(this,['[data-info]']);
        this.init();
    };

    init() {
        let i = 0;
        let container = this.item.children('.answer');

        for(let con of container) {
            this.answers.push(new StaticAnswer(con));
        };

        this.answerComposite = new CompositeController(this.answers);

        this.creator.innerHTML = this.quiz.user;
        this.name.innerHTML = this.quiz.name;
        
        for(let i = 0; i< this.quiz.questionCount; i++){
            var progressInPercent = 100/(this.quiz.questionCount-1)*(i);
            // console.log(i+" von "+this.quiz.questionCount+" ist: "+progressInPercent+"%");
            $('#progressStage').append(`<div style="left: ${progressInPercent}%" class="stage_box"></div>`);
        }

        this.updateProgress(0,0);
    };

    showResult(id) {
        this.answerComposite.action('blink',id);
    };

    getAnswers() {
        let answers = [];

        for(let ans of this.answers) {
            answers.push(ans.getValues());
        };
     
        return answers;
    };

    getSelected() {
        for(let answer of this.answers) {
            if(answer.selected) {
                return answer.id;
            };
        };
    };

    fadeOutChoices() {
        this.answerComposite.action('fadeOut');
    };

    fadeInChoices() {
        this.answerComposite.action('fadeIn');
    };

    newQuestion(question) {
        let i = 0;
        this.question.innerHTML = question.questionText;

        for(; i<question.answers.length;i++) {
            this.answers[i].setNewAnswer(question.answers[i]);
        };
    };

    updateProgress(count) {
        let percent = Math.floor(101/(this.quiz.questionCount-1));

        $('#progressStage')[0].MaterialProgress.setProgress(percent * count);

        this.count.innerHTML = `${count+1} / ${this.quiz.questionCount}`;
    };

    updateScore(score) {
        this.score.innerHTML = score;
    };

}