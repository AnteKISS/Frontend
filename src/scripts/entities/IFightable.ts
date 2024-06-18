export interface IFightable {
    attack(target: IFightable): void;
    damage(amount: number): void;
    getBasePhysicalDamage(): number;
    setBasePhysicalDamage(damage: number): void;
    getBaseMagicalDamage(): number;
    setBaseMagicalDamage(damage: number): void;
    getHealth(): number;
    setHealth(health: number): void;
    getMaxHealth(): number;
    setMaxHealth(maxHealth: number): void;
    getAccuracy(): number;
    setAccuracy(accuracy: number): void;
    getDefense(): number;
    setDefense(defense: number): void;
}