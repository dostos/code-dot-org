var i18n = require('./locale');

var blocks = ["air", "cobblestone", "stonebrick", "mossy_cobblestone", "planks", "brick_block", "stone", "dirt", "podzol", "grass", "mycelium", "clay", "hardened_clay", "stained_hardened_clay", "sandstone", "sand", "gravel", "log", "log2", "nether_brick", "soul_sand", "bedrock", "stone_stairs", "oak_stairs", "spruce_stairs", "birch_stairs", "jungle_stairs", "acacia_stairs", "dark_oak_stairs", "brick_stairs", "sandstone_stairs", "red_sandstone_stairs", "stone_brick_stairs", "nether_brick_stairs", "quartz_stairs", "purpur_stairs", "stone_slab", "wooden_slab", "stone_slab2", "quartz_block", "prismarine", "purpur_block", "coal_ore", "iron_ore", "gold_ore", "diamond_ore", "lapis_ore", "redstone_ore", "emerald_ore", "quartz_ore", "obsidian", "ice", "packed_ice", "snow", "end_bricks", "end_stone", "allow", "deny", "border_block", "netherbrick", "netherrack", "red_sandstone"];

var decorations = ["acacia_door", "acacia_fence_gate", "anvil", "beacon", "bed", "birch_door", "birch_fence_gate", "black_glazed_terracotta", "blue_glazed_terracotta", "board", "bookshelf", "brewing_stand", "brown_glazed_terracotta", "brown_mushroom", "brown_mushroom_block", "cactus", "cake", "carpet", "cauldron", "chest", "coal_block", "cobblestone_wall", "concrete", "concretepowder", "crafting_table", "cyan_glazed_terracotta", "dark_oak_door", "dark_oak_fence_gate", "deadbush", "diamond_block", "double_plant", "dragon_egg", "emerald_block", "enchanting_table", "end_crystal", "end_portal_frame", "end_rod", "ender_chest", "fence", "fence_gate", "flower_pot", "frame", "furnace", "glass", "glass_pane", "glowstone", "gold_block", "grass_path", "gray_glazed_terracotta", "green_glazed_terracotta", "hay_block", "iron_bars", "iron_block", "iron_door", "iron_trapdoor", "jungle_door", "jungle_fence_gate", "ladder", "lapis_block", "leaves", "leaves2", "light_blue_glazed_terracotta", "lime_glazed_terracotta", "lit_pumpkin", "magenta_glazed_terracotta", "melon_block", "mob_spawner", "monster_egg", "nether_brick_fence", "noteblock", "orange_glazed_terracotta", "painting", "pink_glazed_terracotta", "pumpkin", "purple_glazed_terracotta", "red_flower", "red_glazed_terracotta", "red_mushroom", "red_mushroom_block", "redstone_block", "sapling", "sealantern", "shulker_box", "sign", "silver_glazed_terracotta", "skull", "slime", "snow_layer", "sponge", "spruce_door", "spruce_fence_gate", "stonecutter", "tallgrass", "trapdoor", "trapped_chest", "vine", "waterlily", "web", "white_glazed_terracotta", "wooden_door", "wool", "yellow_flower", "yellow_glazed_terracotta"];

var tools = ["activator_rail", "boat", "bow", "bucket", "camera", "chain_command_block", "chainmail_boots", "chainmail_chestplate", "chainmail_helmet", "chainmail_leggings", "chest_minecart", "clock", "command_block", "command_block_minecart", "comparator", "compass", "daylight_detector", "detector_rail", "diamond_axe", "diamond_boots", "diamond_chestplate", "diamond_helmet", "diamond_hoe", "diamond_leggings", "diamond_pickaxe", "diamond_shovel", "diamond_sword", "dispenser", "dropper", "elytra", "ender_eye", "ender_pearl", "fireball", "fishing_rod", "flint_and_steel", "golden_axe", "golden_boots", "golden_chestplate", "golden_helmet", "golden_hoe", "golden_leggings", "golden_pickaxe", "golden_rail", "golden_shovel", "golden_sword", "heavy_weighted_pressure_plate", "hopper", "hopper_minecart", "horsearmordiamond", "horsearmorgold", "horsearmoriron", "horsearmorleather", "iron_axe", "iron_boots", "iron_chestplate", "iron_helmet", "iron_hoe", "iron_leggings", "iron_pickaxe", "iron_shovel", "iron_sword", "lead", "leather_boots", "leather_chestplate", "leather_helmet", "leather_leggings", "lever", "light_weighted_pressure_plate", "minecart", "nametag", "observer", "piston", "portfolio", "rail", "redstone", "redstone_lamp", "redstone_torch", "repeater", "repeating_command_block", "saddle", "shears", "snowball", "spawn_egg", "sticky_piston", "stone_axe", "stone_button", "stone_hoe", "stone_pickaxe", "stone_pressure_plate", "stone_shovel", "stone_sword", "structure_block", "tnt", "tnt_minecart", "torch", "totem", "tripwire_hook", "wooden_axe", "wooden_button", "wooden_hoe", "wooden_pickaxe", "wooden_pressure_plate", "wooden_shovel", "wooden_sword"];

