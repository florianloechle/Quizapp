import createState from './shared/state';
import CombiApp from './Combi/CombiApp';
import CombiDOM from './Combi/CombiDOM';
import HomeDashBoard from './components/HomeDashBoard';
import CreationDashBoard from './components/CreationDashBoard';
import LoginDashBoard from './components/LoginDashBoard';
import RegistrationDashBoard from './components/RegistrationDashBoard';
import UserProfilDashBoard from './components/UserProfileDashBoard';
import PlayDashBoard from './components/PlayDashBoard';

export const globalState = createState();

const QuizApp = new CombiApp([
  {
    type: HomeDashBoard,
    root: true
  },
  {
    type: CreationDashBoard
  },
  {
    type: LoginDashBoard
  },
  {
    type: RegistrationDashBoard
  },
  {
    type: UserProfilDashBoard
  },
  {
    type: PlayDashBoard
  }
]);

const DOM = new CombiDOM();

window.onload = () => {
  DOM.render(QuizApp,'App-Main');
}

