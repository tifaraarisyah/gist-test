import { Selector } from 'testcafe';

export default class Gits {

    constructor (t) {
        // Controller
        this.testController = t;

        // Elements
        this.url                = "https://gist.github.com/";
        this.addNewGits         = "a.HeaderNavlink.text-bold.pr-3";
        this.desc               = "input[name='gist[description]']";
        this.filename           = "input[name='gist[contents][][name]']";
        this.indentMode         = "select#indent-mode";
        this.indentSize         = "select#indent-size";
        this.indentWrapMode     = "select#line-wrap-mode";
        this.textFieldContainer = "div.CodeMirror-scroll";
        this.textPerLine        = "pre.CodeMirror-line";
        this.chooseSpace        = "option[value='space']";
        this.sizeTwo            = "option[value='2']";
        this.wrapOn             = "option[value='Soft wrap']";
        this.addFileBtn         = "button.btn.float-left.js-add-gist-file";
        this.createGistPublic   = "button.btn.js-gist-create[value='1']";
        this.updateBtn          = "button.btn.btn-primary";
    }

    async verifyGitsAddNewBtn() {
        await this.testController.expect(Selector(this.addNewGits).exists).ok();
    }

    async verifyDesc() {
        await this.testController.expect(Selector(this.desc).exists).ok();
    }

    async clickAddNewGits() {
        await this.testController.click(this.addNewGits);
    }

    async inputDesc(words) {
        await this.testController.typeText(this.desc, words)
    }

    async inputFileExtension(extentions) {
        await this.testController.typeText(this.filename, extentions);
    }

    async clickIndent() {
        await this.testController.click(this.indentMode);
    }

    async clickIndentSize() {
        await this.testController.click(this.indentSize);
    }

    async clickWrap() {
        await this.testController.click(this.indentWrapMode);
    }

    async chooseSpaces() {
        await this.testController.click(this.chooseSpace);
    }

    async chooseSpacesSize() {
        await this.testController.click(this.sizeTwo);
    }

    async chooseWrapOn() {
        await this.testController.click(this.wrapOn);
    }

    async inputTextToContainer(words) {
        await this.testController.typeText(this.textPerLine, words);
    }

    async clickTextContainer() {
        await this.testController.click(this.textPerLine);
    }

    async clickAddFileBtn() {
        await this.testController.click(this.addFileBtn);
    }

    async clickPublicGist() {
        await this.testController.click(this.createGistPublic);
    }

    async clickUpdateBtn() {
        await this.testController.click(this.updateBtn);
    }

    async verifyForm() {
        await this.testController.expect(Selector(this.desc).exists).ok();
        await this.testController.expect(Selector(this.filename).exists).ok();
        await this.testController.expect(Selector(this.indentMode).exists).ok();
        await this.testController.expect(Selector(this.indentSize).exists).ok();
        await this.testController.expect(Selector(this.indentWrapMode).exists).ok();
        await this.testController.expect(Selector(this.createGistPublic).exists).ok();
    }
}
