import { test, expect } from "@playwright/test";
import { LoginAction } from "../../src/action/loginAction";
import loginData from "../../src/testdata/login.json";

test.beforeEach(async ({ page }) => {
    await page.goto(loginData.baseUrl);

});

test('TC01 - Valid user should login successfully', async ({ page }) => {
    const loginAction = new LoginAction(page);
    await loginAction.login(loginData.validUser.username, loginData.validUser.password);
    await expect(page).toHaveTitle(loginData.pageTitle);
    await expect(page).toHaveURL(/inventory/);

});



test('TC02 - locked out user should not login', async ({ page }) => {
    const loginAction = new LoginAction(page);
    await loginAction.login(loginData.lockedUser.username, loginData.lockedUser.password);
    const errormsg = await loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.lockedUser.errorMessage);

});


test('TC03-invalid user should not login', async ({ page }) => {
    const loginAction = new LoginAction(page);
    await loginAction.login(loginData.invalidUser.username, loginData.invalidUser.password);
    const errormsg = await loginAction.getErrorMessage();
    await expect(errormsg).toHaveText(loginData.invalidUser.errorMessage);

});