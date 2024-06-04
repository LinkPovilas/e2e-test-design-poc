import { Authenticate } from "../activities/tasks/authenticate";
import { Login } from "../activities/tasks/login";
import { test as base } from "./interactions-test";

interface Task {
  login: Login;
  authenticate: Authenticate;
}

const test = base.extend<Task>({
  login: async ({ loginForm }, use) => {
    await use(new Login(loginForm));
  },
  authenticate: async ({ navigate, login }, use) => {
    await use(new Authenticate(navigate, login));
  },
});

export { test, test as it };
export { expect } from "@playwright/test";
