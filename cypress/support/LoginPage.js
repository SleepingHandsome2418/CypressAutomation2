export default class LoginPage {

    static assertURL_LoginPage() {
        cy.url()
            .should('eq', 'https://practicesoftwaretesting.com/auth/login');
        return this;
    } 
    
    static getEmail() {
        return cy.get('[data-test="email"]');
    }

    static getPassword() {
        return cy.get('[data-test="password"]');
    }

    static clickLoginButton() {
        cy.get('[data-test="login-submit"]')
            .click();
        return this;
    }

}