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
  public attackSpeed: number = 1;
  public sightDistance: number = 500
  public meleeRange: number = 100;
  public projectileRange: number = 500;

  public defense: number = 0;

  public baseMovementSpeed: number = 1;
  public movementSpeed: number = 1;
}
