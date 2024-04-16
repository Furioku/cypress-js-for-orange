require('cypress-xpath');

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("getIframe", () => {
  return cy
    .get(".hs-form-iframe")
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
});