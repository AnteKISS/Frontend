import { Behavior } from "./behavior";

export class CowardBehavior extends Behavior {

  public selectTarget(): void {

  }

  public update(time: number, deltaTime: number): void {

  }

  public onNonRepeatingAnimationEnd(): void {
    console.log("CowardBehavior: Non-repeating animation ended");
  }
}