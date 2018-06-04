import {request} from '../index';

const path = {
    quizCategorys: '../srv/quiz_management/quiz_categorys.php',
    createQuiz: '../srv/quiz_management/quiz_creation.php',
    fetchQuiz: '../srv/quiz_management/quiz_fetchQuiz.php',
    deleteQuiz: '../srv/quiz_management/quiz_deleteQuiz.php',
}

export default class Quiz {

    constructor() {
        
        this.questions = [];
        this.questionCount = 0;
    };

    addQuestion(question) {
        this.questions.push(question);
        this.questionCount++;
    }

    removeQuestion(question) {

        for (let i = 0; i < this.questions.length; i++) {
            if (question == this.questions[i]) {
                this.questions.splice(i, 1);
                this.questionCount--;
                break;
            };
        };
    };

    static async getQuizCategorys() {
       return request(path.quizCategorys,'GET');
    }
}