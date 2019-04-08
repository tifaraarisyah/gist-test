import { Selector } from 'testcafe';

export default class Login {
    constructor(t) {

        // TestController
        this.testController = t;

        // Elements
        this.url              = 'https://gist.github.com/';
        this.signInBtn        = "a[data-ga-click='Header, sign in']";
        this.usernameTxtField = "input#login_field";
        this.passwordTxtField = "input#password";
        this.submitButton     = "input[type='submit']";
    }

    async navigatePage() {
        await this.testController.maximizeWindow();
        await this.testController.navigateTo(this.url);
    }

    async clickSignInButton() {
        await this.testController.click(this.signInBtn);
    }

    async verifyAllElements() {
        await this.testController.expect(Selector(this.usernameTxtField).exists).ok();
        await this.testController.expect(Selector(this.passwordTxtField).exists).ok();
        await this.testController.expect(Selector(this.submitButton).exists).ok();
    }

    async login(username, password) {
        await this.testController
            .typeText(this.usernameTxtField, username)
            .typeText(this.passwordTxtField, password)
            .click(this.submitButton);
    }
}
