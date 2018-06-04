import View, { ViewDecorator } from '../View';
import { Stage , QuizViewGenerator } from '../QuizView';
import { QuizInfoViewBuilder , ChipBuilder } from '../Views';
import Validation from '../Validation';

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
        this.qg.register('QuizInfoView',QuizInfoViewBuilder);
        this.qg.register('Chip',ChipBuilder);


        //Our different stages depending on the quiz difficulty
        this.stageType = {
            Easy: new Stage('#quiz-overview-Easy'),
            Medium: new Stage('#quiz-overview-Medium'),
            Hard: new Stage('#quiz-overview-Hard')
        };

        this.chipStage = new Stage('#filter-list-container');
        this.chips = [];
    };

    getInput() {
        return $(this.jObject[0]).children().serialize();
    };

    removeChip(chip) {
        for (let i = 0; i < this.chips.length; i++) {
            if (chip == this.chips[i]) {
                this.chips.splice(i,1);
                chip.fadeOut('fast', chip.remove());
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
                    chip.update(filter);
                    break;
                };
            };

            if (!present && filter.input.value) {

                let chip = this.qg.create("Chip");
                this.chips.push(chip);
                
                chip.init(filter);

                this.qg.setStage(this.chipStage);
                
                this.qg.add(chip);

                ViewDecorator.DataSetDecorator(chip.get(),['[data-info]']);
            };
        });
    };

    renderQueryResults(results) {
        this.emptyResults();

        results.forEach(quiz => {

            let quizView = this.qg.create('QuizInfoView');

            quizView.init(quiz,false);

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
