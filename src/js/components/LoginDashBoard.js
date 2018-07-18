import createState from '../shared/state';

class LoginDashBoard  {

  constructor() {
    this.state = createState({
      user: {
        username: '',
        password: ''
      }
    });
  }

  componentDidRender() {
    // Do Stuff
  }

  handleLogin(e) {
    console.log(this.state.get());
  }

  render() {
    return {
      html: `<div id="LoginDashBoard" class="user-management-view" style="display:none">
        <form class="v-form box-shadow" method="post" autocomplete="on">
            <h4 class="v-form-header">Einloggen</h4>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input cb_onChange="handleInputChange" cb:name="username" type="username" id="username" class="mdl-textfield__input" autocomplete="username">
                <label class="mdl-textfield__label" for="username">Benutzername</label>
                <span class="mdl-textfield__error" id="login-username-error"></span>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input cb_onChange="handleInputChange" cb:name="password" class="mdl-textfield__input" type="password" id="password" autocomplete="current-password">
                <label class="mdl-textfield__label" for="password">Passwort</label>
                <span class="mdl-textfield__error" id="login-password-error"></span>                
            </div><br>
            <button cb_onClick="handleLogin" type="button" value="Sign In" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Login</button><br>
            <a style="padding-top: 5px">Du hast noch keinen Account? Dann klicke auf <span style="color:blue" data-action="register" href="#" id="i4">Registrieren</span></a>
        </form>
      </div>` 
    }
  }

}

export default LoginDashBoard;