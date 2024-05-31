export interface IFightable {
    attack(target: IFightable): void;
    damage(amount: number): void;
}