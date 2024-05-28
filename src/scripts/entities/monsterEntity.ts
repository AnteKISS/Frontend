import { ActiveEntity } from './activeEntity';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { getOrientationString } from '../enums/entityOrientation';
import { MathModule } from '../utilities/mathModule';
import { OutlinePipeline } from '../pipelines/outlinePipeline';

export class MonsterEntity extends ActiveEntity implements IFightable {

  private _baseSprite: Phaser.GameObjects.Sprite;

  constructor(scene, monsterCode) {
    super(scene);
    this._code = monsterCode;
    scene.add.existing(this);
    this.type = 'MonsterEntity';
    this._baseSprite = scene.add.sprite(0, 0, 'baseSprite');
    this._baseSprite.scale = 1.5;
    this.add(this._baseSprite);
    this.initializeAnimations();
    this._baseSprite.play(`IDLE_${getOrientationString(this.orientation)}_ZOMBIE_0`);

    this.positionX = this.scene.cameras.main.width / 4;
    this.positionY = this.scene.cameras.main.height / 4;

    const spriteWidth = this._baseSprite.width / 5;
    const spriteHeight = this._baseSprite.height / 5;

    const scaledWidth = spriteWidth * this._baseSprite.scaleX;
    const scaledHeight = spriteHeight * this._baseSprite.scaleY;

    // Calculate the offset to center the hit area on the sprite
    const offsetX = (scaledWidth - spriteWidth) / 2;
    const offsetY = (scaledHeight - spriteHeight) / 2;
    // const hitArea = new Phaser.Geom.Rectangle(0, 0, this._baseSprite.width, this._baseSprite.height);
    //const hitArea = new Phaser.Geom.Rectangle(spriteWidth + (spriteWidth / 2), spriteHeight + (spriteHeight / 2), scaledWidth, scaledHeight);
    const hitArea = new Phaser.Geom.Rectangle(spriteWidth * 2, spriteHeight * 2, spriteWidth, spriteHeight * 2);

    // this._baseSprite.setInteractive();
    // // this._baseSprite.input.hitArea.setTo(-scaledWidth / 2, -scaledHeight / 2, scaledWidth, scaledHeight);

    this._baseSprite.setInteractive({ hitArea, hitAreaCallback: Phaser.Geom.Rectangle.Contains });
    // const outlinePipeline = new OutlinePipeline(scene);
    // this._baseSprite.setInteractive({ hitArea: new Phaser.Geom.Rectangle(-offsetX, -offsetY, scaledWidth, scaledHeight), hitAreaCallback: Phaser.Geom.Rectangle.Contains });

    const debugGraphics = scene.add.graphics();
    debugGraphics.lineStyle(2, 0xff0000);
    // debugGraphics.strokeRect(this.positionX - (scaledWidth / 2), this.positionY - (scaledHeight / 2), this._baseSprite.width, this._baseSprite.height);
    // debugGraphics.strokeRect(this.positionX + hitArea.x, this.positionY + hitArea.y, hitArea.width, hitArea.height);
    debugGraphics.strokeRect(this.positionX - (scaledWidth / 2), this.positionY - (scaledHeight / 2), scaledWidth, scaledHeight * 2);

    this._baseSprite.on('pointerover', () => {
      // // console.log('Pointer over sprite');
      // // console.debug(this.positionX, this.positionY, this._baseSprite.width, this._baseSprite.height, this._baseSprite.scaleX, this._baseSprite.scaleY, scaledWidth, scaledHeight, offsetX, offsetY);
      // // console.debug(hitArea);
      this._baseSprite.setPipeline(OutlinePipeline.KEY);
      // this._baseSprite.setPipeline(outlinePipeline);
      
      // this._baseSprite.pipeline.set2iv('position', [this.positionX, this.positionY]);
      
      this._baseSprite.pipeline.set2f('uTextureSize', this._baseSprite.width, this._baseSprite.height);


      // console.debug(this.positionX - (scaledWidth / 2), this.positionY - (scaledHeight / 2), scaledWidth, scaledHeight);
      // this._baseSprite.setPipeline(outlinePipeline);
    });

    this._baseSprite.on('pointerout', () => {
      // // console.log('Pointer out of sprite');
      this._baseSprite.resetPipeline();
      // this._baseSprite.resetPipeline();
    });
    // this.setInteractive();
    // this.on('pointerover', function (this: MonsterEntity) {
    //   console.log('pointerover');  
    //   // this.setPipeline(outlinePipeline);
    // }, this);

    // this.on('pointerout', function (this: MonsterEntity) {
    //   console.log('pointerout');  
    //   // this.resetPipeline();
    // }, this);
    scene.add.existing(this);
    // this._baseSprite.setInteractive();
    // this._baseSprite.on('pointermove', function(pointer, x, y, event) {console.log("testar")});
    // this._baseSprite.on('pointerover', () => this.onPointerOver());
    // const frag = `
    // precision mediump float;

    // uniform vec2 resolution;
    // uniform sampler2D iChannel0;

    // varying vec2 fragCoord;

    // void main ()
    // {
    //     vec2 uv = fragCoord / resolution.xy;

    //     vec4 pixel = texture2D(iChannel0, uv);

    //     gl_FragColor = vec4(uv.xyx * pixel.rgb, 1.0);
    // }
    // `;

    // const base = new Phaser.Display.BaseShader('simpleTexture', frag);

    // const shader = this.scene.add.shader(base, 400, 300, 800, 600, [ 'baseSprite' ]);
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    let hasOrientationUpdated: boolean = false;
    let action: string = this._baseSprite.anims.currentAnim ? this._baseSprite.anims.currentAnim.key.split('_')[0] : '';
    let animationUpdateNeeded: boolean = false;

    if ((this.positionX != this._destinationX) || (this.positionY != this._destinationY)) {
      // TODO: Check if destination coords change between each update call
      // so if it doesn't change, we move the same value that we moved last call
      hasOrientationUpdated = this.updateOrientation();
      this.move();

      if (MathModule.isValueInThreshold(this.positionX, this._destinationX, 1) &&
          MathModule.isValueInThreshold(this.positionY, this._destinationY, 1)) {
        this._destinationX = this.positionX;
        this._destinationY = this.positionY;
        this._isMoving = false;
      }
      if (!this._baseSprite.anims.isPlaying || action != 'RUN' || hasOrientationUpdated) {
        animationUpdateNeeded = true;
        action = 'RUN';
      }
    } else {
      if (!this._baseSprite.anims.isPlaying || action != 'IDLE' || hasOrientationUpdated) {
        animationUpdateNeeded = true;
        action = 'IDLE';
      }
    }
    if (animationUpdateNeeded) {
      this._baseSprite.play(`${action}_${getOrientationString(this.orientation)}_ZOMBIE_0`);
    }
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, `${this._code}_AnimationConfig`);
  }

  attack(target: IFightable): void {
    throw new NotImplementedError();
  }

  damage(amount: number): void {
    // TODO: take into account gear, active effects then apply damage
    throw new NotImplementedError();
  }

  getBasePhysicalDamage(): number {
    return this.stats.basePhysicalDamage;
  }

  setBasePhysicalDamage(basePhysicalDamage: number): void {
    this.stats.basePhysicalDamage = basePhysicalDamage;
  }

  getBaseMagicalDamage(): number {
    return this.stats.baseMagicalDamage;
  }

  setBaseMagicalDamage(baseMagicalDamage: number): void {
    this.stats.baseMagicalDamage = baseMagicalDamage;
  }

  getHealth(): number {
    return this.stats.health;
  }

  setHealth(health: number): void {
    this.stats.health = health;
  }

  getMaxHealth(): number {
    return this.stats.maxHealth;
  }

  setMaxHealth(maxHealth: number): void {
    this.stats.maxHealth = maxHealth;
  }

  getAccuracy(): number {
    return this.stats.attackAccuracy;
  }

  setAccuracy(accuracy: number): void {
    this.stats.attackAccuracy = accuracy;
  }

  getDefense(): number {
    return this.stats.defense;
  }

  setDefense(defense: number): void {
    this.stats.defense = defense;
  }

  onPointerOver(): void {
    console.log('pointerover');
  }
}