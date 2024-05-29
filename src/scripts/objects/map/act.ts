import Area from './area'
import Transition from './transition'

export default class Act {
  name: string;
  areas: Area[];
  transitions: Map<string, Transition>;
  areaIndex: number;

  constructor(name: string) {
    this.name = name;
    this.areas = new Array<Area>;
    this.transitions = new Map<string, Transition>;
    this.addArea(new Area("Default"));
    this.areaIndex = 0;
  }

  public currentArea() {
    return this.areas[this.areaIndex];
  }

  public addArea(area: Area) {
    this.areas.push(area);
    this.areaIndex = this.areas.length - 1;
  }

  public deleteCurrentArea() {
    this.areas.splice(this.areaIndex, 1);

    if (this.areas.length === 0)
      this.addArea(new Area("New Area"));

    if (this.areaIndex >= this.areas.length)
      this.areaIndex = this.areas.length - 1;
  }

  public previousArea() {
    this.areaIndex--;
    if (this.areaIndex < 0) this.areaIndex += this.areas.length;
  }

  public nextArea() {
    this.areaIndex = (this.areaIndex + 1) % this.areas.length;
  }
}
