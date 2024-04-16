class HelpPage {
    constructor() {
        this.helpPageTitle = 
            '//h1[@class = "sc-b7643864-0 dvkYGx"] [contains(text(),"How can we help?")]';
        this.helpInputField = '//input[@type = "text"]';
        this.resultsSection = '//div[@class = "sc-19b504e7-0 yEnNG"]';
        this.HowDoItranferNumberResult = '//div[@class="sc-19b504e7-0 GDNjt"]/h3[contains(text(),"How do I transfer my number to Orange Flex from another network?")]';
        this.HowDoItranferNumberResultTxt = '//*[@id="animation"]/div/div/div[15]/div/div/div/div/div/div/div/div';
    }
    verifyWeAreOnHelpPage() {
        cy.xpath(this.helpPageTitle).should("be.visible");
        cy.xpath(this.helpInputField).should("be.visible");
    }
    typeIntoHelpSearchBar() {
        cy.xpath(this.helpInputField).type('network');
    }
    verifyIfResultsAreCorrect(result) {
        cy.xpath(this.resultsSection).contains(result);
    }
    checkHowDoItranferNumberResultTxtIsVisible(){
        cy.xpath(this.HowDoItranferNumberResult).click();
        cy.xpath(this.HowDoItranferNumberResultTxt).should("be.visible")
    }
}

export default HelpPage;