import { PlayerEntity } from "../entities/playerEntity";
import { MonsterEntity } from "../entities/monsterEntity";
import { BaseEntity } from "../entities/baseEntity";
import { ActiveEntityFactory } from "../factories/activeEntityFactory";
import Item from "../inventory/item";
import ItemEntity from "../entities/itemEntity";
import CampaignManager from "./campaignmanager";

export class EntityManager {
  private static _instance: EntityManager;
  private globalPool: BaseEntity[];
  private areaPools: Map<string, BaseEntity[]>;

  private constructor() {
    this.globalPool = [];
    this.areaPools = new Map();
  }

  public static get instance(): EntityManager {
    if (!EntityManager._instance) {
      EntityManager._instance = new EntityManager();
    }
    return EntityManager._instance;
  }

  private addGlobalEntity(entity: BaseEntity): void {
    this.globalPool.push(entity);
  }

  private addAreaEntity(entity: BaseEntity): void {
    this.getCurrentAreaEntityPool().push(entity);
  }

  private removeAreaEntity(entity: BaseEntity): void {
    const pool = this.getCurrentAreaEntityPool();
    const index = pool.indexOf(entity);
    if (index == -1) {
      return;
    }
    pool.splice(index, 1);
  }

  public hideAreaEntities(): void {
    for (const entity of this.getCurrentAreaEntityPool())
      entity.setVisible(false);
  }

  public showAreaEntities(): void {
    for (const entity of this.getCurrentAreaEntityPool())
      entity.setVisible(true);
  }

  public update(time: number, deltaTime: number): void {
    this.globalPool.forEach(entity => { entity.update(time, deltaTime); });
    this.getCurrentAreaEntityPool().forEach(entity => { entity.update(time, deltaTime); });
  }

  public resetAreaEntities(): void {
    this.getCurrentAreaEntityPool().forEach(entity => {
      if (entity.isResetReady) {
        entity.reset();
      }
    });
  }

  public getAreaEntities(): BaseEntity[] {
    return this.getCurrentAreaEntityPool();
  }

  public getAreaEntitiesAtPosition(positionX: number, positionY: number): BaseEntity[] {
    let foundEntities: BaseEntity[] = [];

    for (let entity of this.getCurrentAreaEntityPool()) {
      let entitySprite: Phaser.GameObjects.Sprite = entity.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite)[0] as Phaser.GameObjects.Sprite;

      if (positionX > entity.positionX - (entity.truncatedSpriteWidth / 2) &&
        positionX < entity.positionX + (entity.truncatedSpriteWidth / 2) &&
        positionY < entity.positionY + (entity.truncatedSpriteHeight - (entity.truncatedSpriteHeight * entitySprite.originY)) &&
        positionY > entity.positionY - (entity.truncatedSpriteHeight * entitySprite.originY)) {
        foundEntities.push(entity);
      }
    }
    return foundEntities;
  }

  public getAreaEntityAtPosition(positionX: number, positionY: number): BaseEntity | null {
    let topMostEntity: BaseEntity | null = null;
    let foundEntities: BaseEntity[] = [];

    for (let entity of this.getCurrentAreaEntityPool()) {
      let entitySprite: Phaser.GameObjects.Sprite = entity.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite)[0] as Phaser.GameObjects.Sprite;

      if (positionX > entity.positionX - (entity.truncatedSpriteWidth / 2) &&
        positionX < entity.positionX + (entity.truncatedSpriteWidth / 2) &&
        positionY < entity.positionY + (entity.truncatedSpriteHeight - (entity.truncatedSpriteHeight * entitySprite.originY)) &&
        positionY > entity.positionY - (entity.truncatedSpriteHeight * entitySprite.originY)) {
        foundEntities.push(entity);
      }
    }
    for (let entity of foundEntities) {
      if (!topMostEntity) {
        topMostEntity = entity;
      } else {
        if (entity.depth > topMostEntity.depth) {
          topMostEntity = entity;
        }
      }
    }
    return topMostEntity;
  }

  public getItemAtPosition(positionX: number, positionY: number): ItemEntity | null {
    let topMostEntity: ItemEntity | null = null;
    let foundEntities: ItemEntity[] = [];

    const entities = this.getCurrentAreaEntityPool().filter(entity => entity instanceof ItemEntity) as ItemEntity[];

    for (let entity of entities) {
      const item = entity.item;

      const isItemUnderCursor = Phaser.Geom.Rectangle.Contains(item.getBounds(), positionX, positionY);
      if (isItemUnderCursor) {
        foundEntities.push(entity);
      }
    }
    for (let entity of foundEntities) {
      if (!topMostEntity) {
        topMostEntity = entity;
      } else {
        if (entity.depth > topMostEntity.depth) {
          topMostEntity = entity;
        }
      }
    }
    return topMostEntity;
  }

  public getPlayers(): PlayerEntity[] {
    return this.globalPool.filter(entity => entity instanceof PlayerEntity) as PlayerEntity[];
  }

  public getMonsters(): MonsterEntity[] {
    return this.getCurrentAreaEntityPool().filter(entity => entity instanceof MonsterEntity) as MonsterEntity[];
  }

  // TODO: Add function to get all npcs

  public createPlayer(scene: Phaser.Scene): PlayerEntity {
    let player: PlayerEntity = ActiveEntityFactory.createPlayer(scene);
    this.addGlobalEntity(player);
    return player;
  }

  public createMonster(scene: Phaser.Scene, monsterCode: string): MonsterEntity {
    let monster: MonsterEntity = ActiveEntityFactory.createMonster(scene, monsterCode);
    this.addAreaEntity(monster);
    return monster;
  }

  public createItem(scene: Phaser.Scene, item: Item): ItemEntity {
    item.changeToEntitySprite();
    let itemEntity: ItemEntity = new ItemEntity(scene, item);
    this.addAreaEntity(itemEntity);
    return itemEntity;
  }

  // TODO: Add function to create npc

  public setDebugMode(enableDebugMode: boolean): void {
    this.getCurrentAreaEntityPool().forEach(entity => {
      entity.setDebugMode(enableDebugMode);
    });
  }

  public destroyItem(itemEntity: ItemEntity): void {
    this.removeAreaEntity(itemEntity);
    itemEntity.destroy();
  }

  // TODO: Add function to create npc

  public toggleGroundItemsTooltip(showTooltip: boolean): void {
    const itemEntities = this.getCurrentAreaEntityPool().filter(entity => entity instanceof ItemEntity) as ItemEntity[];
    itemEntities.forEach(itemEntity => {
      itemEntity.label.visible = showTooltip;
    });
  }

  private getCurrentAreaEntityPool(): BaseEntity[] {
    let pool = this.areaPools.get(CampaignManager.getInstance().getAreaName());
    if (!pool) {
      pool = [];
      this.areaPools.set(CampaignManager.getInstance().getAreaName(), pool);
    }
    return pool;
  }
}
