const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["cypress/e2e/*/**.js"],
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 50000,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/.jsons",
      overwrite: false,
      saveJson: true,
      html: true, // Set this to true if you want HTML reports as well
      reportFilename: "mochawesome-report",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
});
