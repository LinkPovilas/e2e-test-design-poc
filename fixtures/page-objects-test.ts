import { test as base } from "@playwright/test";
import { LoginForm } from "../pages/login-form";
import { LoginError } from "../pages/login-error";
import { InventoryItem } from "../pages/inventory-item";
import { ShoppingCartWidget } from "../pages/shopping-cart-widget";

interface PageObject {
  loginForm: LoginForm;
  loginError: LoginError;
  inventoryItem: InventoryItem;
  shoppingCartWidget: ShoppingCartWidget;
}

export const test = base.extend<PageObject>({
  loginForm: async ({ page }, use) => {
    await use(new LoginForm(page));
  },
  loginError: async ({ page }, use) => {
    await use(new LoginError(page));
  },
  inventoryItem: async ({ page }, use) => {
    await use(new InventoryItem(page));
  },
  shoppingCartWidget: async ({ page }, use) => {
    await use(new ShoppingCartWidget(page));
  },
});
