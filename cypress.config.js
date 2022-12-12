const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    }, 
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern : "cypress/e2e/other/*js ",
    chromeWebSecurity: false,
    baseUrl: "http://www.webdriveruniversity.com", // ("/")
    experimentalSessionAndOrigin : true,
    defaultCommandTimeout : 10000,
    pageLoadTimeout : 120000,
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "Sam"
    }
  },
});
