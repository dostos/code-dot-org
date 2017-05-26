import { createToolbox } from '../../block_utils';

function craftBlock(type, children = "") {
  return block(`craft_${type}`, children);
}

function category(name, children, properties = "") {
  return `<category name='${name}' ${properties}>${children}</category>`;
}

function block(type, children = "") {
  return `<block type='${type}'>${children}</block>`;
}

function value(name, content) {
  return `<value name="${name}">${content}</value>`;
}

function field(name, value) {
  return `<field name="${name}">${value}</field>`;
}

function xyz(prefix = "") {
  return value(prefix  + 'X', block('math_number', field("NUM", 1))) + value(prefix  + 'Y', block('math_number', field("NUM", 1))) + value(prefix  + 'Z', block('math_number', field("NUM", 1)));
}

module.exports = {
  custom: {
    requiredBlocks: [],
    freePlay: false,
    disable_variable_editing: false,
    toolbox: createToolbox(
      category('Agent',
        craftBlock('move') +
        craftBlock('turn') +
        craftBlock('tptoplayer')+
        craftBlock('place', value('SLOTNUM', block('math_number', field("NUM", 1)))) +
        craftBlock('destroy') +
        craftBlock('till') +
        craftBlock('attack') +
        craftBlock('collect', value('ITEM', craftBlock('block'))) +
        craftBlock('collectall') +
        craftBlock('drop', value('SLOTNUM', block('math_number', field("NUM", 1))) + value('QUANTITY', block('math_number', field("NUM", 1)))) +
        craftBlock('dropall') +
        craftBlock('detect') +
        craftBlock('inspect') +
        craftBlock('inspectdata') +
        craftBlock('getitemdetail', value('SLOTNUM', block('math_number', field("NUM", 1)))) +
        craftBlock('getitemspace', value('SLOTNUM', block('math_number', field("NUM", 1)))) +
        craftBlock('getitemcount', value('SLOTNUM', block('math_number', field("NUM", 1)))) +
        craftBlock('transfer', value('SRCSLOTNUM', block('math_number', field("NUM", 1))) + value('DSTSLOTNUM', block('math_number', field("NUM", 1))) + value('QUANTITY', block('math_number', field("NUM", 1)))) +
        craftBlock('detectredstone')) +
      category('Item',
          craftBlock('block') +
          craftBlock('miscellaneous') +
          craftBlock('tool') +
          craftBlock('decoration') +
          craftBlock('getnameof') +
          craftBlock('getdataof') +
          craftBlock('createblock', `<value name='BLOCKTYPE'>${block('text')}</value><value name='BLOCKDATA'>${block('text')}</value>`)) +
      category('Blocks',
        craftBlock('tptotarget') +
        craftBlock('tptopos', xyz()) +
        craftBlock('fill', value('ITEM', craftBlock('block')) + xyz('FROM_') + xyz('TO_')) +
        craftBlock('give', value('ITEM', craftBlock('block')) + value('AMOUNT', block('math_number', field("NUM", 1)))) +
        craftBlock('kill') +
        craftBlock('setblock', value('ITEM', craftBlock('block')) + xyz()) +
        craftBlock('summon', xyz()) +
        craftBlock('testforblock', xyz() + value('ITEM', craftBlock('block'))) +
        craftBlock('testforblocks', xyz() + xyz('FROM_') + xyz('TO_')) +
        craftBlock('clone', xyz() + xyz('FROM_') + xyz('TO_')) +
        craftBlock('clonefiltered', xyz() + xyz('FROM_') + xyz('TO_') + value('ITEM', craftBlock('block'))) +
        craftBlock('executeasother', xyz()) +
        craftBlock('executedetect', value('ITEM', craftBlock('block')) + xyz() + xyz('BLOCK_')) +
        craftBlock('timesetbyname') +
        craftBlock('timesetbynumber') +
        craftBlock('weather')) +
      category('Logic',
        block('logic_compare') +
        block('logic_operation') +
        block('logic_negate') +
        block('logic_boolean') +
        block('text')) +
      category('Control',
        block('controls_if') +
        block('controls_if', "<mutation else='1'></mutation>") +
        block('controls_for') +
        block('controls_whileUntil') +
        block('controls_repeat_ext', `<value name='TIMES'>${block('math_number', '<field name="NUM">10</field>')}</value>`) +
        craftBlock('wait'))+
      category('Variables', "", 'custom="VARIABLE"') +
      category('Functions', "", 'custom="PROCEDURE"') +
      category('Math',
        block('math_number') +
        block('math_arithmetic') +
        block('math_random_int',
          `<value name='FROM'>${block('math_number', '<field name="NUM">1</field>')}<value>` +
          `<value name='TO'>${block('math_number', '<field name="NUM">10</field>')}<value>`)))
  }
};
