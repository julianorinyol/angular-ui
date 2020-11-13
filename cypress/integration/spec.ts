it('loads examples', () => {
  cy.visit('/');
  cy.contains('Willkommen in deiner Fact-Checking Community!');
});

it('auth guard works', () => {
  cy.visit('/');
  cy.contains('Fall lösen').click();
  cy.contains('Dazu musst du dich einloggen.');
});
