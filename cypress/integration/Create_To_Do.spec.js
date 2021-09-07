/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Verify Home Page and Create ToDo', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it('Verify H2', () => {
        cy.get("h2").should("have.text", "QA BOX LET'S TEST")
    });

    it('Verify H4', () => {
        cy.get("h4").should("have.text", "React Todo")
    });

    it('Verify alert while adding an empty task', () => {
        cy.on("window:alert", text => {
            expect(text).to.eq("Error; add task!")
        })
        cy.get("input[name='task']").type("{enter}")
    });

    it('Add a task using enter', () => {
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(0)
        })
        cy.get("input[name='task']").type("Buy Apple{enter}")
        cy.contains("p", "Buy Apple").should("be.visible")
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(1)
        })
    });

    it('Add a task using Submit button', () => {
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(0)
        })
        cy.get("input[name='task']").type("Buy Milk")
        cy.get("button[type='submit']").click()
        cy.contains("p", "Buy Milk").should("be.visible")
        cy.window().should(win => {
            expect(JSON.parse(win.localStorage.getItem("todos")).length).to.eq(1)
        })
    });
});