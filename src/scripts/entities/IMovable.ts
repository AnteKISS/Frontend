interface IMovable {
    move(coordinate: MapCoordinateEntity): void;
    setDestination(coordinate: MapCoordinateEntity): void;
    getDestination(): MapCoordinateEntity;
    getBaseMovementSpeed(): number;
    setBaseMovementSpeed(speed: number): void;
    getMovementSpeed(): number;
    setMovementSpeed(speed: number): void;
    isMoving(): boolean;
    getSpeed(): number;
    getGravity(): number;
    setGravity(gravity: number): void;
}