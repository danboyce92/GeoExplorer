describe('Search functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.wait(4000);
  });

  it('Error message should appear if invalid search is requested.', () => {
    cy.getSearchForm().find('button').should('contain.text', 'Search');

    cy.getSearchForm().find('input').type('abcde');
    cy.getSearchForm().find('button').click();

    cy.getByDataTest('search-test-error')
      .should('be.visible')
      .should(
        'have.text',
        '*Your search yielded no results, check your spelling and try again.'
      );
  });

  it('Data display block should remain invisible if an invalid request is made', () => {
    cy.getSearchForm().find('input').type('abcde');
    cy.getSearchForm().find('button').click();

    cy.getByDataTest('search-test-block').should('not.be.visible');
  });

  it('Instruction message should remain visible and Error message should be invisible if valid search is processed.', () => {
    cy.getSearchForm().find('input').type('Spain');
    cy.getSearchForm().find('button').click();

    cy.getByDataTest('search-test-inst').should('be.visible');
    cy.getByDataTest('search-test-error').should('not.exist');
  });

  it('Should produce a link to google maps', () => {
    cy.getSearchForm().find('input').type('Greece');
    cy.getSearchForm().find('button').click();

    cy.getByDataTest('search-test-gmlink')
      .invoke('attr', 'href')
      .should('include', 'goo.gl/maps');
  });

  it('Should have two svgs populate the flag and coat of arms component', () => {
    cy.getSearchForm().find('input').type('Italy');
    cy.getSearchForm().find('button').click();

    cy.getByDataTest('search-test-flag')
      .invoke('attr', 'src')
      .should('include', '.svg');
    cy.getByDataTest('search-test-coat')
      .invoke('attr', 'src')
      .should('include', '.svg');
  });
});
