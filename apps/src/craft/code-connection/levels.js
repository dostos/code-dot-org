import { createToolbox } from '../../block_utils';

function craftBlock(type) {
  return block("craft_" + type);
}

function block(type) {
  return '<block type="' + type + '"></block>';
}

module.exports = {
  'custom': {
    'requiredBlocks': [],
    'freePlay': false,
    'toolbox': createToolbox(craftBlock('move'))
  }
};
