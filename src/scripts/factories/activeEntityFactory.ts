import { RusherBehavior } from '../behaviors/rusherBehavior';
import { SkirmisherBehavior } from '../behaviors/skirmisherBehavior';
import { MonsterEntity } from '../entities/monsterEntity';
import { NpcEntity } from '../entities/npcEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { EntitySpecies } from '../enums/entitySpecies';
import InvalidMonsterCodeError from '../errors/invalidMonsterCodeError';
import { MonsterData } from '../mappers/MonsterEntityMapper';
import FireBolt from '../spells/craftedSpells/firebolt';
import ThrowSpear from '../spells/craftedSpells/throwSpear';

export class ActiveEntityFactory {
  public static loadedMonsters: Map<string, MonsterData> = new Map();

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
      attackSpeed: 1,
      sightDistance: 500,
      meleeRange: 100,
      projectileRange: 500,
      defense: 0,
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
    if (!this.loadedMonsters.has(monsterCode)) {
      throw new InvalidMonsterCodeError(`No monster data for monster with code: ${monsterCode}.`);
    }
    const monsterData: MonsterData = this.loadedMonsters.get(monsterCode)!;
    let entity: MonsterEntity = new MonsterEntity(scene, monsterCode);
    entity.code = monsterCode;
    entity.species = EntitySpecies.UNDEAD;
    entity.dynamicStats = {
      mana: 0,
      health: monsterData.dynamicStats.health,
      level: 1,
      experience: 0,
    };
    entity.totalModifierStats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      maxMana: 0,
      maxHealth: monsterData.totalModifierStats.maxHealth,
      healthRegeneration: 0,
      manaRegeneration: 0,
      basePhysicalDamage: monsterData.totalModifierStats.basePhysicalDamage,
      baseMagicalDamage: 0,
      attackSpeed: monsterData.totalModifierStats.attackSpeed,
      sightDistance: 500,
      meleeRange: 100,
      projectileRange: 500,
      defense: 0,
      baseMovementSpeed: monsterData.totalModifierStats.baseMovementSpeed,
      movementSpeed: monsterData.totalModifierStats.movementSpeed,
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
    if (monsterCode === 'goblin') {
      entity.spellBook.addSpell(new ThrowSpear(entity));
      entity.behavior = new SkirmisherBehavior(entity);
      // entity.baseModifierStats.maxHealth = 50;
      // entity.dynamicStats.health = 50;
    } else if (monsterCode === 'wyvern_composite') {
      entity.spellBook.addSpell(new FireBolt(entity));
      entity.behavior = new SkirmisherBehavior(entity);
      entity.dynamicStats.mana = 1000000;
      // entity.totalModifierStats.movementSpeed = 200;
      // entity.totalModifierStats.maxHealth = 250;
      // entity.baseModifierStats.maxHealth = 250;
      // entity.dynamicStats.health = 250;
      entity.totalModifierStats.sightDistance = 1000;
    } else if (monsterCode === 'goblin_lumberjack_black') {
      entity.behavior = new RusherBehavior(entity);
      // entity.totalModifierStats.movementSpeed = 100;
      // entity.totalModifierStats.maxHealth = 500;
      // entity.baseModifierStats.maxHealth = 500
      // entity.dynamicStats.health = 500;
      entity.totalModifierStats.sightDistance = 1000;
      // entity.totalModifierStats.basePhysicalDamage = 20;
    } else if (monsterCode === 'minotaur') {
      entity.behavior = new RusherBehavior(entity);
      // entity.totalModifierStats.movementSpeed = 200;
      // entity.totalModifierStats.maxHealth = 300;
      // entity.baseModifierStats.maxHealth = 300;
      // entity.dynamicStats.health = 300;
      entity.totalModifierStats.sightDistance = 1000;
      // entity.totalModifierStats.basePhysicalDamage = 20;
    } else {
      entity.behavior = new RusherBehavior(entity);
    }
    return entity;
  }

  public static createNPC(scene: Phaser.Scene, npcCode: string): NpcEntity {
    // Check if monsterCode is valid then proceed
    let entity: NpcEntity = new NpcEntity(scene, npcCode);
    entity.code = npcCode;
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
      attackSpeed: 1,
      sightDistance: 500,
      meleeRange: 100,
      projectileRange: 500,
      defense: 0,
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
    return entity;
  }
}
