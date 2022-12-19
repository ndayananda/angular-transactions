import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'cypress/support/e2e.ts',
    viewportHeight: 844,
    viewportWidth: 390,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
