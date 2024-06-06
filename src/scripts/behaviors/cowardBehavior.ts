import { Behavior } from "./behavior";

export class CowardBehavior extends Behavior {

  public performBehavior(): void {
    throw new Error("Method not implemented.");
  }
}