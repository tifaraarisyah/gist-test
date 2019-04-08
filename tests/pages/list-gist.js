import { Selector } from 'testcafe';

export default class Gits {
    constructor(t) {
        this.testController = t;

        this.editButton     = "a[aria-label='Edit this Gist']";
        this.deleteButton   = "button[aria-label='Delete this Gist']";
        this.firstGits      = "a.css-truncate.d-block";
    }

    async clickEditBtn() {
        await this.testController.click(this.editButton);
    }

    async clickDeleteBtn() {
        await this.testController.setNativeDialogHandler(() => true).click(this.deleteButton);
    }

    async clickExistingGits() {
        await this.testController.click(this.firstGits);
    }

    async clickOk() {
        await this.testController.pressKey('enter');
    }

    async verifyListOfGitsPublic() {
        await this.testController.expect(Selector(this.firstGits)).ok();
    }

    async verifyElementDetails() {
        await this.testController.expect(Selector(this.editButton)).ok();
        await this.testController.expect(Selector(this.deleteButton)).ok();
    }
}
