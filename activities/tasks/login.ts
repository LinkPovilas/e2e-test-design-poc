import { step } from "../../decorators/step";
import type { LoginForm } from "../../page-objects/login-form";
import { Actionable } from "../../utility-types/actionable";

export interface User {
  username: string;
  password: string;
}

export class Login implements Actionable<Login> {
  constructor(private readonly loginForm: LoginForm) {}

  @step
  async as({ username, password }: User) {
    await this.loginForm.usernameField.fill(username);
    await this.loginForm.passwordField.fill(password);
    await this.loginForm.loginButton.click();
  }
}
