import ActiveEntityModifierStats from '../entities/activeEntityModifierStats';
import StatModule from '../entities/statModule';
import InventoryConfig from './inventoryConfig'
import { ItemType } from './itemType'

export default class Item extends Phaser.GameObjects.Container {
  code: number;
  name: string;
  sprite: Phaser.GameObjects.Sprite;
  inventoryWidth: number;
  inventoryHeight: number;
  itemType: ItemType;
  stats: ActiveEntityModifierStats;

  inventorySprite: string;
  entitySprite: string;

  public constructor(scene: Phaser.Scene, code: number, name: string, type: ItemType, width: number, height: number, inventorySprite: string, entitySprite: string, modifierStats: ActiveEntityModifierStats) {
    super(scene, 0, 0);
    this.code = code;
    this.name = name;
    this.itemType = type;
    this.inventoryWidth = width;
    this.inventoryHeight = height;

    this.inventorySprite = inventorySprite;
    this.entitySprite = entitySprite;

    this.sprite = new Phaser.GameObjects.Sprite(scene, 0, 0, inventorySprite);
    this.sprite.setOrigin(0, 0);
    this.changeToInventorySprite();

    this.stats = modifierStats;

    this.add(this.sprite);
    scene.add.existing(this);
  }

  public getWidth(): number {
    return this.sprite.displayWidth;
  }

  public changeToInventorySprite() {
    this.sprite.setTexture(this.inventorySprite);
    this.sprite.setScale(this.inventoryWidth * InventoryConfig.CELL_SIZE / this.sprite.width);
  }

  public changeToEntitySprite() {
    this.sprite.setTexture(this.entitySprite);
    this.sprite.setScale(0.5);
  }
}
