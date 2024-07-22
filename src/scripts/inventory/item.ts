import ActiveEntityModifierStats from '../entities/activeEntityModifierStats';
import InventoryConfig from './inventoryConfig'
import { ItemType } from './itemType'

export default class Item extends Phaser.GameObjects.Container {
  name: string;
  sprite: Phaser.GameObjects.Sprite;
  inventoryWidth: number;
  inventoryHeight: number;
  itemType: ItemType;
  stats: ActiveEntityModifierStats;

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
    this.changeToInventorySprite();

    this.stats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      maxMana: 0,
      maxHealth: 0,
      healthRegeneration: 0,
      manaRegeneration: 0,
      basePhysicalDamage: 0,
      baseMagicalDamage: 0,
      attackAccuracy: 0,
      criticalChance: 0,
      criticalMultiplier: 0,
      attackSpeed: 0,
      sightDistance: 0,
      meleeRange: 0,
      projectileRange: 0,
      defense: 10,
      physicalResistance: 0,
      magicResistance: 0,
      fireResistance: 0,
      coldResistance: 0,
      lightningResistance: 0,
      poisonResistance: 0,
      physicalAbsorption: 0,
      magicAbsorption: 0,
      fireAbsorption: 0,
      coldAbsorption: 0,
      lightningAbsorption: 0,
      poisonAbsorption: 0,
      baseMovementSpeed: 0,
      movementSpeed: 0,
    };

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
