import datasets from "../../fixtures/datasets";

import RegisterPage from "../../support/RegisterPage";
import LoginPage from "../../support/LoginPage.Js";
import AccountPage from "../../support/AccountPage";

describe('Login: Automate the login process for a registered user', function () {

    it('Confirm successful login', function() {

        let customer = datasets.new_customer();

        //Registration
        cy.visit("https://practicesoftwaretesting.com/");

        cy.get('[data-test="nav-sign-in"]').click();
        LoginPage.assertURL_LoginPage();

        cy.get('[data-test="register-link"]').click();
        RegisterPage.assertURL_RegisterPage();

        RegisterPage.getFirstName().type(customer.first_name).should('have.value', customer.first_name);
        RegisterPage.getLastName().type(customer.last_name).should('have.value', customer.last_name);
        RegisterPage.getDateOfBirth().type(customer.date_of_birth).should('have.value', customer.date_of_birth);
        RegisterPage.getAddress().type(customer.address).should('have.value', customer.address);
        RegisterPage.getPostCode().type(customer.post_code).should('have.value', customer.post_code);
        RegisterPage.getCity().type(customer.city).should('have.value', customer.city);            
        RegisterPage.getState().type(customer.state).should('have.value', customer.state); 
        RegisterPage.getCountry().select(customer.country).should('contain.text', customer.country);
        RegisterPage.getPhone().type(customer.phone).should('have.value', customer.phone);
        RegisterPage.getEmail().type(customer.email).should('have.value', customer.email);
        RegisterPage.getPassword().type(customer.password);

        RegisterPage.assertPasswordMust1()
            .assertPasswordMust2()
            .assertPasswordMust3()
            .assertPasswordMust4()
            .assertPasswordStrengthExcellent();

        RegisterPage.clickSubmit();    

        RegisterPage.getEmail().invoke('val').then((inputValue) => {
            
            const emailAddress = inputValue;
            
            //Login
            LoginPage.assertURL_LoginPage(); 
            LoginPage.getEmail().type(emailAddress);
            LoginPage.getPassword().type(customer.password);
            LoginPage.clickLoginButton();

            AccountPage.assertURL_AccountPage();
            AccountPage.getProfileName().should('contain.text', customer.name); 
        });
           
    })

})