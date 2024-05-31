import Area from "./area";

export default class Transition {
  name: string;
  targetArea: Area;
  targetX: number;
  targetY: number;

  constructor(name: string, targetArea: Area, targetX: number, targetY: number) {
    this.name = name;
    this.targetArea = targetArea;
    this.targetX = targetX;
    this.targetY = targetY;
  }
}
