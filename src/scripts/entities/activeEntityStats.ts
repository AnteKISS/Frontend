export class ActiveEntityStats {
  public strength: number = 0;
  public dexterity: number = 0;
  public vitality: number = 0;
  public energy: number = 0;
  public mana: number = 0;
  
  public health: number = 1;
  public maxHealth: number = 1;
  public healthRegeneration: number = 0;

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

  public level: number = 1;
  public experience: number = 0;

  public isInvincible: boolean = false;
  public isStunned: boolean = false;
  public isSilenced: boolean = false;
  public isRooted: boolean = false;
  public isFeared: boolean = false;
  public isCharmed: boolean = false;
  public isTaunted: boolean = false;
  public isBlinded: boolean = false;

  public isInvisible: boolean = false;
  public isUntargetable: boolean = false;
}