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

                // Type all the content except for last char, type it manually in the website to tune speed
                // (speed > 150 is denied by typingclub)
                cy.get('.inview').type(`{backspace}${content.slice(0, -1)}`, {
                    delay: 0,
                });

                cy.pause();
                cy.visit('https://www.typingclub.com/sportal/');
            }
        });
});
