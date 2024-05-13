import type { Page } from "@playwright/test";

export abstract class PageObject {
  constructor(protected readonly page: Page) {}
}
