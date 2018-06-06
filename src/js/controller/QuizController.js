import { container, showSnackbarMessage } from '../index';

export const QuizInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_play.html', () => {
        $('#playView').fadeIn('slow)');

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

    });
};