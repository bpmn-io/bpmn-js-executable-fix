# bpmn-js executable fix

A bpmn-js extension that makes sure that `isExecutable` property is either true or false for each `bpmn:Process`.

## Installation

Install via [npm](http://npmjs.com/).

```bash
npm install bpmn-js-executable-fix
```

Add as additional module to [bpmn-js](https://github.com/bpmn-io/bpmn-js).

### Modeler

```javascript
var BpmnModeler = require('bpmn-js/lib/Modeler');
var executableFixModule = require('bpmn-js-executable-fix');

var modeler = new BpmnModeler({
  container: '#canvas',
  additionalModules: [
    executableFixModule
  ]
});
```

## Licence

MIT
