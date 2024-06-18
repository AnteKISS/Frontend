import TileSet from './tileset'

export default class Area {
  public name: string;
  public tileSet: TileSet;

  public constructor(name: string) {
    this.name = name;
    this.tileSet = new TileSet(3);
  }
}
