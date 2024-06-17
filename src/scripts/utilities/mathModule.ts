import Point from "../types/point";

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
      let point: Point = { x: 0, y: 0 };
      const randomAngle_rad = Math.random() * 2 * Math.PI;
      const randomRadius = Math.random() * radius;
  
      point.x = randomRadius * Math.cos(randomAngle_rad);
      point.y = randomRadius * Math.sin(randomAngle_rad);
      return point;
  }
}