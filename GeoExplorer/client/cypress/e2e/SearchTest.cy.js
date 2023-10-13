describe('Search functionality', () => {
  beforeEach(() => {
    cy.viewport(1000, 1200);
    cy.visit('/');
    // cy.wait(4000);
  });

  it('Error message should appear if invalid search is requested.', () => {
    cy.getByDataTest('search-test-button').should('contain.text', 'Search');

    cy.getByDataTest('search-test-input').type('abcde');
    cy.getByDataTest('search-test-button').click();

    cy.getByDataTest('search-test-error')
      .should('be.visible')
      .should(
        'have.text',
        '*Your search yielded no results, check your spelling and try again.'
      );
  });

  it('Data display block should remain invisible if an invalid request is made', () => {
    cy.getByDataTest('search-test-input').type('abcde');
    cy.getByDataTest('search-test-button').click();

    cy.getByDataTest('search-test-block').should('not.be.visible');
  });

  it('Instruction message should remain visible if valid search is processed.', () => {
    cy.getByDataTest('search-test-input').type('Spain');
    cy.getByDataTest('search-test-button').click();

    cy.getByDataTest('search-test-inst').should('be.visible');
  });

  it('Should produce a link to google maps', () => {
    cy.getByDataTest('search-test-input').type('Greece');
    cy.getByDataTest('search-test-button').click();

    cy.getByDataTest('search-test-gmlink')
      .invoke('attr', 'href')
      .should('include', 'goo.gl/maps');
  });

  it('Should have two svgs populate the flag and coat of arms component', () => {
    cy.getByDataTest('search-test-input').type('Italy');
    cy.getByDataTest('search-test-button').click();

    cy.getByDataTest('search-test-flag')
      .invoke('attr', 'src')
      .should('include', '.svg');
    cy.getByDataTest('search-test-coat')
      .invoke('attr', 'src')
      .should('include', '.svg');
  });
});
