import Component from '../../shared/base';

class CreationDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {
        title: '',
        description: '',
        category: '',
        difficulty: ''
      },
      questions: []
    };
  }

  handleNewQuiz = quiz => {
    // ToDO: Validate, Check Questions, create api call
  };

  handleNewQuestion = question => {
    // ToDO: Validate, add to questionState
  };

  render() {
    return {
      children: [
        { comp: QuizForm, props: { newQuiz: this.handleNewQuiz } },
        { comp: QuestionForm, props: { newQuestion: this.handleNewQuestion } }
      ]
    };
  }
}

export default CreationDashboard;
