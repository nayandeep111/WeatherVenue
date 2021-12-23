// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
       it('Scenario 1', function (){
          // test step for URL launching
          cy.visit("http://google.com/");
       });
    });


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })