const {defineConfig} = require("cypress");

require('dotenv').config();

function getEnv(name) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${name} not set!`);
    }

    return value;
}

module.exports = defineConfig({
    chromeWebSecurity: false,
    e2e: {
        specPattern: 'cypress/integration/examples/*.js',
        env: {
            username: getEnv('USER_NAME'),
            password: getEnv('PASSWORD'),
        }
    },
});
