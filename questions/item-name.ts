import { step } from "../decorators/step";
import type { InventoryItem } from "../page-objects/inventory-item";
import { Answerable } from "../utility-types/answerable";

export class ItemName implements Answerable<ItemName> {
  constructor(private readonly inventoryItem: InventoryItem) {}

  @step
  byOrder(order: number) {
    return this.inventoryItem.name.nth(order).innerText();
  }
}
