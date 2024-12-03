/* eslint-env node */

// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox' ]
const browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();


module.exports = function(karma) {
  karma.set({

    basePath: '.',

    frameworks: [
      'webpack',
      'mocha'
    ],

    files: [
      'test/*.js'
    ],

    preprocessors: {
      'test/*.js': [ 'webpack', 'env' ]
    },

    reporters: [ 'progress' ],

    browsers: browsers,

    browserNoActivityTimeout: 30000,

    singleRun: true,
    autoWatch: false,

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.bpmn$/,
            type: 'asset/source'
          }
        ]
      },
      resolve: {
        modules: [
          'node_modules'
        ]
      },
      devtool: 'eval-source-map'
    }
  });
};
