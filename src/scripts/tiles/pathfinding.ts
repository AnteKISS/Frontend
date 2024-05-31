import 'phaser'
import TileSet from './tileset'
import Tile, { TileType } from './tile'
import Point from '../types/point'

class Node {
  public x: number;
  public y: number;
  public cost: number;
  public parent: Node;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default abstract class Pathfinding {
  static readonly Directions = [
    [0, 1],   // UP
    [1, 1],   // UP-RIGHT
    [1, 0],   // RIGHT
    [1, -1],  // DOWN-RIGHT
    [0, -1],  // DOWN
    [-1, -1], // DOWN-LEFT
    [-1, 0],  // LEFT
    [-1, 1],  // UP-LEFT
  ];

  /**
  * Finds the shortest path between two tiles in a tileset, using the A* algorithm.
  * @param tileset - TileSet in which to search the path.
  * @param x1 - Starting tile x position.
  * @param y1 - Starting tile y position.
  * @param x2 - Destination tile x position.
  * @param y2 - Destination tile y position.
  * @returns A list of tiles that make up the found path. An empty array if no path was found.
  */
  public static findPath(tileset: TileSet, x1: number, y1: number, x2: number, y2: number): Point[] {
    if (tileset.getTile(x1, y1) === undefined || tileset.getTile(x2, y2) === undefined) {
      console.error("Pathfinding::findPath - Couldn't find path, starting of destination tile is undefined.");
      return [];
    }

    const start: Node = new Node(x1, y1);
    const dest: Node = new Node(x2, y2);
    const open: Node[] = []; // Unexplored nodes
    const closed: Node[] = []; // Explored nodes

    open.push(start);

    while (open.length > 0) {
      const current: Node = open.shift()!; // Gets and removes first point in "open" nodes
      closed.push(current);

      if (current.x === x2 && current.y === y2) {
        console.log("Pathfinding::findPath - Path has been found.");
        let first = current;
        const path: Point[] = [new Point(first.x, first.y)];

        while (first.parent !== undefined) {
          first = first.parent;
          path.push(new Point(first.x, first.y));
        }

        return path;
      }

      for (const direction of Pathfinding.Directions) {
        let neighbor: Node = new Node(current.x + direction[0], current.y + direction[1]);
        const neighborTile: Tile | undefined = tileset.getTile(neighbor.x, neighbor.y);

        if (neighborTile === undefined || neighborTile.type !== TileType.Floor)
          continue; // Tile not traversable

        const cost = Phaser.Math.Distance.Between(start.x, start.y, neighbor.x, neighbor.y) + Phaser.Math.Distance.Between(dest.x, dest.y, neighbor.x, neighbor.y);
        const existing: Node | undefined = open.find((p) => neighbor.x === p.x && neighbor.y === p.y); // Reference to node of same position if already exists in "open"

        if (existing !== undefined)
          neighbor = existing;

        if (existing === undefined || neighbor.cost < existing.cost) {
          neighbor.cost = cost;
          neighbor.parent = current;
          if (existing === undefined)
            open.push(neighbor);
        }
      }
    }

    console.log("Pathfinding::findPath - No path to destination.");
    return [];
  }
}
