import createState from '../shared/state';

class PlayDashBoard  {

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


  render() {
    return {
      htmlPath: '../dist/html/quiz_play.html'
    }
  }

}

export default PlayDashBoard;