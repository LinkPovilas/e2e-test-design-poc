import { step } from "../decorators/step";
import { ShoppingCartWidget } from "../page-objects/shopping-cart-widget";
import { Answerable } from "../utility-types/answerable";

export class ItemsInCart implements Answerable<ItemsInCart> {
  constructor(private readonly shoppingCartWidget: ShoppingCartWidget) {}

  @step
  async count() {
    await this.shoppingCartWidget.link.waitFor();
    const isItemCountVisible =
      await this.shoppingCartWidget.itemCountBage.isVisible();
    if (!isItemCountVisible) {
      return 0;
    }

    const count = await this.shoppingCartWidget.itemCountBage.textContent();
    if (!count) {
      return 0;
    }

    return Number(count);
  }
}
