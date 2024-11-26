const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const LoginPage = require('../pages/login.page');
const LogoutPage = require('../pages/logout.page');

Given('I launch the app', async () => {
});

When('I log in with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password)
});

Then('I should see the {string} header', async (headerText) => {
    const isDisplayed = await LoginPage.isProductsHeaderDisplayed();
    assert.equal(isDisplayed, true, `${headerText} should be displayed on the page`);
});

Then('I should see the {string} message', async (messageText) => {
    const isDisplayed = await LoginPage.isErrorMessageDisplayed();
    const errorText =  await LoginPage.getErrorMessage();
    assert.equal(isDisplayed, true, `${messageText} should be displayed on the page`);
    assert.equal(errorText, messageText, `${messageText} should be displayed on the page`);
});

Then('I logout from the app', async () => {
await LogoutPage.logout();
});
