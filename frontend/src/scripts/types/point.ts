export default class Point {
  public x: number;
  public y: number;

  constructor(x: number = 0, y: number = x) {
    this.x = x;
    this.y = y;
  }
}
