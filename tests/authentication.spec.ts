import { it, expect } from "../fixtures/tasks-test";
import { pageUrlRegExp } from "../data/page-url-reg-exp";
import { user } from "../data/user";
import { uiErrorMessage } from "../data/ui-error-message";

it.describe("Authentication", () => {
  it.beforeEach(async ({ navigate }) => {
    await navigate.toLandingPage();
  });

  it("should require username", async ({ click, loginError }) => {
    await click.login();
    await expect(loginError.message).toHaveText(
      uiErrorMessage.usernameIsRequired
    );
  });

  it("should require password", async ({ enter, click, loginError }) => {
    await enter.username(user.standard.username);
    await click.login();
    await expect(loginError.message).toHaveText(
      uiErrorMessage.passwordIsRequired
    );
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
