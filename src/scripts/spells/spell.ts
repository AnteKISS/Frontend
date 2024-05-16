export default class Spell
{
    cooldown: number;
    range: number;
    manaCost: number;

    spellName: string = 'undefined';
    spellOwner: Entity;
    spellIcon: string;

    onCastEffects: IOnCastEffect[];
    onHitEffects: IOnHitEffect[];

    castType: CastType;

    scene: Phaser.Scene;

    private timeSinceLastCast: number = 0;
    private remainingCooldown: number = 0;

    constructor(cooldown: number, range: number, manaCost: number, castType: CastType, spellName: string, spellIcon: string, spellOwner: Entity)
    {
        this.cooldown = cooldown;
        this.range = range;
        this.manaCost = manaCost;
        this.spellName = spellName;
        this.spellIcon = spellIcon;
        this.spellOwner = spellOwner;
        this.castType = castType;
        this.scene = spellOwner.scene;
    }

    
    public onCast(): boolean
    {
        if(this.remainingCooldown == 0)
            {
                if(this.castSpell())
                    {
                        spellOwner.mana -= this.manaCost;
                        this.timeSinceLastCast = Date.now();
                        return true;
                    }
            }
        return false;
    }

    private castSpell(): boolean
    {
        switch (this.castType) {
            case CastType.SkillShot:
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        //onCastEffect.onCast(castDirection);
                    });
                    break;
            case CastType.GroundTarget:
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast(undefined, this.getPointerX(), this.getPointerY());
                    });
                    break;
            case CastType.PointNClick:
                this.onCastEffects.forEach(onCastEffect =>  
                    {
                        onCastEffect.onCast(undefined, this.getPointerX(), this.getPointerY());
                    });
                    break;
            case CastType.SelfAura:
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
        this.scene.input.setDefaultCursor('pointer');

        this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
        return pointer.x
        });

        return -1;
    }

    private getPointerY(): number
    {
        this.scene.input.setDefaultCursor('pointer');

        this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
        return pointer.y;
        });

        return -1;
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