var miscellaneous = ["apple", "appleenchanted", "arrow", "baked_potato", "beef", "beetroot", "beetroot_seeds", "beetroot_soup", "blaze_powder", "blaze_rod", "bone", "book", "bowl", "bread", "brick", "carrot", "carrotonastick", "chicken", "chorus_flower", "chorus_fruit", "chorus_fruit_popped", "chorus_plant", "clay_ball", "clownfish", "coal", "cooked_beef", "cooked_chicken", "cooked_fish", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "diamond", "dragon_breath", "dye", "egg", "emerald", "emptymap", "enchanted_book", "experience_bottle", "feather", "fermented_spider_eye", "fish", "flint", "ghast_tear", "glass_bottle", "glowstone_dust", "gold_ingot", "gold_nugget", "golden_apple", "golden_carrot", "gunpowder", "iron_ingot", "iron_nugget", "leather", "lingering_potion", "magma_cream", "melon", "melon_seeds", "mushroom_stew", "muttoncooked", "muttonraw", "nether_wart", "netherstar", "paper", "poisonous_potato", "porkchop", "potato", "potion", "prismarine_crystals", "prismarine_shard", "pufferfish", "pumpkin_pie", "pumpkin_seeds", "quartz", "rabbit", "rabbit_foot", "rabbit_hide", "rabbit_stew", "reeds", "rotten_flesh", "salmon", "shulker_shell", "slime_ball", "speckled_melon", "spider_eye", "splash_potion", "stick", "string", "sugar", "wheat", "wheat_seeds"];

/**
 * Helper function to create array of key,key
 * @param {Object[]} items
 */
function createItemList(items) {
  return items.map(function (key) {
    return [key, key];
  });
}

function createBlockList(blocks) {
  return blocks.map(function (key) {
    // Need to store name and data in a string because of blockly's restriction
    return [key, [key + ',0']];
  });
}

function getName(blockString) {
  return blockString.split(',')[0];
}

function getData(blockString) {
  return blockString.split(',')[1];
}

// Custom blockly return types
// tool, decoration, miscellaneous
const ITEM_TYPE = 'ITEM';
// block
const BLOCK_TYPE = 'BLOCK';

const sixDirections = [[i18n.directionForward(),'forward'],[i18n.directionBack(), 'back'],[i18n.directionLeft(),'left'],[i18n.directionRight(),'right'],[i18n.directionUp(),'up'],[i18n.directionDown(),'down']];

const fourDirections = [[i18n.directionForward(),'forward'],[i18n.directionBack(), 'back'],[i18n.directionLeft(),'left'],[i18n.directionRight(),'right']];

const rotateDirections = [[i18n.directionLeft() + ' \u21BA', 'left'], [i18n.directionRight() + ' \u21BB', 'right']];

const positionTypes = [['Relative' , '~'], ['Absolute', '']];

const timeTypes = [['Day', 'day'], ['Night', 'night']];

const weatherTypes = [['Clear', 'clear'], ['Rain', 'rain'], ['Thunder', 'thunder']];


function createBlockPos(x, y, z, prefix) {
    return encodeURIComponent(`${prefix}${x} ${prefix}${y} ${prefix}${z}`);
}

