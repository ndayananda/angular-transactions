describe('Transaction Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should default redirect to transactions page', () => {
    cy.url().should('eq', 'http://localhost:4200/transactions');
    cy.get('.transactions').should('be.visible').and('contain.text', 'Transactions');
  });

  it('should default redirect to transactions page', () => {
    cy.get('.transactions_group').should('have.length', 4);
  });

  it('should show all the transactions group', () => {
    cy.get('.transactions_group').should('have.length', 4);
  });

  it('should show name and amount rows', () => {
    cy.get('.transactions_group').eq(0).find('.transactions_transaction-data').eq(0).find('.transactions_transaction-row').should('have.length', 2);
  });

  it('should navigate to transaction details page on click of any transaction', () => {
    cy.get('.transactions_group').eq(0).find('.transactions_transaction-data').eq(1).click();
    cy.url().should('eq', 'http://localhost:4200/transactions/1667865600000/2');
  });
});