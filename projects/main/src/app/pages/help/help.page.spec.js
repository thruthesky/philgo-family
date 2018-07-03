/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {
    cy.visit('/help')
  })
  afterEach(() => {})
  describe('Help page test', () => {
    it('Open help page', () => {
      cy.get('.help-page');
    })
  })
})
