import { container, showSnackbarMessage } from '../index';
import { ViewDecorator } from '../views/ViewDecorator';
import QuizView from '../views/Quiz/quizView';
import Question from '../models/Question';
import Quiz from '../models/Quiz';

let view = null;
let quiz = null;

export const QuizInit = (quizViewModel) => {

    $(container.mainPanel).load('../dist/html/quiz_play.html', () => {
        $('#playView').fadeIn('slow)');

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

        view = new QuizView('#innerPlayView',quizViewModel);

        ViewDecorator.EventListenerDecorator(view,'click',handleQuizEvents);

        Quiz.getQuestion({id: quizViewModel.id}).then(Question => {
            console.log(Question);
        });
    });
};




const handleQuizEvents = (action,view) => {



};