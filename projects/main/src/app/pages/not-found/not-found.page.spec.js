/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {
    cy.visit('/not-found')
  })
  afterEach(() => {})
  describe('Not found page visit', () => {
    it('not found page', () => {
      cy.get('h1').should('contain', 'Not found')
    })
  })
})
