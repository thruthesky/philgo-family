/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {
    cy.visit('/help')
  })
  afterEach(() => {})
  describe('Page test', () => {
    it('Open help page', () => {
      cy.get('.help-page');
    })
  })
})
