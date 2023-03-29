const { expect } = require('@playwright/test');

class Login {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('//*/ul/li/span[contains(text(), "Login")]');
        this.SmartSlidesButton = page.locator('//*/li/a[contains(@title, "Log in to SmartSlides")]');
        this.emailField = page.locator('input[name="email"]');
        this.continueButton = page.locator('button:text("Continue")');
        this.processingButton = page.locator('button:text("Processing...")');
        this.passwordField = page.locator('input[name="password"]');
        this.signInButton = page.locator('button:text("Log In")');
        this.addSlideButton = page.locator('button[class="c-collections__add"]');
    }

    async goToMainPage() {
        await this.page.goto('https://www.pixellu.com/smartslides/', { timeout: 50000 });
    }

    async login() {
        await this.loginButton.click();
        await expect(this.SmartSlidesButton).toBeVisible;
        await this.SmartSlidesButton.click();
        await expect(this.page.locator('h1[class="ulf-form-instructions"]')).toContainText('Enter your email address');
    }

    async enterEmail() {
        await this.emailField.type('ta_interview@pixellu.com');
        await this.continueButton.click();
        await expect(this.processingButton).toBeVisible;
    }

    async enterPassword() {
        await this.passwordField.type('ta_interview');
        await this.signInButton.click();
        await expect(this.processingButton).toBeVisible;
    }

    async slideShowsScreenDisplaying() {
        await expect(this.addSlideButton).toBeVisible;
    }

    async enterEmptyValue() {
        await this.emailField.type('');
        await this.continueButton.click();
        await expect(this.processingButton).toBeVisible;
    }

    async loginError() {
        await expect(this.page.locator('span[class="overflow-error"]')).toContainText('This field may not be blank.');
    }
}

module.exports = { Login };