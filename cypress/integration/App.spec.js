describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the result of the running total', () => {
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('.display').should('contain', '23')
  })

  it('should update the display with the result of the result of the operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })

  it('should be able to chain operations', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('should be able to show positive numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })

  it('should be able to show decimals', () => {
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('#operator-divide').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '7.666666666666667')
  })

  it('should be able to handle large numbers', () => {
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '81')
  })


  it('should be able to handle very VERY large numbers', () => {
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '891')
  })

  it('should be able to handle very VERY, stupidly in fact, large numbers', () => {
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '997002999')
  })

  it('should be able to divide by zero', () => {
    cy.get('#number9').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Infinity')
  })



})