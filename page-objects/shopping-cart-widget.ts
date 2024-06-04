import { PageObject } from "./page-object";

export class ShoppingCartWidget extends PageObject {
  get link() {
    return this.page.getByTestId("shopping-cart-link");
  }

  get itemCountBage() {
    return this.page.getByTestId("shopping-cart-badge");
  }
}
