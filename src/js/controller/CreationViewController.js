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
        questionBuilder = View.register(questionBuilder,container.questionBuilder,handleQuestionBuildEvents);
        quizBuilder = View.register(quizBuilder,container.quizBuiler,handleQuizEvents);
        questionListView = View.register(questionListView,container.questionListView,handleListEvents);

        setTimeout( () => {
            componentHandler.upgradeElements($(container.creation).children());
        },50);
    
    },'html');
};

const handleQuestionBuildEvents = (action,view) => {



};

const handleQuizEvents = (action,view) => {



};

const handleListEvents = (action,view) => {



};
