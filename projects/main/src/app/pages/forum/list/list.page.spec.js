/// <reference types="Cypress" />
context('Actions', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {})
  afterEach(() => {})
  describe('Forum qna test', () => {
    it('Open qna page', () => {
      cy.visit('/forum/qna')
      cy.get('main').should('have.class', 'list-page');
      cy.get('main').should('have.attr', 'post_id', 'qna');
      cy.get('.posts');
      cy.get('.post');
    })
  })
  describe('Forum freetalk test', () => {
    it('Open freetalk page', () => {
      cy.visit('/forum/freetalk')
      cy.get('main').should('have.class', 'list-page');
      cy.get('main').should('have.attr', 'post_id', 'freetalk');
      cy.get('.posts');
      cy.get('.post');
    })
  })
})
