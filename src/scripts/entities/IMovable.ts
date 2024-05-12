interface IMovable {
    teleport(coordinate: MapCoordinateEntity): void;
    setDestination(coordinate: MapCoordinateEntity): void;
    getDestination(): MapCoordinateEntity;
    getMovementSpeed(): number;
    setMovementSpeed(speed: number): void;
    getSpeed(): number;
    getGravity(): number;
    setGravity(gravity: number): void;
}