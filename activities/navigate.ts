import { type Page } from "@playwright/test";
import { pageUrlRegExp } from "../data/page-url-reg-exp";
import { step } from "../decorators/step.decorator";

export class Navigate {
  constructor(private readonly page: Page) {}

  @step
  async toLandingPage() {
    await this.page.goto("/");
    await this.page.waitForURL(pageUrlRegExp.landing);
  }
}
