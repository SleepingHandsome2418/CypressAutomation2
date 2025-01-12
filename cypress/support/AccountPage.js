export default class AccountPage {

    static assertURL_AccountPage() {
        cy.url()
            .should('eq', 'https://practicesoftwaretesting.com/account');
        return this;
    } 

    static getProfileName() {
        return cy.get('[data-test="nav-menu"]');
    }

}