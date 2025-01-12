export default class HomePage {

    static clickHome() {
        cy.get('[data-test="nav-home"]')
            .click()
        return this;
    }

    static selectItem(ProductName) {
        cy.get('.card .card-body').each(($el) => {
            cy.wrap($el).invoke('text').then((textProduct) => {
                if (textProduct.trim() === ProductName) { 
                    cy.wrap($el).click()      
                }
            })
        });
        return this;
    }

    static assertProductName(ProductName) {
        cy.get('[data-test="product-name"]')
            .should('have.text',ProductName);
        return this;
    } 

    static clickIncreaseQuantity() {
        cy.get('[data-test="increase-quantity"]')
            .click();
        return this;
    }

    static assertQuantity(Number) {
        cy.get('[data-test="quantity"]')
            .should('have.value',Number);
        return this;
    } 

    static clickAddToCart() {
        cy.get('[data-test="add-to-cart"]')
            .click();
        return this;    
    }

    static assertToastMessage() {
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain.text','Product added to shopping cart.');
        return this;     
    }

    static clickCart() {
        cy.get('[data-test="nav-cart"]')
            .click();
        return this;    
    }
    

}