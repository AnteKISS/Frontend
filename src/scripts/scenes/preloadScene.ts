export default class PreloadScene extends Phaser.Scene {
	constructor() {
		super({ key: 'PreloadScene' });
	}

	preload() {
		this.load.image('game-logo', 'assets/img/rat_474x278.png');
		this.load.audio('spinning_rat_normal', 'assets/sound/FREEBIRD.mp3');
		this.load.audio('spinning_rat_power', 'assets/sound/FREEBIRD_POWER.mp3');
		this.load.image('stone_sword_inventory', 'assets/inventory/stone_sword.png');
		this.load.image('wooden_shield_inventory', 'assets/inventory/wooden_shield.png');

		this.load.image('helmet_slot', 'assets/inventory/slots/helmet_slot.png');
		this.load.image('amulet_slot', 'assets/inventory/slots/amulet_slot.png');
		this.load.image('armor_slot', 'assets/inventory/slots/armor_slot.png');
		this.load.image('mainhand_slot', 'assets/inventory/slots/mainhand_slot.png');
		this.load.image('offhand_slot', 'assets/inventory/slots/offhand_slot.png');
		this.load.image('ring_slot', 'assets/inventory/slots/ring_slot.png');
		this.load.image('gloves_slot', 'assets/inventory/slots/gloves_slot.png');
		this.load.image('boots_slot', 'assets/inventory/slots/boots_slot.png');
		this.load.image('belt_slot', 'assets/inventory/slots/belt_slot.png');

		this.load.image('1x1_slot', 'assets/inventory/slots/1x1_slot.png');
		this.load.image('3x1_slot', 'assets/inventory/slots/3x1_slot.png');
		this.load.image('3x3_slot', 'assets/inventory/slots/3x3_slot.png');
		this.load.image('3x4_slot', 'assets/inventory/slots/3x4_slot.png');
		this.load.image('3x5_slot', 'assets/inventory/slots/3x5_slot.png');

		this.load.image('black_rock_background', 'assets/inventory/background/black_rock_background.png');
	}

	create() {
		this.scene.start('MainScene');

		/**
		 * This is how you would dynamically import the mainScene class (with code splitting),
		 * add the mainScene to the Scene Manager
		 * and start the scene.
		 * The name of the chunk would be 'mainScene.chunk.js
		 * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
		 */
		// let someCondition = true
		// if (someCondition)
		//   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
		//     this.scene.add('MainScene', mainScene.default, true)
		//   })
		// else console.log('The mainScene class will not even be loaded by the browser')
	}
}
