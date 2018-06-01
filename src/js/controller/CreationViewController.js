import View from '../views/View';
import QuestionBuilderView from '../views/Creation/questionBuilderView';
import QuizBuilderView from '../views/Creation/quizBuilderView';
import QuestionListView from '../views/Creation/questionListView';
import { container } from '../index';
import Quiz from '../models/Quiz';
import Question from '../models/Question';

let creationView = null;
let questionBuilder = null;
let quizBuilder = null;
let questionListView = null;

export const creationViewInit = () => {

    $.get('../dist/html/quiz_creation.html', html => {
        View.render(html,container.mainPanel,true) 

        creationView = View.register(creationView,container.mainPanel);

        quizBuilder = new QuizBuilderView(container.quizBuiler,handleQuizEvents);
        questionBuilder = new QuestionBuilderView(container.questionBuilder,handleQuestionBuildEvents);
        questionListView = new QuestionListView(container.questionListView,handleListEvents);
        

        Quiz.getQuizCategorys().then(categorys => {
            quizBuilder.renderCategorys(categorys);
        });

        componentHandler.upgradeElements($(container.creation).children());
    
    },'html');
};

const handleQuestionBuildEvents = (action,view) => {

    if(action !== 'addQuestion' ) {
        return;
    };

    if(!questionBuilder.validateInput()) {
        return;
    };


};

const handleQuizEvents = (action,view) => {



};

const handleListEvents = (action,view) => {



};
