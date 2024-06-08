export class ActiveEntityAnimationState {

  state: ActiveEntityAnimationState.State;

  constructor() {
    this.state = ActiveEntityAnimationState.State.IDLE;
  }

  public static getNonRepeatingAnimationState(): string[] {
    return ['MELEEATTACK', 'MELEEATTACK_2', 'RANGEDATTACK', 'RANGEDATTACK_2', 'CASTSPELL', 'BLOCK', 'CHEER', 'HIT', 'DEATH', 'CRITICAL_DEATH'];
  }

  public static getRepeatingAnimationState(): string[] {
    return ['IDLE', 'RUN'];
  }
}

export namespace ActiveEntityAnimationState {
  export enum State {
    IDLE = 'IDLE',
    RUN = 'RUN',
    MELEEATTACK = 'MELEEATTACK',
    MELEEATTACK_2 = 'MELEEATTACK_2',
    RANGEDATTACK = 'RANGEDATTACK',
    RANGEDATTACK_2 = 'RANGEDATTACK_2',
    CASTSPELL = 'CASTSPELL',
    BLOCK = 'BLOCK',
    CHEER = 'CHEER',
    HIT = 'HIT',
    DEATH = 'DEATH',
    CRITICALDEATH = 'CRITICAL_DEATH'
  }
}

export class ActiveEntityBehaviorState {
  state: ActiveEntityBehaviorState.State;

  constructor() {
    this.state = ActiveEntityBehaviorState.State.IDLE;
  }
}

export namespace ActiveEntityBehaviorState {
  export enum State {
    IDLE = 'IDLE',
    ROAMING = 'ROAMING',
    CHARGING = 'RUNNING',
    MELEE_ATTACKING = 'MELEE_ATTACKING',
    RANGED_ATTACKING = 'RANGED_ATTACKING',
    CASTING_SPELL = 'CASTING_SPELL',
    BLOCKING = 'BLOCKING',
    HIT = 'HIT',
    DEATH = 'DEATH',
    RUN = "RUN"
  }
}