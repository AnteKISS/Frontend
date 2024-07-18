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

  // export abstract class PlayerCombatEvent {
  //   public player: PlayerEntity;
  //   public target: MonsterEntity;

  //   constructor(player: PlayerEntity, target: MonsterEntity) {
  //     this.player = player;
  //     this.target = target;
  //   }
  // }

  // export abstract class PlayerMovementEvent {
  //   public player: PlayerEntity;

  //   constructor(player: PlayerEntity) {
  //     this.player = player;
  //   }
  // }

  // export class PlayerStartAttack extends PlayerCombatEvent {
  //   constructor(player: PlayerEntity, target: MonsterEntity) {
  //     super(player, target);
  //   }
  // }

  // export class PlayerDamaged extends PlayerCombatEvent {
  //   constructor(player: PlayerEntity, target: MonsterEntity) {
  //     super(player, target);
  //   }
  // }

  // export class PlayerKilled extends PlayerCombatEvent {
  //   constructor(player: PlayerEntity, target: MonsterEntity) {
  //     super(player, target);
  //   }
  // }
}