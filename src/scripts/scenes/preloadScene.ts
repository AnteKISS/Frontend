export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('game-logo', 'assets/img/rat_474x278.png');
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
    
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}