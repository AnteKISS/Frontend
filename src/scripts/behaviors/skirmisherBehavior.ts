import { Behavior } from "./behavior";

export class SkirmisherBehavior extends Behavior {
  
  public selectTarget(): void {

  }

  public update(time: number, deltaTime: number): void {

  }

  public onNonRepeatingAnimationEnd(): void {
    console.log("SkirmisherBehavior: Non-repeating animation ended");
  }
}