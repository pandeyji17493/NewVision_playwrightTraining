import { Page } from "@playwright/test";
import { LoginPage } from "../page/loginPage";

export class LoginAction {

    readonly loginPage: LoginPage;

    constructor(Page: Page) {
        this.loginPage = new LoginPage(Page);
    }

    async login(username: string, password: string) {
        await this.loginPage.usernameInput.fill(username);
        await this.loginPage.passwordInput.fill(password);
        await this.loginPage.loginButton.click();
    }

    async getErrorMessage() {
        return this.loginPage.errorMessage;
    }

}
