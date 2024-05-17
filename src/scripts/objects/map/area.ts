import 'phaser'
import TileSet from './tileset'
import Transition from './transition'

export default class Area {
  tileSet : TileSet;
  transitions : Transition[];

  constructor() {
    this.tileSet = new TileSet(3);
  }
}
