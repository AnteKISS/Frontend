import { AnimationManager } from '../managers/animationManager';
import { Physics } from '../physics/collider';
import { ActiveEntity } from './activeEntity';
import { ActiveEntityAnimator } from './activeEntityAnimator';
import { BaseEntity } from './baseEntity';
import { InventorySprite } from './inventorySprite';

export class NpcEntity extends ActiveEntity implements ITalkable {
  public baseSprite: InventorySprite;
  public hitArea: Phaser.Geom.Rectangle;

  constructor(scene, npcCode) {
    super(scene);
    this.code = npcCode;
    scene.add.existing(this);
    this.type = 'NpcEntity';
    this.baseSprite = scene.add.sprite(0, 0, 'baseTexture');
    this.baseSprite.scale = 1.5;
    this.baseSprite.textureName = npcCode.toUpperCase();
    this.add(this.baseSprite);
    this.initializeAnimations();

    this.baseSprite.setOrigin(0.5, 0.75);
    this.setDepth(0);
    this.truncatedSpriteWidth = 32 * this.baseSprite.scaleX;
    this.truncatedSpriteHeight = 64 * this.baseSprite.scaleY;

    this.positionX = this.scene.cameras.main.width / 2;
    this.positionY = this.scene.cameras.main.height / 2;

    this.baseSprite.setInteractive({ hitArea: new Phaser.Geom.Rectangle(this.truncatedSpriteWidth, this.truncatedSpriteHeight * this.originY, 32, 64), hitAreaCallback: Phaser.Geom.Rectangle.Contains });

    this.baseSprite.on('pointerover', (pointer: Phaser.Input.Pointer) => {
      window['selectedMonster'] = this;
      scene.plugins.get('rexGlowFilterPipeline').add(this.baseSprite, {
        intensity: 0.02
      });
    });
    this.baseSprite.on('pointerout', (pointer: Phaser.Input.Pointer) => {
      window['selectedMonster'] = null;
      scene.plugins.get('rexGlowFilterPipeline').remove(this.baseSprite);
    });

    this.collider = new Physics.Collider(this, this.baseSprite, this.onSpriteColliding, this.onEntityColliding);
    this.animator = new ActiveEntityAnimator(this);
    
    this.baseSprite.play(`IDLE_DOWN_LEFT_WANDERING_TRADER_128`); 
    console.log(this.scene.anims);
  }

  // Getters/Setters
  

  // Methods
  public update(time: number, deltaTime: number): void {

  }

  public reset(): void {

  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, `${this.code}_AnimationConfig`);
  }

  public onSpriteColliding(hitEntity: BaseEntity): void {
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

  public onEntityColliding(hitEntity: BaseEntity): void {
    
  }

  public getSprite(): Phaser.GameObjects.Sprite {
    return this.baseSprite;
  }
}
