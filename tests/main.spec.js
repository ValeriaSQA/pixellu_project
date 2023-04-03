const { test, expect } = require('@playwright/test');
const { Login } = require('../page-objects/Login.js');

test.describe('Test task', async () => {
    test.beforeEach( async ({ page }) => {
        const login = new Login(page);
        await login.goToMainPage();
        await expect(page.locator('[class="page-title"]')).toHaveText('Make beautiful slideshows');
    });

    test('Positive login check', async({ page }) => {
        const login = new Login(page);
        await login.login();
        await login.enterEmail();
        await login.enterPassword();
        await login.slideShowsScreenDisplaying();
    });

    test('Negative login check', async({ page }) => {
        const login = new Login(page);
        await login.login();
        await login.enterEmptyValue();
        await login.loginError();
    });
});
