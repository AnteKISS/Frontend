import ActiveEntityModifierStats from "./activeEntityModifierStats";

export default class StatModule {
  public static affectModifierStatChange(target: ActiveEntityModifierStats, source: ActiveEntityModifierStats): void {
    target.strength += source.strength;
    target.dexterity += source.dexterity;
    target.vitality += source.vitality;
    target.intelligence += source.intelligence;
    target.maxMana += source.maxMana;
    target.maxHealth += source.maxHealth;
    target.healthRegeneration += source.healthRegeneration;
    target.manaRegeneration += source.manaRegeneration;
    target.basePhysicalDamage += source.basePhysicalDamage;
    target.baseMagicalDamage += source.baseMagicalDamage;
    target.attackAccuracy += source.attackAccuracy;
    target.criticalChance += source.criticalChance;
    target.criticalMultiplier += source.criticalMultiplier;
    target.attackSpeed += source.attackSpeed;
    target.sightDistance += source.sightDistance;
    target.meleeRange += source.meleeRange;
    target.projectileRange += source.projectileRange;
    target.defense += source.defense;
    target.physicalResistance += source.physicalResistance;
    target.magicResistance += source.magicResistance;
    target.fireResistance += source.fireResistance;
    target.coldResistance += source.coldResistance;
    target.lightningResistance += source.lightningResistance;
    target.poisonResistance += source.poisonResistance;
    target.physicalAbsorption += source.physicalAbsorption;
    target.magicAbsorption += source.magicAbsorption;
    target.fireAbsorption += source.fireAbsorption;
    target.coldAbsorption += source.coldAbsorption;
    target.lightningAbsorption += source.lightningAbsorption;
    target.poisonAbsorption += source.poisonAbsorption;
    target.baseMovementSpeed += source.baseMovementSpeed;
    target.movementSpeed += source.movementSpeed;
  }
}
