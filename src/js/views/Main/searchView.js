import View from '../View';
import { Stage , QuizInfoView, QuizViewGenerator } from '../QuizView';
import Validation from '../Validation';

const container = {
    chip: "#filter-list-container"
};

const tArray = [
    ['Easy', '#quiz-overview-Easy'],
    ['Medium', '#quiz-overview-Medium'],
    ['Hard', '#quiz-overview-Hard']
];

const tabMap = new Map(tArray);

export default class SearchView {

    constructor(parent,handler) {
        View.register(this,parent,handler);

        this.chips = [];

        //We get a reference to the shared instance of our view generator and register our view
        this.qg = QuizViewGenerator;
        this.qg.register('QuizInfoView',QuizInfoView);


        //Our different stages depending on the quiz difficulty
        this.stageType = {
            Easy: new Stage('#quiz-overview-Easy'),
            Medium: new Stage('#quiz-overview-Medium'),
            Hard: new Stage('#quiz-overview-Hard')
        };
    };

    getInput() {
        return $(this.jObject[0]).children().serialize();
    };

    removeChip(chip) {
        for (let i = 0; i < this.chips.length; i++) {
            if (chip == this.chips[i]) {
                this.chips.splice(i,1);
                chip.jObject.fadeOut('fast',chip.remove());
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

            for (let chip of this.chips) {
                if (filter.name === chip.setFilter.name) {
                    present = true;
                    chip.update();
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

            let quizView = this.qg.create(quiz,false,'QuizInfoView');

            this.qg.setStage(this.stageType[quiz.difficulty]);

            this.qg.add(quizView);

        });
    }

    emptyResults() {
        for(let stage in this.stageType) {
            this.stageType[stage].clear();
        };
    };

};

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

const chipMarkup = 
`<span class="mdl-chip mdl-chip--deletable">
<span data-info="filter" class="mdl-chip__text"></span>
<button type="button" class="mdl-chip__action"><i data-action="clickedFilter" class="material-icons">cancel</i></button>
</span>`;






    

