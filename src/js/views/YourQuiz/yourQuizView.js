import ViewDecorator from '../ViewDecorator'
import { Stage , ViewGenerator } from '../ViewGenerator';
import { QuizInfoViewBuilder } from '../Views';

export default class YourQuizView {

    constructor(parent,handler) {
        this.item = $(parent);
        this.handler = handler;
       
        //We get a reference to the shared instance of our view generator and register our view
        this.quizStage = new Stage('#yourView');
    };

    get() {
        return this.item;
    };

    removeItem(view) {
        ViewGenerator.remove(view);
    };

    renderQueryResults(results) {

        results.forEach(quiz => {

            let quizView = ViewGenerator.create('QuizInfoView');

            quizView.init(quiz,true,this.handler);

            ViewGenerator.setStage(this.quizStage);

            ViewGenerator.add(quizView);

        });
    }
}