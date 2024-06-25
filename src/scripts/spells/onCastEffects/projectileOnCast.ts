import Spell from "../spell"
import { projectile_AnimationConfig } from "../../configs/animationConfig";

export default class ProjectileOnCast implements IOnCastEffect {
    spell: Spell;
    projectileSpeed: number;
    projectileWidth: number;
    projectileLength: number;
    sprite: string;

    constructor(spell: Spell, projectileSpeed: number, projectileWidth: number, projectileLength: number, sprite: string) {
        this.spell = spell;
        this.projectileSpeed = projectileSpeed;
        this.projectileWidth = projectileWidth;
        this.projectileLength = projectileLength;
        this.sprite = sprite;
        spell.addOnCastEffect(this);
        this.initializeAnimation();
    }

    onCast(castDirection: number) {
        const projectileSprite = this.spell.spellOwner.scene.physics.add.sprite(this.spell.spellOwner.x, this.spell.spellOwner.y, this.sprite);

        if (this.spell.spellOwner.scene.cameras.getCamera("uiCamera"))
            this.spell.spellOwner.scene.cameras.getCamera("uiCamera").ignore(projectileSprite);

        projectileSprite.anims.play(this.sprite);

        const dx = Math.cos(castDirection);
        const dy = Math.sin(castDirection);

        projectileSprite.setScale(this.projectileWidth / projectileSprite.displayWidth, this.projectileLength / projectileSprite.displayHeight);
        projectileSprite.setAngle(castDirection * 180 / Math.PI + 180);
        projectileSprite.setVelocity(this.projectileSpeed * dx, this.projectileSpeed * dy);

        this.spell.spellOwner.scene.time.delayedCall(this.spell.range / this.projectileSpeed * 1000, () => {
            projectileSprite.destroy();
        }, [], this);
    }

    initializeAnimation(): void {
        Object.keys(projectile_AnimationConfig).forEach(key => {
            const config = projectile_AnimationConfig[key];
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
