import { ItemName } from "../questions/item-name";
import { ItemsInCart } from "../questions/items-in-cart";
import { test as base } from "./page-objects-test";

interface Question {
  itemName: ItemName;
  itemsInCart: ItemsInCart;
}

export const test = base.extend<Question>({
  itemName: async ({ inventoryItem }, use) => {
    await use(new ItemName(inventoryItem));
  },
  itemsInCart: async ({ shoppingCartWidget }, use) => {
    await use(new ItemsInCart(shoppingCartWidget));
  },
});
