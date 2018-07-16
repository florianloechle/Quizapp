import createState from './shared/state';
import {App} from './Combi/CombiApp';
import HomeDashBoard from './components/HomeDashBoard/HomeDashBoard';

export const globalState = createState();

const QuizApp = new App({
  root: '#mainPanel',
});

QuizApp.addComponent({
  comp: HomeDashBoard,
  route: '',
});

QuizApp.addComponent({
  comp: CreationDashBoard,
  route: /creation/
});

QuizApp.addComponent({
  comp: UserProfilDashBoard,
  route: /profile/
});

QuizApp.addComponent({
  comp: PlayDashBoard,
  route: /play/
});















