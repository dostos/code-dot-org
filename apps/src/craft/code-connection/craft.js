import React from 'react';
import ReactDOM from 'react-dom';

import {singleton as studioApp} from '../../StudioApp';
import codegen from '../../codegen';
import {Provider} from 'react-redux';
import AppView from '../../templates/AppView';
import CraftVisualizationColumn from './CraftVisualizationColumn';
import {getStore} from '../../redux';
import cc_client from './cc-client';
import items from './items';

const MEDIA_URL = '/blockly/media/craft/';

var client = new cc_client(8080);

/**
 * Create a namespace for the application.
 */
const Craft = module.exports;

window.Craft = Craft;
window.Blockly = Blockly;

const COMMON_UI_ASSETS = [
  MEDIA_URL + "Sliced_Parts/MC_Loading_Spinner.gif",
  MEDIA_URL + "Sliced_Parts/Frame_Large_Plus_Logo.png",
  MEDIA_URL + "Sliced_Parts/Pop_Up_Slice.png",
  MEDIA_URL + "Sliced_Parts/X_Button.png",
  MEDIA_URL + "Sliced_Parts/Button_Grey_Slice.png",
  MEDIA_URL + "Sliced_Parts/MC_Button_Pressed.png",
  MEDIA_URL + "Sliced_Parts/Run_Button_Up_Slice.png",
  MEDIA_URL + "Sliced_Parts/Run_Button_Down_Slice.png",
  MEDIA_URL + "Sliced_Parts/MC_Run_Arrow_Icon_Smaller.png",
  MEDIA_URL + "Sliced_Parts/MC_Up_Arrow_Icon.png",
  MEDIA_URL + "Sliced_Parts/MC_Down_Arrow_Icon.png",
  MEDIA_URL + "Sliced_Parts/Reset_Button_Up_Slice.png",
  MEDIA_URL + "Sliced_Parts/MC_Reset_Arrow_Icon.png",
  MEDIA_URL + "Sliced_Parts/Reset_Button_Down_Slice.png",
  MEDIA_URL + "Sliced_Parts/Callout_Tail.png",
];

const preloadImage = function (url) {
  const img = new Image();
  img.src = url;
};

/**
 * Try to get name from input
 * @param {any} input
 */
function getItemName(input) {
  if (input.hasOwnProperty('name')) {
    input = input['name'];
  }
  return input;
}

/**
 * Initialize Blockly and the Craft app. Called on page load.
 */
Craft.init = function (config) {
  config.level.disableFinalStageMessage = true;
  config.showInstructionsInTopPane = true;

  const bodyElement = document.body;
  bodyElement.className = bodyElement.className + " minecraft";

  Craft.initialConfig = config;

  // Replace studioApp methods with our own.
  studioApp().reset = this.reset.bind(this);
  studioApp().runButtonClick = this.runButtonClick.bind(this);

  const onMount = function () {
    studioApp().init({
      ...config,
      enableShowCode: false,
    });

    var itemTypeKeys = Object.keys(items);
    itemTypeKeys.forEach(function (itemType) {
      items[itemType].forEach(function (item) {
        preloadImage(item[0]);
      });
    });

    COMMON_UI_ASSETS.forEach(function (url) {
      preloadImage(url);
    });
  };

  // Push initial level properties into the Redux store
  studioApp().setPageConstants(config, {
    isMinecraft: true
  });

  ReactDOM.render(
    <Provider store={getStore()}>
      <AppView
        visualizationColumn={
          <CraftVisualizationColumn showScore={!!config.level.useScore}/>
        }
        onMount={onMount}
      />
    </Provider>,
    document.getElementById(config.containerId)
  );
};

/**
 * Reset the app to the start position and kill any pending animation tasks.
 * @param {boolean} first true if first reset (during app load)
 */
Craft.reset = function (first) {
  if (first) {
    return;
  }
  console.log('reset');
};

/**
 * Click the run button.  Start the program.
 */
Craft.runButtonClick = function () {
  console.log('run');

  const runButton = document.getElementById('runButton');
  const resetButton = document.getElementById('resetButton');

  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }

  studioApp().toggleRunReset('reset');
  // Turn on call tracing
  Blockly.mainBlockSpace.traceOn(true);
  studioApp().attempts++;

  Craft.executeUserCode();
};

