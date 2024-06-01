import TileSet from './tileset'
import Tile, { TileType } from './tile'
import Point from '../types/point'

class Node {
  public x: number;
  public y: number;
  public gScore: number; // Distance from starting node
  public fScore: number; // gScore + heuristic
  public parent: Node | null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.gScore = 0;
    this.fScore = 0;
    this.parent = null
  }
}

export default abstract class Pathfinding {
  static readonly Directions = [
    // Xoffset, Yoffset, cost
    [0, 1],   // UP
    [1, 1],   // UP-RIGHT
    [1, 0],   // RIGHT
    [1, -1],  // DOWN-RIGHT
    [0, -1],  // DOWN
    [-1, -1], // DOWN-LEFT
    [-1, 0],  // LEFT
    [-1, 1],  // UP-LEFT
  ];
  static readonly DIAGONAL_COST = 140;
  static readonly STRAIGHT_COST = 100;

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
      console.error("Pathfinding::findPath - Couldn't find path, starting or destination tile is undefined.");
      return [];
    }

    const start: Node = new Node(x1, y1);
    const end: Node = new Node(x2, y2);
    const open: Node[] = []; // Unexplored nodes
    const closed: Set<string> = new Set(); // Explored nodes

    open.push(start);

    while (open.length > 0) {
      const current: Node = open.shift()!; // Gets and removes first point in "open" nodes
      closed.add(`${current.x},${current.y}`);

      if (current.x === x2 && current.y === y2) {
        // console.log(open);
        return this.getPathFromNodeLinkedList(current);
      }

      for (const direction of Pathfinding.Directions) {
        let neighbor: Node = new Node(current.x + direction[0], current.y + direction[1]);
        const neighborTile: Tile | undefined = tileset.getTile(neighbor.x, neighbor.y);

        if (neighborTile === undefined || neighborTile.type !== TileType.Floor || closed.has(`${neighbor.x},${neighbor.y}`))
          continue; // Tile not traversable or already traversed

        neighbor.gScore = current.gScore + Pathfinding.getDistance(current, neighbor);
        neighbor.fScore = neighbor.gScore + Pathfinding.getDistance(current, end);
        neighbor.parent = current;

        const existingInOpenIndex: number = open.findIndex((p) => neighbor.x === p.x && neighbor.y === p.y); // Reference to node of same position if already exists in "open"

        if (existingInOpenIndex === -1)
          Pathfinding.priorityQueueInsert(open, neighbor);
        else {
          const existingNode = open[existingInOpenIndex];
          if (neighbor.gScore < existingNode.gScore) {
            open.splice(existingInOpenIndex, 1);
            Pathfinding.priorityQueueInsert(open, neighbor);
          }
        }
      }
    }

    console.log("Pathfinding::findPath - No path to destination.");
    return [];
  }

  private static getPathFromNodeLinkedList(head: Node): Point[] {
    const path: Point[] = [new Point(head.x, head.y)];

    while (head.parent !== null) {
      head = head.parent;
      path.push(new Point(head.x, head.y));
    }

    return path;
  }

  private static priorityQueueInsert(pq: Node[], node: Node): void {
    pq.push(node);
    pq.sort((n1, n2) => n1.gScore - n2.gScore);
    // let left = 0;
    // let right = pq.length;
    // while (left < right) {
    //   const middle = Math.floor((left + right) / 2);
    //   if (pq[middle].fScore < node.fScore) {
    //     right = middle;
    //   } else {
    //     left = middle + 1;
    //   }
    // }
    // pq.splice(left, 0, node);
  };

  private static getDistance(n1: Node, n2: Node): number {
    const DIST_X = Math.abs(n1.x - n2.x);
    const DIST_Y = Math.abs(n1.y - n2.y);

    if (DIST_X > DIST_Y)
      return Pathfinding.DIAGONAL_COST * DIST_Y + Pathfinding.STRAIGHT_COST * (DIST_X - DIST_Y);
    return Pathfinding.DIAGONAL_COST * DIST_Y + Pathfinding.STRAIGHT_COST * (DIST_Y - DIST_X);
  }
}
