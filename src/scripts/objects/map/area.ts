import 'phaser'
import TileSet from './tileset'
import Transition from './transition'

export default class Area {
  name : string;
  tileSet : TileSet;
  transitions : Transition[];

  constructor(name: string) {
    this.name = name;
    this.tileSet = new TileSet(3);
  }
}
