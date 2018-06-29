/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })
  afterEach(() => {})
  describe('App Home', () => {
    it('home page', () => {
      cy.get('h1').should('contain', 'Home')
    })
  })
})
