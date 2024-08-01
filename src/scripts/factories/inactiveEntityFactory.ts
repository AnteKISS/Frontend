import Item from "../inventory/item";
import { ItemType } from "../inventory/itemType";
import StatModule from "../entities/statModule";
import LootTable from "../entities/lootTable";
import APIManager from "../managers/APIManager";

export class InactiveEntityFactory {
  public static createRandomItem(scene: Phaser.Scene, lootTable: LootTable): Item | undefined {
    if (lootTable.getTable().length === 0)
      return undefined;

    const randomIndex = Math.floor(Math.random() * lootTable.getTable().length);
    const itemName = lootTable.getTable()[randomIndex];
    return APIManager.getNewItemByName(scene, itemName);
  }
}
