// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox' ]
var browsers =
  (process.env.TEST_BROWSERS || 'ChromeHeadless')
    .replace(/^\s+|\s+$/, '')
    .split(/\s*,\s*/g);


module.exports = function(karma) {
  karma.set({

    basePath: '.',

    frameworks: [
      'webpack',
      'mocha',
      'chai'
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
