import Spell from "../spell"
import { aura_AnimationConfig } from "../../configs/animationConfig";

export default class SpeedBuffOnCast implements IOnCastEffect {
    spell: Spell;
    buffAmount: number;
    duration: number;
    sprite: Phaser.GameObjects.Sprite;

    constructor(spell: Spell, buffAmount: number, duration: number) {
        this.spell = spell;
        this.buffAmount = buffAmount;
        this.duration = duration;
        spell.addOnCastEffect(this);
        this.initializeAnimation();
    }

    onCast() {
        this.sprite = this.spell.spellOwner.scene.add.sprite(this.spell.spellOwner.x, this.spell.spellOwner.y - this.spell.spellOwner.getSprite().displayHeight / 4, 'aura');

        if(this?.spell?.spellOwner?.scene?.cameras?.getCamera("uiCamera"))
        {
            this.spell.spellOwner.scene.cameras.getCamera("uiCamera")!.ignore(this.sprite);
        }

        this.sprite.anims.play('aura');

        this.sprite.setTintFill(0x1EB833);

        this.spell.spellOwner.scene.time.addEvent({
            delay: 1000/30,
            callback: this.updatePos,
            callbackScope: this,
            loop: true
        });
        this.spell.spellOwner.totalModifierStats.movementSpeed += this.buffAmount;

        this.spell.spellOwner.scene.time.delayedCall(this.duration * 1000, () => {
            this.spell.spellOwner.totalModifierStats.movementSpeed -= this.buffAmount;
            this.sprite.destroy();
        }, [], this);
    }

    initializeAnimation(): void {
        Object.keys(aura_AnimationConfig).forEach(key => {
            const config = aura_AnimationConfig[key];
            const scene = this.spell.spellOwner.scene;
    
            if (!scene.anims.exists(key)) {
                scene.anims.create({
                    key: key,
                    frames: scene.anims.generateFrameNumbers(config.frames.sheet, { start: config.frames.start, end: config.frames.end }),
                    frameRate: config.frameRate,
                    repeat: config.repeat
                });
            }
        });
    }

    public updatePos() : void
    {
        this.sprite.setPosition(this.spell.spellOwner.x, this.spell.spellOwner.y - this.spell.spellOwner.getSprite().displayHeight / 4);
    }
}
