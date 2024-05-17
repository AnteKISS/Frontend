import Area from "./area";

export default class Transition {
  targetMap : Area;
  targetX : number;
  targetY : number;

  constructor() {
    this.targetX = 0;
    this.targetY = 0;
  }
}
