import { test as base } from "./page-queries-test";
import { Navigate } from "../page-actions/interactions/navigate";
import { Login } from "../page-actions/interactions/login";
import { AddToCart } from "../page-actions/interactions/add-to-cart";
import { RemoveFromCart } from "../page-actions/interactions/remove-from-cart";

interface Interaction {
  navigate: Navigate;
  login: Login;
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
}

export const test = base.extend<Interaction>({
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
