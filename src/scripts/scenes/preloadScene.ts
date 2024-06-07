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
