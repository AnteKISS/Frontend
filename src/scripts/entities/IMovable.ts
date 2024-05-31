interface IMovable {
    move(): void;
    setDestination(x?: number, y?: number): void;
    isMoving(): boolean;
    getSpeed(): number;
    getGravity(): number;
    setGravity(gravity: number): void;
}