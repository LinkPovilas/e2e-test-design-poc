import { step } from "../../decorators/step";
import type { InventoryItem } from "../../page-objects/inventory-item";
import { Actionable } from "../../utility-types/actionable";

export class AddToCart implements Actionable<AddToCart> {
  constructor(private readonly inventoryItem: InventoryItem) {}

  @step
  async byOrder(order: number) {
    await this.inventoryItem.addToCartButton.nth(order).click();
  }

  @step
  async byName(name: string) {
    await this.inventoryItem.widget
      .filter({ hasText: name, has: this.inventoryItem.name })
      .locator(this.inventoryItem.addToCartButton)
      .click();
  }
}
