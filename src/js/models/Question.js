import {request} from '../index';

export default class Question {

    constructor(questionText, answers) {
        this.questionText = questionText;
        this.answers = answers;
    };

}