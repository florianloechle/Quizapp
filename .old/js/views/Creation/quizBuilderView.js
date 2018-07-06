import { ViewDecorator } from '../ViewDecorator';
import Validation from '../../manager/Validation';

export default class QuizBuilderView {
  constructor(parent, handler) {
    this.item = $(parent);

    ViewDecorator.DataSetDecorator(this, ['[data-info]', '[data-input]']);
    ViewDecorator.EventListenerDecorator(this, 'click', handler);
  }

  get() {
    return this.item;
  }

  renderCategorys(categorys) {
    this.categorys = categorys;

    categorys.forEach(category => {
      $(this.category.input).append(`<option>${category.name}</option>`);
    });
  }

  validateInput() {
    return Validation.validateText(this.text) && this._validateCategory() && this._isValidDifficulty();
  }

  _isValidDifficulty() {
    let isValid = false;

    isValid = this.difficulty.input.value === 'Medium' || 'Hard' || 'Easy' ? true : false;

    return isValid;
  }

  _validateCategory() {
    let isValid = false;

    for (let cat of this.categorys) {
      if (this.category.input.value === cat.name) {
        isValid = true;
        break;
      }
    }
    return isValid;
  }

  getQuizData() {
    let quizData = {};

    for (let text of this.text) {
      quizData[text.name] = text.input.value;
    }

    for (let cat of this.categorys) {
      if (this.category.input.value === cat.name) {
        quizData.category = cat.id;
        break;
      }
    }

    quizData.difficulty = this.difficulty.input.value;

    return quizData;
  }

  setVisual(count) {
    if (count >= 3) {
      this.tooltip.innerHTML = 'Publish now! :)';
    }

    this.questionCount.innerHTML = count;
  }

  reset() {
    this.setVisual(0);

    for (let text of this.text) {
      text.input.parentElement.MaterialTextfield.change();
    }
  }
}
