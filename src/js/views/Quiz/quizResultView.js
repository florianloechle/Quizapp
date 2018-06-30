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
        // this.item.addClass('blink-green');
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

            var style = "";
            // richtige Antwort auf die Frage wird immer gruen markiert
            if(this.results.questions[id].answers[i].correct == 1)
            {
                style = "blink-green";
            }
            // wenn die Frage falsch beantwortet wurde, wird die entsprechende Antwortmöglichkeit rot markiert
            if(this.results.questions[id].givenAnswer === this.results.questions[id].answers[i].id && !this.results.questions[id].givenAnswerWasCorrect){
                style = "blink-red";
            }

            result += 
            `<div data-action="answer${id}" class="mdl-cell mdl-cell--8-col white-cell mdl-cell--12-col-phone box-shadow answer ${style}">
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