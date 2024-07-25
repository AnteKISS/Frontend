import { PlayerEntity } from "../entities/playerEntity";
import { MonsterEntity } from "../entities/monsterEntity";
import { BaseEntity } from "../entities/baseEntity";
import { ActiveEntityFactory } from "../factories/activeEntityFactory";
import Item from "../inventory/item";
import ItemEntity from "../entities/itemEntity";
import CampaignManager from "./campaignmanager";
import { NpcEntity } from "../entities/npcEntity";

export class EntityManager {
  private static _instance: EntityManager;
  private entityPools: Map<string, Set<BaseEntity>>;

  private constructor() {
    this.entityPools = new Map();
  }

  public static get instance(): EntityManager {
    if (!EntityManager._instance) {
      EntityManager._instance = new EntityManager();
    }
    return EntityManager._instance;
  }

  public addAreaEntity(entity: BaseEntity): void {
    this.getCurrentAreaEntityPool().add(entity);
  }

  public removeAreaEntity(entity: BaseEntity): void {
    this.getCurrentAreaEntityPool().delete(entity);
  }

  public hideAreaEntities(): void {
    for (const entity of this.getCurrentAreaEntities())
      entity.setVisible(false);
  }

  public showAreaEntities(): void {
    for (const entity of this.getCurrentAreaEntities())
      entity.setVisible(true);
  }

  public update(time: number, deltaTime: number): void {
    for (const entity of this.getCurrentAreaEntities())
      entity.update(time, deltaTime);
  }

  public resetAreaEntities(): void {
    for (const entity of this.getCurrentAreaEntities())
      if (entity.isResetReady)
        entity.reset();
  }

  public getAreaEntitiesAtPosition(positionX: number, positionY: number): BaseEntity[] {
    let foundEntities: BaseEntity[] = [];

    for (let entity of this.getCurrentAreaEntities()) {
      let entitySprite: Phaser.GameObjects.Sprite = entity.getSprite();

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

    for (let entity of this.getCurrentAreaEntities()) {
      let entitySprite: Phaser.GameObjects.Sprite = entity.getSprite();

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

    const entities = this.getItems() as ItemEntity[];

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
    const players = [] as PlayerEntity[];
    for (const entity of this.getCurrentAreaEntities())
      if (entity instanceof PlayerEntity)
        players.push(entity);
    return players;
  }

  public getMonsters(): MonsterEntity[] {
    const monsters = [] as MonsterEntity[];
    for (const entity of this.getCurrentAreaEntities())
      if (entity instanceof MonsterEntity)
        monsters.push(entity);
    return monsters;
  }

  public getItems(): ItemEntity[] {
    const items = [] as ItemEntity[];
    for (const entity of this.getCurrentAreaEntities())
      if (entity instanceof ItemEntity)
        items.push(entity);
    return items;
  }

  // TODO: Add function to get all npcs

  public createPlayer(scene: Phaser.Scene): PlayerEntity {
    let player: PlayerEntity = ActiveEntityFactory.createPlayer(scene);
    this.addAreaEntity(player);
    return player;
  }

  public createMonster(scene: Phaser.Scene, monsterCode: string): MonsterEntity {
    let monster: MonsterEntity = ActiveEntityFactory.createMonster(scene, monsterCode);
    this.addAreaEntity(monster);
    return monster;
  }

  public createNpc(scene: Phaser.Scene, npcCode: string): NpcEntity {
    let npc: NpcEntity = ActiveEntityFactory.createNPC(scene, npcCode);
    this.addAreaEntity(npc);
    return npc;
  }

  public createItem(scene: Phaser.Scene, item: Item): ItemEntity {
    item.changeToEntitySprite();
    let itemEntity: ItemEntity = new ItemEntity(scene, item);
    this.addAreaEntity(itemEntity);
    return itemEntity;
  }

  public setDebugMode(enableDebugMode: boolean): void {
    for (const entity of this.getCurrentAreaEntities())
      entity.setDebugMode(enableDebugMode);
  }

  public destroyItem(itemEntity: ItemEntity): void {
    this.removeAreaEntity(itemEntity);
    itemEntity.destroy();
  }

  // TODO: Add function to create npc

  public toggleGroundItemsTooltip(showTooltip: boolean): void {
    const itemEntities = this.getItems() as ItemEntity[];
    itemEntities.forEach(itemEntity => {
      itemEntity.label.visible = showTooltip;
    });
  }

  private getCurrentAreaEntityPool(): Set<BaseEntity> {
    let pool = this.entityPools.get(CampaignManager.getInstance().getAreaName());
    if (!pool) {
      pool = new Set();
      this.entityPools.set(CampaignManager.getInstance().getAreaName(), pool);
    }
    return pool;
  }

  public getCurrentAreaEntities(): IterableIterator<BaseEntity> {
    return this.getCurrentAreaEntityPool().values();
  }
}
