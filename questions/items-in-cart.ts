import { step } from "../decorators/step.decorator";
import { ShoppingCartWidget } from "../pages/shopping-cart-widget";

export class ItemsInCart {
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
