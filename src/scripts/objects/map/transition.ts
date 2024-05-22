import Area from "./area";

export default class Transition {
  targetArea: Area;
  targetX: number;
  targetY: number;

  constructor(targetArea: Area, targetX: number, targetY: number) {
    this.targetArea = targetArea;
    this.targetX = targetX;
    this.targetY = targetY;
  }
}
