import { ActiveEntityAnimationState } from "../entities/entityState";
import { Behavior } from "./behavior";

export class RoamerBehavior extends Behavior {

  public selectTarget(): void {

  }

  public update(time: number, deltaTime: number): void {

  }

  public onNonRepeatingAnimationEnd(animationState: ActiveEntityAnimationState): void {
    console.log("RoamerBehavior: Non-repeating animation ended");
  }

  public onYoyoAnimationMiddleFrame(animationState: ActiveEntityAnimationState): void {
    
  }
}