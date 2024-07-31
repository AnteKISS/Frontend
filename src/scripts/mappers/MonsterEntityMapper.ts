import { MonsterEntity } from "../entities/monsterEntity";
import { EntityManager } from "../managers/entityManager";

export class MonsterEntityMapper {
  public static mapMonsterEntity(monsterData: any): MonsterEntity {
    let monsterEntity: MonsterEntity = new MonsterEntity(EntityManager.instance.getPlayers()[0].scene, monsterData.id);
    return monsterEntity;
  }
}