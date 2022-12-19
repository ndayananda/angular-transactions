describe('Transaction Details Tests', () => {
  it('should show no transaction for unknown transaction id', () => {
    cy.visit('/transactions/1667865600000/5');
    cy.get('.transaction__no-data').should('be.visible').and('contain.text', 'No transaction details!!!');
  });

  it('should show transaction details for valid transaction id', () => {
    cy.intercept('http://localhost:8080/api/transactions').as('getTransactions');
    cy.visit('/transactions/1667865600000/1');
    cy.get('.transaction__title').should('be.visible').and('contain.text', 'Transaction Details');
    cy.wait('@getTransactions');
    cy.get('.transaction__details').should('have.length', 5);
  });

  it('should navigate to transaction page on click back button', () => {
    cy.visit('/transactions/1667865600000/1');
    cy.get('.transaction__back-button').should('be.visible').click();
    cy.url().should('eq', 'http://localhost:4200/transactions');
  });
});