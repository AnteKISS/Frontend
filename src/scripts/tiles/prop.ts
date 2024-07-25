import GameObject from "./gameobject";
import Tile from "./tile";

export default class Prop extends GameObject {
  public clippable: boolean;

  public constructor(x: number, y: number, source: string, clippable: boolean) {
    super(x, y, source);
    this.clippable = clippable
  }

  public override getArgs(): any[] {
    return ["Prop", this.tileX, this.tileY, this.source, this.clippable];
  }

  public override getCollectionId(): string {
    return "Prop";
  }

  public getCollectionDepth(): number {
    return Tile.HALF_HEIGHT;
  }
}
