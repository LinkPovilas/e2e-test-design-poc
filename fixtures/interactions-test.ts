import { test as base } from "./page-queries-test";
import { Navigate } from "../page-actions/interactions/navigate";
import { AddToCart } from "../page-actions/interactions/add-to-cart";
import { RemoveFromCart } from "../page-actions/interactions/remove-from-cart";
import { Enter } from "../page-actions/interactions/enter";
import { Click } from "../page-actions/interactions/click";

interface Interaction {
  navigate: Navigate;
  enter: Enter;
  click: Click;
  addToCart: AddToCart;
  removeFromCart: RemoveFromCart;
}

export const test = base.extend<Interaction>({
  navigate: async ({ page }, use) => {
    await use(new Navigate(page));
  },
  enter: async ({ loginForm }, use) => {
    await use(new Enter(loginForm));
  },
  click: async ({ loginForm }, use) => {
    await use(new Click(loginForm));
  },
  addToCart: async ({ inventoryItem }, use) => {
    await use(new AddToCart(inventoryItem));
  },
  removeFromCart: async ({ inventoryItem }, use) => {
    await use(new RemoveFromCart(inventoryItem));
  },
});
