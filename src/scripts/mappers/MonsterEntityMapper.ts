import { MonsterEntity } from "../entities/monsterEntity";
import MonsterDataInvalidError from "../errors/monsterDataInvalidError";
import { EntityManager } from "../managers/entityManager";

export class MonsterEntityMapper {
  // public static mapMonsterEntity(monsterData: any): MonsterEntity {
  //   if (!monsterData) {
  //     throw new MonsterDataInvalidError("Monster data is null or undefined.");
  //   }
  //   if (!monsterData.id) {
  //     throw new MonsterDataInvalidError("Monster data is missing an id.");
  //   }
  //   let monsterEntity: MonsterEntity = new MonsterEntity(EntityManager.instance.getPlayers()[0].scene, monsterData.id);
  //   monsterEntity.name = monsterData.name || monsterEntity.name;
  //   for (let statCode in monsterData.monsterStats) {
  //     // if (monsterEntity.hasOwnProperty(key)) {
  //     //   monsterEntity[key] = monsterData[key];
  //     // }
  //     switch (statCode) {
  //       case 'HEALTH':
  //         monsterEntity.totalModifierStats.maxHealth = monsterData.monsterStats.health || monsterEntity.totalModifierStats.maxHealth;
  //         monsterEntity.baseModifierStats.maxHealth = monsterEntity.totalModifierStats.maxHealth;
  //         monsterEntity.dynamicStats.health = monsterEntity.totalModifierStats.maxHealth;
  //         break;
  //       case 'MOV_SPEED':
  //         monsterEntity.totalModifierStats.movementSpeed = monsterData.monsterStats.movementSpeed || monsterEntity.totalModifierStats.movementSpeed;
  //         break;
  //       case 'ATTACK_SPEED':
  //         monsterEntity.totalModifierStats.attackSpeed = monsterData.monsterStats.attackSpeed || monsterEntity.totalModifierStats.attackSpeed;
  //         monsterEntity.baseModifierStats.attackSpeed = monsterEntity.totalModifierStats.attackSpeed;
  //         break;
  //       case 'DAMAGE':
  //         monsterEntity.totalModifierStats.basePhysicalDamage = monsterData.monsterStats.damage || monsterEntity.totalModifierStats.basePhysicalDamage;
  //         monsterEntity.baseModifierStats.basePhysicalDamage = monsterEntity.totalModifierStats.basePhysicalDamage;
  //         break;
  //     }
  //   }
  //   return monsterEntity;
  // }
  public static mapMonsterData(data: any): MonsterData {
    if (!data) {
      throw new MonsterDataInvalidError("Monster data is null or undefined.");
    }
    if (!data.id) {
      throw new MonsterDataInvalidError("Monster data is missing an id.");
    }
    let monsterData: MonsterData = new MonsterData();
    monsterData.name = data.name || monsterData.name;
    monsterData.code = data.id;
    for (let statCode in monsterData.monsterStats) {
      if (monsterData.monsterStats.hasOwnProperty(statCode)) {
        monsterData.monsterStats[statCode] = data.monsterStats[statCode];
      }
    }
    return monsterData;
  }
}

export class MonsterData {
  public code;
  public name;
  public monsterStats;
}