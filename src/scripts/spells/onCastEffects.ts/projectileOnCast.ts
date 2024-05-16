import Spell from "../spell"

class ProjectileOnCast implements IOnCastEffect
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

    onCast(castDirection: any)
    {
        const projectile = this.spell.spellOwner.scene.add.graphics();
        projectile.fillStyle(0x000000, 1);
        projectile.fillRect(this.spell.spellOwner.x, this.spell.spellOwner.y, this.projectileWidth, this.projectileLength);

        const dx = Math.cos(castDirection);
        const dy = Math.sin(castDirection);

        this.spell.scene.physics.moveTo(projectile, this.spell.spellOwner.x + dx * this.spell.range, this.spell.spellOwner.y + dy * this.spell.range, this.projectileSpeed);

        this.spell.scene.time.delayedCall(this.spell.range / this.projectileSpeed * 1000, () => {
            projectile.destroy();
        }, [], this);
    }
}