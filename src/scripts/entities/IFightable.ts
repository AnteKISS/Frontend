import { ActiveEntity } from "./activeEntity";

export interface IFightable {
    attack(target: IFightable): void;
    damage(amount: number, damageSource: ActiveEntity): void;
    isAttacking(): boolean;
    isCasting(): boolean;
    isDead(): boolean;
}