import Spell from "../spell"

export default class ProjectileOnCast implements IOnCastEffect
{
    spell: Spell;
    projectileSpeed: number;
    projectileWidth: number;
    projectileLength: number;

    constructor(spell: Spell, projectileSpeed: number, projectileWidth: number, projectileLength: number)
    {
        this.spell = spell;
        this.projectileSpeed = projectileSpeed;
        this.projectileWidth = projectileWidth;
        this.projectileLength = projectileLength;
        spell.addOnCastEffect(this);
    }

    onCast(castDirection: number)
    {
        const projectileSprite = this.spell.spellOwner.scene.physics.add.sprite(0, 0,'game-logo');

        const dx = Math.cos(castDirection);
        const dy = Math.sin(castDirection);

        projectileSprite.setScale(this.projectileWidth/projectileSprite.displayWidth, this.projectileLength/projectileSprite.displayHeight);
        projectileSprite.setAngle(castDirection * 180 / Math.PI);
        projectileSprite.setVelocity(this.projectileSpeed * dx, this.projectileSpeed * dy);

        projectileSprite.setPosition(this.spell.spellOwner.x, this.spell.spellOwner.y);

        this.spell.spellOwner.scene.time.delayedCall(this.spell.range / this.projectileSpeed * 1000, () => {
            projectileSprite.destroy();
        }, [], this);
    }
}