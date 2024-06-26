import { step } from "../../decorators/step";
import type { LoginForm } from "../../page-objects/login-form";
import { Actionable } from "../../utility-types/actionable";

export class Click implements Actionable<Click> {
  constructor(private readonly loginForm: LoginForm) {}

  @step
  async login() {
    await this.loginForm.loginButton.click();
  }
}
