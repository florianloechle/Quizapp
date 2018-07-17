import createState from './shared/state';
import CombiApp from './Combi/CombiApp';
import HomeDashBoard from './components/HomeDashBoard';
import CreationDashBoard from './components/CreationDashBoard';
import LoginDashBoard from './components/LoginDashBoard';
import RegistrationDashBoard from './components/RegistrationDashBoard';
import UserProfilDashBoard from './components/UserProfileDashBoard';
import PlayDashBoard from './components/PlayDashBoard';

export const globalState = createState();

const QuizApp = new CombiApp({
  root: 'App-Main',
});

QuizApp.addComponent({
  comp: HomeDashBoard,
});

QuizApp.addComponent({
  comp: CreationDashBoard,
});

QuizApp.addComponent({
  comp: LoginDashBoard,
})

QuizApp.addComponent({
  comp: RegistrationDashBoard,
})

QuizApp.addComponent({
  comp: UserProfilDashBoard,
});

QuizApp.addComponent({
  comp: PlayDashBoard,
});

window.onload = () => {
  QuizApp.run();
}















