/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Delete ToDo', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it('Delete a todo', () => {
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(0)
        })
        cy.get("input[name='task']").type("Buy Apple{enter}")
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(1)
        })
        cy.contains("p", "Buy Apple").prev().click()
        cy.contains("p", "Buy Apple").should("have.attr", "style", "text-decoration: line-through;")
        cy.contains("p", "Buy Apple").parent().children("button").click()
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(0)
        })
    });

});