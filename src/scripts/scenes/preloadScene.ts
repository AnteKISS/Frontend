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
    this.load.image('backGround', 'assets/gui/mainMenu/destroyed.jpeg');
    
    this.load.image('play', 'assets/gui/mainMenu/play30.png');
    this.load.image('exit', 'assets/gui/mainMenu/exit30.png');
    this.load.image('setting', 'assets/gui/mainMenu/setting30.png');
    this.load.image('mute', 'assets/gui/mainMenu/mute.png');
    this.load.image('plus', 'assets/gui/mainMenu/plus.png');
    this.load.image('moins', 'assets/gui/mainMenu/moins.png');
    this.load.image('return', 'assets/gui/mainMenu/return.png');
    this.load.image('male', 'assets/gui/mainMenu/male.png');
    this.load.image('female', 'assets/gui/mainMenu/female_warrior.png');

    // GAME OBJECTS
    this.load.image('basic_spawner', 'assets/sprites/spawner/basic_spawner.png');

    // INVENTORY
    this.load.image('stone_sword_inventory', 'assets/inventory/stone_sword.png');
    this.load.image('wooden_shield_inventory', 'assets/inventory/wooden_shield.png');
    this.load.image('chainmail_hood_inventory', 'assets/inventory/chainmail_hood.png');
    this.load.image('chainmail_gloves_inventory', 'assets/inventory/chainmail_gloves.png');
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

    // ITEMS
    this.load.image('dropped_sword', 'assets/dropped_items/dropped_sword.png');
    this.load.image('dropped_shield', 'assets/dropped_items/dropped_shield.png');
    this.load.image('dropped_chainmail_hood', 'assets/dropped_items/dropped_chainmail_hood.png');
    this.load.image('dropped_chainmail_gloves', 'assets/dropped_items/dropped_chainmail_gloves.png');

    // AUDIO
    this.load.audio('spinning_rat_normal', 'assets/sound/FREEBIRD.mp3');
    this.load.audio('spinning_rat_power', 'assets/sound/FREEBIRD_POWER.mp3');

    this.initializeSpritesheets();

    // this.load.image('sky', 'assets/sky.png');
    // this.load.image('ground', 'assets/platform.png');
    // this.load.image('star', 'assets/star.png');
    // this.load.image('bomb', 'assets/bomb.png');
    // this.load.spritesheet('dude',
    //     'assets/dude.png',
    //     { frameWidth: 32, frameHeight: 48 }
    // );

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
    this.load.spritesheet('rocky_floor_tiles', 'assets/sprites/tiles/rocky.png', { frameWidth: 256, frameHeight: 128 });
    this.load.spritesheet('flat_stone_walls', 'assets/sprites/tiles/flat_stone_walls.png', { frameWidth: 128, frameHeight: 192 });
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}
