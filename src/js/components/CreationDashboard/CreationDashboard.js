import Component from '../../combi/component';

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

  handleNewQuiz(quiz) {
    // ToDO: Validate, Check Questions, create api call
  };

  handleNewQuestion(question) {
    // ToDO: Validate, add to questionState
  };

  handleDeleteQuestion(question) {
    // ToDO: Delete question from state
  };

  render() {
    const {questions} = this.state;

    return {
      children: [
        { comp: QuizForm, input: true, props: { newQuiz: this.handleNewQuiz } },
        { comp: QuestionForm, input: true, props: { newQuestion: this.handleNewQuestion } },
        { comp: QuestionList, input: true, props: { questions: questions, deleteQuestion: this.handleDeleteQuestion } }
      ]
    };
  }
}

export default CreationDashboard;
