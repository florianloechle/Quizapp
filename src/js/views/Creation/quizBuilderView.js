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

        for (let cat of this.categorys) {
            if (cat.input.value === cat.name) {
                isValid = true;
                break;
            };
        };
        return isValid;
    }

    getQuizDescription() {
        
    }

    setVisual(count) {
        if (count >= 5) {

            this.tooltip.innerHTML = 'Publish now! :)'
        };

        this.questionCount.innerHTML = count;
    }
}