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

  public static resetModifierStats(stats: ActiveEntityModifierStats): void {
    stats.strength = 0;
    stats.dexterity = 0;
    stats.vitality = 0;
    stats.intelligence = 0;
    stats.maxMana = 0;
    stats.maxHealth = 0;
    stats.healthRegeneration = 0;
    stats.manaRegeneration = 0;
    stats.basePhysicalDamage = 0;
    stats.baseMagicalDamage = 0;
    stats.attackAccuracy = 0;
    stats.criticalChance = 0;
    stats.criticalMultiplier = 0;
    stats.attackSpeed = 0;
    stats.sightDistance = 0;
    stats.meleeRange = 0;
    stats.projectileRange = 0;
    stats.defense = 0;
    stats.physicalResistance = 0;
    stats.magicResistance = 0;
    stats.fireResistance = 0;
    stats.coldResistance = 0;
    stats.lightningResistance = 0;
    stats.poisonResistance = 0;
    stats.physicalAbsorption = 0;
    stats.magicAbsorption = 0;
    stats.fireAbsorption = 0;
    stats.coldAbsorption = 0;
    stats.lightningAbsorption = 0;
    stats.poisonAbsorption = 0;
    stats.baseMovementSpeed = 0;
    stats.movementSpeed = 0;
  }

  public static getNullModifierStats(): ActiveEntityModifierStats {
    const stats = new ActiveEntityModifierStats();
    this.resetModifierStats(stats);
    return stats;
  }
}
