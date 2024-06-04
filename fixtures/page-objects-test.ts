import { test as base } from "@playwright/test";
import { LoginForm } from "../page-objects/login-form";
import { LoginError } from "../page-objects/login-error";
import { InventoryItem } from "../page-objects/inventory-item";
import { ShoppingCartWidget } from "../page-objects/shopping-cart-widget";

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
