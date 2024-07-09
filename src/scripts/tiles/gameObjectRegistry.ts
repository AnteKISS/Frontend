import Tile from "./tile";
import Wall from "./wall";

export const GameObjectRegistry: { [key: string]: any } = {
  Tile: Tile,
  Wall: Wall,
};
