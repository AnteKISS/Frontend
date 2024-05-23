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
}