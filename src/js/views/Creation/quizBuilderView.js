import View from '../View';
import Validation from '../Validation';

export default class QuizBuilderView {

    constructor(parent,handler) {
        View.register(this,parent,handler);
    };

    renderCategorys(categorys) {
        this.categorys = categorys;

        categorys.forEach(category => {
            $(this.category.input).append(`<option>${category.name}</option>`)
        });

    };

    validateInput() {
        return Validation.validateText(this.text);
    };

    _isValidDifficulty() {
        let isValid = false;

        isValid = this.difficulty.input.value === 'Medium' || 'Hard' || 'Easy' ? true : false;
        this.quiz.difficulty = isValid ? this.difficulty.input.value : null;

        return isValid;
    }

    _validateCategory() {
        let isValid = false;

        for (let i = 0; i < this.categorys.length; i++) {
            if (this.category.input.value === this.categorys[i].name) {
                isValid = true;
                this.quiz.category = this.categorys[i].id;
                break;
            };
        };
        return isValid;
    }

    _validateQuestion() {
        if (this.quiz.questionCount <= 1) {
            this.tooltip.innerHTML = 'Must be more than 5 questions'
            return false;
        }
        return true;
    }

    updateVisual() {
        if (this._validateQuestion()) {
            this.tooltip.innerHTML = 'Publish now! :)'
        };

        this.questionCount.innerHTML = this.quiz.getQuestionCount();
    }



}