export default class CheckoutPage {

    static assertURL_CheckoutPage() {
        cy.url()
            .should('eq', 'https://practicesoftwaretesting.com/checkout');
        return this;
    }

    static assertNumberOfProduct(Number) {
        cy.get('.product-title')
            .should('have.length', Number);
        return this;
    }

    static assertProductQuantity(Number) {
        cy.get('[data-test="product-quantity"]')
            .should('have.value',Number);
        return this;
    }

    static assertProductPrice(Price) {
        cy.get('[data-test="product-price"]')
            .should('have.text',Price);
        return this;
    }

    static assertLinePrice(Price) {
        cy.get('[data-test="line-price"]')
            .should('have.text',Price);
        return this;
    }

    static assertCartTotal(Price) {
        cy.get('[data-test="cart-total"]')
            .should('have.text',Price);
        return this;
    }

    static clickProceedToCheckout_button() {
        cy.get('[data-test="proceed-1"]')
            .click();
        return this;
    }

    static getStepIndicator1() {
        return cy.get('.step-indicator').eq(0)
    }

    static getStepIndicator2() {
        return cy.get('.step-indicator').eq(1)
    }

    static getStepIndicator3() {
        return cy.get('.step-indicator').eq(2)
    }

    static getStepIndicator4() {
        return cy.get('.step-indicator').eq(3)
    }

    static selectPaymentMethod_CashOnDelivery() {
        cy.get('[data-test="payment-method"]')
            .select('cash-on-delivery')
            .should('contain.text', 'Cash on Delivery');
        return this;
    }

    static clickProceedToCheckout_button2() {
        cy.get('[data-test="proceed-2"]')
            .click();
        return this;
    }

    static assertBillingAddress_Address(Address){
        cy.get('[data-test="address"]')
            .should('have.value',Address);
        return this;
    }

    static assertBillingAddress_City(City){
        cy.get('[data-test="city"]')
            .should('have.value',City);
        return this;
    }

    static assertBillingAddress_State(State){
        cy.get('[data-test="state"]')
            .should('have.value',State);
        return this;
    }

    static assertBillingAddress_Country(Country){
        cy.get('[data-test="country"]')
            .should('have.value',Country);
        return this;
    }

    static assertBillingAddress_Postcode(Postcode){
        cy.get('[data-test="postcode"]')
            .should('have.value',Postcode);
        return this;
    }


    static clickConfirm_button1() {
        cy.get('[data-test="proceed-3"]')
            .click();
        return this;
    }

    static clickConfirm_button2() {
        cy.get('[data-test="finish"]')
            .click();
        return this;
    }

    static assertPaymentWasSuccessful() {
        cy.get('.alert')
            .should('be.visible')
            .and('have.text','Payment was successful');
        return this;
    }

}