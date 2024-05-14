export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('game-logo', 'assets/img/rat_474x278.png');
	  this.load.audio('spinning_rat_normal', 'assets/sound/FREEBIRD.mp3');
	  this.load.audio('spinning_rat_power', 'assets/sound/FREEBIRD_POWER.mp3');
    // this.load.spritesheet('player_body_left_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_top_left_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_top_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_top_right_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_right_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_bottom_right_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_bottom_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });
    // this.load.spritesheet('player_body_bottom_left_idle', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128, startFrame: 1, endFrame: 4 });

    this.load.spritesheet('character', 'assets/character_spritesheet.png', { frameWidth: 32, frameHeight: 48 });

    // Checker comment loader la 2e ligne de la spritesheet pour le mouvement top left
    // Loader le blender file pis checker la duree de chaque anim pour la setter
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('character', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    });

    var character = this.add.sprite(400, 300, 'character');
    character.play('walk');

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
