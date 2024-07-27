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
    target.attackSpeed += source.attackSpeed;
    target.sightDistance += source.sightDistance;
    target.meleeRange += source.meleeRange;
    target.projectileRange += source.projectileRange;
    target.defense += source.defense;
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
    stats.attackSpeed = 0;
    stats.sightDistance = 0;
    stats.meleeRange = 0;
    stats.projectileRange = 0;
    stats.defense = 0;
    stats.baseMovementSpeed = 0;
    stats.movementSpeed = 0;
  }

  public static generateMultiLineText(stats: ActiveEntityModifierStats): Array<[string, string]> {
    const text = new Array<[string, string]>;

    if (stats.strength != 0) text.push(this.generateStatText("Strength", stats.strength));
    if (stats.dexterity != 0) text.push(this.generateStatText("Dexterity", stats.dexterity));
    if (stats.vitality != 0) text.push(this.generateStatText("Vitality", stats.vitality));
    if (stats.intelligence != 0) text.push(this.generateStatText("Intelligence", stats.intelligence));
    if (stats.maxMana != 0) text.push(this.generateStatText("Max Mana", stats.maxMana));
    if (stats.maxHealth != 0) text.push(this.generateStatText("Max Health", stats.maxHealth));
    if (stats.healthRegeneration != 0) text.push(this.generateStatText("Health Regeneration", stats.healthRegeneration));
    if (stats.manaRegeneration != 0) text.push(this.generateStatText("Mana Regeneration", stats.manaRegeneration));
    if (stats.basePhysicalDamage != 0) text.push(this.generateStatText("Base Physical Damage", stats.basePhysicalDamage));
    if (stats.baseMagicalDamage != 0) text.push(this.generateStatText("Base Magical Damage", stats.baseMagicalDamage));
    if (stats.attackSpeed != 0) text.push(this.generateStatText("Attack Speed", stats.attackSpeed));
    if (stats.sightDistance != 0) text.push(this.generateStatText("Sight Distance", stats.sightDistance));
    if (stats.meleeRange != 0) text.push(this.generateStatText("Melee Range", stats.meleeRange));
    if (stats.projectileRange != 0) text.push(this.generateStatText("Projectile Range", stats.projectileRange));
    if (stats.defense != 0) text.push(this.generateStatText("Defense", stats.defense));
    if (stats.baseMovementSpeed != 0) text.push(this.generateStatText("Base Movement Speed", stats.baseMovementSpeed));
    if (stats.movementSpeed != 0) text.push(this.generateStatText("Movement Speed", stats.movementSpeed));

    return text;
  }

  private static generateStatText(statName: string, value: number): [string, string] {
    const positiveStatColor = "#FFFF00";
    const negativeStatColor = "#FF3636";

    const color = value < 0 ? negativeStatColor : positiveStatColor;
    const symbol = value < 0 ? "" : "+";
    const text = statName + ": " + symbol + value.toString();

    return [text, color];
  }

  public static getNullModifierStats(): ActiveEntityModifierStats {
    const stats = new ActiveEntityModifierStats();
    this.resetModifierStats(stats);
    return stats;
  }
}
