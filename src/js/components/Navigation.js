class Navigation {
  constructor(user) {
    this.user = user;
  }

  handleLogout(e) {
    // logout user
  }

  render() {
    return {
      root: '#Navigation',
      html: true
      ? (`<div>
            <a cb_nav="MainDashBoard" class="mdl-navigation__link">Spielen</a>
            <a cb_nav="CreationDashBoard" class="mdl-navigation__link">Neues Quiz erstellen</a>
            <a cb_nav="UserDashBoard" class="mdl-navigation__link">Deine Quizze</a>
            <a cb_onClick="handleLogout" class="mdl-navigation__link">Ausloggen</a>
        </div>`)
      : 
      (`<div>
            <a cb_nav="MainDashBoard" class="mdl-navigation__link">Spielen</a>
            <a cb_nav="LoginDashBoard" class="mdl-navigation__link">Mein Account</a>
      </div>`)
    }
  }
}

export default Navigation;
