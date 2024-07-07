import GameObject from './gameobject'

enum WallType {
  Left,
  Right
}

export default class Wall extends GameObject {
  public readonly type: WallType;

  public constructor(x: number, y: number, type: WallType, source: string, frame: number) {
    super(x, y, source, frame);
    this.type = type;
  }
}
