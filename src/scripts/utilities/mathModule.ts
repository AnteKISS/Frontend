import Point from "../types/point";
import Vector from "../types/vector";
import * as math from "mathjs";

export class MathModule {

  public static isValueInThreshold(currentValue: number, expectedValue: number, threshhold: number): boolean {
    const distance = Math.abs(currentValue - expectedValue);
    return distance <= threshhold;
  }

  public static normalizeRadAngleToDegrees(angle: number): number {
    let normalizedAngle = angle % (2 * Math.PI);

    if (normalizedAngle < 0) {
      normalizedAngle += 2 * Math.PI;
    }

    // We need to flip on the horizontal axis the angle
    return (360 - Phaser.Math.RadToDeg(normalizedAngle)) % 360;
  }

  public static scaledDistanceBetween(x1: number, y1: number, x2: number, y2: number): number {
    // We need to multiply the y distance by 2 because the y axis is scaled by 0.5
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow((y2 - y1) * 2, 2));
  }

  public static distanceBetween(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  public static getRandomPointInCircle(parentX: number, parentY: number, radius: number): Point {
    let point: Point = { x: parentX, y: parentY };
    const randomAngle_rad = Math.random() * 2 * Math.PI;
    const randomRadius = Math.random() * radius;

    point.x += randomRadius * Math.cos(randomAngle_rad);
    point.y += randomRadius * Math.sin(randomAngle_rad);
    return point;
  }

  public static getVectorLinearComposition(v: Vector, v1: Vector, v2: Vector): [Vector, Vector] {
    const m = math.matrix([[v1.x, v2.x], [v1.y, v2.y]]);
    const c = math.lusolve(m, [v.x, v.y]).toArray();
    const [c1, c2] = [c[0][0], c[1][0]];
    return [new Vector(v1.x * c1, v1.y * c1), new Vector(v2.x * c2, v2.y * c2)];
  }

  public static getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
}
