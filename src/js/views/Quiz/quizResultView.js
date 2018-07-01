import {
    ViewDecorator,
    CompositeController
} from '../ViewDecorator';
import {
    StaticAnswer
} from '../Views';


export default class QuizResultView {

    constructor(id, results) {
        this.item = $(id);
        this.answers = [];
        this.results = results;
        this.allCorrect = 0;

        ViewDecorator.DataSetDecorator(this, ['[data-info]']);
        this.init();
    };

    init() {
        this.counter.innerHTML = 'Du hast  <span style="color: #ff0000">' + this.results.countCorrect + ' von ' + this.results.count + '</span> Fragen richtig beantwortet!';

        var imageName = "";
        var style = `width: 200px; height: 200px;`;
        if (this.results.countCorrect === this.results.count) {
            imageName = "pogchamp";
            this.allCorrect = 1;
        } else {
            imageName = "lul";
        }
        this.image.innerHTML = `<img style="${style}" src="img/${imageName}.png">`;

        var contentHTML = "";
        for (var i = 0; i < this.results.count; i++) {
            contentHTML += this.renderDetailHTMLByQuestionID(i);
        }

        $("#detailedAnswers")[0].innerHTML += contentHTML;

        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
        }

    };

    renderDetailHTMLByQuestionID(id) {
        var result = `
            <div id="innerResultPlayView" class="content mdl-grid mdl-cell mdl-cell--12-col mdl-cell--12-col-phone mdl-cell--12-col-tablet">
        `;

        for (var i = 0; i < 4; i++) {

            var style = "";
            // richtige Antwort auf die Frage wird immer gruen markiert
            if (this.results.questions[id].answers[i].correct == 1) {
                style = "blink-green";
            }
            // wenn die Frage falsch beantwortet wurde, wird die entsprechende Antwortmöglichkeit rot markiert
            if (this.results.questions[id].givenAnswer === this.results.questions[id].answers[i].id && !this.results.questions[id].givenAnswerWasCorrect) {
                style = "blink-red";
            }

            result +=
                `<div data-action="answer" class="mdl-cell mdl-cell--8-col white-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet box-shadow answer ${style}">
                <a>${this.results.questions[id].answers[i].text}</a>          
            </div>
            `;
        }

        result += `</div> `;

        var correct = "";
        if (this.results.questions[id].givenAnswerWasCorrect) {
            correct = `<span style="color: green">Frage ${id+1}: </span>`;
        } else {
            correct = `<span style="color: red">Frage ${id+1}: </span>`;
        }

        var collapse =
            `
            <button class="collapsible mdl-grid mdl-cell mdl-cell--10-col mdl-cell--12-col-phone mdl-cell--12-col-tablet"${correct}${this.results.questions[id].questionText}</button>
            ${result}
            `;

        return collapse;
    }


}