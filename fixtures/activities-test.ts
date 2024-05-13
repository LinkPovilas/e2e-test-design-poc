import { test as base } from "./questions-test";
import { Login } from "../activities/login";
import { Navigate } from "../activities/navigate";
import { AddToCart } from "../activities/add-to-cart";
import { RemoveFromCart } from "../activities/remove-from-cart";

interface Activity {
  navigate: Navigate;
  login: Login;
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
}

const test = base.extend<Activity>({
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

export { expect } from "@playwright/test";
