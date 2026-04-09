import{test as base} from "@playwright/test"
import { LoginAction } from "../action/loginAction";
 
type fixture = {
    loginAction: LoginAction;
};

export const test = base.extend<fixture>({
    loginAction: async ({ page }, use) => {
        const loginAction = new LoginAction(page);
        await use(loginAction);
    },
});

export { expect } from "@playwright/test";
