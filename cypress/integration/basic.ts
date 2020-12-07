
    it('Should perform basic google search', () => {
      //expect(true).to.equal(true)
      cy.visit('https://google.com/')
      cy.get('[name="q"]')
      .type('subscribe')
      .type('{enter}');
    })

    it('Verify Title of The Page-Negative', () => {
        //expect(true).to.equal(true)
        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce store')
      })