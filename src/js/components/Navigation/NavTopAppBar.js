import Component from '../../combi/component';

class NavTopAppBar extends Component {
  
  render() {
    const {isLoggedIn, username } = this.props;

    return {
      html: `
      <aside class="mdc-drawer mdc-drawer--persistent mdc-typography" data-mdc-auto-init="MDCPersistentDrawer">
      <nav class="mdc-drawer__drawer">
          <header class="mdc-drawer__header">
              <div class="mdc-drawer__header-content">
                  DHBW Quiz App. Welcome ${isLoggedIn ? username : 'Guest'}!
              </div>
          </header>
          <nav id="icon-with-text-demo" class="mdc-drawer__content mdc-list">
              <a class="mdc-list-item mdc-list-item--activated" href="#">
                  <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox
              </a>
              <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star
              </a>
          </nav>
      </nav>
      </aside>
      `
    };
  }
}

export default NavTopAppBar;