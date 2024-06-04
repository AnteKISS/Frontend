import { ActiveEntity } from "../entities/activeEntity";
import { BaseEntity } from "../entities/baseEntity";
import { PlayerEntity } from "../entities/playerEntity";
import { CastType } from "../enums/castTypes"

export default class Spell
{
    cooldown: number;
    range: number;
    manaCost: number;
    castTime: number;

    spellName: string = 'undefined';
    spellOwner: PlayerEntity;
    spellIcon: string = 'undefined';

    onCastEffects: IOnCastEffect[] = [];
    onHitEffects: IOnHitEffect[] = [];

    castType: CastType;

    private timeSinceLastCast: number = 0;
    private remainingCooldown: number = 0;

    pointerX: number = -1;
    pointerY: number = -1;

    constructor(cooldown: number, range: number, manaCost: number, castTime: number, castType: CastType, spellName: string, spellIcon: string, spellOwner: PlayerEntity)
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

    public canCast(): boolean
    {
        const currentTime = Date.now();
        const timeDiff = currentTime - this.timeSinceLastCast;
        return timeDiff >= this.cooldown*1000 && this.spellOwner.stats.mana - this.manaCost >= 0;
    }

    public onCast(): boolean
    {
        if(this.canCast())
            {
                if(this.castSpell())
                    {
                        this.spellOwner.stats.mana -= this.manaCost;
                        this.timeSinceLastCast = Date.now();
                        this.remainingCooldown = this.cooldown*1000;
                        return true;
                    }
            }
        return false;
    }

    private castSpell(): boolean
    {
        const x = this.getPointerX();
        const y = this.getPointerY();

        switch (this.castType) {
            case CastType.SkillShot:
                setTimeout(() => {
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast(Phaser.Math.Angle.Between(this.spellOwner.scene.cameras.main.width / 2, this.spellOwner.scene.cameras.main.height / 2, x, y)); // TODO : fix bad code
                    });
                }, this.castTime*1000);
                    break;

            case CastType.GroundTarget:
                if(Phaser.Math.Distance.Between(this.spellOwner.positionX, this.spellOwner.positionY, x + this.spellOwner.positionX - this.spellOwner.scene.cameras.main.width / 2, y + this.spellOwner.positionY - this.spellOwner.scene.cameras.main.height / 2) > this.range) // TODO : fix
                    return false;
                setTimeout(() => {
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                            onCastEffect.onCast(undefined, x + this.spellOwner.positionX - this.spellOwner.scene.cameras.main.width / 2, y + this.spellOwner.positionY - this.spellOwner.scene.cameras.main.height / 2); // TODO : fix code mettre calcul dans constante stp
                    });
                }, this.castTime*1000);
                    break;

            case CastType.PointNClick:
                setTimeout(() => {
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast(undefined, x, y);
                    });
                }, this.castTime*1000);
                    break;

            case CastType.SelfBuff:
                setTimeout(() => {
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast();
                    });
                }, this.castTime*1000);
                    break;

            default:
                break;
        }
        return true;
    }

    spellHit = (hitEntity: BaseEntity): void =>
    {
        this.onHitEffects.forEach(onHitEffect =>
        {
            onHitEffect.onHit(hitEntity);
        });
    }

    public updateRemainingCooldown(): number
    {
        const currentTime = Date.now();
        const timeDiff = currentTime - this.timeSinceLastCast;
        this.remainingCooldown = this.cooldown*1000 - timeDiff; 
        if(this.remainingCooldown < 0)
        {
                this.remainingCooldown = 0;
        }
        return this.remainingCooldown;
    }

    private getPointerX(): number
    {
        return this.spellOwner.scene.input.activePointer.x;
    }

    private getPointerY(): number
    {
        return this.spellOwner.scene.input.activePointer.y;
    }

    public addOnHitEffect(onHitEffect: IOnHitEffect)
    {
        this.onHitEffects.push(onHitEffect);
    }

    public addOnCastEffect(onCastEffect: IOnCastEffect)
    {
        this.onCastEffects.push(onCastEffect);
    }
}
