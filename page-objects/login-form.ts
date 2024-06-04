import { PageObject } from "./page-object";

export class LoginForm extends PageObject {
  get usernameField() {
    return this.page.getByTestId("username");
  }

  get passwordField() {
    return this.page.getByTestId("password");
  }

  get loginButton() {
    return this.page.getByTestId("login-button");
  }
}
