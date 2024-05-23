export class ActiveEntityStats {
  strength: number = 0;
  dexterity: number = 0;
  vitality: number = 0;
  energy: number = 0;
  mana: number = 0;

  health: number = 1;
  maxHealth: number = 1;
  healthRegeneration: number = 0;

  basePhysicalDamage: number = 0;
  baseMagicalDamage: number = 0;
  attackAccuracy: number = 0;
  criticalChance: number = 0;
  criticalMultiplier: number = 1;
  attackSpeed: number = 1;

  defense: number = 0;
  physicalResistance: number = 0;
  magicResistance: number = 0;
  fireResistance: number = 0;
  coldResistance: number = 0;
  lightningResistance: number = 0;
  poisonResistance: number = 0;
  physicalAbsorption: number = 0;
  magicAbsorption: number = 0;
  fireAbsorption: number = 0;
  coldAbsorption: number = 0;
  lightningAbsorption: number = 0;
  poisonAbsorption: number = 0;

  baseMovementSpeed: number = 1;
  movementSpeed: number = 1;

  level: number = 1;
  experience: number = 0;

  isInvincible: boolean = false;
  isStunned: boolean = false;
  isSilenced: boolean = false;
  isRooted: boolean = false;
  isFeared: boolean = false;
  isCharmed: boolean = false;
  isTaunted: boolean = false;
  isBlinded: boolean = false;

  isInvisible: boolean = false;
  isUntargetable: boolean = false;
}