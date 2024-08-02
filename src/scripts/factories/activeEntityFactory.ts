import { MonsterPack } from '../behaviors/monsterPack';
import { RusherBehavior } from '../behaviors/rusherBehavior';
import { SkirmisherBehavior } from '../behaviors/skirmisherBehavior';
import { MonsterEntity } from '../entities/monsterEntity';
import { NpcEntity } from '../entities/npcEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { EntitySpecies } from '../enums/entitySpecies';
import { MonsterRarity } from '../enums/monsterRarity';
import InvalidMonsterCodeError from '../errors/invalidMonsterCodeError';
import { EntityManager } from '../managers/entityManager';
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

  public static createMonster(scene: Phaser.Scene, monsterCode: string, quality: MonsterRarity = MonsterRarity.NORMAL): MonsterEntity {
    const normalQualityMonsterFromCode = 
      (Array.from(this.loadedMonsters.values()).filter((monster) => {
        return monster.baseCode.toLowerCase() === monsterCode && monster.qualityCode === quality;
      }));
    if (normalQualityMonsterFromCode.length === 0) {
      throw new InvalidMonsterCodeError(`No monster data for normal quality monster with code: ${monsterCode}.`);
    }
    const randomMonster = normalQualityMonsterFromCode[Math.floor(Math.random() * normalQualityMonsterFromCode.length)];
    const monsterData: MonsterData = this.loadedMonsters.get(randomMonster.uuid)!;
    let entity: MonsterEntity = new MonsterEntity(scene, monsterData.baseCode.toLowerCase());
    entity.code = monsterCode;
    entity.name = monsterData.name;
    entity.species = EntitySpecies.UNDEAD;
    entity.quality = monsterData.qualityCode as MonsterRarity;
    monsterData.modifiers.forEach((key, value) => {
      entity.appliedModifiers.push(value)
    });
    let monsterLevel: number;
    if (EntityManager.instance.getPlayers().length > 0) {
      if (quality !== MonsterRarity.NORMAL) {
        monsterLevel = Math.floor(EntityManager.instance.getPlayers()[0].dynamicStats.level + (Math.random() * 3) + 1);
      } else {
        monsterLevel = Math.floor((Math.random() * EntityManager.instance.getPlayers()[0].dynamicStats.level) + 1);
      }
    } else {
      monsterLevel = Math.floor(Math.random() * 10 + 1);
    }
    entity.dynamicStats = {
      mana: monsterData.dynamicStats.mana + (monsterData.perLevelModifierStats.maxMana * monsterLevel),
      health: monsterData.dynamicStats.health + (monsterData.perLevelModifierStats.maxHealth * monsterLevel),
      level: monsterLevel,
      experience: 0,
    };
    entity.baseModifierStats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      maxMana: monsterData.baseModifierStats.maxMana + (monsterData.perLevelModifierStats.maxMana * entity.dynamicStats.level),
      maxHealth: monsterData.baseModifierStats.maxHealth + (monsterData.perLevelModifierStats.maxHealth * entity.dynamicStats.level),
      healthRegeneration: 0,
      manaRegeneration: 0,
      basePhysicalDamage: monsterData.baseModifierStats.basePhysicalDamage + (monsterData.perLevelModifierStats.basePhysicalDamage * entity.dynamicStats.level),
      baseMagicalDamage: 0,
      attackSpeed: monsterData.baseModifierStats.attackSpeed + (monsterData.perLevelModifierStats.attackSpeed * entity.dynamicStats.level),
      sightDistance: monsterData.baseModifierStats.sightDistance + (monsterData.perLevelModifierStats.sightDistance * entity.dynamicStats.level),
      meleeRange: monsterData.baseModifierStats.meleeRange + (monsterData.perLevelModifierStats.meleeRange * entity.dynamicStats.level),
      projectileRange: 500,
      defense: monsterData.baseModifierStats.defense + (monsterData.perLevelModifierStats.defense * entity.dynamicStats.level),
      baseMovementSpeed: monsterData.baseModifierStats.baseMovementSpeed + (monsterData.perLevelModifierStats.movementSpeed * entity.dynamicStats.level),
      movementSpeed: monsterData.baseModifierStats.movementSpeed + (monsterData.perLevelModifierStats.movementSpeed * entity.dynamicStats.level),
    };
    entity.totalModifierStats = {
      strength: 0,
      dexterity: 0,
      vitality: 0,
      intelligence: 0,
      maxMana: monsterData.totalModifierStats.maxMana + (monsterData.perLevelModifierStats.maxMana * entity.dynamicStats.level),
      maxHealth: monsterData.totalModifierStats.maxHealth + (monsterData.perLevelModifierStats.maxHealth * entity.dynamicStats.level),
      healthRegeneration: 0,
      manaRegeneration: 0,
      basePhysicalDamage: monsterData.totalModifierStats.basePhysicalDamage + (monsterData.perLevelModifierStats.basePhysicalDamage * entity.dynamicStats.level),
      baseMagicalDamage: 0,
      attackSpeed: monsterData.totalModifierStats.attackSpeed + (monsterData.perLevelModifierStats.attackSpeed * entity.dynamicStats.level),
      sightDistance: monsterData.totalModifierStats.sightDistance + (monsterData.perLevelModifierStats.sightDistance * entity.dynamicStats.level),
      meleeRange: monsterData.totalModifierStats.meleeRange + (monsterData.perLevelModifierStats.meleeRange * entity.dynamicStats.level),
      projectileRange: 500,
      defense: monsterData.totalModifierStats.defense + (monsterData.perLevelModifierStats.defense * entity.dynamicStats.level),
      baseMovementSpeed: monsterData.totalModifierStats.baseMovementSpeed + (monsterData.perLevelModifierStats.movementSpeed * entity.dynamicStats.level),
      movementSpeed: monsterData.totalModifierStats.movementSpeed + (monsterData.perLevelModifierStats.movementSpeed * entity.dynamicStats.level),
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
      entity.lootTable.setTable([
        "Chainmail Armor",
        "Chainmail Gloves",
        "Chainmail Boots",
        "Chainmail Belt",
        "Chainmail Hood",
        "Silver Ring",
      ]);
    } else if (monsterCode === 'wyvern_composite') {
      entity.spellBook.addSpell(new FireBolt(entity));
      entity.behavior = new SkirmisherBehavior(entity);
      entity.lootTable.setTable([
        "Golden Kopis",
        "Golden Kopis",
        "Gold Ring",
        "Talisman of Baphomet",
        "Chainmail Belt",
        "Chainmail Boots",
        "Bone Sword",
        "Bone Sword",
        "Knoppix"
      ]);
    } else if (monsterCode === 'goblin_lumberjack_black') {
      entity.behavior = new RusherBehavior(entity);
      entity.lootTable.setTable([
        "Chainmail Armor",
        "Chainmail Gloves",
        "Chainmail Boots",
        "Chainmail Belt",
        "Chainmail Hood",
        "Silver Ring",
        "Dagger",
        "Bb"
      ]);
    } else if (monsterCode === 'minotaur') {
      entity.behavior = new RusherBehavior(entity);
      entity.lootTable.setTable([
        "Golden Kopis",
        "Golden Kopis",
        "Knight Helmet",
        "Wooden Shield",
        "Temple Amulet",
        "Chainmail Armor",
        "Chainmail Gloves",
        "Chainmail Hood",
        "Knoppix"
      ]);
    } else if (monsterCode === 'zombie') {
      entity.behavior = new RusherBehavior(entity);
      entity.lootTable.setTable([
        "Leather Armor",
        "Leather Gloves",
        "Leather Boots",
        "Leather Belt",
        "Leather Hood",
        "Bronze Ring",
        "Dagger",
        "Dagger",
        "Lethal Dagger",
        "Lethal Dagger",
        "Wooden Shield",
      ]);
    } else if (monsterCode === 'skeleton') {
      entity.behavior = new RusherBehavior(entity);
      entity.lootTable.setTable([
        "Silver Ring",
        "Temple Amulet",
        "Dagger",
        "Dagger",
        "Lethal Dagger",
        "Lethal Dagger",
        "Bone Sword",
        "Wooden Shield",
        "Leather Hood",
        "Leather Armor",
        "Leather Gloves",
        "Leather Boots",
        "Leather Belt",
      ]);
    } else {
      entity.behavior = new RusherBehavior(entity);
    }
    switch (entity.quality) {
      case MonsterRarity.Elite:
      case MonsterRarity.RARE:
      case MonsterRarity.UNIQUE:
        const randomTintColor = Math.floor(Math.random() * 0xFFFFFF);
        entity.getSprite().setTint(randomTintColor);
        break;
      case MonsterRarity.SUPERUNIQUE:
        entity.getSprite().setTint(0xFF0000);
        break;
      case MonsterRarity.BOSS:
        entity.getSprite().setTint(0xFF00FF);
        break;
    }
    return entity;
  }

  public static createMonsterWithMinions(scene: Phaser.Scene, monsterCode: string, quality?: MonsterRarity, numberOfMinions?: number): MonsterEntity[] {
    let canMonsterHaveMinions: boolean = false;
    let possibleMonsterCodes = Array.from(this.loadedMonsters.values()).filter((monster) => monster.baseCode.toLowerCase() === monsterCode);
    if (possibleMonsterCodes.length === 0) {
      throw new InvalidMonsterCodeError(`No monster data for monster with code: ${monsterCode}.`);
    }
    let possibleMonsterCodesCopy = possibleMonsterCodes.slice();
    for (const monster of possibleMonsterCodesCopy) {
      if (monsterCode === monster.baseCode.toLowerCase()) {
        if (quality) {
          if (monster.qualityCode === quality) {
            canMonsterHaveMinions = true;
          } else {
            possibleMonsterCodes.splice(possibleMonsterCodes.indexOf(monster), 1);
          }
        } else {
          if (monster.qualityCode !== MonsterRarity.NORMAL) {
            canMonsterHaveMinions = true;
          } else {
            possibleMonsterCodes.splice(possibleMonsterCodes.indexOf(monster), 1);
          }
        }
      }
    }
    if (!canMonsterHaveMinions) {
      return [];
    }
    const randomMonster: MonsterData = possibleMonsterCodes[Math.floor(Math.random() * possibleMonsterCodes.length)];
    let entities: MonsterEntity[] = [];
    let monster = this.createMonster(scene, randomMonster.baseCode.toLowerCase(), randomMonster.qualityCode as MonsterRarity);
    // let monsterPack: MonsterPack = new MonsterPack();
    monster.monsterPack.setLeader(monster);
    // monsterPack.setLeader(monster);
    entities.push(monster);
    for (let i = 0; i < (numberOfMinions || 5); i++) {
      let minion = this.createMonster(scene, monsterCode);
      minion.appliedModifiers.push("Minion of " + monster.name + '\n');
      minion.positionX = monster.positionX + (Math.random() * 100 - 50);
      minion.positionY = monster.positionY + (Math.random() * 100 - 50);
      this.copyPackLeaderStatsToMinions(monster, minion);
      entities.push(minion);
      monster.monsterPack.addMinion(minion);
      // monsterPack.addMinion(minion);
    }
    return entities;
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

  private static copyPackLeaderStatsToMinions(packLeader: MonsterEntity, minion: MonsterEntity): void {
    minion.baseModifierStats.attackSpeed = packLeader.baseModifierStats.attackSpeed;
    minion.baseModifierStats.movementSpeed = packLeader.baseModifierStats.movementSpeed;
    minion.baseModifierStats.baseMovementSpeed = packLeader.baseModifierStats.baseMovementSpeed;
    minion.totalModifierStats.attackSpeed = packLeader.totalModifierStats.attackSpeed;
    minion.totalModifierStats.movementSpeed = packLeader.totalModifierStats.movementSpeed;
    minion.totalModifierStats.baseMovementSpeed = packLeader.totalModifierStats.baseMovementSpeed;
  }
}
