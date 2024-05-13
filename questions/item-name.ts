import { step } from "../decorators/step.decorator";
import type { InventoryItem } from "../pages/inventory-item";

export class ItemName {
  constructor(private readonly inventoryItem: InventoryItem) {}

  @step
  byOrder(order: number) {
    return this.inventoryItem.name.nth(order).innerText();
  }
}
