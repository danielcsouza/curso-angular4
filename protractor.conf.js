// Protractor configuration file, see link for more information
<<<<<<< HEAD
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
=======
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
<<<<<<< HEAD
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
=======
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
  }
};
