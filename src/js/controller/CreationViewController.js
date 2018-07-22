import QuestionBuilderView from '../views/Creation/questionBuilderView';
import QuizBuilderView from '../views/Creation/quizBuilderView';
import QuestionListView from '../views/Creation/questionListView';
import { container, showSnackbarMessage } from '../index';
import Quiz from '../models/Quiz';
import Question from '../models/Question';

let questionBuilder = null;
let quizBuilder = null;
let questionListView = null;
let quiz = null;

export const creationViewInit = () => {

    $(container.mainPanel).load('../dist/html/quiz_creation.html',() => {
        $('#creation-view').fadeIn('slow');

        quiz = new Quiz();

        quizBuilder = new QuizBuilderView(container.quizBuiler,handleQuizEvents);
        questionBuilder = new QuestionBuilderView(container.questionBuilder,handleQuestionBuildEvents);
        questionListView = new QuestionListView(container.questionListView,handleListEvents);
        
        Quiz.getQuizCategorys().then(categorys => {
            quizBuilder.renderCategorys(categorys);
        });

        quizBuilder.setVisual(quiz.questionCount);

        componentHandler.upgradeElements($(container.creation).children());

    });
};

const handleQuestionBuildEvents = (action) => {
    
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
                questionListView.showQuestion(question);

                quizBuilder.setVisual(quiz.questionCount);
                questionBuilder.clear();

                showSnackbarMessage('Frage hinzugefügt', 1500);
                return;
            }
        };

        let error = {
            for: 'answer',
            message: 'Please select at least one correct answer.'
        };
        questionBuilder.showErrors(error);
        return;

};

const handleQuizEvents = (action,view) => {

    if(action == 'delete')
    {
        console.log("Reset");
        reset();
    }

    if(action !== 'add') {
        return;
    };

    if(!quizBuilder.validateInput()) {
        return;
    };

    if( quiz.questionCount < 3 ) {
        return;
    };

    let quizData = quizBuilder.getQuizData();

    for(let data in quizData) {
        quiz[data] = quizData[data];
    };

    $('#overlay').fadeIn('fast');

    quiz.publish().then(response => {

        //Simulation response time...
        setTimeout( () => {

            if (response.success) {
            
                reset();
    
                $('#overlay').fadeOut('fast');
    
                showSnackbarMessage('Quiz wurde hinzugefügt!', 2500);
    
            } else {
    
                showSnackbarMessage('Fehler, bitte erneut versuchen.', 2500)
            };
        },1000)
        
    })
};

const reset = () => {

    quiz = new Quiz();
    
    quizBuilder.reset(quiz);

    questionListView.removeAll();

    questionBuilder.clear();

};

const handleListEvents = (action,view) => {

    quiz.removeQuestion(view.question);

    view.get().animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        opacity: 0,
        width: "0px"
    },700, () => questionListView.removeQuestionView(view));

    quizBuilder.setVisual(quiz.questionCount);

};
