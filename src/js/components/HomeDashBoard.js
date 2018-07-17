import createState from '../shared/state';

class HomeDashBoard  {

  constructor(previousState) {
    this.state = createState(previousState || {
      search: {
        id: '',
        name: '',
        category: '',
        creator: ''
      },
      quiz: {
        easy: [],
        medium: [],
        hard: []
      }
    });
  }

  componentDidRender() {
   
  }

  handleSearch(e) {
    console.log('clicked');
  }

  render() {
    return {
      htmlPath: '../html/quiz_main.html'
    }
  }

}

export default HomeDashBoard;