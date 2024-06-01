// <reference types="Cypress"/>

describe('My First Test', () => {
    beforeEach(function () {
        cy.viewport('macbook-16');
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('typingclub.com', {
        defaultCommandTimeout: 10000,
    }, function () {
        cy.visit('https://www.typingclub.com/sportal/');
        cy.get('.navbar-right').find('a').contains('Login').click();

        cy.get('#username').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#login-with-password').click();

        this.data.lessons.forEach((lesson) => {
            cy.writeLesson(lesson.name, lesson.content);
        });
    });
});