Craft.executeUserCode = function () {
  let codeBlocks = Blockly.mainBlockSpace.getTopBlocks(true);
  const code = Blockly.Generator.blocksToCode('JavaScript', codeBlocks);
  let interpreter;

  /**
   * Helper function to create async request block
   * @param {number} blockID blockly block id
   * @param {string} commandName name of the command
   * @param {string} resultKey key for result value
   * @param {Object[]} inputPairs array of input key-value pairs
   * @param {function} callback callback that reports execution result
   */
  function createAsyncRequestBlock(blockID, commandName, resultKey, inputPairs, callback) {
    // Highlight blockly block
    studioApp().highlight(blockID);
    var keys = Object.keys(inputPairs);
    var keyValuePairs = [];
    // Create array of key=value
    keys.forEach((key) => {
      let value = inputPairs[key];
      if (value !== null) {
        keyValuePairs.push(`${key}=${value}`);
      }
    });
    // Insert key=value strings to the command
    var command = commandName;
    if (keyValuePairs.length > 0) {
      command = `${command}?${keyValuePairs.join('&')}`;
    }
    client.async_command(command, (result) => {
      callback(result);
      interpreter.run();
    }, resultKey);
  }

  const asyncMethods = {
    move: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'move', 'success', { 'direction': direction }, callback);
    },
    turn: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'turn', 'success', { 'direction': direction }, callback);
    },
    place: function (blockID, slotNum, direction, callback) {
      createAsyncRequestBlock(blockID, 'place', 'success', { 'slotNum': slotNum , 'direction': direction }, callback);
    },
    till: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'till', 'success', { 'direction': direction }, callback);
    },
    attack: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'attack', 'success', { 'direction': direction }, callback);
    },
    destroy: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'destroy', 'success', { 'direction': direction }, callback);
    },
    collect: function (blockID, item, callback) {
      createAsyncRequestBlock(blockID, 'collect', 'success', { 'item': getItemName(item) }, callback);
    },
    collectall: function (blockID, callback) {
      createAsyncRequestBlock(blockID, 'collect', 'success', { 'item': 'all'}, callback);
    },
    drop: function (blockID, slotNum, quantity, direction, callback) {
      createAsyncRequestBlock(blockID, 'drop', 'success', { 'slotNum': slotNum, 'quantity': quantity, 'direction': direction }, callback);
    },
    dropall: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'dropall', 'success', { 'direction': direction }, callback);
    },
    detect: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'detect', 'result', { 'direction': direction }, callback);
    },
    inspect: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'inspect', 'blockName', { 'direction': direction }, callback);
    },
    inspectdata: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'inspectdata', 'data', { 'direction': direction }, callback);
    },
    detectredstone: function (blockID, direction, callback) {
      createAsyncRequestBlock(blockID, 'detectredstone', 'result', { 'direction': direction }, callback);
    },
    getitemdetail: function (blockID, slotNum, callback) {
      createAsyncRequestBlock(blockID, 'getitemdetail', 'itemName', { 'slotNum': slotNum }, callback);
    },
    getitemspace: function (blockID, slotNum, callback) {
      createAsyncRequestBlock(blockID, 'getitemspace', 'spaceCount', { 'slotNum': slotNum }, callback);
    },
    getitemcount: function (blockID, slotNum, callback) {
      createAsyncRequestBlock(blockID, 'getitemcount', 'stackCount', { 'slotNum': slotNum }, callback);
    },
    transfer: function (blockID, srcSlotNum, quantity, dstSlotNum, callback) {
      createAsyncRequestBlock(blockID, 'transfer', 'success', { 'srcSlotNum': srcSlotNum , 'quantity': quantity, 'dstSlotNum': dstSlotNum }, callback);
    },
    tptoplayer: function (blockID, callback) {
      createAsyncRequestBlock(blockID, 'tptoplayer', null, {}, callback);
    },
    wait: function (blockID, milliseconds, callback) {
      studioApp().highlight(blockID);
       setTimeout(() => {
         callback();
         interpreter.run();
       }, milliseconds);
    },
    executeasother: function (blockID, origin, position, command, callback) {
      createAsyncRequestBlock(blockID, 'executeasother', 'success', { 'origin': origin , 'position': position, 'command': command }, callback);
    },
    executedetect: function (blockID, origin, position, detectBlock, detectData, detectPos, command, callback) {
      createAsyncRequestBlock(blockID, 'executedetect', 'success', { 'origin': origin , 'position': position, 'detectBlock': detectBlock, 'detectData': detectData, 'detectPos': detectPos, 'command': command }, callback);
    },
    timesetbyname: function (blockID, time, callback) {
      createAsyncRequestBlock(blockID, 'timesetbyname', 'success', { 'time': time }, callback);
    },
    timesetbynumber: function (blockID, time, callback) {
      createAsyncRequestBlock(blockID, 'timesetbynumber', 'success', { 'time': time }, callback);
    },
    weather: function (blockID, type, callback) {
      createAsyncRequestBlock(blockID, 'weather', 'success', { 'type': type }, callback);
    },
    tptotarget: function (blockID, victim, destination, callback) {
      createAsyncRequestBlock(blockID, 'tptargettotarget', 'success', { 'victim': victim, 'destination': destination }, callback);
    },
    tptopos: function (blockID, victim, destination, callback) {
      createAsyncRequestBlock(blockID, 'tptargettopos', 'success', { 'victim': victim, 'destination': destination }, callback);
    },
    fill: function (blockID, from, to, tileName, tileData, callback) {
      createAsyncRequestBlock(blockID, 'fill', 'success', { 'from': from, 'to': to, 'tileName': tileName, 'tileData': tileData }, callback);
    },
    give: function (blockID, player, item, amount, callback) {
      createAsyncRequestBlock(blockID, 'give', 'success', { 'player': player, 'itemName': item['name'], 'data':item['data'], 'amount': amount }, callback);
    }
  };

  const methods = {
    item: function (blockID, name, data) {
      studioApp().highlight(blockID);
      return { 'name': name, 'data': data };
    }
  };

  // Register async methods
  codegen.asyncFunctionList = Object.values(asyncMethods);
  interpreter = codegen.evalWith(code, Object.assign(asyncMethods, methods));
};
