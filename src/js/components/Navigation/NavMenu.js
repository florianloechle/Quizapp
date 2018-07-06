import Component from '../../combi/component';
import NavTopAppBar from './NavTopAppBar';
import NavDrawer from './NavDrawer';

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerIsOpen: false,
      isLoggedIn: false,
      username: '',
      userID: ''
    };

    this.handleDrawer = this.handleDrawer.bind(this);
  }

  componentDidRender() {
    // ToDO: Fetch logged in Data.
  }

  handleDrawer() {
    this.mdc['drawer'].open = !this.state.drawerIsOpen;

    this.updateState({
      drawerIsOpen: !this.state.drawerIsOpen
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return {
      html: `<div id="navigation"></div>`,
      children: [
        { comp: NavTopAppBar, props: { loggedIn: isLoggedIn } },
        { comp: NavDrawer, props: { loggedIn: isLoggedIn, username: username, isOpen: this.handleDrawer } }
      ]
    };
  }
}

export default NavMenu;
