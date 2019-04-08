import SignIn from './pages/login';
import GitsHome from './pages/gist-page';
import ListGits from './pages/list-gist';

const env = require('dotenv').config();
const username = process.env.GIST_USERNAME;
const password = process.env.GIST_PASSWORD;
let login;
let gits;
let listGits;

fixture `Sample Automation Gits`;

test('As a user, I want to create a public gist.', async t => {

    login = new SignIn(t);
    gits = new GitsHome(t);

    await login.navigatePage();
    await login.clickSignInButton();
    await login.verifyAllElements();
    await login.login(username, password);

    const contents = {
        description: 'sample gits',
        extention: '.txt',
        words: 'Hello World',
    };

    await gits.verifyGitsAddNewBtn();
    await gits.clickAddNewGits();
    await gits.verifyForm();

    // Fill Form Desc and Extentions
    await gits.inputDesc(contents.description);
    await gits.inputFileExtension(contents.extention);

    // Choose indent
    await gits.clickIndent();
    await gits.chooseSpaces();

    // Choose indent Size
    await gits.clickIndentSize();
    await gits.chooseSpacesSize();

    // FIll Container Contents
    await gits.clickTextContainer();
    await gits.inputTextToContainer(contents.words);

    // Make a public
    await gits.clickPublicGist();
});

test('As a user, I want to see my list of gists..', async t => {
    login = new SignIn(t);
    gits = new GitsHome(t);
    listGits = new ListGits(t);

    await login.navigatePage();
    await login.clickSignInButton();
    await login.verifyAllElements();
    await login.login(username, password);

    await gits.clickAddNewGits();
    await listGits.verifyListOfGitsPublic();
});

test('As a user, I want to edit an existing gist.', async t => {
    login = new SignIn(t);
    gits = new GitsHome(t);
    listGits = new ListGits(t);

    await login.navigatePage();
    await login.clickSignInButton();
    await login.verifyAllElements();
    await login.login(username, password);

    await gits.clickAddNewGits();

    await listGits.clickExistingGits();
    await listGits.clickEditBtn();

    await gits.inputDesc(' Edited');
    await gits.clickUpdateBtn();
});

test('As a user, I want to delete an existing gist.', async t => {
    login = new SignIn(t);
    gits = new GitsHome(t);
    listGits = new ListGits(t);

    await login.navigatePage();
    await login.clickSignInButton();
    await login.verifyAllElements();
    await login.login(username, password);

    await gits.clickAddNewGits();

    await listGits.clickExistingGits();
    await listGits.verifyElementDetails();
    await listGits.clickDeleteBtn();
    await listGits.clickOk();
});
