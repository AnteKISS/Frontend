import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import GUI from '../objects/gui'
import { BaseEntity } from '../entities/baseEntity';
import { ActiveEntity } from '../entities/activeEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { MonsterEntity } from '../entities/monsterEntity';

export default class MainScene extends Phaser.Scene {
  fpsText
  cursorX
  cursorY
  private playerTest: PlayerEntity;
  private monsterTest: MonsterEntity;
  private gui : GUI;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 16);
    this.fpsText = new FpsText(this);
    this.gui = new GUI(this, 0, 0);

    this.input.setDefaultCursor('default');
    
    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);

	  let music: Phaser.Sound.BaseSound;
	  music = this.sound.add('spinning_rat_power', { loop: true});
	  // music.play();

    this.playerTest = new PlayerEntity(this);
    this.playerTest.positionX = this.cameras.main.width / 2;
    this.playerTest.positionY = this.cameras.main.height / 2;
    this.monsterTest = new MonsterEntity(this, 'zombie_0');
    this.monsterTest.positionX = this.cameras.main.width / 4;
    this.monsterTest.positionY = this.cameras.main.height / 4;
    this.gui.spellBar.setSpellBook(this.playerTest.mySpellBook); 

  }

  update(time, deltaTime) {
    this.fpsText.update();
    this.playerTest.update(deltaTime);
    this.monsterTest.update(deltaTime);
    this.updateGUI();
  }

  updateGUI(): void
  {
    this.gui.manaBar.setCurrentValue(this.playerTest.stats.mana);
    this.gui.manaBar.setMaxValue(this.playerTest.maxMana);
    this.gui.healthBar.setCurrentValue(this.playerTest.stats.health);
    this.gui.healthBar.setMaxValue(this.playerTest.getMaxHealth());
    //ajouter les autres barres
  }
}
