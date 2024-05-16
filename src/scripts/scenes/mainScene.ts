import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import { BaseEntity } from '../entities/baseEntity';
import { ActiveEntity } from '../entities/activeEntity';
import { PlayerEntity } from '../entities/playerEntity';

export default class MainScene extends Phaser.Scene {
  fpsText
  private playerTest: PlayerEntity;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 16);
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
    this.playerTest = new PlayerEntity(this);
    this.playerTest.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
  }

  update(time, deltaTime) {
    this.fpsText.update();
    this.playerTest.update(deltaTime);
  }
}
