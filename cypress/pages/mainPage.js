class MainPage {
    constructor() {
        this.cookiePopUp = '//div[@class = "didomi-popup-view"]';
        this.closeCookieBtn = '//span[@class = "didomi-continue-without-agreeing"]';
        this.offerNavBtn = '//nav[@id="navigation"]/div/div[2]/div[1]/div/div/p';
        this.flexForBusiBtn = 
            '//p[@class = "sc-d7eadc97-0 ifcHrs"] [contains(text(),"Orange Flex for Business")]';
        this.navBar = '//nav[@id = "navigation"]';
        this.tikTokSection = '//section[@id="tiktoks"]/div/div/div';
        this.xiaomiVideoTab = '//*[@id="tiktoks"]/div/div/div/div[1]/div[6]/div/div';
        this.xiaomiVideoClip = '//video[@preload = "auto"]';
        this.helpPageBtn = '//p[@class = "sc-d7eadc97-0 dOExzX"] [contains(text(),"Help")]';
        this.mainPageUrl = 'https://flex.orange.pl/en';
        this.offerForBusiUrl = 'https://flex.orange.pl/en/flex-for-business';
        this.helpPageUrl = 'https://flex.orange.pl/en/help';
    }
    urlVerification(url) {
        cy.url().should('eq', url);
    }
    closeCookiePopUp() {
        cy.xpath(this.cookiePopUp).should("be.visible");
        cy.xpath(this.closeCookieBtn).click();
    }
    mainPageVerification() {
        this.urlVerification(this.mainPageUrl);
        cy.xpath(this.navBar).should("be.visible");
    }
    headerNavBookmarksCheck(bookmark) {
        cy.xpath(this.navBar).scrollIntoView().contains(bookmark);
    }
    openOfferNavMenu() {
        cy.xpath(this.offerNavBtn).should("be.visible").click();
        cy.xpath(this.flexForBusiBtn).should("be.visible");
    }
    playTikTokVid() {
        cy.xpath(this.tikTokSection).scrollIntoView()
            .trigger('mouseover')
            .trigger('mousedown')
            .trigger('mousemove', 'left')
        cy.xpath(this.xiaomiVideoTab).click();
        cy.xpath(this.xiaomiVideoClip).should('have.prop', 'autoplay')
    }
    navigateToOfferForBusinessPage() {
        cy.xpath(this.flexForBusiBtn).click();
        this.urlVerification(this.offerForBusiUrl);
    }
    navigateToHelpPage() {
        cy.xpath(this.helpPageBtn).click();
        this.urlVerification(this.helpPageUrl);
    }
}

export default MainPage;