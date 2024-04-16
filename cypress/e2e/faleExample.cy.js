import MainPage from '../pages/mainPage';

describe('Issue I spotted while working with Cypress', () => {
    const mainPage = new MainPage();

    beforeEach(() =>{
        cy.visit("");
      });

      it('Try catch impossibility of actions', () => {
        try {
            cy.xpath('//p[@class="sc-d7eadc97-0 jKXnRd"]').click();            
        } catch (error) {
            mainPage.closeCookieBtn();
        };
      });
    
})