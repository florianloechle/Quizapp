import { container, showSnackbarMessage } from '../index';
import Question from '../models/Question';
import Quiz from '../models/Quiz';



export const QuizInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_play.html', () => {
        $('#playView').fadeIn('slow)');

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

    });
};



