import { ActiveEntity } from "../entities/activeEntity";
import { ActiveEntityAnimationState, ActiveEntityBehaviorState } from "../entities/entityState";
import { MonsterEntity } from "../entities/monsterEntity";
import { MathModule } from "../utilities/mathModule";
import { Behavior } from "./behavior";
import { BehaviorFactors } from "./behaviorFactors";

class RusherBehaviorFactors implements BehaviorFactors {
  retreatFactor: number = 0.00;
  roamFactor: number = 0.90;
  meleeAttackFactor: number = 1.00;
  rangeAttackFactor: number = 0.00;
  castFactor: number = 0.00;
}

export class RusherBehavior extends Behavior {
  
  public constructor(parent: ActiveEntity) {
    super(parent);
    this.factors = new RusherBehaviorFactors();
  }

  public selectTarget(): void {
    const entities: ActiveEntity[] = this.getNearbyEnemies();
    if (entities.length <= 0) {
      return;
    }
    let target: ActiveEntity = entities.at(0)!;
    this.parent.target = target;
    this.setBehaviorState(ActiveEntityBehaviorState.State.CHARGING);
  }

  public update(deltaTime: number): void {
    const factor: number = Math.random();
    const monster = this.parent as MonsterEntity;
    
    switch (monster.currentBehaviorState.state) {
      case ActiveEntityBehaviorState.State.IDLE:
        if (this.factors.roamFactor >= factor) {
          this.setBehaviorState(ActiveEntityBehaviorState.State.ROAMING);
        }
        if (!this.isTargetValid()) {
          this.selectTarget();
        }
        break;
      case ActiveEntityBehaviorState.State.CHARGING:
        if (!this.isTargetValid()) {
          // this.parent.target = null;
          this.setBehaviorState(ActiveEntityBehaviorState.State.IDLE);
        }
        if (!this.isTargetInRange(this.parent.stats.sightDistance)) {
          this.parent.target = null;
          this.setBehaviorState(ActiveEntityBehaviorState.State.IDLE);
        }
        if (this.isTargetValid()) {
          this.parent.setDestination(this.parent.target!.positionX, this.parent.target!.positionY);
        }
        break;        
      case ActiveEntityBehaviorState.State.RUN:
        // Might not be necessary
        break;
      case ActiveEntityBehaviorState.State.ROAMING:
        // console.log(this.parent.name + " is roaming");
        if (factor >= this.factors.roamFactor) {
          this.setBehaviorState(ActiveEntityBehaviorState.State.IDLE);
        }
        const roamPoint = MathModule.getRandomPointInCircle(this.parent.positionX, this.parent.positionY, 100);
        this.parent.setDestination(roamPoint.x, roamPoint.y);
        break;
      case ActiveEntityBehaviorState.State.MELEE_ATTACKING:
        if (!this.isTargetValid()) {
          // this.parent.target = null;
          this.setBehaviorState(ActiveEntityBehaviorState.State.IDLE);
        }
        if (factor >= 0.5) {
          this.parent.animator.setAnimatorState(ActiveEntityAnimationState.State.MELEEATTACK);
        } else {
          this.parent.animator.setAnimatorState(ActiveEntityAnimationState.State.MELEEATTACK_2);
        }
        console.log(this.parent.name + " is attacking in melee");
        break;
      case ActiveEntityBehaviorState.State.RANGED_ATTACKING:
        if (!this.isTargetValid()) {
          // this.parent.target = null;
          this.setBehaviorState(ActiveEntityBehaviorState.State.IDLE);
        }
        if (factor >= 0.5) {
          this.parent.animator.setAnimatorState(ActiveEntityAnimationState.State.RANGEDATTACK);
        } else {
          this.parent.animator.setAnimatorState(ActiveEntityAnimationState.State.RANGEDATTACK_2);
        }
        console.log(this.parent.name + " is attacking from a range");
        break;
      case ActiveEntityBehaviorState.State.CASTING_SPELL:
        if (!this.isTargetValid()) {
          // this.parent.target = null;
          this.setBehaviorState(ActiveEntityBehaviorState.State.IDLE);
        }
        this.parent.animator.setAnimatorState(ActiveEntityAnimationState.State.CASTSPELL);
        console.log(this.parent.name + " is attacking with a spell");
        break;
      case ActiveEntityBehaviorState.State.BLOCKING:
        break;
      case ActiveEntityBehaviorState.State.HIT:
        break;
      case ActiveEntityBehaviorState.State.DEATH:
        break;
    }
  }
}