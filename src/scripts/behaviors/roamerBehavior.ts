import { Behavior } from "./behavior";

export class RoamerBehavior extends Behavior {

  public selectTarget(): void {

  }

  public update(time: number, deltaTime: number): void {

  }

  public onNonRepeatingAnimationEnd(): void {
    console.log("RoamerBehavior: Non-repeating animation ended");
  }
}