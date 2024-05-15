export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('game-logo', 'assets/img/rat_474x278.png');
	  this.load.audio('spinning_rat_normal', 'assets/sound/FREEBIRD.mp3');
	  this.load.audio('spinning_rat_power', 'assets/sound/FREEBIRD_POWER.mp3');
    
    this.initializeSpritesheets();

    // let leftOrientationRow: number = 0;
    // let topLeftOrientationRow: number = 1;
    // let topOrientationRow: number = 2;
    // let topRightOrientationRow: number = 3;
    // let rightOrientationRow: number = 4;
    // let bottomRightOrientationRow: number = 5;
    // let bottomOrientationRow: number = 6;
    // let bottomLeftOrientationRow: number = 7;

    // player.play('player_body_idle_top');
    // player.anims.play('player_body_idle_top');
    // this.load.spritesheet('character', 'assets/character_spritesheet.png', { frameWidth: 32, frameHeight: 48 });

    // Checker comment loader la 2e ligne de la spritesheet pour le mouvement top left
    // Loader le blender file pis checker la duree de chaque anim pour la setter
    // this.anims.create({
    //   key: 'walk',
    //   frames: this.anims.generateFrameNumbers('character', { start: 0, end: 5 }),
    //   frameRate: 10,
    //   repeat: -1
    // });

    // var character = this.add.sprite(400, 300, 'character');
    // character.play('walk');

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
    this.load.spritesheet('player_body', 'assets/sprites/player/steel_armor.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_buckler', 'assets/sprites/player/buckler.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_clothes', 'assets/sprites/player/clothes.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_dagger', 'assets/sprites/player/dagger.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_greatbow', 'assets/sprites/player/greatbow.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_greatstaff', 'assets/sprites/player/greatstaff.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_greatsword', 'assets/sprites/player/greatsword.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_leather_armor', 'assets/sprites/player/leather_armor.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_longbow', 'assets/sprites/player/longbow.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_male_head1', 'assets/sprites/player/male_head1.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_male_head2', 'assets/sprites/player/male_head2.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_male_head3', 'assets/sprites/player/male_head3.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_rod', 'assets/sprites/player/rod.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_shield', 'assets/sprites/player/shield.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_shortbow', 'assets/sprites/player/shortbow.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_shortsword', 'assets/sprites/player/shortsword.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_slingshot', 'assets/sprites/player/slingshot.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_staff', 'assets/sprites/player/staff.png', { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('player_wand', 'assets/sprites/player/wand.png', { frameWidth: 128, frameHeight: 128 });
  }
}
