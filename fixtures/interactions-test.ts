import { test as base } from "./questions-test";
import { Login } from "../activities/tasks/login";
import { Navigate } from "../activities/interactions/navigate";
import { AddToCart } from "../activities/interactions/add-to-cart";
import { RemoveFromCart } from "../activities/interactions/remove-from-cart";

interface Interaction {
  navigate: Navigate;
  login: Login;
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
}

const test = base.extend<Interaction>({
  navigate: async ({ page }, use) => {
    await use(new Navigate(page));
  },
  login: async ({ loginForm }, use) => {
    await use(new Login(loginForm));
  },
  addToCart: async ({ inventoryItem }, use) => {
    await use(new AddToCart(inventoryItem));
  },
  removeFromCart: async ({ inventoryItem }, use) => {
    await use(new RemoveFromCart(inventoryItem));
  },
});

export { test, test as it };
