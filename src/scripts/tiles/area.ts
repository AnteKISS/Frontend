import TileSet from './tileset'

export default class Area {
  name: string;
  tileSet: TileSet;

  constructor(name: string) {
    this.name = name;
    this.tileSet = new TileSet(3);
  }
}
