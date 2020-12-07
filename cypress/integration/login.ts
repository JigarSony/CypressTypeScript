describe('Login Scenario', () => {
    it('Verify login with invalid username and password', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear().type('standard')
        cy.get('#password').clear().type('secret')
        cy.get('#login-button').click()
    })

    it('Verify login with invalid username and valid password', () => {
        //cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear().type('standard')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Verify login with valid username and invalid password', () => {
        //cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear().type('standard_user')
        cy.get('#password').clear().type('secret')
        cy.get('#login-button').click()
    })

    it('Verify login with valid username and password', () => {
        //cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear().type('standard_user')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
    })
})