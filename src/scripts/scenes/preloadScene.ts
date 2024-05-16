export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('game-logo', 'assets/img/rat_474x278.png');
    this.load.image('sphereTexture', 'assets/gui/infobars/itsmars_orb_fill.png');
    this.load.image('bigContour', 'assets/gui/infobars/itsmars_orb_back1.png');
    this.load.image('fillTexture', 'assets/gui/infobars/itsmars_scroll_fill.png' );
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

	this.load.audio('spinning_rat_normal', 'assets/sound/FREEBIRD.mp3');
	this.load.audio('spinning_rat_power', 'assets/sound/FREEBIRD_POWER.mp3');
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
