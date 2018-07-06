import Component from '../../combi/component';

class UserProfileDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizes: []
    };
  }

  handleDeleteQuiz() {};

  render() {
    const { quizes } = this.state;

    return {
      children: []
    };
  }
}

export default UserProfileDashboard;
