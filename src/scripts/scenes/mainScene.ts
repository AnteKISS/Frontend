import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import { BaseEntity } from '../entities/baseEntity';
import { ActiveEntity } from '../entities/activeEntity';
import { PlayerEntity } from '../entities/playerEntity';

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);
	  let music: Phaser.Sound.BaseSound;
	  music = this.sound.add('spinning_rat_power', { loop: true});
	  //music.play();
    var player = this.add.sprite(300, 300, 'player_body');
    this.anims.create({
      key: 'player_body_idle_top',
      frames: this.anims.generateFrameNumbers('player_body', { start: 64, end: 67 }),
      frameRate: 4,
      repeat: -1
    });
    this.anims.create({
      key: 'player_body_run_top',
      frames: this.anims.generateFrameNumbers('player_body', { start: 0, end: 3 }),
      frameRate: 4,
      repeat: -1
    });
    player.play('player_body_idle_top');
    // let playerTest: PlayerEntity = new PlayerEntity(this);
  }

  update() {
    this.fpsText.update();
  }
}
