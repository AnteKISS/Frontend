import { PlayerEntity } from "../entities/playerEntity";
import { CastType } from "../enums/castTypes"

export default class Spell
{
    cooldown: number;
    range: number;
    manaCost: number;

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

    constructor(cooldown: number, range: number, manaCost: number, castType: CastType, spellName: string, spellIcon: string, spellOwner: PlayerEntity)
    {
        this.cooldown = cooldown;
        this.range = range;
        this.manaCost = manaCost;
        this.spellName = spellName;
        this.spellIcon = spellIcon;
        this.spellOwner = spellOwner;
        this.castType = castType;
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
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast(Phaser.Math.Angle.Between(this.spellOwner.x, this.spellOwner.y, x, y));
                    });
                    break;

            case CastType.GroundTarget:
                if(Phaser.Math.Distance.Between(this.spellOwner.x, this.spellOwner.y, x, y) > this.range)
                    return false;

                this.onCastEffects.forEach(onCastEffect =>  
                    {
                            onCastEffect.onCast(undefined, x, y);   
                    });
                    break;

            case CastType.PointNClick:
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast(undefined, x, y);
                    });
                    break;

            case CastType.SelfBuff:
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast();
                    });
                    break;

            default:
                break;
        }
        return true;
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


    public inInventoryUpdate(): void
    {
    }

    public equipSpell(): void
    {
    }

    public unequipSpell(): void
    {
    }
    

}
