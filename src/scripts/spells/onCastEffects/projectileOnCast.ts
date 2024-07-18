import Spell from "../spell";
import { projectile_AnimationConfig } from "../../configs/animationConfig";
import { ProjectileCollider } from "../../physics/projectileCollider";
import { SpellColliderManager } from "../../managers/spellColliderManager";
import { Projectile } from "../../physics/projectile";

export default class ProjectileOnCast implements IOnCastEffect {
    spell: Spell;
    projectileSpeed: number;
    projectileWidth: number;
    projectileLength: number;
    sprite: string;
    piercing: number;

    constructor(spell: Spell, projectileSpeed: number, piercing: number, projectileWidth: number, projectileLength: number, sprite: string)
    {
        this.spell = spell;
        this.projectileSpeed = projectileSpeed;
        this.projectileWidth = projectileWidth;
        this.projectileLength = projectileLength;
        this.sprite = sprite;
        this.piercing = piercing;
        spell.addOnCastEffect(this);
        this.initializeAnimation();
    }

    onCast(castDirection: number)
    {
        const projectileSprite = new Projectile(this.spell.spellOwner.scene, this.spell.spellOwner.x, this.spell.spellOwner.y - 30, this.sprite);
        if(this?.spell?.spellOwner?.scene?.cameras?.getCamera("uiCamera"))
        {
            this.spell.spellOwner.scene.cameras.getCamera("uiCamera")!.ignore(projectileSprite);
        }
        projectileSprite.anims.play(this.sprite);

        const dx = Math.cos(castDirection);
        const dy = Math.sin(castDirection);

        const castDirection_deg = castDirection * 180 / Math.PI

        projectileSprite.setScale(this.projectileWidth/projectileSprite.displayWidth, this.projectileLength/projectileSprite.displayHeight);
        projectileSprite.setAngle(castDirection_deg + 180);
        projectileSprite.setVelocity(this.projectileSpeed * dx, this.projectileSpeed * dy);

        const collider = new ProjectileCollider(this.spell.spellOwner, projectileSprite, this.spell.spellHit, this.increasePierceCount);
        SpellColliderManager.getInstance.addCollider(collider);

        this.spell.spellOwner.scene.time.delayedCall(this.spell.range / this.projectileSpeed * 1000, () => {
            projectileSprite.destroy();
            SpellColliderManager.getInstance.removeCollider(collider);
            collider.removeDebugGraphics();
        }, [], this);
    }

    increasePierceCount = (object: Phaser.Physics.Arcade.Sprite, collider: ProjectileCollider): void =>
    {
        const projectileSprite = object as Projectile;
        if(projectileSprite.piercingCount >= this.piercing)
        {
            projectileSprite.destroy();
            SpellColliderManager.getInstance.removeCollider(collider);
            collider.removeDebugGraphics();
        }
        projectileSprite.piercingCount ++;
    }

    initializeAnimation(): void {
        Object.keys(projectile_AnimationConfig).forEach(key => {
            const config = projectile_AnimationConfig[key];
            const scene = this.spell.spellOwner.scene;

            if (!scene.anims.exists(key)) 
            {
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
