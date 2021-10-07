describe('GIVEN a user navigating to the "Login" page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href$=login]') // selects anchor tags with href ending with 'login'
      .click(); // Acts on the selected element
  });
  context('WHEN click "reset" button to clear the form', () => {
    beforeEach(() => {
      cy.get('button[type=reset]') // find the reset button
        .click(); // act: on the button
    });
    it('THEN the "submit" button should be disabled', () => {
      cy.get('button[type=submit]') // find the submit button
        .should('be.disabled'); // assert that the button is disabled
    });
  });
  context('WHEN fill the form correctly', () => {
    beforeEach(() => {
      cy.get('input[name=email]') // find the email input
        .type('admin@world.org'); // act: type the email
      cy.get('input[name=password]').type('S3cr3t'); // act: type the password
    });
    it('THEN the "submit" button should be enabled', () => {
      cy.get('button[type=submit]').should('be.enabled'); // assert that the submit button is enabled
    });
  });
});
