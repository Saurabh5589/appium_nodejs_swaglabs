
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get usernameInput() {
        return $('//*[@class="android.widget.EditText" and @text ="Username"]');
    }

    get passwordInput() {
        return $('//*[@class="android.widget.EditText" and @text ="Password"]');
    }

    get loginButton() {
        return $('//*[@class="android.widget.TextView" and @text ="LOGIN"]');
    }

    get productsHeader() {
        return $('//*[@class="android.widget.TextView" and @text ="PRODUCTS"]');
    }

    get errorMessage() {
        return $('//*[@class="android.widget.TextView" and contains(@text, "Username and password do not match")]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        const usernameInput = await this.usernameInput;
        const passwordInput = await this.passwordInput;
        const loginButton = await this.loginButton;

        // Ensure elements are defined before interacting with them
        if (usernameInput && passwordInput && loginButton) {
            await usernameInput.setValue(username);
            await passwordInput.setValue(password);
            await loginButton.click();
        } else {
            throw new Error('Element not found for login');
        }
    }

    async isProductsHeaderDisplayed() {
        await this.productsHeader.waitForDisplayed();
        return await this.productsHeader.isExisting();
    }

    async isErrorMessageDisplayed() {
        await this.errorMessage.waitForDisplayed();
        return await this.errorMessage.isExisting();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
