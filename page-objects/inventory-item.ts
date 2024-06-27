import { PageObject } from "./page-object";

export class InventoryItem extends PageObject {
  get widget() {
    return this.page.getByTestId("inventory-item");
  }

  get name() {
    return this.page.getByTestId("inventory-item-name");
  }

  get price() {
    return this.page.getByTestId("inventory-item-price");
  }

  get addToCartButton() {
    return this.page.getByRole("button", { name: "Add to cart" });
  }

  get removeFromCartButton() {
    return this.page.getByRole("button", { name: "Remove" });
  }
}
