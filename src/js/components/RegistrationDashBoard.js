import createState from '../shared/state';

class RegistrationDashBoard  {

  constructor() {
    this.state = createState({
      user: {
        username: '',
        password: '',
        repeatPassword: '',
        email: ''
      }
    });
  }

  componentDidRender() {
    // Do Stuff
  }

  handleRegistration(e) {
    console.log(this.state.get());
  }

  render() {
    return {
      html: 
      `<div id="RegistrationDashBoard" class="user-management-view" style="display:none">
        <form class="v-form box-shadow" method="post" autocomplete="on">
          <h4 class="v-form-header">Registrierung</h4>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input cb:onChange="handleInputChange" cb:name="username" class="mdl-textfield__input" type="text" id="username" autocomplete="on">
              <label class="mdl-textfield__label" for="username">Benutzername</label>
              <span class="mdl-textfield__error" id="register-username-error"></span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input cb:onChange="handleInputChange" cb:name="password" data-input="text" class="mdl-textfield__input" type="password"
                  id="password" autocomplete="new-password">
              <label class="mdl-textfield__label" for="password">Passwort</label>
              <span class="mdl-textfield__error" id="register-password-error"></span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input cb:onChange="handleInputChange" cb:name="repeatPassword" class="mdl-textfield__input" type="password" id="repeatPassword"
                  autocomplete="new-password">
              <label class="mdl-textfield__label" for="repeatPassword">Passwort wiederholen</label>
              <span class="mdl-textfield__error" id="repeatPassword-error"></span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input cb:onChange="handleInputChange" cb:name="email" class="mdl-textfield__input" type="email" id="email" autocomplete="email">
              <label class="mdl-textfield__label" for="email">E-Mail</label>
              <span class="mdl-textfield__error" id="register-email-error"></span>
          </div>
          <br>
          <button cb:onClick="handleRegister" value="Sign Up" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
             >Register</button>
      </form>
    </div>`
    }
  }

}

export default RegistrationDashBoard;