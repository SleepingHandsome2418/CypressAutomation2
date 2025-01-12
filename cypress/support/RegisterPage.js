export default class RegisterPage {

    static assertURL_RegisterPage() {
        cy.url()
            .should('eq', 'https://practicesoftwaretesting.com/auth/register');
        return this;
    } 

    static getFirstName() {
        return cy.get('[data-test="first-name"]');
    }

    static getLastName() {
        return cy.get('[data-test="last-name"]');
    }

    static getDateOfBirth() {
        return cy.get('[data-test="dob"]');
    }

    static getAddress() {
        return cy.get('[data-test="address"]');
    }

    static getPostCode() {
        return cy.get('[data-test="postcode"]');
    }

    static getCity() {
        return cy.get('[data-test="city"]');
    }

    static getState() {
        return cy.get('[data-test="state"]');
    }

    static getCountry() {
        return cy.get('[data-test="country"]');
    }

    static getPhone() {
        return cy.get('[data-test="phone"]');
    }

    static getEmail() {
        return cy.get('[data-test="email"]');
    }

    static getPassword() {
        return cy.get('[data-test="password"]');
    }

    static assertPasswordMust1() {
        cy.get(':nth-child(1) > ul > :nth-child(1)')
            .should('have.css', 'color', 'rgb(25, 135, 84)');
        return this;
    } 

    static assertPasswordMust2() {
        cy.get(':nth-child(1) > ul > :nth-child(2)')
            .should('have.css', 'color', 'rgb(25, 135, 84)');
        return this;
    } 

    static assertPasswordMust3() {
        cy.get(':nth-child(1) > ul > :nth-child(3)')
            .should('have.css', 'color', 'rgb(25, 135, 84)');
        return this;
    } 

    static assertPasswordMust4() {
        cy.get(':nth-child(1) > ul > :nth-child(4)')
            .should('have.css', 'color', 'rgb(25, 135, 84)');
        return this;
    } 

    static assertPasswordStrengthExcellent() {
        cy.contains('Excellent')
            .should('have.css', 'font-weight', '700')
        cy.get('.fill')
            .should('have.css', 'background-color', 'rgb(111, 66, 193)');
        return this;
    }
    
    static clickSubmit() {
        cy.get('[data-test="register-submit"]')
            .click();
        return this;
    }

}