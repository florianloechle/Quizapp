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
        console.log(this.results);
        
        this.counter.innerHTML = 'Du hast '+this.results.countCorrect+' von '+this.results.count+' Fragen richtig beantwortet!';

        var imageName = "";
        if(this.results.countCorrect === this.results.count){
            imageName = "pogchamp";
        }else{
            imageName = "lul";
        }
        var style = `width: 200px; height: 200px;`;
        this.image.innerHTML = `<img style="${style}" src="img/${imageName}.png">`;
        

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