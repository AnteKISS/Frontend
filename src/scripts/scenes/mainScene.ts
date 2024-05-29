import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import Grid from '../objects/grid'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    //new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    const grid = new Grid(this, 100, 100, 32);
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
	music.play();
  }

  update() {
    this.fpsText.update();
  }
}
