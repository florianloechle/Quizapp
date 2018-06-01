import View from '../View';
import ViewAnimator from '../ViewAnimator';
import Validation from '../Validation';

const container = {
    chip: "#filter-list-container"
};

const tArray = [
    ['Easy', '#quiz-overview-Easy'],
    ['Medium', '#quiz-overview-Medium'],
    ['Hard', '#quiz-overview-Hard']
]

const tabMap = new Map(tArray);

export default class SearchView {

    constructor(parent,handler) {
        this.handler = handler;
        View.register(this,parent,handler);

        this.chips = [];
        this.showCase = [];
    };

    getInput() {
        return $(this.jObject[0]).children().serialize();
    };

    removeChip(chip) {
        for (let i = 0; i < this.chips.length; i++) {
            if (chip == this.chips[i]) {
                this.chips.splice(i,1);

                ViewAnimator.fadeOut(chip);
                break;
            };
        };
    };

    clearInput() {
        this.filter.forEach(filter => {
            filter.input.parentElement.MaterialTextfield.change();
        });
    };

    renderChips() {

        this.filter.forEach(filter => {
            let present = false;

            for (let i = 0; i < this.chips.length; i++) {
                if (filter.name === this.chips[i].setFilter.name) {
                    present = true;
                    this.chips[i].update();
                    break;
                };
            };

            if (!present && filter.input.value) {

                let chip = new Chip(filter)
                this.chips.push(chip);
                
                chip.jObject = View.render(chipMarkup,container.chip,false);
                chip = View.register(chip,this.handler);
                chip.update();

            };
        });
    };

    renderQueryResults(results) {
        this.emptyResults();

        results.forEach(quiz => {

            let quizInfo = new QuizInfoView(tabMap.get(quiz.difficulty),this.handler,quiz);
            this.showCase.push(quizInfo);

        });
    }

    emptyResults() {
        for (var value of tabMap.values()) {
            $(value).empty();
        };
        this.showCase = [];
    };

}

class Chip  {

    constructor(filter,handler) {
    
        this.setFilter = filter;
    };

    update() {
        if (this.setFilter.input.value) {
            $(this.filter).html(`<strong>${this.setFilter.name}:</strong> ${this.setFilter.input.value}`);
        };
    };
    
};

class QuizInfoView {

    constructor(parent,handler,quiz) {
        this.quiz = quiz;
        this.jObject = View.render(quizInfoMarkup,parent,false);

        View.register(this,parent,handler);
        this.init();
    };

    init() {

        for (let v in this.quiz) {
            if (this[v]) {
                this[v].innerHTML = this.quiz[v];
            };
        };

        this.picture.style.backgroundImage = `url(img/category/${this.quiz.category}.jpg)`;
    };

}



const chipMarkup = 
`<span class="mdl-chip mdl-chip--deletable">
<span data-info="filter" class="mdl-chip__text"></span>
<button type="button" class="mdl-chip__action"><i data-action="clickedFilter" class="material-icons">cancel</i></button>
</span>`;

const quizInfoMarkup = 
`<div style="display: none" class="mdl-cell mdl-cell--4-col mdl-cell--6-col-phone mdl-cell--5-col-tablet">
<div  class="shadow-container mdl-card mdl-shadow--2dp">
    <div data-info="picture">
    <div class="mdl-card__title info-text">
        <h2 data-info="name" class="mdl-card__title-text" style="font-size: 20px; font-weight: bold"></h2>
    </div>
    <div class="mdl-card__supporting-text mdl-grid">
            <div class="mdl-cell mdl-cell--12-col"><a class="info-text"><strong>Ersteller: </strong> 
            </a><a data-info="user" class="info-text"></a></div>
            <div class="mdl-cell mdl-cell--12-col"><a class="info-text"><strong>Kategorie: </strong>
            </a><a data-info="category" class="info-text"></a></div>
            <div class="mdl-cell mdl-cell--12-col"><a class="info-text"><strong>Anzahl Fragen: </strong> </a>
            <a data-info="questionCount" class="info-text"></a></div>
    </div>
   </div>
    <div class="mdl-card__supporting-text">
        <a data-info="description"></a>
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <a data-action="play" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Jetzt spielen
        </a>
    </div>
</div>
</div>`;




    

