import { InactiveEntity } from './inactiveEntity'
import { BaseEntity } from './baseEntity'
import Item from '../inventory/item'
import Label from '../label/label'
import { EntityManager } from '../managers/entityManager';

export default class ItemEntity extends InactiveEntity {
  public item: Item;
  public label: Label;

  constructor(scene: Phaser.Scene, item: Item) {
    super(scene);
    this.item = item;
    this.item.changeToEntitySprite();
    this.type = 'ItemEntity';

    // Position item to player
    const PLAYERS = EntityManager.instance.getPlayers(); // TODO: Get actual player who dropped the item (pass player ref to inventory?)
    if (PLAYERS.length > 0) {
      const P1 = PLAYERS[0];
      this.setPosition(P1.x - this.item.width / 2, P1.y - this.item.width / 2);
    }

    const spriteReference: Phaser.GameObjects.Sprite = (this.item.getAll().filter((gameObject) => gameObject instanceof Phaser.GameObjects.Sprite)[0] as Phaser.GameObjects.Sprite);

    this.label = new Label(this.scene, this.item.name);
    this.label.setPosition(this.item.getWidth() / 2, 0);
    this.truncatedSpriteHeight = this.item.height + this.label.getBounds().height;
    this.truncatedSpriteWidth = this.item.width + this.label.getBounds().width;
    this.item.setInteractive({
      hitArea: new Phaser.Geom.Rectangle(
        (spriteReference.displayWidth * 0.5) - (this.label.getBounds().width * 0.5),
        -(this.label.getBounds().height * 0.5),
        this.label.getBounds().width, this.label.getBounds().height),
      hitAreaCallback: Phaser.Geom.Rectangle.Contains
    });
    this.label.visible = false;

    // this.item.on('pointerover', (pointer: Phaser.Input.Pointer) => {
    //   this.label.setBackgroundColor(0xDDDDDD);
    //   this.label.setTextColor('#000000');
    // });

    // this.item.on('pointerout', (pointer: Phaser.Input.Pointer) => {
    //   this.label.setBackgroundColor(0x000000);
    //   this.label.setTextColor('#FFFFFF');
    // });

    // this.item.on('pointerdown', (pointer: Phaser.Input.Pointer) => {

    // });

    this.add([this.item, this.label]);
    this.scene.cameras.getCamera("uiCamera")!.ignore(this); // TODO: Maybe add this line to base entity
    this.scene.cameras.getCamera("minimapCamera")!.ignore(this); // TODO: Maybe add this line to base entity
  }

  public update(deltaTime: number): void { }
  public reset(): void { }
  public initializeAnimations(): void { }
  public onSpriteColliding(hitEntity: BaseEntity): void { }
  public onEntityColliding(hitEntity: BaseEntity): void { }

  public getSprite(): Phaser.GameObjects.Sprite {
    return this.item.sprite;
  }
}
