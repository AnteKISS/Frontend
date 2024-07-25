import { RusherBehavior } from '../behaviors/rusherBehavior';
import { SkirmisherBehavior } from '../behaviors/skirmisherBehavior';
import { MonsterEntity } from '../entities/monsterEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { EntitySpecies } from '../enums/entitySpecies';
import FireBolt from '../spells/craftedSpells/firebolt';
import ThrowSpear from '../spells/craftedSpells/throwSpear';

export class ActiveEntityFactory {

  public static createPlayer(scene: Phaser.Scene): PlayerEntity {
    let entity: PlayerEntity = new PlayerEntity(scene);
    entity.code = 'player';
    entity.species = EntitySpecies.HUMAN;
    entity.dynamicStats = {
      mana: 100,
      health: 100,
      level: 1,
      experience: 0,
    };
    entity.baseModifierStats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      maxMana: 100,
      maxHealth: 100,
      healthRegeneration: 2,
      manaRegeneration: 2,
      basePhysicalDamage: 0,
      baseMagicalDamage: 0,
      attackAccuracy: 0,
      criticalChance: 0,
      criticalMultiplier: 1,
      attackSpeed: 1,
      sightDistance: 500,
      meleeRange: 100,
      projectileRange: 500,
      defense: 0,
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
      baseMovementSpeed: 150,
      movementSpeed: 0,
    };
    entity.states = {
      isInvincible: false,
      isStunned: false,
      isSilenced: false,
      isRooted: false,
      isFeared: false,
      isCharmed: false,
      isTaunted: false,
      isBlinded: false,
      isInvisible: false,
      isUntargetable: false
    };
    entity.attributeConversion();
    return entity;
  }

  public static createMonster(scene: Phaser.Scene, monsterCode: string): MonsterEntity {
    // Check if monsterCode is valid then proceed
    let entity: MonsterEntity = new MonsterEntity(scene, monsterCode);
    entity.code = monsterCode;
    entity.species = EntitySpecies.UNDEAD;
    entity.dynamicStats = {
      mana: 0,
      health: 100,
      level: 1,
      experience: 0,
    };
    entity.totalModifierStats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      maxMana: 0,
      maxHealth: 100,
      healthRegeneration: 0,
      manaRegeneration: 0,
      basePhysicalDamage: 10,
      baseMagicalDamage: 0,
      attackAccuracy: 0,
      criticalChance: 0,
      criticalMultiplier: 1,
      attackSpeed: 1,
      sightDistance: 500,
      meleeRange: 100,
      projectileRange: 500,
      defense: 0,
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
      baseMovementSpeed: 1,
      movementSpeed: 100,
    };
    entity.states = {
      isInvincible: false,
      isStunned: false,
      isSilenced: false,
      isRooted: false,
      isFeared: false,
      isCharmed: false,
      isTaunted: false,
      isBlinded: false,
      isInvisible: false,
      isUntargetable: false
    };
    if (monsterCode === 'goblin_0') {
      entity.spellBook.addSpell(new ThrowSpear(entity));
      entity.behavior = new SkirmisherBehavior(entity);
      entity.baseModifierStats.maxHealth = 50;
    } else if (monsterCode === 'wyvern_composite') {
      entity.spellBook.addSpell(new FireBolt(entity));
      entity.behavior = new SkirmisherBehavior(entity);
      entity.dynamicStats.mana = 1000000;
      entity.totalModifierStats.movementSpeed = 200;
      entity.totalModifierStats.maxHealth = 250;
      entity.baseModifierStats.maxHealth = 250;
      entity.totalModifierStats.sightDistance = 1000;
    } else {
      entity.behavior = new RusherBehavior(entity);
    }
    return entity;
  }
}
