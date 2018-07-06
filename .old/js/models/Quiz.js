import {request} from '../app';

const path = {
    quizCategorys: '../srv/quiz_management/quiz_categorys.php',
    createQuiz: '../srv/quiz_management/quiz_creation.php',
    fetchQuiz: '../srv/quiz_management/quiz_fetchQuiz.php',
    deleteQuiz: '../srv/quiz_management/quiz_deleteQuiz.php',
    playQuiz: '../srv/quiz_management/quiz_play.php',
    fetchQuestion: '../srv/quiz_management/quiz_fetchQuestion.php',
    fetchResults: '../srv/quiz_management/quiz_fetchResults.php',
};

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

    async publish() {

        let simpleQuiz = {
            name: this.name,
            category: this.category,
            difficulty: this.difficulty,
            questions: this.questions,
            description: this.description
        };

        const jsonQuiz = {
            quiz: JSON.stringify(simpleQuiz)
        };

        return request(path.createQuiz,jsonQuiz,'POST');
    };

    static async startQuiz(value) {
        return request(path.playQuiz,value,'POST');
    };

    static async fetchQuestion(errorback) {
        let data = await request(path.fetchQuestion,'POST');

        if(data.error) {
            errorback();
            return null;
        };

        return data;
    };

    static async getQuizCategorys() {
       return request(path.quizCategorys,'GET');
    };

    static async delete(id) {
        return request(path.deleteQuiz,({id: id}),'POST');
    };

    static async fetchAnswers(value) {
        return request(path.fetchQuestion,value,'POST');
    };

    static async fetchResults() {
        return request(path.fetchResults,'test','POST');
    };
}