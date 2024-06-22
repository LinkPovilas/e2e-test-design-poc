import { Authenticate } from "../page-actions/tasks/authenticate";
import { test as base } from "./interactions-test";

interface Task {
  authenticate: Authenticate;
}

const test = base.extend<Task>({
  authenticate: async ({ navigate, login }, use) => {
    await use(new Authenticate(navigate, login));
  },
});

export { test, test as it };
export { expect } from "@playwright/test";
