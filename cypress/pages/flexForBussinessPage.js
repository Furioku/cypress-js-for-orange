class FlexForBusinessPage {
    constructor() {
        this.orangeFlexForBusiness = '//h1[@class = "sc-b7643864-0 kSTXcD"]';
        this.planRepresentSection = '//div[@class = "sc-19b504e7-0 epIHBC"]';
        this.googlePlayBtn = 
            '//button[@aria-label = "google play"][@class = "sc-9e55a618-0 gUklYP"]';
        this.googlePlayFlexUrl = 
            'https://play.google.com/store/apps/details?id=com.orange.rn.dop&hl=pl&pli=1';        
    }
    verifyAllPlansArePresentOnPage(plans) {
        cy.xpath(this.orangeFlexForBusiness).should("be.visible");
        cy.xpath(this.planRepresentSection).scrollIntoView().contains(plans);
    }
    enterGooglePlayStore() {
        cy
        .xpath(this.googlePlayBtn)
        .invoke('removeAttr', 'target')
        .click();
        cy.url().should('eq',this.googlePlayFlexUrl);
    }
}

export default FlexForBusinessPage;