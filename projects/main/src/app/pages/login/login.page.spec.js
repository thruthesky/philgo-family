/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {
    cy.visit('/login')
  })
  afterEach(() => {})
  describe('Login', () => {
    it('Open login page', () => {
      cy.get('main').should('have.class', 'login-page')
    })
  })
})
