import { ActiveEntity } from './activeEntity';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { getOrientationString } from '../enums/entityOrientation';
import { MathModule } from '../utilities/mathModule';
import { Physics } from '../physics/collider';
import { IFightable } from './IFightable';
import { BaseEntity } from './baseEntity';
import { time } from 'console';
import { EntityManager } from '../managers/entityManager';

export class MonsterEntity extends ActiveEntity implements IFightable {

  private _baseSprite: Phaser.GameObjects.Sprite;

  constructor(scene, monsterCode) {
    super(scene);
    this.code = monsterCode;
    scene.add.existing(this);
    this.type = 'MonsterEntity';
    this._baseSprite = scene.add.sprite(0, 0, 'baseSprite');
    this._baseSprite.scale = 1.5;
    this.add(this._baseSprite);
    this.initializeAnimations();
    this._baseSprite.play(`IDLE_${getOrientationString(this.orientation)}_ZOMBIE_0`);

    this.positionX = this.scene.cameras.main.width / 2;
    this.positionY = this.scene.cameras.main.height / 2;

    const spriteWidth = this._baseSprite.width / 5;
    const spriteHeight = this._baseSprite.height / 5;

    const scaledWidth = spriteWidth * this._baseSprite.scaleX;
    const scaledHeight = spriteHeight * this._baseSprite.scaleY;

    const offsetX = (scaledWidth - spriteWidth) / 2;
    const offsetY = (scaledHeight - spriteHeight) / 2;
    const hitArea = new Phaser.Geom.Rectangle(spriteWidth * 2, spriteHeight * 2, spriteWidth, spriteHeight * 2);

    this._baseSprite.setInteractive({ hitArea, hitAreaCallback: Phaser.Geom.Rectangle.Contains });
    
    this._baseSprite.on('pointerover', () => {
      
    });
    this._baseSprite.on('pointerout', () => {

    });
    this._baseSprite.setOrigin(0.5, 0.75);
    this.setDepth(0);
    this.truncatedSpriteWidth = 32 * this._baseSprite.scaleX;
    this.truncatedSpriteHeight = 64 * this._baseSprite.scaleY;
    this.collider = new Physics.Collider(this, this._baseSprite, this.onSpriteColliding, this.onEntityColliding);
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    let hasOrientationUpdated: boolean = false;
    let action: string = this._baseSprite.anims.currentAnim ? this._baseSprite.anims.currentAnim.key.split('_')[0] : '';
    let animationUpdateNeeded: boolean = false;

    if ((this.positionX != this.destinationX) || (this.positionY != this.destinationY)) {
      // TODO: Check if destination coords change between each update call
      // so if it doesn't change, we move the same value that we moved last call
      hasOrientationUpdated = this.updateOrientation();
      let isEntityColliding: Boolean = this.collider.checkEntityCollision();
      if (!isEntityColliding) {
        this.move();

        if (MathModule.isValueInThreshold(this.positionX, this.destinationX, 1) &&
            MathModule.isValueInThreshold(this.positionY, this.destinationY, 1)) {
          this.destinationX = this.positionX;
          this.destinationY = this.positionY;
          this._isMoving = false;
        }
        if (!this._baseSprite.anims.isPlaying || action != 'RUN' || hasOrientationUpdated) {
          animationUpdateNeeded = true;
          action = 'RUN';
        }
      } else {
        this.positionX = this._lastValidPositionX;
        this.positionY = this._lastValidPositionY;
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

    if (this._debugMode) {
      this.collider.displayDebugGraphics();
    }
    this.collider.checkSpriteCollision();
    // TODO: Replace this by a behavior object
    if (Math.floor(Math.random() * 1000) % 250 == 0) {
      let roamingX: number = Math.random() * 1000;
      let roamingY: number = Math.random() * 1000;
      this.destinationX = this.positionX + Math.sin(roamingX) * 100;
      this.destinationY = this.positionY + Math.cos(roamingY) * 100;
    }
    // TODO: Set this in the behavior so we don't compute this each frame
    this.setOrientationRad(Phaser.Math.Angle.Between(this.positionX, this.positionY, this.destinationX, this.destinationY));
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, `${this.code}_AnimationConfig`);
  }

  public attack(target: IFightable): void {
    throw new NotImplementedError();
  }

  public damage(amount: number): void {
    // TODO: take into account gear, active effects then apply damage
    this.stats.health -= amount;
  }

  public isAttacking(): boolean {
    throw new NotImplementedError();
  }

  public onPointerOver(): void {
    console.log('pointerover');
  }

  onSpriteColliding = (hitEntity: BaseEntity): void => {
    if (hitEntity.list.length == 0) {
      return;
    }
    let selfHeight: number = this.positionY + this._baseSprite.displayHeight;
    let otherHeight: number = hitEntity.positionY + (hitEntity.list.at(0) as Phaser.GameObjects.Sprite).displayHeight;
    if (selfHeight < otherHeight) {
      this.depth = 0;
      hitEntity.depth = 1;
    } else {
      this.depth = 1;
      hitEntity.depth = 0;
    }
  }
  
  onEntityColliding = (hitEntity: BaseEntity): void => {
    
  }
}