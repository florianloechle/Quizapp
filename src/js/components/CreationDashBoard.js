import createState from '../shared/state';

class CreationDashBoard  {

  constructor() {
    this.state = createState({
      quiz: {
        easy: [],
        medium: [],
        hard: []
      }
    });

  }

  componentDidRender() {
    // Do Stuff
  }

  handleCreateQuiz(e) {

  }

  handleResetQuiz(e) {

  }

  handleAddQuestion(e) {


  }

  render() {
    return {
      htmlPath: '../html/quiz_creation.html'
    }
  }

}

export default CreationDashBoard;