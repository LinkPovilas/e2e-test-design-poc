import { step } from "../../decorators/step";
import type { LoginForm } from "../../page-objects/login-form";
import { Actionable } from "../../utility-types/actionable";

export class Enter implements Actionable<Enter> {
  constructor(private readonly loginForm: LoginForm) {}

  @step
  async username(username: string) {
    await this.loginForm.usernameField.fill(username);
  }

  @step
  async password(password: string) {
    await this.loginForm.passwordField.fill(password);
  }
}
