import ViewDecorator from '../ViewDecorator'
import { Stage , ViewGenerator } from '../ViewGenerator';
import { QuizInfoViewBuilder , ChipBuilder } from '../Views';
import Validation from '../../manager/Validation';

const tArray = [
    ['Easy', '#quiz-overview-Easy'],
    ['Medium', '#quiz-overview-Medium'],
    ['Hard', '#quiz-overview-Hard']
];

const tabMap = new Map(tArray);

export default class SearchView {

    constructor(parent,handler) {
        this.item = $(parent);
        this.handler = handler;

        ViewDecorator.DataSetDecorator(this,['[data-info]','[data-input]']);
        ViewDecorator.EventListenerDecorator(this,'click',handler);

        //We get a reference to the shared instance of our view generator and register our view
        ViewGenerator.register('QuizInfoView',QuizInfoViewBuilder);
        ViewGenerator.register('Chip',ChipBuilder);


        //Our different stages depending on the quiz difficulty
        this.stageType = {
            Easy: new Stage('#quiz-overview-Easy'),
            Medium: new Stage('#quiz-overview-Medium'),
            Hard: new Stage('#quiz-overview-Hard')
        };

        this.chipStage = new Stage('#filter-list-container');
    };

    get() {
        return this.item;
    };

    getInput() {
        return this.item.children().serialize();
    };

    clearInput() {
        this.filter.forEach(filter => {
            filter.input.parentElement.MaterialTextfield.change();
        });
    };

    renderChips() {
        this.chipStage.clear();

        ViewGenerator.setStage(this.chipStage);

        this.filter.forEach(filter => {

            if(filter.input.value) {

                let chip = ViewGenerator.create("Chip");
                
                chip.init(filter);

                ViewGenerator.add(chip);
            };

        });
    };

    renderQueryResults(results) {
        this.emptyResults();

        results.forEach(quiz => {

            let quizView = ViewGenerator.create('QuizInfoView');

            quizView.init(quiz,false,this.handler);

            ViewGenerator.setStage(this.stageType[quiz.difficulty]);

            ViewGenerator.add(quizView);

        });
    }

    emptyResults() {
        for(let stage in this.stageType) {
            this.stageType[stage].clear();
        };
    };

};
