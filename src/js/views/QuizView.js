export class Stage {

    constructor(id) {
        this.index = 0;
        this.context = $(id);
    };

    add(item) {
        ++this.index;
        item.attr('data-id', this.index);
        this.context.append(item);
        componentHandler.upgradeElements(item.children());
        item.fadeIn('slow');
    };

    remove(index) {
        this.context.remove(`[data-id=${index}]`);
    };

    clear() {
        this.context.empty();
        this.index = 0;
    };

}

class QuizInfoFactory {

    constructor() {
        this.types = {};
    };
    
    create(quiz,destructible,type) {
        return new this.types[type]().create(quiz,destructible);
    };

    register(type,cls) {
        if(cls.prototype.create){
                this.types[type] = cls;
        };
    };
}

export class QuizInfoView {

    create(quiz,destructible) {
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
        return this;
    };

    get() {
        return this.item;
    };
}


class QuizGeneratorSingleton {

    constructor() {
        this._aQuizInfoView = []
        this._stage = null;
        this._qf = new QuizInfoFactory();
    };

    register(name,cls) {
        this._qf.register(name, cls);
    };

    setStage(stage) {
        this._stage = stage;
    };

    create(quiz,destructible,type) {
        var quizInfoView = this._qf.create(quiz,destructible,type);
        return quizInfoView;
    };

    add(QuizInfoView) {
        this._stage.add(QuizInfoView.get());
        this._aQuizInfoView.push(QuizInfoView);
    };

    index() {
        return this._aQuizInfoView.length;
    };
}

//Exporting our singleton..
export let QuizViewGenerator = new QuizGeneratorSingleton();

