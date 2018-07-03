/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {
    cy.visit('/')
  })
  afterEach(() => {})
  describe('App Home', () => {
    it('home page', () => {
      cy.get('h1').should('contain', 'Home')
    })
  })
})
