/** @file Fake Maker Board for running Maker apps without a board attached. */
import {EventEmitter} from 'events'; // provided by webpack's node-libs-browser

/**
 * Fake Maker Board for running Maker Toolkit apps without a board attached.
 * Attaches fake, no-op components to the interpreter.
 * @extends EventEmitter
 * @implements MakerBoard
 */
export default class FakeBoard extends EventEmitter {

  /**
   * Open a connection to the board on its configured port.
   * @returns {Promise} resolved when the board is ready to use.
   */
  connect() {
    return Promise.resolve();
  }

  /**
   * Disconnect and clean up the board controller and all components.
   */
  destroy() {
    // Included for compatability with MakerBoard interface
  }

  /**
   * Marshals the board component controllers and appropriate constants into the
   * given JS Interpreter instance so they can be used by student code.
   *
   * @param {codegen} codegen
   * @param {JSInterpreter} jsInterpreter
   */
  installOnInterpreter(codegen, jsInterpreter) {
    let constructor;
    for (let i = 0; i < 13; i++) {
      constructor = function () {};
      codegen.customMarshalObjectList.push({instance: constructor});
      jsInterpreter.createGlobalProperty('constructor'+i, constructor);
    }

    jsInterpreter.createGlobalProperty('component', {});
  }

  /**
   * @param {number} pin
   * @param {number} modeConstant
   */
  pinMode(pin, modeConstant) {
  }

  /**
   * @param {number} pin
   * @param {number} value
   */
  digitalWrite(pin, value) {
  }

  /**
   * @param {number} pin
   * @param {function.<number>} callback
   */
  digitalRead(pin, callback) {
  }

  /**
   * @param {number} pin
   * @param {number} value
   */
  analogWrite(pin, value) {
  }

  /**
   * @param {number} pin
   * @param {function.<number>} callback
   */
  analogRead(pin, callback) {
  }
}
