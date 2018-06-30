import { ViewDecorator , CompositeController } from '../ViewDecorator';
import { StaticAnswer } from '../Views';


export default class QuizResultView {

    constructor(id,results) {
        this.item = $(id);
        this.answers = [];
        this.results = results;

        ViewDecorator.DataSetDecorator(this,['[data-info]']);
        this.init();
    };

    init() {
        console.log("hello from resultview");
        

        setTimeout( () => {
            console.log(this.results);
        },1000);


        // this.counter.innerHTML = 'Du hast x von '+this.results.count+' Fragen richtig beantwortet!';

        // let i = 0;
        // let container = this.item.children('.answer');

        // for(let con of container) {
        //     this.answers.push(new StaticAnswer(con));
        // };

        // this.answerComposite = new CompositeController(this.answers);

        // this.creator.innerHTML = this.quiz.user;
        // this.name.innerHTML = this.quiz.name;
        
        // for(let i = 0; i< this.quiz.questionCount; i++){
        //     var progressInPercent = 100/(this.quiz.questionCount-1)*(i);
        //     // console.log(i+" von "+this.quiz.questionCount+" ist: "+progressInPercent+"%");
        //     $('#progressStage').append(`<div style="left: ${progressInPercent}%" class="stage_box"></div>`);
        // }

        // this.updateProgress(0,0);
    };

    

}