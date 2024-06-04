import { step } from "../../decorators/step";
import { Actionable } from "../../utility-types/actionable";
import type { Login, User } from "./login";
import type { Navigate } from "../interactions/navigate";

export class Authenticate implements Actionable<Authenticate> {
  constructor(
    private readonly navigate: Navigate,
    private readonly login: Login
  ) {}

  @step
  async usingUi(user: User) {
    await this.navigate.toLandingPage();
    await this.login.as(user);
  }

  @step
  async usingApi() {
    // add code here
  }
}
