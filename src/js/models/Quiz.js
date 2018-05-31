import {request} from '../index';

export default class Quiz {

    constructor() {
        
    }

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
}