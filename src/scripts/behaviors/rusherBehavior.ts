import { ActiveEntityBehaviorState } from "../entities/entityState";
import { Behavior } from "./behavior";

export class RusherBehavior extends Behavior {
  
  public update(deltaTime: number): void {
    switch (this.parent.currentState.state) {
      case ActiveEntityBehaviorState.State.IDLE:
        break;
      case ActiveEntityBehaviorState.State.CHARGING:
        break;        
      case ActiveEntityBehaviorState.State.RUN:
        break;
      case ActiveEntityBehaviorState.State.ROAMING:
        break;
      case ActiveEntityBehaviorState.State.MELEE_ATTACKING:
        break;
      case ActiveEntityBehaviorState.State.RANGED_ATTACKING:
        break;
      case ActiveEntityBehaviorState.State.CASTING_SPELL:
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