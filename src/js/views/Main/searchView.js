import View from '../View';
import ViewAnimator from '../ViewAnimator';
import Validation from '../Validation';

const container = {
    Hard: "#quiz-overview-Hard",
    Medium: "#quiz-overview-Medium",
    Easy: "#quiz-overview-Easy",
    chip: "#filter-list-container"
};

export default class SearchView {

    constructor(parent,handler) {
        this.jObject = $(`#${parent}`);
        this.handler = handler;

        View.getDataSet(this);
        View.observe(this.jObject,handler);

        this.chips = [];
    };

    getInput() {

        let validFilter = false;

            for (let i = 0; i < this.filter.length; i++)  {
                if (this.filter[i].input.value) {
                    validFilter = true;
                    this.isSet = false;
                    break;
                };
            };
            if (validFilter) {
                return $(this.jObject[0]).children().serialize();
            };
            if (!this.isSet) {
                this.isSet = true;
                return $(this.jObject[0]).children().serialize();
            };

    };

    removeChip(chip) {
        for (let i = 0; i < this.chips.length; i++) {
            if (chip == this.chips[i].jObject) {
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
        results.forEach(quiz => {
            this.renderQuiz(quiz);
        });
    }

    renderQuiz(quiz) {
        const markup = 
        `<div style="display: none" class="mdl-cell mdl-cell--4-col mdl-cell--6-col-phone mdl-cell--5-col-tablet">
        <div  class="shadow-container mdl-card mdl-shadow--2dp">
            <div style="background-image: url(img/category/${quiz.category}.jpg) data-info="picture">
            <div class="mdl-card__title info-text">
                <h2 data-info="name" class="mdl-card__title-text" style="font-size: 20px; font-weight: bold">${quiz.name}</h2>
            </div>
            <div class="mdl-card__supporting-text mdl-grid">
                    <div class="mdl-cell mdl-cell--12-col"><a class="info-text"><strong>Ersteller: </strong> 
                    </a><a data-info="user" class="info-text">${quiz.user}</a></div>
                    <div class="mdl-cell mdl-cell--12-col"><a class="info-text"><strong>Kategorie: </strong>
                    </a><a data-info="category" class="info-text">${quiz.category}</a></div>
                    <div class="mdl-cell mdl-cell--12-col"><a class="info-text"><strong>Anzahl Fragen: </strong> </a>
                    <a data-info="questionCount" class="info-text">${quiz.questionCount}</a></div>
            </div>
           </div>
            <div class="mdl-card__supporting-text">
                <a data-info="description">${quiz.description}</a>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a data-action="play" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Jetzt spielen
                </a>
            </div>
        </div>
    </div>`;

        
    }

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

const chipMarkup = `<span class="mdl-chip mdl-chip--deletable">
<span data-info="filter" class="mdl-chip__text"></span>
<button type="button" class="mdl-chip__action"><i data-action="clickedFilter" class="material-icons">cancel</i></button>
</span>`;




    

