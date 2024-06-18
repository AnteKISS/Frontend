import InventoryConfig from './inventoryConfig'
import { ItemType } from './itemType'

export default class Item extends Phaser.GameObjects.Container {
  name: string;
  sprite: Phaser.GameObjects.Sprite;
  inventoryWidth: number;
  inventoryHeight: number;
  itemType: ItemType;

  inventorySprite: string;
  entitySprite: string;

  public constructor(scene: Phaser.Scene, name: string, type: ItemType, width: number, height: number, inventorySprite: string, entitySprite: string) {
    super(scene, 0, 0);
    this.name = name;
    this.itemType = type;
    this.inventoryWidth = width;
    this.inventoryHeight = height;

    this.inventorySprite = inventorySprite;
    this.entitySprite = entitySprite;

    this.sprite = new Phaser.GameObjects.Sprite(scene, 0, 0, inventorySprite);
    this.sprite.setOrigin(0, 0);
    this.sprite.setScale(width * InventoryConfig.CELL_SIZE / this.sprite.width);
    console.log(this.sprite);

    this.add(this.sprite);
    scene.add.existing(this);
  }

  public changeToInventorySprite() {
    this.sprite.setTexture(this.inventorySprite);
  }

  public changeToEntitySprite() {
    this.sprite.setTexture(this.entitySprite);
    // this.scene.cameras.getCamera("uiCamera").ignore(this);
    // this.scene.cameras.getCamera("uiCamera").addToRenderList(this);
  }

  private changeSprite(texture: string): void {
    // Used to reset camera ignore properties, since once you do "camera.ignore" on a gameobject, it seems non-reversible
    // Otherwise we wouldn't have to destroy and reinstantiate the whole object
    this.remove(this.sprite);
    this.sprite.destroy();
    this.sprite = new Phaser.GameObjects.Sprite(this.scene, 0, 0, texture);
    this.add(this.sprite);
  }
}
