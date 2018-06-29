/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {
  })
  after(() => {
  })
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })
  afterEach(() => {
  })
  describe('App Home', () => {
    it('version', () => {
      cy.title().should('contain', 'Title')
    })
  })
})
