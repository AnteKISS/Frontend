import GameObject from './gameobject'

export enum WallType {
  Left,
  Right
}

export default class Wall extends GameObject {
  public readonly type: WallType;

  public constructor(x: number, y: number, source: string, frame: number, type: WallType) {
    super(x, y, source, frame);
    this.type = type;
  }

  public override getArgs(): any[] {
    return ["Wall", this.tileX, this.tileY, this.type, this.source, this.frame];
  }
}
