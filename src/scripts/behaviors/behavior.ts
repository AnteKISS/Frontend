import { ActiveEntity } from "../entities/activeEntity";
import { BaseEntity } from "../entities/baseEntity";
import { ActiveEntityAnimationState, ActiveEntityBehaviorState } from "../entities/entityState";
import { MonsterEntity } from "../entities/monsterEntity";
import { PlayerEntity } from "../entities/playerEntity";
import NotImplementedError from "../errors/notImplementedError";
import { SignalHandler } from "../events/signal";
import { EntityManager } from "../managers/entityManager";
import { MathModule } from "../utilities/mathModule";
import { nameOf } from "../utilities/nameOf";
import { BehaviorFactors } from "./behaviorFactors";

export abstract class Behavior {
  public parent: ActiveEntity;
  public factors: BehaviorFactors;
  // public monsterPack: MonsterPack;

  protected delayBetweenRoam: number = 10000;
  protected delayBetweenAttack: number = 1000;
  protected attackCooldown_ms: number = 0;
  protected roamCooldown_ms: number = 0;

  public constructor(parent: ActiveEntity) {
    this.parent = parent;
    const animationCompleteHandler: SignalHandler = {
      callback: this.onNonRepeatingAnimationEnd.bind(this),
      parameters: [this.parent.currentAnimationState]
    }
    this.parent.animator.onNonRepeatingAnimationComplete.addHandler(animationCompleteHandler);
    const animationYoyoMiddleFrameHandler: SignalHandler = {
      callback: this.onYoyoAnimationMiddleFrame.bind(this),
      parameters: [this.parent.currentAnimationState]
    }
    this.parent.animator.onYoyoAnimationMiddleFrame.addHandler(animationYoyoMiddleFrameHandler);
  }

  protected isTargetInRange(distance: number): boolean {
    if (!this.isTargetValid()) {
      return false;
    }
    return MathModule.scaledDistanceBetween(
      this.parent.positionX,
      this.parent.positionY,
      this.parent.target!.positionX,
      this.parent.target!.positionY
    ) <= distance;
  }

  protected isEntityInMeleeRange(): boolean {
    if (!this.isTargetValid()) {
      return false;
    }
    return MathModule.scaledDistanceBetween(
      this.parent.positionX,
      this.parent.positionY,
      this.parent.target!.positionX,
      this.parent.target!.positionY
    ) <= this.parent.stats.meleeRange;
  }

  protected isEntityInProjectileRange(): boolean {
    if (!this.isTargetValid()) {
      return false;
    }
    return MathModule.scaledDistanceBetween(
      this.parent.positionX,
      this.parent.positionY,
      this.parent.target!.positionX,
      this.parent.target!.positionY
    ) <= this.parent.stats.projectileRange;
  }

  protected isTargetValid(): boolean {
    if (this.parent.target === null || this.parent.target === undefined) {
      return false;
    }
    return true;
  }

  protected setBehaviorState(state: ActiveEntityBehaviorState.State): void {
    const monster = this.parent as MonsterEntity;
    monster.currentBehaviorState.state = state;
  }

  protected getNearbyEnemies(): ActiveEntity[] {
    let entities: ActiveEntity[] = [];
    const sightDistance = this.parent.stats.sightDistance;
    // TODO: Use this when area has list of entities
    // for (let entity: ActiveEntity of this.parent.area.getEntities) {

    // }
    for (let entity of EntityManager.instance.getPlayers()) {
      if (entity.type != nameOf(PlayerEntity)) {
        continue;
      }
      const distanceBetweenEntities: number = MathModule.distanceBetween(
        this.parent.positionX,
        this.parent.positionY,
        entity.positionX,
        entity.positionY
      )
      if (distanceBetweenEntities > this.parent.stats.sightDistance) {
        continue;
      }
      entities.push(entity as ActiveEntity);
    }
    return entities;
  }

  public abstract selectTarget(): void;
  public abstract update(time: number, deltaTime: number): void;
  public abstract onNonRepeatingAnimationEnd(animationState: ActiveEntityAnimationState): void;
  public abstract onYoyoAnimationMiddleFrame(animationState: ActiveEntityAnimationState): void;
}
