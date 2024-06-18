import { InactiveEntity } from './inactiveEntity'
import { BaseEntity } from './baseEntity'
import Item from '../inventory/item'
import { EntityManager } from '../managers/entityManager';

export default class ItemEntity extends InactiveEntity {
  private item: Item;

  constructor(scene: Phaser.Scene, item: Item) {
    super(scene);
    this.item = item;
    this.item.changeToEntitySprite();
    this.add(item);
    this.scene.cameras.getCamera("uiCamera").ignore(this); // TODO: Maybe add this line to base entity

    // Position item to player
    const PLAYERS = EntityManager.instance.getPlayers(); // TODO: Get actual player who dropped the item (pass player ref to inventory?)
    if (PLAYERS.length > 0) {
      const P1 = PLAYERS[0];
      this.item.setPosition(P1.x - this.item.width / 2, P1.y - this.item.width / 2);
    }
  }

  update(deltaTime: number): void { }
  reset(): void { }
  initializeAnimations(): void { }
  onSpriteColliding(hitEntity: BaseEntity): void { }
  onEntityColliding(hitEntity: BaseEntity): void { }
}
