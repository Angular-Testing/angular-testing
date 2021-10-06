// bdd
// GWT

describe('GIVEN The Angular Budget homepage', () => {
  const expectedAppname = 'Angular Budget';
  context('WHEN I visit the home page', () => {
    beforeEach(() => {
      cy.visit('/'); // uses baseUrl set in cypress.json
    });
    it('THEN should display the application name', () => {
      cy.contains(expectedAppname); // queries and asserts for elements with the expected text
    });
    it('THEN should have the app name on the title ', () => {
      cy.title() // queries for the title of the page
        .should('contain', expectedAppname); // and asserts that it contains the expected text
    });
    it('THEN should display the app name on an anchor ', () => {
      // A selector based on the element, may be too general
      cy.get('a').should('contain', expectedAppname);
    });
    it('THEN should display the app name with a given style class ', () => {
      // A selector based on the class, may be too general or not available
      cy.get('.navbar-brand').should('contain', expectedAppname);
    });
    it('THEN should display the app name on a precise identifier ', () => {
      // A selector based on the id, may be not available
      cy.get('#app-name').should('contain', expectedAppname);
    });
    it('THEN should display the app name on a precise node ', () => {
      // A selector precise, but code intrusive
      cy.get('[data-test="app-name"]').should('contain', expectedAppname);
    });
  });
});
