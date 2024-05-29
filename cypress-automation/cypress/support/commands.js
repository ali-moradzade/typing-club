/**
 * @memberof cy
 * @method writeLesson
 * @param {string} lessonName
 * @param {string} content
 * @returns void
 */
Cypress.Commands.add('writeLesson', (lessonName, content) => {
    cy.get('.lp-section').find('.lp-card-summary')
        .each(($el, index, $list) => {
            const cardText = $el.find('h4').text();

            if (cardText.includes('Typing Jungle')) {
                cy.wrap($el).find('button').click();

                cy.contains(lessonName).click({
                    force: true
                });

                cy.get('.inview').click({force: true}).type(content.slice(0, -1));

                cy.pause();
                cy.visit('https://www.typingclub.com/sportal/')
            }
        });
});
