import ActiveEntityDynamicStats from "../entities/activeEntityDynamicStats";
import ActiveEntityModifierStats from "../entities/activeEntityModifierStats";
import ActiveEntityPerLevelStats from "../entities/activeEntityPerLevelStats";
import MonsterDataInvalidError from "../errors/monsterDataInvalidError";

export class MonsterEntityMapper {
  public static mapMonsterData(data: any): MonsterData {
    if (!data) {
      throw new MonsterDataInvalidError("Monster data is null or undefined.");
    }
    if (!data.baseCode) {
      throw new MonsterDataInvalidError("Monster data is missing a base code.");
    }
    let monsterData: MonsterData = new MonsterData();
    monsterData.dynamicStats = new ActiveEntityDynamicStats();
    monsterData.baseModifierStats = new ActiveEntityModifierStats();
    monsterData.tempModifierStats = new ActiveEntityModifierStats();
    monsterData.totalModifierStats = new ActiveEntityModifierStats();
    monsterData.modifiers = new Map<string, string>();
    monsterData.name = data.name || monsterData.name;
    monsterData.code = data.code;
    monsterData.baseCode = data.baseCode || monsterData.baseCode;
    monsterData.qualityCode = data.qualityCode || monsterData.qualityCode;
    data.monsterStats.forEach((stat: any) => {
      switch (stat.statCode) {
        case 'HEALTH':
          monsterData.baseModifierStats.maxHealth = stat.baseValue || monsterData.baseModifierStats.maxHealth;
          monsterData.tempModifierStats.maxHealth = stat.baseValue || monsterData.tempModifierStats.maxHealth;
          monsterData.totalModifierStats.maxHealth = stat.baseValue || monsterData.totalModifierStats.maxHealth;
          monsterData.dynamicStats.health = stat.baseValue || monsterData.dynamicStats.health;
          monsterData.perLevelModifierStats.maxHealth = stat.perLvlValue || monsterData.perLevelModifierStats.maxHealth;
          break;
        case 'MANA':
          monsterData.baseModifierStats.maxMana = stat.baseValue || monsterData.baseModifierStats.maxMana;
          monsterData.tempModifierStats.maxMana = stat.baseValue || monsterData.tempModifierStats.maxMana;
          monsterData.totalModifierStats.maxMana = stat.baseValue || monsterData.totalModifierStats.maxMana;
          monsterData.dynamicStats.mana = stat.baseValue || monsterData.dynamicStats.mana;
          monsterData.perLevelModifierStats.maxMana = stat.perLvlValue || monsterData.perLevelModifierStats.maxMana;
          break;
        case 'MOV_SPEED':
          monsterData.baseModifierStats.baseMovementSpeed = stat.baseValue || monsterData.baseModifierStats.baseMovementSpeed;
          monsterData.baseModifierStats.movementSpeed = stat.baseValue || monsterData.baseModifierStats.movementSpeed;
          monsterData.tempModifierStats.baseMovementSpeed = stat.baseValue || monsterData.tempModifierStats.baseMovementSpeed;
          monsterData.tempModifierStats.movementSpeed = stat.baseValue || monsterData.tempModifierStats.movementSpeed;
          monsterData.totalModifierStats.baseMovementSpeed = stat.baseValue || monsterData.totalModifierStats.baseMovementSpeed;
          monsterData.totalModifierStats.movementSpeed = stat.baseValue || monsterData.totalModifierStats.movementSpeed;
          monsterData.perLevelModifierStats.movementSpeed = stat.perLvlValue || monsterData.perLevelModifierStats.movementSpeed;
          break;
        case 'ATTACK_SPEED':
          monsterData.baseModifierStats.attackSpeed = stat.baseValue || monsterData.baseModifierStats.attackSpeed;
          monsterData.tempModifierStats.attackSpeed = stat.baseValue || monsterData.tempModifierStats.attackSpeed
          monsterData.totalModifierStats.attackSpeed = stat.baseValue || monsterData.totalModifierStats.attackSpeed;
          monsterData.perLevelModifierStats.attackSpeed = stat.perLvlValue || monsterData.perLevelModifierStats.attackSpeed;
          break;
        case 'MELEE_RANGE':
          monsterData.baseModifierStats.meleeRange = stat.baseValue || monsterData.baseModifierStats.meleeRange;
          monsterData.tempModifierStats.meleeRange = stat.baseValue || monsterData.tempModifierStats.meleeRange;
          monsterData.totalModifierStats.meleeRange = stat.baseValue || monsterData.totalModifierStats.meleeRange;
          monsterData.perLevelModifierStats.meleeRange = stat.perLvlValue || monsterData.perLevelModifierStats.meleeRange;
          break;
        case 'DAMAGE':
          monsterData.baseModifierStats.basePhysicalDamage = stat.baseValue || monsterData.baseModifierStats.basePhysicalDamage;
          monsterData.tempModifierStats.basePhysicalDamage = stat.baseValue || monsterData.tempModifierStats.basePhysicalDamage;
          monsterData.totalModifierStats.basePhysicalDamage = stat.baseValue || monsterData.totalModifierStats.basePhysicalDamage;
          monsterData.perLevelModifierStats.basePhysicalDamage = stat.perLvlValue || monsterData.perLevelModifierStats.basePhysicalDamage;
          break;
        case 'DEFENSE':
          monsterData.baseModifierStats.defense = stat.baseValue || monsterData.baseModifierStats.defense;
          monsterData.tempModifierStats.defense = stat.baseValue || monsterData.tempModifierStats.defense;
          monsterData.totalModifierStats.defense = stat.baseValue || monsterData.totalModifierStats.defense;
          monsterData.perLevelModifierStats.defense = stat.perLvlValue || monsterData.perLevelModifierStats.defense;
          break;
        case 'SIGHT_DISTANCE':
          monsterData.baseModifierStats.sightDistance = stat.baseValue || monsterData.baseModifierStats.sightDistance;
          monsterData.tempModifierStats.sightDistance = stat.baseValue || monsterData.tempModifierStats.sightDistance;
          monsterData.totalModifierStats.sightDistance = stat.baseValue || monsterData.totalModifierStats.sightDistance;
          monsterData.perLevelModifierStats.sightDistance = stat.perLvlValue || monsterData.perLevelModifierStats.sightDistance;
          break;
      }
    });
    data.monsterModifiers.forEach((modifier: any) => {
      monsterData.modifiers.set(modifier.modifierCode, modifier.modifierName);
    });
    return monsterData;
  }
}

export class MonsterData {
  public uuid: string;
  public code: string;
  public baseCode: string;
  public name: string;
  public qualityCode: string;
  public dynamicStats: ActiveEntityDynamicStats;
  public baseModifierStats: ActiveEntityModifierStats;
  public tempModifierStats: ActiveEntityModifierStats;
  public totalModifierStats: ActiveEntityModifierStats;
  public perLevelModifierStats: ActiveEntityPerLevelStats;
  public modifiers: Map<string, string>;

  public constructor() {
    this.uuid = Phaser.Math.RND.uuid();
    this.code = '';
    this.baseCode = '';
    this.name = '';
    this.qualityCode = '';
    this.dynamicStats = new ActiveEntityDynamicStats();
    this.baseModifierStats = new ActiveEntityModifierStats();
    this.tempModifierStats = new ActiveEntityModifierStats();
    this.totalModifierStats = new ActiveEntityModifierStats();
    this.perLevelModifierStats = new ActiveEntityPerLevelStats();
    this.modifiers = new Map<string, string>();
  }
}