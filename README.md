# bpmn-js executable fix

[![CI](https://github.com/bpmn-io/bpmn-js-executable-fix/actions/workflows/CI.yml/badge.svg)](https://github.com/bpmn-io/bpmn-js-executable-fix/actions/workflows/CI.yml)

A bpmn-js extension that makes sure that `isExecutable` property is either true or false for each `bpmn:Process`.

## Installation

Install via [npm](http://npmjs.com/).

```bash
npm install bpmn-js-executable-fix
```

Add as additional module to [bpmn-js](https://github.com/bpmn-io/bpmn-js).

### Modeler

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';
import executableFixModule from 'bpmn-js-executable-fix';

const modeler = new BpmnModeler({
  container: '#canvas',
  additionalModules: [
    executableFixModule
  ]
});
```

## Licence

MIT
