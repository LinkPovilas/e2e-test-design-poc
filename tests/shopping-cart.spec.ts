import { it, expect } from "../fixtures/tasks-test";
import { pageUrlRegExp } from "../data/page-url-reg-exp";
import { user } from "../data/user";

it.describe("Shopping cart", () => {
  const FIRST_ITEM = 0;

  it.beforeEach(async ({ authenticate, page, itemsInCart }) => {
    await authenticate.usingUi(user.standard);
    await expect(page).toHaveURL(pageUrlRegExp.inventory);
    expect(await itemsInCart.count()).toBe(0);
  });

  it("should allow to add an item", async ({ addToCart, itemsInCart }) => {
    await addToCart.byOrder(FIRST_ITEM);
    expect(await itemsInCart.count()).toBe(1);
  });

  it("should allow to remove items", async ({
    itemName,
    addToCart,
    itemsInCart,
    removeFromCart,
  }) => {
    const SECOND_ITEM = 1;
    const firstItemName = await itemName.byOrder(FIRST_ITEM);
    const secondItemName = await itemName.byOrder(SECOND_ITEM);

    await addToCart.byName(firstItemName);
    await addToCart.byName(secondItemName);
    expect(await itemsInCart.count()).toBe(2);

    await removeFromCart.byName(firstItemName);
    expect(await itemsInCart.count()).toBe(1);

    await removeFromCart.byName(secondItemName);
    expect(await itemsInCart.count()).toBe(0);
  });
});
