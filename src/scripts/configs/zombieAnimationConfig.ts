import { EntityOrientation } from "../enums/entityOrientation";

const idleAnimationStartFrame = 0;
const idleAnimationEndFrame = 3;
const runAnimationStartFrame = 4;
const runAnimationEndFrame = 11;
const meleeAttackSlamAnimationStartFrame = 12;
const meleeAttackSlamAnimationEndFrame = 15;
const meleeAttackBiteAnimationStartFrame = 16;
const meleeAttackBiteAnimationEndFrame = 19;
const blockAnimationStartFrame = 20;
const blockAnimationEndFrame = 21;
const hitAndDeathAnimationStartFrame = 22;
const hitAndDeathAnimationEndFrame = 27;
const criticalDeathAnimationStartFrame = 28;
const criticalDeathAnimationEndFrame = 35;

export const zombie_0_AnimationConfig = {
  idle: {
    frames: [
      { start: idleAnimationStartFrame + EntityOrientation.LEFT,        end: idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: idleAnimationStartFrame + EntityOrientation.UP,          end: idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: idleAnimationStartFrame + EntityOrientation.RIGHT,       end: idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: idleAnimationStartFrame + EntityOrientation.DOWN,        end: idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 4
  },
  run: {
    frames: [
      { start: runAnimationStartFrame + EntityOrientation.LEFT,        end: runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: runAnimationStartFrame + EntityOrientation.UP,          end: runAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: runAnimationStartFrame + EntityOrientation.RIGHT,       end: runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: runAnimationStartFrame + EntityOrientation.DOWN,        end: runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 8
  },
  meleeAttackSlam: {
    frames: [
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.LEFT,        end: meleeAttackSlamAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.UP_LEFT,     end: meleeAttackSlamAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.UP,          end: meleeAttackSlamAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: meleeAttackSlamAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.RIGHT,       end: meleeAttackSlamAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: meleeAttackSlamAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.DOWN,        end: meleeAttackSlamAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: meleeAttackSlamAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: meleeAttackSlamAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 4
  },
  meleeAttackBite: {
    frames: [
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.LEFT,        end: meleeAttackBiteAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.UP_LEFT,     end: meleeAttackBiteAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.UP,          end: meleeAttackBiteAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: meleeAttackBiteAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.RIGHT,       end: meleeAttackBiteAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: meleeAttackBiteAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.DOWN,        end: meleeAttackBiteAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: meleeAttackBiteAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: meleeAttackBiteAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 4
  },
  block: {
    frames: [
      { start: blockAnimationStartFrame + EntityOrientation.LEFT,        end: blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: blockAnimationStartFrame + EntityOrientation.UP,          end: blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: blockAnimationStartFrame + EntityOrientation.RIGHT,       end: blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: blockAnimationStartFrame + EntityOrientation.DOWN,        end: blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 4
  },
  hitAndDeath: {
    frames: [
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.LEFT,        end: hitAndDeathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: hitAndDeathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.UP,          end: hitAndDeathAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: hitAndDeathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.RIGHT,       end: hitAndDeathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: hitAndDeathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.DOWN,        end: hitAndDeathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: hitAndDeathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: hitAndDeathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 4
  },
  criticalDeath: {
    frames: [
      { start: criticalDeathAnimationStartFrame + EntityOrientation.LEFT,        end: criticalDeathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'zombie_0', orientation: EntityOrientation.LEFT },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: criticalDeathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'zombie_0', orientation: EntityOrientation.UP_LEFT },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.UP,          end: criticalDeathAnimationEndFrame + EntityOrientation.UP,          sheet: 'zombie_0', orientation: EntityOrientation.UP },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: criticalDeathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'zombie_0', orientation: EntityOrientation.UP_RIGHT },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.RIGHT,       end: criticalDeathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'zombie_0', orientation: EntityOrientation.RIGHT },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: criticalDeathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'zombie_0', orientation: EntityOrientation.DOWN_RIGHT },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.DOWN,        end: criticalDeathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'zombie_0', orientation: EntityOrientation.DOWN },
      { start: criticalDeathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: criticalDeathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'zombie_0', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    frameRate: 4
  }
};