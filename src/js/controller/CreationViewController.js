import View from '../views/View';
import QuestionBuilderView from '../views/Creation/questionBuilderView';
import QuizBuilderView from '../views/Creation/quizBuilderView';
import QuestionListView from '../views/Creation/questionListView';
import { container, showSnackbarMessage } from '../index';
import Quiz from '../models/Quiz';
import Question from '../models/Question';

let creationView = null;
let questionBuilder = null;
let quizBuilder = null;
let questionListView = null;
let quiz = null;

export const creationViewInit = () => {

    $.get('../dist/html/quiz_creation.html', html => {
        View.render(html,container.mainPanel,true) 

        creationView = View.register(creationView,container.mainPanel);

        quizBuilder = new QuizBuilderView(container.quizBuiler,handleQuizEvents);
        questionBuilder = new QuestionBuilderView(container.questionBuilder,handleQuestionBuildEvents);
        questionListView = new QuestionListView(container.questionListView,handleListEvents);
        
        quiz = new Quiz();

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

    let answers = questionBuilder.getAnswers();

        for (let answer of answers) {
            if (answer.correct) {

                let question = new Question(questionBuilder.getQuestionText(), answers);
                quiz.addQuestion(question);

                quizBuilder.setVisual(quiz.questionCount);
                questionBuilder.clear();

                showSnackbarMessage('Frage hinzugefügt', 1500);
                return;
            }
        };

        let error = {
            for: 'answer',
            message: 'Please select at least one correct answer'
        };
        questionBuilder.showErrors(error);
        return;

};

const handleQuizEvents = (action,view) => {

    if(action !== 'add' ) {
        return;
    };

    if(!quizBuilder.validateInput()) {
        return;
    };

    



};

const handleListEvents = (action,view) => {



};
