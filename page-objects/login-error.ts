import { PageObject } from "./page-object";

export class LoginError extends PageObject {
  get message() {
    return this.page.getByTestId("error");
  }
}
