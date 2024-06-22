import { ItemName } from "../page-queries/item-name";
import { ItemsInCart } from "../page-queries/items-in-cart";
import { test as base } from "./page-objects-test";

interface PageQuery {
  itemName: ItemName;
  itemsInCart: ItemsInCart;
}

export const test = base.extend<PageQuery>({
  itemName: async ({ inventoryItem }, use) => {
    await use(new ItemName(inventoryItem));
  },
  itemsInCart: async ({ shoppingCartWidget }, use) => {
    await use(new ItemsInCart(shoppingCartWidget));
  },
});
