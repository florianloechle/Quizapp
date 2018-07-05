/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

import Component from '../../shared/base';

class QuizForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {
        category: '',
        creator: '',
        id: '',
        title: ''
      }
    };
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.createQuiz(this.state.quiz);
  }

  onInputChange = e => {
    const newQuiz = this.state.quiz;

    newQuiz[e.target.name] = e.target.value;

    this.updateState({
      quiz: newQuiz
    });
  };

  render() {
    return {
      children: []
    };
  }
}

export default QuizForm;