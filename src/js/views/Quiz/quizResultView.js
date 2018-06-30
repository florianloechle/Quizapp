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
        var style = `width: 200px; height: 200px;`;
        if(this.results.countCorrect === this.results.count){
            imageName = "pogchamp";
        }else{
            imageName = "lul";
        }
        this.image.innerHTML = `<img style="${style}" src="img/${imageName}.png">`;
        
        var contentHTML = "";
        for (var i = 0; i < this.results.count; i++) { 
             contentHTML += this.renderDetailHTMLByQuestionID(i);
        }

        console.log( $("#content") );
        console.log( contentHTML );
        $("#content")[0].innerHTML = contentHTML;

    };

    renderDetailHTMLByQuestionID(id) {
        var result = `
        <div id="playView${id}" style="" class="mdl-grid">
        
        <div id="innerPlayView${id}" class="mdl-grid mdl-cell mdl-cell--8-col mdl-cell--12-col-phone mdl-cell--9-col-tablet box-shadow">
                <div class="mdl-cell mdl-cell--8-col white-cell">
                    <h4 data-info="question${id}" class="creation-header">${this.results.questions[id].questionText}</h4> 
                </div>
                <div class="mdl-cell mdl-cell--12-col">     
                </div>`;
                
        for(var i = 0; i<4; i++) {
            result += 
            `<div data-action="answer${id}" class="mdl-cell mdl-cell--8-col white-cell mdl-cell--12-col-phone box-shadow answer">
                <a>${this.results.questions[id].answers[i].text}</a>          
            </div>
            `;
        }

        result +=
        `</div>
        </div> 
        `;


        
        return result;
    }

}