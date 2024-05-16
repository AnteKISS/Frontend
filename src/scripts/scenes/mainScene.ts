import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText
  cursorX
  cursorY

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);

    this.input.setDefaultCursor('pointer');

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      this.cursorX = pointer.x;
      this.cursorY = pointer.y;
    
      console.log(`Cursor position: (${this.cursorX}, ${this.cursorY})`);
    });
    
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
  }

  update() {
    this.fpsText.update();
  }
}
