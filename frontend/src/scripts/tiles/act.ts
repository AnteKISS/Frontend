import Area from './area'
import Transition from './transition'

export default class Act {
  public name: string;
  public areas: Area[];
  public areaIndex: number;

  private transitions: Map<string, Transition>;

  public constructor(name: string) {
    this.name = name;
    this.areas = new Array<Area>;
    this.transitions = new Map<string, Transition>;
    this.areaIndex = 0;

    this.addArea(new Area("Default"));
  }

  public currentArea(): Area {
    return this.areas[this.areaIndex];
  }

  public addArea(area: Area): void {
    this.areas.push(area);
    this.areaIndex = this.areas.length - 1;
  }

  public getTransition(name: string): Transition | undefined {
    return this.transitions.get(name);
  }

  public getTransitions(): IterableIterator<Transition> {
    return this.transitions.values();
  }

  public getTransitionNames(): IterableIterator<string> {
    return this.transitions.keys();
  }

  public getTransitionAmount(): number {
    return this.transitions.size;
  }

  public setTransition(name: string, transition: Transition): void {
    this.transitions.set(name, transition);
  }

  public deleteTransition(name: string): void {
    this.transitions.delete(name);
  }

  public transition(area: Area): boolean {
    const newAreaIndex = this.areas.indexOf(area);

    // If area not in act
    if (newAreaIndex === -1)
      return false;

    this.areaIndex = newAreaIndex;
    return true;
  }

  public deleteCurrentArea(): void {
    this.areas.splice(this.areaIndex, 1);

    if (this.areas.length === 0)
      this.addArea(new Area("New Area"));

    if (this.areaIndex >= this.areas.length)
      this.areaIndex = this.areas.length - 1;
  }

  public previousArea(): void {
    this.areaIndex--;
    if (this.areaIndex < 0) this.areaIndex += this.areas.length;
  }

  public nextArea(): void {
    this.areaIndex = (this.areaIndex + 1) % this.areas.length;
  }
}
