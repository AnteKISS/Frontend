import Spawner from "./spawner";
import Tile from "./tile";
import Wall from "./wall";

export const GameObjectRegistry: { [key: string]: any } = {
  Spawner: Spawner,
  Tile: Tile,
  Wall: Wall,
};
