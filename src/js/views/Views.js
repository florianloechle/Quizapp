import {ViewDecorator} from './ViewDecorator'

class QuizInfoView {

    init(quiz,destructible,handler) {
        this.item = $(`<div style="display: none" class="mdl-cell mdl-cell--4-col mdl-cell--6-col-phone mdl-cell--5-col-tablet">
        <div  class="shadow-container mdl-card mdl-shadow--2dp">
            <div data-info="picture" style="background-image: url(img/category/${quiz.category}.jpg);">
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
        this.quiz = quiz;

        ViewDecorator.EventListenerDecorator(this,'click',handler);
    };

    get() {
        return this.item;
    };
};

class QuestionView {

    init(question) {
        this.question = question;
        this.item = $(`
        <div style="position: relative; text-align:center; display:none" class="mdl-cell mdl-cell--12-col white-cell">
            <h4 class="v-form-header">${question.questionText}</h4>
            <div class="mdl-cell mdl-cell--12-col">
                    <a ${question.answers[0].correct ? 'style="color: green"' : 'style="color: black"'}>${question.answers[0].text}</a>
            </div>
            <div class="mdl-cell mdl-cell--12-col">
                    <a ${question.answers[1].correct ? 'style="color: green"' : 'style="color: black"'}>${question.answers[1].text}</a>
            </div>
            <div class="mdl-cell mdl-cell--12-col">
                    <a ${question.answers[2].correct ? 'style="color: green"' : 'style="color: black"'}>${question.answers[2].text}</a>
            </div>
            <div class="mdl-cell mdl-cell--12-col">
                    <a ${question.answers[3].correct ? 'style="color: green"' : 'style="color: black"'}>${question.answers[3].text}</a>
            </div>   
            <i data-action="deleteQuestion" style="position:absolute; top: 5%; right: 0; cursor:pointer;" class="material-icons">delete</i>
        </div>`)
    };

    get() {
        return this.item;
    };

};

class Chip {

    init(filter) {
        this.item = $(`
        <span class="mdl-chip">
             <span class="mdl-chip__text"><strong>${filter.name}:</strong> ${filter.input.value}</span>
        </span>
        `);
    };

    get() {
        return this.item;
    };
};


// TODO: Answer and Question combined to one question View which will be used to create questions and play questions. 
class Answer {

    constructor(id) {
        this.item = $(id);
        this.selected = false;
    };

    get() {
        this.item;
    };

};

export class StaticAnswer extends Answer {

    constructor(id) {
        super(id);

        this.init();
    };

    init() {
        this.text = this.item.children('a');

        this.blink = (id) => {
            if(this.selected && id === this.id || !this.selected && id === this.id ) {
                this.item.addClass('blink-green');
            } else if(this.selected && id !== this.id) {
                this.item.addClass('blink-red');
            };
        };

        this.item.on('click', (e) => {
            this.selected = !this.selected;
            e.preventDefault();
        });
    };

    fadeOut() {
        this.item.fadeOut(250);
    };

    fadeIn() {
        this.item.fadeIn(250);
    };

    getSelected() {
        if(this.selected) {
            return this.id;
        };
    };

    getValues() {
        const answer = {
            id: this.id,
            correct: this.selected
        };
        return answer;
    };

    setNewAnswer(answer) {
        this.id = answer.id;
        this.text[0].innerHTML = answer.text;
        this.selected = false;
        this.item.removeClass('blink-green');
        this.item.removeClass('blink-red');
    };

};

export class WriteableAnswer extends Answer {

    constructor(id) {
        super(id);

        this.init();
    };

    init() {
        this.input = this.item[0].querySelector('input');
        this.error = this.input.parentElement.querySelector('[data-error]');

        this.item.on('click', (e) => {
            if(e.target !== this.input) {
                this.selected = !this.selected;
                this.item.toggleClass('is-correct');
            };
        });
    };

    clear() {
        this.input.parentElement.MaterialTextfield.change();
        this.item.removeClass('is-correct');
        this.selected = false;
    };

    showError(error) {
        this.error.innerHTML = error.message;
        this.error.parentElement.classList.add('is-invalid');
    };

    getValues() {
        const answer = {
            text: this.input.value,
            correct: this.selected
        };
        return answer;
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