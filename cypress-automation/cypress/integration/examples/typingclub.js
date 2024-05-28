// <reference types="Cypress"/>

describe('My First Test', () => {
    it('typingclub.com', {
        defaultCommandTimeout: 10000,
    }, () => {
        cy.viewport('macbook-16');

        cy.visit('https://www.typingclub.com/sportal/');
        cy.get('.navbar-right').find('a').contains('Login').click();

        cy.get('#username').type('username');
        cy.get('#password').type('password');
        cy.get('#login-with-password').click();

        cy.get('.lp-section').find('.lp-card-summary')
            .each(($el, index, $list) => {
                const cardText = $el.find('h4').text();

                if (cardText.includes('Typing Jungle')) {
                    cy.wrap($el).find('button').click();

                    cy.get('.lparena > .lsnrow.active > .box-row .box > .lsn_name')
                        .each(($el, index, $list) => {
                            const cardText = $el.text();

                            if (cardText.includes('Mariana Trench')) {
                                cy.wrap($el).click();

                                cy.get('.inview').type(
                                    "Around 70% of the Earth's surface is covered by " +
                                    "oceans. The deepest known area of the Earth's oceans " +
                                    "is known as the Mariana Trench. Its deepest point " +
                                    "measures 6.8 miles or almost 11 kilometers deep! This " +
                                    "spot is called the Challenger Deep. It is located in " +
                                    "the western Pacific Ocean, to the east of the Mariana " +
                                    "Islands"
                                );
                            }
                        });
                }
            });
    });
});
