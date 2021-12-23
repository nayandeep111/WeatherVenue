// test suite name
let BASE_URL = "https://www.weathervenue.com/"

describe('UI-tests', function () {
    it('Sanity', function (){
        cy.visit(BASE_URL);
    });
});


Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'dataset')")) {
        return false
    }
    return true;
})