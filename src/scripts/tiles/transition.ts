import Area from "./area";

export default class Transition {
  public name: string;
  public targetArea: Area;
  public targetX: number;
  public targetY: number;

  public constructor(name: string, targetArea: Area, targetX: number, targetY: number) {
    this.name = name;
    this.targetArea = targetArea;
    this.targetX = targetX;
    this.targetY = targetY;
  }
}
