export default abstract class GameObject {
  public readonly tileX: number;
  public readonly tileY: number;
  public readonly source: string; // Either a single image, or a bitmap if frame is set (other value than -1)
  public readonly frame: number | undefined; // Has to be undefined and not null, otherwise won't work with Phaser Gameobjects

  public constructor(tileX: number, tileY: number, source: string, frame?: number) {
    this.tileX = tileX;
    this.tileY = tileY;
    this.source = source;
    this.frame = frame;
  }

  public abstract getArgs(): Array<any>;
  public abstract getCollectionId(): string;
}
