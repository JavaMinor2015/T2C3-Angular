// An example configuration file.
exports.config = {
  // Use the browser directly not the selenium server
  directConnect: true,

  // The default page for protractor tests, use browser.get('/') in tests to navigate here.
  baseUrl: 'http://localhost:9000/',

  // Location of the chromedriver
  chromeDriver: "../node_modules/chromedriver/lib/chromedriver/chromedriver",

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/**/*.test.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
