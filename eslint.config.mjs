import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  build: [ '*.config.js', '*.mjs' ],
  test: [ '**/test/**/*.js' ],
  lib: [ 'src/**/*.js' ]
};

export default [
  ...bpmnIoPlugin.configs.browser.map(config => {
    return {
      ...config,
      files: files.lib
    };
  }),
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: [
        ...files.build,
        ...files.test
      ]
    };
  }),
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: files.test
    };
  })
];
