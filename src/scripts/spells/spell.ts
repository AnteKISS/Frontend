import { ActiveEntity } from "../entities/activeEntity";
import { BaseEntity } from "../entities/baseEntity";
import { CastType } from "../enums/castTypes"
import { ActiveEntityEvents } from "../events/activeEntityEvents";
import { GeneralEventManager } from "../managers/eventManager";

export default class Spell {
    cooldown: number;
    range: number;
    manaCost: number;
    castTime: number;

    spellName: string = 'undefined';
    spellOwner: ActiveEntity;
    spellIcon: string = 'undefined';

    onCastEffects: IOnCastEffect[] = [];
    onHitEffects: IOnHitEffect[] = [];

    castType: CastType;

    private timeSinceLastCast: number = 0;
    private remainingCooldown: number = 0;

    pointerX: number = -1;
    pointerY: number = -1;

    constructor(cooldown: number, range: number, manaCost: number, castTime: number, castType: CastType, spellName: string, spellIcon: string, spellOwner: ActiveEntity)
    {
        this.cooldown = cooldown;
        this.range = range;
        this.manaCost = manaCost;
        this.spellName = spellName;
        this.spellIcon = spellIcon;
        this.spellOwner = spellOwner;
        this.castType = castType;
        this.castTime = castTime;
    }

    public canCast(): boolean {
        const currentTime = Date.now();
        const timeDiff = currentTime - this.timeSinceLastCast;
        const cooldownOver = timeDiff >= this.cooldown * 1000;
        const enoughMana = this.spellOwner.dynamicStats.mana - this.manaCost >= 0;
        if (this.spellOwner.type === 'MonsterEntity') {
            if (cooldownOver && enoughMana) {
                if (this.spellOwner.target !== null && this.spellOwner.target !== undefined) {
                    return true;
                } else {
                    return false;
                }
            }
            // return cooldownOver && enoughMana && (this.spellOwner.target !== null || this.spellOwner.target !== undefined);
        }
        return cooldownOver && enoughMana;
    }

    public onCast(): boolean {
        if (this.canCast()) {
            if (this.castSpell()) {
                this.spellOwner.dynamicStats.mana -= this.manaCost;
                this.timeSinceLastCast = Date.now();
                this.remainingCooldown = this.cooldown * 1000;
                if (this.spellName === 'undefined') {
                    return true;
                } else if (this.spellName === 'Fire Bolt') {
                    const castEvent = new ActiveEntityEvents.FireSpellCastEvent(this.spellOwner, this);
                    GeneralEventManager.getInstance().notifyObservers(castEvent);
                } else if (this.spellName === 'Ice Shard') {
                    const castEvent = new ActiveEntityEvents.IceSpellCastEvent(this.spellOwner, this);
                    GeneralEventManager.getInstance().notifyObservers(castEvent);
                } else if (this.spellName === 'Quake') {
                    const castEvent = new ActiveEntityEvents.EarthSpellCastEvent(this.spellOwner, this);
                    GeneralEventManager.getInstance().notifyObservers(castEvent);
                }
                return true;
            }
        }
        return false;
    }

    private castSpell(): boolean
    {
        let x, y, centerX, centerY: number;
        if (this.spellOwner.type === 'PlayerEntity') {
            x = this.getPointerX();
            y = this.getPointerY();
            centerX = this.spellOwner.scene.cameras.main.width / 2;
            centerY = this.spellOwner.scene.cameras.main.height / 2;
        } else {
            x = this.spellOwner.target!.positionX;
            y = this.spellOwner.target!.positionY;
            centerX = this.spellOwner.positionX;
            centerY = this.spellOwner.positionY;
        }

        switch (this.castType) {
            case CastType.SkillShot:
                setTimeout(() => {
                    this.onCastEffects.forEach(onCastEffect => {
                        onCastEffect.onCast(Phaser.Math.Angle.Between(centerX, centerY, x, y)); // TODO : fix bad code
                    });
                }, this.castTime * 1000);
                break;

            case CastType.GroundTarget:
                if (Phaser.Math.Distance.Between(this.spellOwner.positionX, this.spellOwner.positionY, x + this.spellOwner.positionX - centerX, y + this.spellOwner.positionY - centerY) > this.range) // TODO : fix
                    return false;
                setTimeout(() => {
                    this.onCastEffects.forEach(onCastEffect => {
                        onCastEffect.onCast(undefined, x + this.spellOwner.positionX - centerX, y + this.spellOwner.positionY - centerY); // TODO : fix code mettre calcul dans constante stp
                    });
                }, this.castTime * 1000);
                break;

            case CastType.PointNClick:
                setTimeout(() => {
                    this.onCastEffects.forEach(onCastEffect => {
                        onCastEffect.onCast(undefined, x, y);
                    });
                }, this.castTime * 1000);
                break;

            case CastType.SelfBuff:
                setTimeout(() => {
                    this.onCastEffects.forEach(onCastEffect => {
                        onCastEffect.onCast();
                    });
                }, this.castTime * 1000);
                break;

            default:
                break;
        }
        return true;
    }

    spellHit = (hitEntity: BaseEntity): void => {
        this.onHitEffects.forEach(onHitEffect => {
            onHitEffect.onHit(hitEntity);
        });
    }

    public updateRemainingCooldown(): number {
        const currentTime = Date.now();
        const timeDiff = currentTime - this.timeSinceLastCast;
        this.remainingCooldown = this.cooldown * 1000 - timeDiff;
        if (this.remainingCooldown < 0) {
            this.remainingCooldown = 0;
        }
        return this.remainingCooldown;
    }

    private getPointerX(): number {
        return this.spellOwner.scene.input.activePointer.x;
    }

    private getPointerY(): number {
        return this.spellOwner.scene.input.activePointer.y;
    }

    public addOnHitEffect(onHitEffect: IOnHitEffect) {
        this.onHitEffects.push(onHitEffect);
    }

    public addOnCastEffect(onCastEffect: IOnCastEffect) {
        this.onCastEffects.push(onCastEffect);
    }
}
