import { Authenticate } from "../page-actions/tasks/authenticate";
import { test as base } from "./interactions-test";
import { Login } from "../page-actions/tasks/login";

interface Task {
  login: Login;
  authenticate: Authenticate;
}

const test = base.extend<Task>({
  login: async ({ enter, click }, use) => {
    await use(new Login(enter, click));
  },
  authenticate: async ({ navigate, login }, use) => {
    await use(new Authenticate(navigate, login));
  },
});

export { test, test as it };
export { expect } from "@playwright/test";
