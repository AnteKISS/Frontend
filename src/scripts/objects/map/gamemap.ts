import Area from './area'

export default class GameMap {
  areas : Area[]
  areaIndex : number;

  constructor () {
    this.areas = new Array<Area>;
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

  public previousArea() {
    this.areaIndex--;
    if (this.areaIndex < 0) this.areaIndex += this.areas.length;
  }

  public nextArea () {
    this.areaIndex = (this.areaIndex + 1) % this.areas.length;
  }
}
