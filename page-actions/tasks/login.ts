import { step } from "../../decorators/step";
import { Actionable } from "../../utility-types/actionable";
import type { Enter } from "../interactions/enter";
import type { Click } from "../interactions/click";

export interface User {
  username: string;
  password: string;
}

export class Login implements Actionable<Login> {
  constructor(private readonly enter: Enter, private readonly click: Click) {}

  @step
  async as({ username, password }: User) {
    await this.enter.username(username);
    await this.enter.password(password);
    await this.click.loginButton();
  }
}
