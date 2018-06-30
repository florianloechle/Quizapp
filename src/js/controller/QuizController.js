import { container, showSnackbarMessage } from '../index';
import { ViewDecorator } from '../views/ViewDecorator';
import QuizView from '../views/Quiz/quizView';
import QuizResultView from '../views/Quiz/quizResultView';
import Question from '../models/Question';
import Quiz from '../models/Quiz';

let view = null;
let quiz = null;

const state = {
    progress: 0,
    currentQuestion: null,
    answered: [],
    id: null,
    score: 0,
    inProgress: false
};

export const QuizInit = (quizViewModel) => {

    $(container.mainPanel).load('../dist/html/quiz_play.html', () => {
        $('#playView').fadeIn('slow');

        state.id = quizViewModel.id;

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());

        view = new QuizView('#innerPlayView',quizViewModel);

        ViewDecorator.EventListenerDecorator(view,'click',handleQuizEvents);

        init();
    });
};

const init = () => {

    state.progress = 0;
    state.currentQuestion = null;
    state.answered = [];
    state.score = 0;
    state.inProgress = true;
    state.results = [];

    nextQuestion();
};

const handleQuizEvents = (action,view) => {
    if(!state.inProgress) {
        event.preventDefault();
        return;
    };

    let answeredQuestion = {
        id: state.currentQuestion.id,
        answers: view.getAnswers()
    };

    Quiz.fetchAnswers({answers: view.getSelected()}).then(answer => {
        state.inProgress = false;

        view.showResult(answer.id);

        state.currentQuestion.correct = answer.id;
        state.currentQuestion.answered = view.getSelected();

        if(answer.id === state.currentQuestion.answered) {
            state.score = state.score + 5;
        };

        state.answered.push(state.currentQuestion);

        setTimeout( () => {
            nextQuestion();
        },100);

    }, failure => {
        showSnackbarMessage('There was an error connecting to the server. Try again later.');
        setTimeout( () => { window.location('index.html') },2000);
    });

};

const updateView = () => {
    view.updateProgress(state.progress);
    view.updateScore(state.score);
};

const nextQuestion = async () => {
    state.currentQuestion = await Quiz.fetchQuestion(showResults);
    
    if(!state.currentQuestion) {
       return;
    };

    updateView();
    view.newQuestion(state.currentQuestion);

    state.inProgress = true;
    state.progress++;
};

const showResults = () => {
    state.inProgress = false;
    
    $('#playView').animate({
        width: 0,
        opacity: 0,
    },5, () => { resultViewInit() } )

};

const resultViewInit = () => {
    view.renderResults;
    console.log("resultViewInit");
    
    Quiz.fetchResults().then((results) => {
        displayResultView(results);
    })
    
}

const displayResultView = (results) => {
    
    $(container.mainPanel).load('../dist/html/quiz_result.html', () => {
        $('#resultView').fadeIn('slow');
        // state.id = quizViewModel.id;
        view = new QuizResultView('#resultView', results);

        //mdl upgrade..
        componentHandler.upgradeElements($(container.mainPanel).children());
    });
}



