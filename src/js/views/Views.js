import {ViewDecorator} from '../views/View';

class QuizInfoView {

    init(quiz,destructible) {
        this.item = $(`<div style="display: none" class="mdl-cell mdl-cell--4-col mdl-cell--6-col-phone mdl-cell--5-col-tablet">
        <div  class="shadow-container mdl-card mdl-shadow--2dp">
            <div data-info="picture" style="background-image: url(img/category/${quiz.category}.jpg)">
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
                <a data-action="${destructible ? 'delete' : 'play'}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                ${destructible ? 'Quiz löschen' : 'Spielen'}
                </a>
            </div>
        </div>
        </div>`);
        this.id = quiz.id;
    };

    get() {
        return this.item;
    };
};

class QuestionView {

    init(question) {
        this.item = $(`
        <div class="mdl-cell mdl-cell--12-col white-cell">
            <h4 class="v-form-header">${question.questionText}</h4>
            <div class="mdl-cell mdl-cell--6-col">
                    <a>${question.answer[0]}</a>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                    <a>${question.answer[1]}</a>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                    <a>${question.answer[2]}</a>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
                    <a>${question.answer[3]}</a>
            </div>   
        </div>`)
    }

    get() {
        return this.item;
    }

};

class Chip {

    init(filter) {
        this.setFilter = filter;
        this.item = $(`
        <span class="mdl-chip mdl-chip--deletable">
        <span data-info="filter" class="mdl-chip__text"><strong>${filter.name}:</strong> ${filter.input.value}</span>
        <button type="button" class="mdl-chip__action"><i data-action="clickedFilter" class="material-icons">cancel</i></button>
        </span>
        `);
    };

    update(filter) {
        $(this.filter).html(`<strong>${filter.name}:</strong> ${filter.input.value}`);
    };

    get() {
        return this.item;
    };
};

export class ChipBuilder {
    constructor() {
        this.item = new Chip();
    };

    get() {
        return this.item;
    };
};

export class QuizInfoViewBuilder {

    constructor() {
        this.item = new QuizInfoView();
    };

    get() {
        return this.item;
    };

};

export class QuestionViewBuilder {

    constructor() {
        this.item = new QuestionView();
    };

    get() {
        return this.item;
    };
};