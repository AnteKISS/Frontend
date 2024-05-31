interface IMovable {
    move(): void;
    setDestination(x?: number, y?: number): void;
    getDestinationX(): number;
    getDestinationY(): number;
    getBaseMovementSpeed(): number;
    setBaseMovementSpeed(speed: number): void;
    getMovementSpeed(): number;
    setMovementSpeed(speed: number): void;
    isMoving(): boolean;
    getSpeed(): number;
    getGravity(): number;
    setGravity(gravity: number): void;
}