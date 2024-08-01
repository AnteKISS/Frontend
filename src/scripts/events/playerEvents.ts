import exp from "constants";
import { MonsterEntity } from "../entities/monsterEntity";
import { PlayerEntity } from "../entities/playerEntity";
import InventoryItem from "../inventory/inventoryItem";

export namespace PlayerEvents {

  export abstract class PlayerEquipmentEvent {
    public player: PlayerEntity;
    public item: InventoryItem;

    constructor(player: PlayerEntity, item: InventoryItem) {
      this.player = player;
      this.item = item;
    }
  }

  export class PlayerEquipItemEvent extends PlayerEquipmentEvent {
    constructor(player: PlayerEntity, item: InventoryItem) {
      super(player, item);
    }
  }

  export class PlayerUnequipItemEvent extends PlayerEquipmentEvent {
    constructor(player: PlayerEntity, item: InventoryItem) {
      super(player, item);
    }
  }
}