const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://flex.orange.pl/en",
    retries:{
      "runMode": 1,
      "openMode":1
    },
    viewportWidth: 2560,
    viewportHeight: 1440,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    }
  },
});
