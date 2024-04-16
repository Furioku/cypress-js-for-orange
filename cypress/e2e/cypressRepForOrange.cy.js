import MainPage from '../pages/mainPage';
import FlexForBusinessPage from '../pages/flexForBussinessPage';
import HelpPage from '../pages/helpPage';

const bookmarkTestData = require('../fixtures/navMenuBookmarks.json')
const flexForBusinessPlansTestData = require('../fixtures/flexPlansForBusiness.json')
const helpSearchResults = require('../fixtures/helpSearchResults.json')

describe('Some test cases to represent CY skills', () => {
  const mainPage = new MainPage();
  const flexForBussinessPage = new FlexForBusinessPage();
  const helpPage = new HelpPage();

  beforeEach(() =>{
    cy.visit("");
    mainPage.closeCookiePopUp();
  });

  it('Validate main page loading', () => {
    mainPage.mainPageVerification();
  });

  bookmarkTestData.forEach((bookmark) => {
    it(`Verifying if every ${bookmark} is displayd on the main page header navigation bar`, () => {
      mainPage.headerNavBookmarksCheck(bookmark);
    });
  });

  it ('Verify Xiaomi TikTok offer video autoplays correctly', () => {
    mainPage.playTikTokVid();
  });

  it('Enter Flex For Business offer page', () => {
    mainPage.openOfferNavMenu();
    mainPage.navigateToOfferForBusinessPage();
  });

  flexForBusinessPlansTestData.forEach((plans) => {
    it(`Verifying Plan that ${plans} is displayd on the plans representation section`, () => {
      mainPage.openOfferNavMenu();
      mainPage.navigateToOfferForBusinessPage();
      flexForBussinessPage.verifyAllPlansArePresentOnPage(plans);
    });
  });

  it('Verify Google play store link is correct', () => {
    flexForBussinessPage.enterGooglePlayStore();
  });

  it('Enter Help page', () => {
    mainPage.navigateToHelpPage();
    helpPage.verifyWeAreOnHelpPage();
  });

  helpSearchResults.forEach((result) => {
    it(`Verifying that result: ${result} is displayd when searching in help by keyword Network`, () => {
      mainPage.navigateToHelpPage();
      helpPage.verifyWeAreOnHelpPage();
      helpPage.typeIntoHelpSearchBar();
      helpPage.verifyIfResultsAreCorrect(result);
    });
  });

  it('Verify if in the response of Network request How do I transfer my number answer text is displayed', () => {
    mainPage.navigateToHelpPage();
    helpPage.verifyWeAreOnHelpPage();
    helpPage.typeIntoHelpSearchBar();
    helpPage.checkHowDoItranferNumberResultTxtIsVisible();
  });
});