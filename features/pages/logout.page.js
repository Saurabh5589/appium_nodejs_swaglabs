/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage {
/**
     * define selectors using getter methods
     */
get hamburgerMenu() {
    return $('//*[@class="android.view.ViewGroup" and @content-desc ="test-Menu"]');
}

get logoutOption(){
    return $('//*[@class="android.widget.TextView" and @text ="LOGOUT"]');
}

/**
     * a method to encapsule automation code to interact with the page
     */

async logout () {
await this.hamburgerMenu.click();
await this.logoutOption.click();
 }
}

module.exports = new LogoutPage();