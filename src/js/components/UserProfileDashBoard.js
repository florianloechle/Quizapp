import createState from '../shared/state';

class UserProfileDashBoard  {

  constructor() {
    this.state = createState({
      quiz: []
    });
  }

  componentDidRender() {
    // Do Stuff
  }

  handleQuizDeletion(e) {

  }

  render() {
    return {
      html: `<div id="UserProfileDashBoard" class="mdl-grid mdl-cell--top"></div>`
    }
  }

}

export default UserProfileDashBoard;