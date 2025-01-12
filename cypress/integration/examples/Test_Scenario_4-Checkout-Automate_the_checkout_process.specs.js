import datasets from "../../fixtures/datasets";

import RegisterPage from "../../support/RegisterPage";
import LoginPage from "../../support/LoginPage.Js";
import AccountPage from "../../support/AccountPage";
import HomePage from "../../support/HomePage";
import CheckoutPage from "../../support/CheckoutPage";

describe('Checkout: Automate the checkout process', function () {

    it('Verify the completion of the purchase', function() {

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


        //Automate adding an item to the shopping cart
        
        HomePage.clickHome();
        cy.wait(3000);
        
        HomePage.selectItem('Hammer');
        HomePage.assertProductName('Hammer');
        HomePage.clickIncreaseQuantity();
        HomePage.assertQuantity('2');
        HomePage.clickAddToCart();

        cy.wait(5000);
        HomePage.assertToastMessage();
        
        cy.wait(5000);
        HomePage.clickCart()

        CheckoutPage.assertURL_CheckoutPage();

        cy.wait(5000);
        
        CheckoutPage.assertNumberOfProduct(1)
            .assertProductQuantity('2')
            .assertProductPrice('$12.58')
            .assertLinePrice('$25.16')
            .assertCartTotal('$25.16');


        //Test Scenario 4: Checkout - Automate the checkout process. Verify the completion of the purchase.

        CheckoutPage.clickProceedToCheckout_button();

        CheckoutPage.getStepIndicator1().should('have.css', 'background-color', 'rgb(51, 153, 51)');
        CheckoutPage.getStepIndicator2().should('have.css', 'background-color', 'rgb(128, 128, 128)');
        cy.get('p.ng-star-inserted').should('be.visible').and('have.text','Hello Atlas Test, you are already logged in. You can proceed to checkout.');
        
        CheckoutPage.clickProceedToCheckout_button2();

        CheckoutPage.getStepIndicator1().should('have.css', 'background-color', 'rgb(51, 153, 51)');
        CheckoutPage.getStepIndicator2().should('have.css', 'background-color', 'rgb(51, 153, 51)');
        CheckoutPage.getStepIndicator3().should('have.css', 'background-color', 'rgb(128, 128, 128)');

        cy.wait(5000)

        CheckoutPage.assertBillingAddress_Address(customer.address)
            .assertBillingAddress_City(customer.city)
            .assertBillingAddress_State(customer.state)
            .assertBillingAddress_Country(customer.country_code)
            .assertBillingAddress_Postcode(customer.post_code)
            .clickConfirm_button1();

        CheckoutPage.getStepIndicator1().should('have.css', 'background-color', 'rgb(51, 153, 51)');
        CheckoutPage.getStepIndicator2().should('have.css', 'background-color', 'rgb(51, 153, 51)');
        CheckoutPage.getStepIndicator3().should('have.css', 'background-color', 'rgb(51, 153, 51)');
        CheckoutPage.getStepIndicator4().should('have.css', 'background-color', 'rgb(51, 153, 51)');

        CheckoutPage.selectPaymentMethod_CashOnDelivery();

        CheckoutPage.clickConfirm_button2();
        cy.wait(5000);

        CheckoutPage.assertPaymentWasSuccessful();

    })

})