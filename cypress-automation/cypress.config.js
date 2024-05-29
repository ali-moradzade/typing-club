const {defineConfig} = require("cypress");

require('dotenv').config()

module.exports = defineConfig({
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/integration/examples/*.js',
        env: {
            username: process.env.USER_NAME,
            password: process.env.PASSWORD,
        }
    },
});
