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
import { InventorySprite } from './inventorySprite';
import { ActiveEntityAnimator } from './activeEntityAnimator';

export class MonsterEntity extends ActiveEntity implements IFightable {

  public baseSprite: InventorySprite;

  constructor(scene, monsterCode) {
    super(scene);
    this.code = monsterCode;
    scene.add.existing(this);
    this.type = 'MonsterEntity';
    this.baseSprite = scene.add.sprite(0, 0, 'baseTexture');
    this.baseSprite.scale = 1.5;
    this.baseSprite.textureName = 'ZOMBIE_0';
    this.add(this.baseSprite);
    this.initializeAnimations();

    this.positionX = this.scene.cameras.main.width / 2;
    this.positionY = this.scene.cameras.main.height / 2;

    const spriteWidth = this.baseSprite.width / 5;
    const spriteHeight = this.baseSprite.height / 5;

    const scaledWidth = spriteWidth * this.baseSprite.scaleX;
    const scaledHeight = spriteHeight * this.baseSprite.scaleY;

    const offsetX = (scaledWidth - spriteWidth) / 2;
    const offsetY = (scaledHeight - spriteHeight) / 2;
    const hitArea = new Phaser.Geom.Rectangle(spriteWidth * 2, spriteHeight * 2, spriteWidth, spriteHeight * 2);

    this.baseSprite.setInteractive({ hitArea, hitAreaCallback: Phaser.Geom.Rectangle.Contains });
    
    this.baseSprite.on('pointerover', () => {
      
    });
    this.baseSprite.on('pointerout', () => {

    });
    this.baseSprite.setOrigin(0.5, 0.75);
    this.setDepth(0);
    this.truncatedSpriteWidth = 32 * this.baseSprite.scaleX;
    this.truncatedSpriteHeight = 64 * this.baseSprite.scaleY;
    this.collider = new Physics.Collider(this, this.baseSprite, this.onSpriteColliding, this.onEntityColliding);
    this.animator = new ActiveEntityAnimator(this);
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {

    this.updatePosition();
    this.animator.update(deltaTime);

    if (this._debugMode) {
      this.collider.displayDebugGraphics();
    }
    this.collider.checkSpriteCollision();

    if (Math.floor(Math.random() * 1000) % 250 == 0) {
      let roamingX: number = Math.random() * 1000;
      let roamingY: number = Math.random() * 1000;
      this.destinationX = this.positionX + Math.sin(roamingX) * 100;
      this.destinationY = this.positionY + Math.cos(roamingY) * 100;
    }
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
    let selfHeight: number = this.positionY + this.baseSprite.displayHeight;
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