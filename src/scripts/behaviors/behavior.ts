import { ActiveEntity } from "../entities/activeEntity";
import { BaseEntity } from "../entities/baseEntity";
import NotImplementedError from "../errors/notImplementedError";
import { MathModule } from "../utilities/mathModule";

export abstract class Behavior {

  public parent: ActiveEntity;
  // public monsterPack: MonsterPack;

  constructor(parent: ActiveEntity) {
    this.parent = parent;
  }

  private isEntityInRange(entity: BaseEntity, distance: number): boolean {
    return MathModule.distanceBetween(
      this.parent.positionX, 
      this.parent.positionY, 
      entity.positionX, 
      entity.positionY
    ) <= distance;
  }

  private isEntityInMeleeRange(entity: BaseEntity): boolean {
    return MathModule.distanceBetween(
      this.parent.positionX, 
      this.parent.positionY, 
      entity.positionX, 
      entity.positionY
    ) <= this.parent.stats.meleeRange;
  }

  private isEntityInProjectileRange(entity: BaseEntity): boolean {
    return MathModule.distanceBetween(
      this.parent.positionX, 
      this.parent.positionY, 
      entity.positionX, 
      entity.positionY
    ) <= this.parent.stats.projectileRange;
  }

  public abstract update(deltaTime: number): void;
}