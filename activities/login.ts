import { step } from "../decorators/step.decorator";
import type { LoginForm } from "../pages/login-form";

interface User {
  username: string;
  password: string;
}

export class Login {
  constructor(private readonly loginForm: LoginForm) {}

  @step
  async as({ username, password }: User) {
    await this.loginForm.usernameField.fill(username);
    await this.loginForm.passwordField.fill(password);
    await this.loginForm.loginButton.click();
  }
}
