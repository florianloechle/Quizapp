import Component from '../../shared/base';

const cssClasses = {
  wrapper: 'mdl-grid mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--9-col-tablet box-shadow',
  answers: 'mdl-cell mdl-cell--12-col white-cell answer',
  textFieldWrapper: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label full'
}

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        text: '',
        answers: []
      }
    };
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.newQuestion(this.state.question);
  };

  onInputChange = e => {
    const newQuestion = this.state.question;

    newQuestion[e.target.name] = e.target.value;

    this.updateState({
      search: newSearch
    });
  };

  render() {
    return {
      $input: true,      
      html: `<div class=${cssClasses.wrapper}>
      <h4 class="creation-header">Quizfrage hinzufügen</h4>
      <div class="mdl-cell mdl-cell--12-col white-cell">
              <div class="mdl-textfield mdl-js-textfield full">
                      <textarea  {{ name:text }} class="mdl-textfield__input" type="text" rows="3" id="question"></textarea>
                      <label class="mdl-textfield__label" for="question-0-0">Quizfrage</label>
                      <span class="mdl-textfield__error" id="question"></span>
              </div>
      </div>

      <div class="mdl-cell mdl-cell--12-col">
              <h4 class="creation-header">Antwortmöglichkeiten</h4>
      </div>
      <div class=${cssClasses.answers}>
              <div class=${cssClasses.textFieldWrapper}>
                      <input {{ name:answer }} class="mdl-textfield__input" type="text" id="answer">
                      <label class="mdl-textfield__label" for="answer1">Antwortmöglichkeit eins.</label>
                      <span class="mdl-textfield__error" id="answer"></span>
              </div>
      </div>
      <div class=${cssClasses.answers}>
              <div class=${cssClasses.textFieldWrapper}>
                      <input {{ name:answer }} class="mdl-textfield__input" type="text" id="answer">
                      <label class="mdl-textfield__label" for="answer1">Antwortmöglichkeit eins.</label>
                      <span class="mdl-textfield__error" id="answer"></span>
              </div>
      </div>
      <div class=${cssClasses.answers}>
              <div class=${cssClasses.textFieldWrapper}>
                      <input {{ name:answer }} class="mdl-textfield__input" type="text" id="answer">
                      <label class="mdl-textfield__label" for="answer1">Antwortmöglichkeit eins.</label>
                      <span class="mdl-textfield__error" id="answer"></span>
              </div>
      </div>
      <div class=${cssClasses.answers}>
              <div class=${cssClasses.textFieldWrapper}>
                      <input {{ name:answer }} class="mdl-textfield__input" type="text" id="answer">
                      <label class="mdl-textfield__label" for="answer1">Antwortmöglichkeit eins.</label>
                      <span class="mdl-textfield__error" id="answer"></span>
              </div>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
              <button {{ action:addQuestion }} type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                      ">Frage hinzufügen</button>
      </div>

</div>`
    };
  }
}

export default QuestionForm;
