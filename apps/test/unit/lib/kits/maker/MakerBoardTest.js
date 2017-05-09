/** @file Exports a set of tests that verify the MakerBoard interface */
import sinon from 'sinon';
import {EventEmitter} from 'events'; // see node-libs-browser
import {expect} from '../../../../util/configuredChai';

/**
 * Interface that our board controllers must implement to be usable with
 * Maker Toolkit.
 * @interface MakerBoard
 * @extends EventEmitter
 */

/**
 * Run the set of interface conformance tests on the provided class.
 * @param {function} BoardClass
 */
export function itImplementsTheMakerBoardInterface(BoardClass) {
  describe('implements the MakerBoard interface', () => {
    let board;

    beforeEach(() => {
      board = new BoardClass();
    });

    it('is an EventEmitter', () => {
      expect(board).to.be.an.instanceOf(EventEmitter);
    });

    /**
     * Open a connection to the board on its configured port.
     *
     * @function
     * @name MakerBoard#connect
     * @returns {Promise} resolved when the board is ready to use.
     */
    describe('connect()', () => {
      it('returns a Promise', () => {
        const retVal = board.connect();
        expect(retVal.then).to.be.a('function');
        return retVal;
      });
    });

    /**
     * Disconnect and clean up the board controller and all components.
     *
     * @function
     * @name MakerBoard#destroy
     */
    describe('destroy()', () => {
      it(`doesn't return anything`, () => {
        const retVal = board.destroy();
        expect(retVal).to.be.undefined;
      });
    });

    /**
     * Marshals the board component controllers and appropriate constants into the
     * given JS Interpreter instance so they can be used by student code.
     *
     * @function
     * @name MakerBoard#installOnInterpreter
     * @param {codegen} codegen
     * @param {JSInterpreter} jsInterpreter
     */
    describe('installOnInterpreter(codegen, jsInterpreter)', () => {
      let codegen, interpreter;

      beforeEach(() => {
        codegen = {
          customMarshalObjectList: []
        };
        interpreter = {
          createGlobalProperty: sinon.spy()
        };
      });

      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const retVal = board.installOnInterpreter(codegen, interpreter);
          expect(retVal).to.be.undefined;
        });
      });

      it('adds component constructors to the customMarshalObjectList', () => {
        return board.connect().then(() => {
          board.installOnInterpreter(codegen, interpreter);
          expect(codegen.customMarshalObjectList).to.have.length(13);
        });
      });

      it('adds component constructors as global properties on the interpreter', () => {
        return board.connect().then(() => {
          board.installOnInterpreter(codegen, interpreter);
          expect(interpreter.createGlobalProperty).to.have.been.called;
        });
      });
    });

    /**
     * @function
     * @name MakerBoard#pinMode
     * @param {number} pin
     * @param {number} modeConstant
     */
    describe(`pinMode(pin, modeConstant)`, () => {
      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const retVal = board.pinMode(11, 1023);
          expect(retVal).to.be.undefined;
        });
      });
    });

    /**
     * @function
     * @name MakerBoard#digitalWrite
     * @param {number} pin
     * @param {number} value
     */
    describe(`digitalWrite(pin, value)`, () => {
      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const retVal = board.digitalWrite(11, 1023);
          expect(retVal).to.be.undefined;
        });
      });
    });

    /**
     * @function
     * @name MakerBoard#digitalRead
     * @param {number} pin
     * @param {function.<number>} callback
     */
    describe(`digitalRead(pin, callback)`, () => {
      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const retVal = board.digitalRead(11, () => {});
          expect(retVal).to.be.undefined;
        });
      });
    });

    /**
     * @function
     * @name MakerBoard#analogWrite
     * @param {number} pin
     * @param {number} value
     */
    describe(`analogWrite(pin, value)`, () => {
      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const retVal = board.analogWrite(11, () => {});
          expect(retVal).to.be.undefined;
        });
      });
    });

    /**
     * @function
     * @name MakerBoard#analogRead
     * @param {number} pin
     * @param {function.<number>} callback
     */
    describe(`analogRead(pin, callback)`, () => {
      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const retVal = board.analogRead(11, () => {});
          expect(retVal).to.be.undefined;
        });
      });
    });

    /**
     * @function
     * @name MakerBoard#onBoardEvent
     * @param {object} component
     * @param {string} event
     * @param {function} callback
     */
    describe(`onBoardEvent(component, event, callback)`, () => {
      it(`doesn't return anything`, () => {
        return board.connect().then(() => {
          const fakeEventEmitter = { on: sinon.spy() };
          const retVal = board.onBoardEvent(fakeEventEmitter, 'someEvent', () => {});
          expect(retVal).to.be.undefined;
        });
      });

      it('forwards the call to the component', () => {
        const fakeEventEmitter = { on: sinon.spy() };
        const event = 'someEvent';
        const callback = () => {};
        board.onBoardEvent(fakeEventEmitter, event, callback);
        expect(fakeEventEmitter.on).to.have.been.calledWith(event, callback);
      });

      describe(`event aliases`, () => {
        let fakeEventEmitter, callback;

        beforeEach(function () {
          fakeEventEmitter = { on: sinon.spy() };
          callback = () => {};
        });

        it(`aliases 'tap:single' event to 'singleTap'`, function () {
          board.onBoardEvent(fakeEventEmitter, 'singleTap', callback);
          expect(fakeEventEmitter.on).to.have.been.calledWith('tap:single', callback);
        });

        it(`aliases 'tap:double' event to 'doubleTap'`, function () {
          board.onBoardEvent(fakeEventEmitter, 'doubleTap', callback);
          expect(fakeEventEmitter.on).to.have.been.calledWith('tap:double', callback);
        });
      });
    });
  });
}
