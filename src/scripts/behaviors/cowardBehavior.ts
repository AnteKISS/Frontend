import { ActiveEntityAnimationState } from "../entities/entityState";
import { Behavior } from "./behavior";

export class CowardBehavior extends Behavior {

  public selectTarget(): void {

  }

  public update(time: number, deltaTime: number): void {

  }

  public onNonRepeatingAnimationEnd(animationState: ActiveEntityAnimationState): void {
    console.log("CowardBehavior: Non-repeating animation ended");
  }

  public onYoyoAnimationMiddleFrame(animationState: ActiveEntityAnimationState): void {
    
  }
}