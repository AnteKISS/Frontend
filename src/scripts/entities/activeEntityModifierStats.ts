export default class ActiveEntityModifierStats {
  public strength: number = 0;
  public dexterity: number = 0;
  public vitality: number = 0;
  public intelligence: number = 0;

  public maxMana: number = 0;
  public maxHealth: number = 1;

  public healthRegeneration: number = 0;
  public manaRegeneration: number = 0;

  public basePhysicalDamage: number = 0;
  public baseMagicalDamage: number = 0;
  public attackAccuracy: number = 0;
  public criticalChance: number = 0;
  public criticalMultiplier: number = 1;
  public attackSpeed: number = 1;
  public sightDistance: number = 500
  public meleeRange: number = 100;
  public projectileRange: number = 500;

  public defense: number = 0;
  public physicalResistance: number = 0;
  public magicResistance: number = 0;
  public fireResistance: number = 0;
  public coldResistance: number = 0;
  public lightningResistance: number = 0;
  public poisonResistance: number = 0;
  public physicalAbsorption: number = 0;
  public magicAbsorption: number = 0;
  public fireAbsorption: number = 0;
  public coldAbsorption: number = 0;
  public lightningAbsorption: number = 0;
  public poisonAbsorption: number = 0;

  public baseMovementSpeed: number = 1;
  public movementSpeed: number = 1;
}
