var i18n = require('./locale');

//var decorations = ["acacia_door", "acacia_fence_gate", "anvil", "beacon", "bed", "birch_door", "birch_fence_gate", "black_glazed_terracotta", "blue_glazed_terracotta", "board", "bookshelf", "brewing_stand", "brown_glazed_terracotta", "brown_mushroom", "brown_mushroom_block", "cactus", "cake", "carpet", "cauldron", "chest", "coal_block", "cobblestone_wall", "concrete", "concretepowder", "crafting_table", "cyan_glazed_terracotta", "dark_oak_door", "dark_oak_fence_gate", "deadbush", "diamond_block", "double_plant", "dragon_egg", "emerald_block", "enchanting_table", "end_crystal", "end_portal_frame", "end_rod", "ender_chest", "fence", "fence_gate", "flower_pot", "frame", "furnace", "glass", "glass_pane", "glowstone", "gold_block", "grass_path", "gray_glazed_terracotta", "green_glazed_terracotta", "hay_block", "iron_bars", "iron_block", "iron_door", "iron_trapdoor", "jungle_door", "jungle_fence_gate", "ladder", "lapis_block", "leaves", "leaves2", "light_blue_glazed_terracotta", "lime_glazed_terracotta", "lit_pumpkin", "magenta_glazed_terracotta", "melon_block", "mob_spawner", "monster_egg", "nether_brick_fence", "noteblock", "orange_glazed_terracotta", "painting", "pink_glazed_terracotta", "pumpkin", "purple_glazed_terracotta", "red_flower", "red_glazed_terracotta", "red_mushroom", "red_mushroom_block", "redstone_block", "sapling", "sealantern", "shulker_box", "sign", "silver_glazed_terracotta", "skull", "slime", "snow_layer", "sponge", "spruce_door", "spruce_fence_gate", "stonecutter", "tallgrass", "trapdoor", "trapped_chest", "vine", "waterlily", "web", "white_glazed_terracotta", "wooden_door", "wool", "yellow_flower", "yellow_glazed_terracotta"];

//var tools = ["activator_rail", "boat", "bow", "bucket", "camera", "chain_command_block", "chainmail_boots", "chainmail_chestplate", "chainmail_helmet", "chainmail_leggings", "chest_minecart", "clock", "command_block", "command_block_minecart", "comparator", "compass", "daylight_detector", "detector_rail", "diamond_axe", "diamond_boots", "diamond_chestplate", "diamond_helmet", "diamond_hoe", "diamond_leggings", "diamond_pickaxe", "diamond_shovel", "diamond_sword", "dispenser", "dropper", "elytra", "ender_eye", "ender_pearl", "fireball", "fishing_rod", "flint_and_steel", "golden_axe", "golden_boots", "golden_chestplate", "golden_helmet", "golden_hoe", "golden_leggings", "golden_pickaxe", "golden_rail", "golden_shovel", "golden_sword", "heavy_weighted_pressure_plate", "hopper", "hopper_minecart", "horsearmordiamond", "horsearmorgold", "horsearmoriron", "horsearmorleather", "iron_axe", "iron_boots", "iron_chestplate", "iron_helmet", "iron_hoe", "iron_leggings", "iron_pickaxe", "iron_shovel", "iron_sword", "lead", "leather_boots", "leather_chestplate", "leather_helmet", "leather_leggings", "lever", "light_weighted_pressure_plate", "minecart", "nametag", "observer", "piston", "portfolio", "rail", "redstone", "redstone_lamp", "redstone_torch", "repeater", "repeating_command_block", "saddle", "shears", "snowball", "spawn_egg", "sticky_piston", "stone_axe", "stone_button", "stone_hoe", "stone_pickaxe", "stone_pressure_plate", "stone_shovel", "stone_sword", "structure_block", "tnt", "tnt_minecart", "torch", "totem", "tripwire_hook", "wooden_axe", "wooden_button", "wooden_hoe", "wooden_pickaxe", "wooden_pressure_plate", "wooden_shovel", "wooden_sword"];

//var miscellaneous = ["apple", "appleenchanted", "arrow", "baked_potato", "beef", "beetroot", "beetroot_seeds", "beetroot_soup", "blaze_powder", "blaze_rod", "bone", "book", "bowl", "bread", "brick", "carrot", "carrotonastick", "chicken", "chorus_flower", "chorus_fruit", "chorus_fruit_popped", "chorus_plant", "clay_ball", "clownfish", "coal", "cooked_beef", "cooked_chicken", "cooked_fish", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "diamond", "dragon_breath", "dye", "egg", "emerald", "emptymap", "enchanted_book", "experience_bottle", "feather", "fermented_spider_eye", "fish", "flint", "ghast_tear", "glass_bottle", "glowstone_dust", "gold_ingot", "gold_nugget", "golden_apple", "golden_carrot", "gunpowder", "iron_ingot", "iron_nugget", "leather", "lingering_potion", "magma_cream", "melon", "melon_seeds", "mushroom_stew", "muttoncooked", "muttonraw", "nether_wart", "netherstar", "paper", "poisonous_potato", "porkchop", "potato", "potion", "prismarine_crystals", "prismarine_shard", "pufferfish", "pumpkin_pie", "pumpkin_seeds", "quartz", "rabbit", "rabbit_foot", "rabbit_hide", "rabbit_stew", "reeds", "rotten_flesh", "salmon", "shulker_shell", "slime_ball", "speckled_melon", "spider_eye", "splash_potion", "stick", "string", "sugar", "wheat", "wheat_seeds"];

var sixDirections = [['Forward','forward'],['Back', 'back'],['Left','left'],['Right','right'],['Up','up'],['Down','down']];

//var fourDirections = [['Forward','forward'],['Back', 'back'],['Left','left'],['Right','right']];

//var rotateDirections = [[i18n.blockTurnLeft() + ' \u21BA', 'left'], [i18n.blockTurnRight() + ' \u21BB', 'right']];

// Install extensions to Blockly's language and JavaScript generator.
export const install = (blockly, blockInstallOptions) => {
  blockly.Blocks.craft_move = {
    helpUrl: '',
    init: function () {
      this.setHSV(184, 1.00, 0.74);
      this.appendDummyInput()
          .appendTitle(new blockly.FieldLabel('Move'))
          .appendTitle(new blockly.FieldDropdown(sixDirections), 'DIR');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  blockly.JavaScript.craft_move = function () {
    var dir = this.getTitleValue('DIR');
    return `move('block_id_${this.id}','${dir}');`;
  };
};
