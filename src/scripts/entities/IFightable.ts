interface IFightable {
    attack(target: IFightable): void;
    getBasePhysicalDamage(): number;
    getBaseMagicalDamage(): number;
    getHealth(): number;
    setHealth(health: number): void;
    getMaxHealth(): number;
    setMaxHealth(maxHealth: number): void;
    getAccuracy(): number;
    setAccuracy(accuracy: number): void;
    getDefense(): number;
    setDefense(defense: number): void;
}