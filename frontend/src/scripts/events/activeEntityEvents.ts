import { ActiveEntity } from "../entities/activeEntity";
import Spell from "../spells/spell";
import Item from "../inventory/item";

export namespace ActiveEntityEvents {

  export enum AttackType {
    MELEE = "melee",
    RANGED = "ranged",
    MAGIC = "magic"
  }

  export abstract class CombatEvent {
    public attacker: ActiveEntity;
    public target: ActiveEntity;
    public attackType: string;

    constructor(attacker: ActiveEntity, target: ActiveEntity) {
      this.attacker = attacker;
      this.target = target;
    }
  }

  export abstract class MovementEvent {
    public entity: ActiveEntity;

    constructor(entity: ActiveEntity) {
      this.entity = entity;
    }
  }

  export abstract class WeaponEvent {
    public entity: ActiveEntity;
    public weapon: Item;
    public isStartingAttack: boolean = false;
    public isMiddleOfAttack: boolean = false;
    public isFinishingAttack: boolean = false;

    constructor(entity: ActiveEntity, weapon: Item) {
      this.entity = entity;
      this.weapon = weapon;
    }
  }

  export abstract class MagicEvent {
    public entity: ActiveEntity;
    public spell: Spell;

    constructor(entity: ActiveEntity, spell: Spell) {
      this.entity = entity;
      this.spell = spell;
    }
  }

  export class MeleeWeaponAttackEvent extends WeaponEvent {
    constructor(attacker: ActiveEntity, weapon: Item) {
      super(attacker, weapon);
    }
  }

  export class RangedWeaponAttackEvent extends WeaponEvent {
    constructor(attacker: ActiveEntity, weapon: Item) {
      super(attacker, weapon);
    }
  }

  export class MagicAttackEvent extends WeaponEvent {
    constructor(attacker: ActiveEntity, weapon: Item) {
      super(attacker, weapon);
    }
  }

  export class ReceivedDamageEvent extends CombatEvent {
    constructor(attacker: ActiveEntity, target: ActiveEntity) {
      super(attacker, target);
    }
  }

  export class KilledEvent extends CombatEvent {
    constructor(attacker: ActiveEntity, target: ActiveEntity) {
      super(attacker, target);
    }
  }
}