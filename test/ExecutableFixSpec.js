
import {
  bootstrapModeler,
  inject
} from 'bpmn-js/test/helper';

import {
  getBusinessObject
} from 'bpmn-js/lib/util/ModelUtil';

import coreModule from 'bpmn-js/lib/core';
import modelingModule from 'bpmn-js/lib/features/modeling';

import ExecutableFixModule from '..';

import executableProcessXML from './executable-process.bpmn';

import nonExecutableProcessXML from './non-executable-process.bpmn';


describe('<ExecutableFix>', function() {

  describe('executable process', function() {

    beforeEach(bootstrapModeler(executableProcessXML, { modules: [
      coreModule,
      modelingModule,
      ExecutableFixModule
    ] }));


    it('should set <isExecutable> to false when second Participant is created', inject(
      function(canvas, elementFactory, modeling) {

        // given
        var rootElement = canvas.getRootElement(),
            participant = elementFactory.createParticipantShape({ x: 100, y: 100 }),
            participant2 = elementFactory.createParticipantShape({ x: 100, y: 100 });

        // when
        modeling.createShape(participant, { x: 400, y: 225 }, rootElement);

        // root element is changed to a collaboration
        rootElement = canvas.getRootElement();

        modeling.createShape(participant2, { x: 400, y: 500 }, rootElement);

        // then
        expect(getBusinessObject(participant).processRef).to.have.property('isExecutable', true);
        expect(getBusinessObject(participant2).processRef).to.have.property('isExecutable', false);
      }
    ));
  });


  describe('non-executable process', function() {

    beforeEach(bootstrapModeler(nonExecutableProcessXML, { modules: [
      coreModule,
      modelingModule,
      ExecutableFixModule
    ] }));


    it('should set <isExecutable> to false when it is not set in the XML', inject(
      function(canvas) {

        // given
        var process = canvas.getRootElement();

        // then
        expect(getBusinessObject(process)).to.have.property('isExecutable', false);
      }
    ));
  });
});
