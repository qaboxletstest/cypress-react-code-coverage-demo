/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Load ToDo', () => {

    beforeEach(() => {
        const todo = [{
            completed: false,
            id: "51e48048-3162-48bb-ad24-2c7acb71cb0c",
            task: "Loaded Programatically"
        }]
        cy.window().should(win => {
            win.localStorage.setItem("todos", JSON.stringify(todo))
        })
        cy.visit("/")
    })

    it('Load todo on startup', () => {
        cy.contains("p", "Loaded Programatically").should("be.visible")
    });

});