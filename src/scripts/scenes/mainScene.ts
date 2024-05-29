import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import { BaseEntity } from '../entities/baseEntity';
import { ActiveEntity } from '../entities/activeEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { MonsterEntity } from '../entities/monsterEntity';
import { EntityManager } from '../managers/entityManager';
import { OutlinePipeline } from '../pipelines/outlinePipeline';

const BrightnessShader = `
precision mediump float;

uniform sampler2D uMainSampler;
varying vec2 outTexCoord;

void main(void) {
    vec4 color = texture2D(uMainSampler, outTexCoord);
    color.rgb *= 1.2; // Increase brightness by multiplying RGB values
    gl_FragColor = color;
}
`;

export default class MainScene extends Phaser.Scene {
  fpsText
  private playerTest: PlayerEntity;
  private monsterTest: MonsterEntity;

  constructor() {
    super({ key: 'MainScene' });
  }

  public init(data: any): void {
    if (this.game.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
      this.game.renderer.pipelines.add(
        OutlinePipeline.KEY,
        new OutlinePipeline(this.game)
      );
    }
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
	  // music.play();
    this.input.mouse.disableContextMenu();
    this.playerTest = EntityManager.instance.createPlayer(this);
    this.monsterTest = EntityManager.instance.createMonster(this, 'zombie_0');
    EntityManager.instance.toggleDebugMode(true);
  }

  update(time, deltaTime) {
    window['deltaTime'] = deltaTime;
    this.fpsText.update();
    this.playerTest.update(deltaTime);
    this.monsterTest.update(deltaTime);
  }
}
