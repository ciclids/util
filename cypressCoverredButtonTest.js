
context('Covererd button test', () => {
    beforeEach(() => {
        cy.visit('https://getbootstrap.com/docs/4.0/components/dropdowns/')
    })

    it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        // cy.get('.navbar-toggler-icon').click();
        cy.get(':nth-child(36) > :nth-child(1) > :nth-child(1) > .btn').click();
        cy.get(':nth-child(36) > :nth-child(2) > :nth-child(1) > .btn').click();
    })
});
