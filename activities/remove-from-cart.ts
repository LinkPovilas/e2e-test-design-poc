import { step } from "../decorators/step.decorator";
import type { InventoryItem } from "../pages/inventory-item";

export class RemoveFromCart {
  constructor(private readonly inventoryItem: InventoryItem) {}

  @step
  async byOrder(order: number) {
    await this.inventoryItem.removeFromCartButton.nth(order).click();
  }

  @step
  async byName(name: string) {
    await this.inventoryItem.widget
      .filter({ hasText: name, has: this.inventoryItem.name })
      .locator(this.inventoryItem.removeFromCartButton)
      .click();
  }
}
