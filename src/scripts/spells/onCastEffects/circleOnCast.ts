import Spell from "../spell"
import { circleSpell_AnimationConfig } from "../../configs/animationConfig";

export default class CircleOnCast implements IOnCastEffect {
    spell: Spell;
    circleRadius: number;
    sprite: string;
    duration: number;

    constructor(spell: Spell, circleRadius: number, duration: number, sprite: string) {
        this.spell = spell;
        this.circleRadius = circleRadius;
        this.sprite = sprite;
        this.duration = duration;
        spell.addOnCastEffect(this);
        this.initializeAnimation();
    }

    onCast(undefined, x: number, y: number) {
        const circleSprite = this.spell.spellOwner.scene.physics.add.sprite(x, y, this.sprite);

        if (this.spell.spellOwner.scene.cameras.getCamera("uiCamera"))
            this.spell.spellOwner.scene.cameras.getCamera("uiCamera").ignore(circleSprite);

        circleSprite.anims.play(this.sprite);

        circleSprite.setScale(this.circleRadius * 2 / circleSprite.displayWidth, this.circleRadius / circleSprite.displayHeight);
        circleSprite.body.setCircle(this.circleRadius);
        circleSprite.body.setOffset(-this.circleRadius, -this.circleRadius);
        circleSprite.setDepth(-1);

        this.spell.spellOwner.scene.time.delayedCall(this.duration * 1000, () => {
            circleSprite.destroy();
        })
    }

    initializeAnimation(): void {
        Object.keys(circleSpell_AnimationConfig).forEach(key => {
            const config = circleSpell_AnimationConfig[key];
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
}      
