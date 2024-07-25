export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('game-logo', 'assets/img/rat_474x278.png');
    this.load.image('sphereTexture', 'assets/gui/infobars/itsmars_orb_fill.png');
    this.load.image('bigContour', 'assets/gui/infobars/itsmars_orb_back1.png');
    this.load.image('fillTexture', 'assets/gui/infobars/itsmars_scroll_fill.png');
    this.load.image('contour', 'assets/gui/infobars/itsmars_orb_border.png');
    this.load.image('shadow', 'assets/gui/infobars/itsmars_orb_shadow.png');
    this.load.image('highlight', 'assets/gui/infobars/itsmars_orb_highlight.png');
    this.load.image('spellBar', 'assets/gui/infobars/ManaPanel.png');
    this.load.image('spellSlot', 'assets/gui/infobars/52x52 SpellSlotBorder.png');
    this.load.image('attack', 'assets/gui/icons/28.png');
    this.load.image('expFill', 'assets/gui/infobars/itsmars_exp_fill.png');
    this.load.image('expBack', 'assets/gui/infobars/itsmars_exp_back.png');
    this.load.image('expHighlight', 'assets/gui/infobars/itsmars_exp_highlight.png');
    this.load.image('expShadow', 'assets/gui/infobars/itsmars_exp_shadow.png');
    this.load.image('leftInfoBar', 'assets/gui/infobars/HealthPanel.png');
    this.load.image('quakeIcon', 'assets/gui/icons/quakeIcon.png');
    this.load.image('iceShardIcon', 'assets/gui/icons/iceShardIcon.png');
    this.load.image('fireboltIcon', 'assets/gui/icons/fireboltIcon.png');
    this.load.image('arrowLeft', 'assets/gui/editor/arrows/Arrow_W0001.png');
    this.load.image('arrowRight', 'assets/gui/editor/arrows/Arrow_E0001.png');
    this.load.image('whiteGlow', 'assets/gui/editor/white_glow.png');
    this.load.image('button', 'assets/gui/progression/button.png');
    this.load.image('backGround', 'assets/gui/mainMenu/diablo2WP1080.png');
    this.load.image('play', 'assets/gui/mainMenu/play30.png');
    this.load.image('exit', 'assets/gui/mainMenu/exit30.png');
    this.load.image('setting', 'assets/gui/mainMenu/setting30.png');
    this.load.image('mute', 'assets/gui/mainMenu/mute.png');
    this.load.image('plus', 'assets/gui/mainMenu/plus.png');
    this.load.image('moins', 'assets/gui/mainMenu/moins.png');
    this.load.image('return', 'assets/gui/mainMenu/return.png');
    this.load.image('male', 'assets/gui/mainMenu/male.png');
    this.load.image('female', 'assets/gui/mainMenu/female_warrior.png');
    this.load.image('customPointer', 'assets/gui/pointer05.png')
    this.load.image('potionIcon', 'assets/gui/icons/potionIcon.png')
    this.load.image('frostStomp', 'assets/gui/icons/frostStomp.png');
    this.load.image('rage', 'assets/gui/icons/rage.png');

    // GAME OBJECTS
    this.load.image('basic_spawner', 'assets/sprites/spawner/basic_spawner.png');

    // INVENTORY
    this.load.image('helmet_slot', 'assets/inventory/slots/helmet_slot.png');
    this.load.image('amulet_slot', 'assets/inventory/slots/amulet_slot.png');
    this.load.image('armor_slot', 'assets/inventory/slots/armor_slot.png');
    this.load.image('mainhand_slot', 'assets/inventory/slots/mainhand_slot.png');
    this.load.image('offhand_slot', 'assets/inventory/slots/offhand_slot.png');
    this.load.image('ring_slot', 'assets/inventory/slots/ring_slot.png');
    this.load.image('gloves_slot', 'assets/inventory/slots/gloves_slot.png');
    this.load.image('boots_slot', 'assets/inventory/slots/boots_slot.png');
    this.load.image('belt_slot', 'assets/inventory/slots/belt_slot.png');
    this.load.image('inventory_slot', 'assets/inventory/slots/inventory_slot.png');
    this.load.image('1x1_slot', 'assets/inventory/slots/1x1_slot.png');
    this.load.image('2x1_slot', 'assets/inventory/slots/2x1_slot.png');
    this.load.image('2x2_slot', 'assets/inventory/slots/2x2_slot.png');
    this.load.image('2x3_slot', 'assets/inventory/slots/2x3_slot.png');
    this.load.image('2x4_slot', 'assets/inventory/slots/2x4_slot.png');
    this.load.image('close_button', 'assets/inventory/buttons/close_button.png');
    this.load.image('black_rock_background', 'assets/inventory/background/black_rock_background.png');

    // INVENTORY ITEMS
    this.load.image('baphomets_talisman_inv', 'assets/inventory/items/baphomets_talisman.png');
    this.load.image('bone_sword_inv', 'assets/inventory/items/bone_sword.png');
    this.load.image('bronze_ring_inv', 'assets/inventory/items/bronze_ring.png');
    this.load.image('chainmail_armor_inv', 'assets/inventory/items/chainmail_armor.png');
    this.load.image('chainmail_belt_inv', 'assets/inventory/items/chainmail_belt.png');
    this.load.image('chainmail_boots_inv', 'assets/inventory/items/chainmail_boots.png');
    this.load.image('chainmail_hood_inv', 'assets/inventory/items/chainmail_hood.png');
    this.load.image('chainmail_gloves_inv', 'assets/inventory/items/chainmail_gloves.png');
    this.load.image('gold_ring_inv', 'assets/inventory/items/gold_ring.png');
    this.load.image('golden_kopis_inv', 'assets/inventory/items/golden_kopis.png');
    this.load.image('knight_helmet_inv', 'assets/inventory/items/knight_helmet.png');
    this.load.image('leather_armor_inv', 'assets/inventory/items/leather_armor.png');
    this.load.image('leather_belt_inv', 'assets/inventory/items/leather_belt.png');
    this.load.image('leather_boots_inv', 'assets/inventory/items/leather_boots.png');
    this.load.image('leather_gloves_inv', 'assets/inventory/items/leather_gloves.png');
    this.load.image('leather_hood_inv', 'assets/inventory/items/leather_hood.png');
    this.load.image('silver_ring_inv', 'assets/inventory/items/silver_ring.png');
    this.load.image('stone_dagger_inv', 'assets/inventory/items/stone_dagger.png');
    this.load.image('temple_amulet_inv', 'assets/inventory/items/temple_amulet.png');
    this.load.image('wooden_shield_inv', 'assets/inventory/items/wooden_shield.png');

    // DROPPED ITEMS
    this.load.image('dropped_amulet', 'assets/dropped_items/dropped_amulet.png');
    this.load.image('dropped_armor', 'assets/dropped_items/dropped_armor.png');
    this.load.image('dropped_belt', 'assets/dropped_items/dropped_belt.png');
    this.load.image('dropped_boots', 'assets/dropped_items/dropped_boots.png');
    this.load.image('dropped_gloves', 'assets/dropped_items/dropped_gloves.png');
    this.load.image('dropped_helmet', 'assets/dropped_items/dropped_helmet.png');
    this.load.image('dropped_hood', 'assets/dropped_items/dropped_hood.png');
    this.load.image('dropped_ring', 'assets/dropped_items/dropped_ring.png');
    this.load.image('dropped_shield', 'assets/dropped_items/dropped_shield.png');
    this.load.image('dropped_sword', 'assets/dropped_items/dropped_sword.png');

    // AUDIO
    this.load.audio('spinning_rat_normal', 'assets/sound/FREEBIRD.mp3');
    this.load.audio('spinning_rat_power', 'assets/sound/FREEBIRD_POWER.mp3');
    this.load.audio('outside_ambience_1', 'assets/sound/outside_ambience_1.mp3');
    this.load.audio('buttonClick_1', 'assets/sound/click_1.wav');
    this.load.audio('buttonClick_2', 'assets/sound/click_2.wav');
    this.load.audio('melee_swing_and_hit_armor_1', 'assets/sound/melee_swing_and_hit_armor_1.wav');
    this.load.audio('melee_swing_and_hit_armor_2', 'assets/sound/melee_swing_and_hit_armor_2.wav');
    this.load.audio('melee_swing_and_hit_armor_3', 'assets/sound/melee_swing_and_hit_armor_3.wav');
    this.load.audio('melee_swing_and_hit_armor_4', 'assets/sound/melee_swing_and_hit_armor_4.wav');
    this.load.audio('melee_swing_and_hit_flesh_1', 'assets/sound/melee_swing_and_hit_flesh_1.wav');
    this.load.audio('melee_swing_and_hit_flesh_2', 'assets/sound/melee_swing_and_hit_flesh_2.wav');
    this.load.audio('melee_swing_and_hit_flesh_3', 'assets/sound/melee_swing_and_hit_flesh_3.wav');
    this.load.audio('melee_swing_and_hit_flesh_4', 'assets/sound/melee_swing_and_hit_flesh_4.wav');
    this.load.audio('human_male_death_1', 'assets/sound/human_male_death_1.mp3');
    this.load.audio('human_male_death_2', 'assets/sound/human_male_death_2.mp3');
    this.load.audio('human_male_death_3', 'assets/sound/human_male_death_3.wav');
    this.load.audio('step_dirt_1', 'assets/sound/step_dirt_1.wav');
    this.load.audio('step_dirt_2', 'assets/sound/step_dirt_2.wav');
    this.load.audio('step_dirt_3', 'assets/sound/step_dirt_3.wav');
    this.load.audio('step_dirt_4', 'assets/sound/step_dirt_4.wav');
    this.load.audio('step_dirt_5', 'assets/sound/step_dirt_5.wav');
    this.load.audio('step_dirt_6', 'assets/sound/step_dirt_6.wav');
    this.load.audio('step_dirt_7', 'assets/sound/step_dirt_7.wav');
    this.load.audio('step_dirt_8', 'assets/sound/step_dirt_8.wav');
    this.load.audio('explosion_1', 'assets/sound/explosion_1.flac');
    this.load.audio('fire_spell_launch_1', 'assets/sound/fire_spell_launch_1.wav');
    this.load.audio('ice_spell_1', 'assets/sound/ice_spell_1.wav');
    this.load.audio('hit_flesh_1', 'assets/sound/hit_flesh_1.ogg');

    this.initializeSpritesheets();
  }

  create() {
    this.scene.start('MainMenu');
  }

  initializeSpritesheets(): void {
    // TODO: Load all spritesheets dynamically within the sprites folder?
    // Create this method in AnimationManager class
    this.load.spritesheet('steel_armor', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('buckler', 'assets/sprites/player/buckler.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('clothes', 'assets/sprites/player/clothes.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('dagger', 'assets/sprites/player/dagger.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('greatbow', 'assets/sprites/player/greatbow.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('greatstaff', 'assets/sprites/player/greatstaff.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('greatsword', 'assets/sprites/player/greatsword.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('leather_armor', 'assets/sprites/player/leather_armor.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('longbow', 'assets/sprites/player/longbow.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('male_head1', 'assets/sprites/player/male_head1.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('male_head2', 'assets/sprites/player/male_head2.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('male_head3', 'assets/sprites/player/male_head3.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('rod', 'assets/sprites/player/rod.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('shield', 'assets/sprites/player/shield.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('shortbow', 'assets/sprites/player/shortbow.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('shortsword', 'assets/sprites/player/shortsword.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('longsword', 'assets/sprites/player/longsword.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('slingshot', 'assets/sprites/player/slingshot.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('staff', 'assets/sprites/player/staff.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('wand', 'assets/sprites/player/wand.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('zombie_0', 'assets/sprites/monster/zombie_0.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('minotaur_0', 'assets/sprites/monster/minotaur_0.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('skeleton_0', 'assets/sprites/monster/skeleton_0.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('icicle', 'assets/sprites/spell/icicle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('firebolt', 'assets/sprites/spell/firebolt.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('quake', 'assets/sprites/spell/quake.png', { frameWidth: 256, frameHeight: 128 });
    this.load.spritesheet('throwSpear', 'assets/sprites/spell/throwSpear.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('rocky_floor_tiles', 'assets/sprites/tiles/rocky.png', { frameWidth: 256, frameHeight: 128 });
    this.load.spritesheet('flat_stone_walls', 'assets/sprites/tiles/flat_stone_walls.png', { frameWidth: 128, frameHeight: 192 });
    this.load.spritesheet('goblin_0', 'assets/sprites/monster/goblin_0.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('goblin_lumberjack_black', 'assets/sprites/monster/goblin_lumberjack_black.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('spider_0', 'assets/sprites/monster/spider_0.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('spider_large', 'assets/sprites/monster/spider_large.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('spider_giant', 'assets/sprites/monster/spider_giant.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('wyvern_composite', 'assets/sprites/monster/wyvern_composite.png', { frameWidth: 256, frameHeight: 256 });
    this.load.spritesheet('aura', 'assets/sprites/spell/shield.png', { frameWidth: 128, frameHeight: 128 });
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}
