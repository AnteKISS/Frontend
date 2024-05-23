import { MonsterEntity } from '../entities/monsterEntity';
import InvalidMonsterCodeError from '../errors/invalidMonsterCodeError';
import NotImplementedError from '../errors/notImplementedError';

export class MonsterFactory {
  static createMonster(monsterCode: string, scene: Phaser.Scene): MonsterEntity {
    // Check if monsterCode is valid then proceed
    // throw new InvalidMonsterCodeError();
    let entity: MonsterEntity = new MonsterEntity(scene, monsterCode);
    entity.code = monsterCode;
    entity.species = EntitySpecies.UNDEAD;
    entity.stats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      energy: 0,
      mana: 0,
      health: 1,
      maxHealth: 1,
      healthRegeneration: 0,
      basePhysicalDamage: 0,
      baseMagicalDamage: 0,
      attackAccuracy: 0,
      criticalChance: 0,
      criticalMultiplier: 1,
      attackSpeed: 1,
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
      movementSpeed: 1,
      level: 1,
      experience: 0,
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