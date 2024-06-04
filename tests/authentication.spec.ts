import { it, expect } from "../fixtures/tasks-test";
import { pageUrlRegExp } from "../data/page-url-reg-exp";
import { user } from "../data/user";
import { uiErrorMessage } from "../data/ui-error-message";

it.describe("Authentication", () => {
  it.beforeEach(async ({ navigate }) => {
    await navigate.toLandingPage();
  });

  it("should allow standard user to login", async ({ login, page }) => {
    await login.as(user.standard);
    await expect(page).toHaveURL(pageUrlRegExp.inventory);
  });

  it("should display error message for locked out user", async ({
    login,
    loginError,
  }) => {
    await login.as(user.lockedOutUser);
    await expect(loginError.message).toBeVisible();
    await expect(loginError.message).toHaveText(uiErrorMessage.userLockedOut);
  });
});
