import * as mdc from 'material-components-web';
import NavMenu from './components/Navigation/NavMenu';
import HomeDashboard from './components/HomeDashboard/HomeDashboard';
import CreationDashboard from './components/CreationDashboard/CreationDashboard';
import UserProfileDashboard from './components/UserProfileDashboard/UserProfileDashboard';

window.onload = e => {
  mdc.autoInit();
};

Combi.newApp({
  components: [
    { el: 'navigation', comp: NavMenu },
    { el: 'app', comp: HomeDashboard, route: '/home' },
    { el: 'app', comp: CreationDashboard, route: '/create' },
    { el: 'app', comp: UserProfileDashboard, route: '/profile' }
  ]
});
