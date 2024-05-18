import 'phaser'
import TileSet from './tileset'
import Transition from './transition'

export default class Area {
  name : String
  tileSet : TileSet;
  transitions : Transition[];

  constructor(name: String) {
    this.name = name;
    this.tileSet = new TileSet(3);
  }
}
