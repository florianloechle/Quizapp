import ViewDecorator from '../ViewDecorator'
import { Stage, ViewGenerator } from '../QuizView';
import { QuestionViewBuilder } from '../Views';

export default class QuestionListView {

    constructor(parent,handler) {
        this.item = $(parent);
        this.handler = handler;

        //We decorate our view to handle events
        ViewDecorator.EventListenerDecorator(this,'click',handler);

        //We register the questionView in our singleton instance
        ViewGenerator.register("QuestionView",QuestionViewBuilder);

        //We set a new stage for our coming question views
        this.questionStage = new Stage('#question-list-view');
    };

    get() {
        return this.item;
    };

    showQuestion(question) {
        ViewGenerator.setStage(this.questionStage);
        
        let questionView = ViewGenerator.create("QuestionView");

        questionView.init(question);
        
        ViewGenerator.add(questionView);

        ViewDecorator.EventListenerDecorator(questionView,'click',this.handler);
    };
}