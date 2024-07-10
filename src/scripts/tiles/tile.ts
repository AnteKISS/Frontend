import Transition from './transition'
import GameObject from './gameobject';

export default class Tile extends GameObject {
  public static readonly WIDTH: number = 200;
  public static readonly HEIGHT: number = this.WIDTH / 2;
  public static readonly HALF_WIDTH: number = this.WIDTH / 2;
  public static readonly HALF_HEIGHT: number = this.HEIGHT / 2;

  public transition: Transition | undefined;

  public constructor(x: number, y: number, source: string, frame: number, transition: Transition | undefined = undefined) {
    super(x, y, source, frame);
    this.transition = transition;
  }

  public get x(): number {
    return this.tileX;
  }

  public get y(): number {
    return this.tileY;
  }

  public override getArgs(): any[] {
    return ["Tile", this.x, this.y, this.source, this.frame, this.transition?.name];
  }

  public override getCollectionId(): string {
    return "Tile";
  }

  public override getCollectionDepth(): number {
    return -Tile.HALF_HEIGHT;
  }
}