// Install extensions to Blockly's language and JavaScript generator.
export const install = (blockly, blockInstallOptions) => {
  // Agent related blocks
  blockly.Blocks.craft_move = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockMove()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_move = function () {
    var dir = this.getTitleValue('DIR');
    return `move('block_id_${this.id}','${dir}');`;
  };

  blockly.Blocks.craft_turn = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockTurn()))
          .appendTitle(new blockly.FieldDropdown(rotateDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_turn = function () {
    var dir = this.getTitleValue('DIR');
    return `turn('block_id_${this.id}','${dir}');`;
  };

  blockly.Blocks.craft_place = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockPlace()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.inSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'SLOTNUM');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_place = function () {
    var dir = this.getTitleValue('DIR');
    var value = window.parseInt(this.getTitleValue('SLOTNUM'), 10);
    return `place('block_id_${this.id}','${value}','${dir}');`;
  };

  blockly.Blocks.craft_till = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockTill()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_till = function () {
    var dir = this.getTitleValue('DIR');
    return `till('block_id_${this.id}','${dir}');`;
  };

  blockly.Blocks.craft_attack = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionAttack()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_attack = function () {
    var dir = this.getTitleValue('DIR');
    return `attack('block_id_${this.id}','${dir}');`;
  };

  blockly.Blocks.craft_destroy = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockDestroyBlock()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_destroy = function () {
    var dir = this.getTitleValue('DIR');
    return `destroy('block_id_${this.id}','${dir}');`;
  };

  blockly.Blocks.craft_collectall = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionCollectAll()));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_collectall = function () {
    return `collectall('block_id_${this.id}');`;
  };

  blockly.Blocks.craft_collect = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendValueInput('ITEM')
          .setCheck([BLOCK_TYPE, ITEM_TYPE])
          .appendTitle(new blockly.FieldLabel(i18n.blockActionCollect()));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_collect = function () {
    var itemName = Blockly.JavaScript.valueToCode(this, 'ITEM', Blockly.JavaScript.ORDER_NONE);
    return `collect('block_id_${this.id}',${itemName});`;
  };

  blockly.Blocks.craft_drop = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionDrop()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.inSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'SLOTNUM');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.quantity()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'QUANTITY');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_drop = function () {
    var dir = this.getTitleValue('DIR');
    var slotNumber = window.parseInt(this.getTitleValue('SLOTNUM'), 10);
    var quantity = window.parseInt(this.getTitleValue('QUANTITY'), 10);
    return `drop('block_id_${this.id}','${slotNumber}','${quantity}','${dir}');`;
  };

  blockly.Blocks.craft_dropall = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionDropAll()))
          .appendTitle(new blockly.FieldDropdown(fourDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_dropall = function () {
    var dir = this.getTitleValue('DIR');
    return `dropall('block_id_${this.id}','${dir}');`;
  };

  blockly.Blocks.craft_detect = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionDetect()))
          .appendTitle(new blockly.FieldDropdown(fourDirections), 'DIR');
      this.setOutput(true, Blockly.BlockValueType.BOOLEAN);
    }
  };

  blockly.JavaScript.craft_detect = function () {
    var dir = this.getTitleValue('DIR');
    return [`detect('block_id_${this.id}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_inspect = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionInspect()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setOutput(true, Blockly.JavaScript.STRING);
    }
  };

  blockly.JavaScript.craft_inspect = function () {
    var dir = this.getTitleValue('DIR');
    return [`inspect('block_id_${this.id}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_inspectdata = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionInspectData()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setOutput(true, Blockly.BlockValueType.NUMBER);
    }
  };

  blockly.JavaScript.craft_inspectdata = function () {
    var dir = this.getTitleValue('DIR');
    return [`inspectdata('block_id_${this.id}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_detectredstone = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionDetectRedstone()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setOutput(true, Blockly.BlockValueType.BOOLEAN);
    }
  };

  blockly.JavaScript.craft_detectredstone = function () {
    var dir = this.getTitleValue('DIR');
    return [`detectredstone('block_id_${this.id}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_getitemdetail = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionGetItemDetail()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.inSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'SLOTNUM');
      this.setOutput(true, Blockly.BlockValueType.STRING);
    }
  };

  blockly.JavaScript.craft_getitemdetail = function () {
    var dir = this.getTitleValue('DIR');
    var slotNumber = window.parseInt(this.getTitleValue('SLOTNUM'), 10);
    return [`getitemdetail('block_id_${this.id}','${slotNumber}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_getitemspace = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionGetItemSpace()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.inSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'SLOTNUM');
      this.setOutput(true, Blockly.BlockValueType.NUMBER);
    }
  };

  blockly.JavaScript.craft_getitemspace = function () {
    var dir = this.getTitleValue('DIR');
    var slotNumber = window.parseInt(this.getTitleValue('SLOTNUM'), 10);
    return [`getitemspace('block_id_${this.id}','${slotNumber}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_getitemcount = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionGetItemCount()))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.inSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'SLOTNUM');
      this.setOutput(true, Blockly.BlockValueType.NUMBER);
    }
  };

  blockly.JavaScript.craft_getitemcount = function () {
    var dir = this.getTitleValue('DIR');
    var slotNumber = window.parseInt(this.getTitleValue('SLOTNUM'), 10);
    return [`getitemcount('block_id_${this.id}','${slotNumber}','${dir}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_transfer = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionTransfer()));
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.inSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'SRCSLOTNUM');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.toSlotNumber()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'DSTSLOTNUM');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.quantity()))
          .appendTitle(new blockly.FieldTextInput('1', blockly.FieldTextInput.numberValidator), 'QUANTITY');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_transfer = function () {
    var srcSlotNumber = window.parseInt(this.getTitleValue('SRCSLOTNUM'), 10);
    var dstSlotNumber = window.parseInt(this.getTitleValue('DSTSLOTNUM'), 10);
    var quantity = window.parseInt(this.getTitleValue('QUANTITY'), 10);
    return `transfer('block_id_${this.id}','${srcSlotNumber}','${quantity}','${dstSlotNumber}');`;
  };

  blockly.Blocks.craft_tptoplayer = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionTeleportToPlayer()));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_tptoplayer = function () {
    return `tptoplayer('block_id_${this.id}');`;
  };
  // Non-agent blocks
  blockly.Blocks.craft_wait = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionWait()))
          .appendTitle(new blockly.FieldTextInput('1000', blockly.FieldTextInput.numberValidator), 'MILLISECONDS')
          .appendTitle(new blockly.FieldLabel('ms'));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_wait = function () {
    var milliseconds = window.parseInt(this.getTitleValue('MILLISECONDS'), 10);
    return `wait('block_id_${this.id}','${milliseconds}');`;
  };

  blockly.Blocks.craft_executeasother = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionExecute()))
          .appendTitle(new blockly.FieldTextInput(''), 'COMMAND');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.onBehalfOf()))
          .appendTitle(new blockly.FieldTextInput(''), 'TARGET');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.at()))
          .appendTitle(new blockly.FieldDropdown(positionTypes), 'POSITIONTYPE')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'X')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'Y')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'Z');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_executeasother = function () {
    var target = encodeURIComponent(this.getTitleValue('TARGET'));
    var positionType = this.getTitleValue('POSITIONTYPE');
    var x = this.getTitleValue('X');
    var y = this.getTitleValue('Y');
    var z = this.getTitleValue('Z');
    var command = this.getTitleValue('COMMAND');
    return `executeasother('block_id_${this.id}','${target}','${createBlockPos(x, y, z, positionType)}','${command}');`;
  };

  blockly.Blocks.craft_executedetect = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionExecute()))
          .appendTitle(new blockly.FieldTextInput(''), 'COMMAND');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('on behalf of'))
          .appendTitle(new blockly.FieldTextInput(''), 'TARGET');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('at'))
          .appendTitle(new blockly.FieldDropdown(positionTypes), 'POSITIONTYPE')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'X')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'Y')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'Z');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('if a block type'))
          .appendTitle(new blockly.FieldTextInput(''), 'BLOCKTYPE')
          .appendTitle(new blockly.FieldLabel('with data'))
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'BLOCKDATA');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('detected at'))
          .appendTitle(new blockly.FieldDropdown(positionTypes), 'BLOCKPOSITIONTYPE')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'BLOCK_X')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'BLOCK_Y')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'BLOCK_Z');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_executedetect = function () {
    var target = encodeURIComponent(this.getTitleValue('TARGET'));
    var positionType = this.getTitleValue('POSITIONTYPE');
    var x = this.getTitleValue('X');
    var y = this.getTitleValue('Y');
    var z = this.getTitleValue('Z');
    var blockType = this.getTitleValue('BLOCKTYPE');
    var blockData = this.getTitleValue('BLOCKDATA');
    var blockPositionType = this.getTitleValue('BLOCKPOSITIONTYPE');
    var blockX = this.getTitleValue('BLOCK_X');
    var blockY = this.getTitleValue('BLOCK_Y');
    var blockZ = this.getTitleValue('BLOCK_Z');
    var command = this.getTitleValue('COMMAND');
    return `executedetect('block_id_${this.id}','${target}','${createBlockPos(x, y, z, positionType)}',
    '${blockType}','${blockData}','${createBlockPos(blockX, blockY, blockZ, blockPositionType)}','${command}');`;
  };

  blockly.Blocks.craft_timesetbyname = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.timeSet()))
          .appendTitle(new blockly.FieldDropdown(timeTypes), 'TIME');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_timesetbyname = function () {
    var time = this.getTitleValue('TIME');
    return `timesetbyname('block_id_${this.id}','${time}');`;
  };

  blockly.Blocks.craft_timesetbynumber = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.timeSet()))
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'TIME');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_timesetbynumber = function () {
    var time = this.getTitleValue('TIME');
    return `timesetbynumber('block_id_${this.id}','${time}');`;
  };

  blockly.Blocks.craft_weather = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.weather()))
          .appendTitle(new blockly.FieldDropdown(weatherTypes), 'WEATHER');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_weather = function () {
    var weather = this.getTitleValue('WEATHER');
    return `weather('block_id_${this.id}','${weather}');`;
  };

  blockly.Blocks.craft_tptotarget = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionTeleport()))
          .appendTitle(new blockly.FieldLabel(i18n.target()))
          .appendTitle(new blockly.FieldTextInput(''), 'VICTIM');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.to()))
          .appendTitle(new blockly.FieldTextInput(''), 'DESTINATION');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_tptotarget = function () {
    var victim = encodeURIComponent(this.getTitleValue('VICTIM'));
    var destination = encodeURIComponent(this.getTitleValue('DESTINATION'));
    return `tptotarget('block_id_${this.id}','${victim}','${destination}');`;
  };

  blockly.Blocks.craft_tptopos = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionTeleport()))
          .appendTitle(new blockly.FieldLabel(i18n.target()))
          .appendTitle(new blockly.FieldTextInput(''), 'VICTIM');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.to()))
          .appendTitle(new blockly.FieldDropdown(positionTypes), 'POSITIONTYPE')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'X')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'Y')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'Z');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_tptopos = function () {
    var victim = encodeURIComponent(this.getTitleValue('VICTIM'));
    var positionType = this.getTitleValue('POSITIONTYPE');
    var x = this.getTitleValue('X');
    var y = this.getTitleValue('Y');
    var z = this.getTitleValue('Z');
    return `tptopos('block_id_${this.id}','${victim}','${createBlockPos(x, y, z, positionType)}');`;
  };

  blockly.Blocks.craft_fill = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionFill()));
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.from()))
          .appendTitle(new blockly.FieldDropdown(positionTypes), 'FROMPOSITIONTYPE')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'FROM_X')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'FROM_Y')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'FROM_Z');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.to()))
          .appendTitle(new blockly.FieldDropdown(positionTypes), 'TOPOSITIONTYPE')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'TO_X')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'TO_Y')
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'TO_Z');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockType()))
          .appendTitle(new blockly.FieldTextInput(''), 'BLOCKTYPE')
          .appendTitle(new blockly.FieldLabel(i18n.tileData()))
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'BLOCKDATA');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_fill = function () {
    var fromPositionType = this.getTitleValue('FROMPOSITIONTYPE');
    var fromX = this.getTitleValue('FROM_X');
    var fromY = this.getTitleValue('FROM_Y');
    var fromZ = this.getTitleValue('FROM_Z');
    var toPositionType = this.getTitleValue('TOPOSITIONTYPE');
    var toX = this.getTitleValue('TO_X');
    var toY = this.getTitleValue('TO_Y');
    var toZ = this.getTitleValue('TO_Z');
    var blockType = this.getTitleValue('BLOCKTYPE');
    var blockData = this.getTitleValue('BLOCKDATA');
    return `fill('block_id_${this.id}','${createBlockPos(fromX, fromY, fromZ, fromPositionType)}','${createBlockPos(toX, toY, toZ, toPositionType)}','${blockType}','${blockData}');`;
  };

  blockly.Blocks.craft_give = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.blockActionGive()))
          .appendTitle(new blockly.FieldTextInput('0', blockly.FieldTextInput.numberValidator), 'AMOUNT')
          .appendTitle(new blockly.FieldLabel(i18n.items()))
          .appendTitle(new blockly.FieldTextInput(''), 'ITEM');
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel(i18n.to()))
          .appendTitle(new blockly.FieldTextInput(''), 'PLAYER');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_give = function () {
    var player = encodeURIComponent(this.getTitleValue('PLAYER'));
    var item = this.getTitleValue('ITEM');
    var amount = this.getTitleValue('AMOUNT');
    return `give('block_id_${this.id}','${player}','${item}','${amount}');`;
  };

  blockly.Blocks.craft_createblock = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendValueInput('BLOCKTYPE')
          .setCheck(Blockly.JavaScript.STRING)
          .appendTitle(new blockly.FieldLabel(i18n.blockType()));
      this.appendValueInput('BLOCKDATA')
          .setCheck(Blockly.JavaScript.STRING)
          .appendTitle(new blockly.FieldLabel(i18n.blockData()));
      this.setOutput(true, BLOCK_TYPE);
    }
  };

  blockly.JavaScript.craft_createblock = function () {
    var blockType = this.getTitleValue('BLOCKTYPE');
    var blockData = this.getTitleValue('BLOCKDATA');
    return [`block('block_id_${this.id}','${blockType}','${blockData}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_block = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldDropdown(createBlockList(blocks)),'BLOCK');
      this.setOutput(true, BLOCK_TYPE);
    }
  };

  blockly.JavaScript.craft_block = function () {
    var block = this.getTitleValue('BLOCK');
    return [`block('block_id_${this.id}','${getName(block)}','${getData(block)}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_miscellaneous = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldDropdown(createItemList(miscellaneous)),'ITEM');
      this.setOutput(true, ITEM_TYPE);
    }
  };

  blockly.JavaScript.craft_miscellaneous = function () {
    var item = this.getTitleValue('ITEM');
    return [`item('block_id_${this.id}','${item}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_decoration = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldDropdown(createItemList(decorations)),'ITEM');
      this.setOutput(true, ITEM_TYPE);
    }
  };

  blockly.JavaScript.craft_decoration = function () {
    var item = this.getTitleValue('ITEM');
    return [`item('block_id_${this.id}','${item}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_tool = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldDropdown(createItemList(tools)),'ITEM');
      this.setOutput(true, ITEM_TYPE);
    }
  };

  blockly.JavaScript.craft_tool = function () {
    var item = this.getTitleValue('ITEM');
    return [item, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_getnameofblock = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('Get name of block'))
          .appendTitle(new blockly.FieldDropdown(createBlockList(blocks)),'BLOCK');
      this.setOutput(true, Blockly.JavaScript.STRING);
    }
  };

  blockly.JavaScript.craft_getnameofblock = function () {
      var block = this.getTitleValue('BLOCK');
      return [`item('block_id_${this.id}','${getName(block)}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

  blockly.Blocks.craft_getdataofblock = {
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('Get data of block'))
          .appendTitle(new blockly.FieldDropdown(createBlockList(blocks)),'BLOCK');
      this.setOutput(true, Blockly.JavaScript.STRING);
    }
  };

  blockly.JavaScript.craft_getdataofblock = function () {
      var block = this.getTitleValue('BLOCK');
      return [`item('block_id_${this.id}','${getData(block)}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };

};
