import { ActiveEntityAnimationState } from "../entities/entityState";
import { EntityOrientation } from "../enums/entityOrientation";

// ---------- player ----------
const player_idleAnimationStartFrame = 0;
const player_idleAnimationEndFrame = 3;
const player_runAnimationStartFrame = 4;
const player_runAnimationEndFrame = 11;
const player_meleeAttackAnimationStartFrame = 12;
const player_meleeAttackAnimationEndFrame = 15;
const player_blockAnimationStartFrame = 16;
const player_blockAnimationEndFrame = 17;
const player_deathAnimationStartFrame = 18;
const player_deathAnimationEndFrame = 23;
const player_cheerAnimationStartFrame = 24;
const player_cheerAnimationEndFrame = 27;
const player_bowAttackAnimationStartFrame = 28;
const player_bowAttackAnimationEndFrame = 31;

const player_leftOrientationSpriteOffset = 0;
const player_upLeftOrientationSpriteOffset = 32;
const player_upOrientationSpriteOffset = 64;
const player_upRightOrientationSpriteOffset = 96;
const player_rightOrientationSpriteOffset = 128;
const player_downRightOrientationSpriteOffset = 160;
const player_downOrientationSpriteOffset = 192;
const player_downLeftOrientationSpriteOffset = 224;
// ------------------------------

// ---------- zombie ----------
const zombie_idleAnimationStartFrame = 0;
const zombie_idleAnimationEndFrame = 3;
const zombie_runAnimationStartFrame = 4;
const zombie_runAnimationEndFrame = 11;
const zombie_meleeAttackSlamAnimationStartFrame = 12;
const zombie_meleeAttackSlamAnimationEndFrame = 15;
const zombie_meleeAttackBiteAnimationStartFrame = 16;
const zombie_meleeAttackBiteAnimationEndFrame = 19;
const zombie_blockAnimationStartFrame = 20;
const zombie_blockAnimationEndFrame = 21;
const zombie_hitAndDeathAnimationStartFrame = 22;
const zombie_hitAndDeathAnimationEndFrame = 27;
const zombie_criticalDeathAnimationStartFrame = 28;
const zombie_criticalDeathAnimationEndFrame = 35;

const zombie_leftOrientationSpriteOffset = 0;
const zombie_upLeftOrientationSpriteOffset = 36;
const zombie_upOrientationSpriteOffset = 72;
const zombie_upRightOrientationSpriteOffset = 108;
const zombie_rightOrientationSpriteOffset = 144;
const zombie_downRightOrientationSpriteOffset = 180;
const zombie_downOrientationSpriteOffset = 216;
const zombie_downLeftOrientationSpriteOffset = 252;
// --------------------------------

// ---------- minotaur ----------
const minotaur_idleAnimationStartFrame = 0;
const minotaur_idleAnimationEndFrame = 3;
const minotaur_runAnimationStartFrame = 4;
const minotaur_runAnimationEndFrame = 11;
const minotaur_meleeAttackAnimationStartFrame = 12;
const minotaur_meleeAttackAnimationEndFrame = 15;
const minotaur_blockAnimationStartFrame = 16;
const minotaur_blockAnimationEndFrame = 17;
const minotaur_hitAndDeathAnimationStartFrame = 18;
const minotaur_hitAndDeathAnimationEndFrame = 23;

const minotaur_leftOrientationSpriteOffset = 0;
const minotaur_upLeftOrientationSpriteOffset = 24;
const minotaur_upOrientationSpriteOffset = 48;
const minotaur_upRightOrientationSpriteOffset = 72;
const minotaur_rightOrientationSpriteOffset = 96;
const minotaur_downRightOrientationSpriteOffset = 120;
const minotaur_downOrientationSpriteOffset = 144;
const minotaur_downLeftOrientationSpriteOffset = 168;
// --------------------------------

// ---------- skeleton ----------
const skeleton_idleAnimationStartFrame = 0;
const skeleton_idleAnimationEndFrame = 3;
const skeleton_runAnimationStartFrame = 4;
const skeleton_runAnimationEndFrame = 11;
const skeleton_meleeAttackAnimationStartFrame = 12;
const skeleton_meleeAttackAnimationEndFrame = 15;
const skeleton_castAnimationStartFrame = 16;
const skeleton_castAnimationEndFrame = 19;
const skeleton_blockAnimationStartFrame = 20;
const skeleton_blockAnimationEndFrame = 21;
const skeleton_hitAndDeathAnimationStartFrame = 22;
const skeleton_hitAndDeathAnimationEndFrame = 27;

const skeleton_leftOrientationSpriteOffset = 0;
const skeleton_upLeftOrientationSpriteOffset = 28;
const skeleton_upOrientationSpriteOffset = 56;
const skeleton_upRightOrientationSpriteOffset = 84;
const skeleton_rightOrientationSpriteOffset = 112;
const skeleton_downRightOrientationSpriteOffset = 140;
const skeleton_downOrientationSpriteOffset = 168;
const skeleton_downLeftOrientationSpriteOffset = 196;
// ------------------------------

// ---------- goblin ----------
const goblin_idleAnimationStartFrame = 0;
const goblin_idleAnimationEndFrame = 3;
const goblin_jumpAnimationStartFrame = 4;
const goblin_jumpAnimationEndFrame = 11;
const goblin_runAnimationStartFrame = 12;
const goblin_runAnimationEndFrame = 19;
const goblin_meleeAttackAnimationStartFrame = 20;
const goblin_meleeAttackAnimationEndFrame = 23;
const goblin_throwAnimationStartFrame = 24;
const goblin_throwAnimationEndFrame = 27;
const goblin_blockAnimationStartFrame = 28;
const goblin_blockAnimationEndFrame = 31;
const goblin_hitAnimationStartFrame = 32;
const goblin_hitAnimationEndFrame = 33;
const goblin_deathAnimationStartFrame = 34;
const goblin_deathAnimationEndFrame = 39;
const goblin_criticalDeathAnimationStartFrame = 40;
const goblin_criticalDeathAnimationEndFrame = 47;

const goblin_leftOrientationSpriteOffset = 0;
const goblin_upLeftOrientationSpriteOffset = 48;
const goblin_upOrientationSpriteOffset = 96;
const goblin_upRightOrientationSpriteOffset = 144;
const goblin_rightOrientationSpriteOffset = 192;
const goblin_downRightOrientationSpriteOffset = 240;
const goblin_downOrientationSpriteOffset = 288;
const goblin_downLeftOrientationSpriteOffset = 336;
// --------------------------------------

// ---------- goblin_lumberjack_black ----------
const goblin_lumberjack_black_idleAnimationStartFrame = 0;
const goblin_lumberjack_black_idleAnimationEndFrame = 3;
const goblin_lumberjack_black_runAnimationStartFrame = 4;
const goblin_lumberjack_black_runAnimationEndFrame = 11;
const goblin_lumberjack_black_carryAnimationStartFrame = 12;
const goblin_lumberjack_black_carryAnimationEndFrame = 19;
const goblin_lumberjack_black_meleeAttackAnimationStartFrame = 20;
const goblin_lumberjack_black_meleeAttackAnimationEndFrame = 25;
const goblin_lumberjack_black_pickupPutdownAnimationStartFrame = 26;
const goblin_lumberjack_black_pickupPutdownAnimationEndFrame = 29;
const goblin_lumberjack_black_blockAnimationStartFrame = 30;
const goblin_lumberjack_black_blockAnimationEndFrame = 31;
const goblin_lumberjack_black_hitAndDeathAnimationStartFrame = 32;
const goblin_lumberjack_black_hitAndDeathAnimationEndFrame = 37;

const goblin_lumberjack_black_leftOrientationSpriteOffset = 228;
const goblin_lumberjack_black_upLeftOrientationSpriteOffset = 266;
const goblin_lumberjack_black_upOrientationSpriteOffset = 0;
const goblin_lumberjack_black_upRightOrientationSpriteOffset = 38;
const goblin_lumberjack_black_rightOrientationSpriteOffset = 76;
const goblin_lumberjack_black_downRightOrientationSpriteOffset = 114;
const goblin_lumberjack_black_downOrientationSpriteOffset = 152;
const goblin_lumberjack_black_downLeftOrientationSpriteOffset = 190;
// --------------------------------------

// ---------- wyvern_composite ----------
const wyvern_composite_idleAnimationStartFrame = 0;
const wyvern_composite_idleAnimationEndFrame = 7;
const wyvern_composite_runAnimationStartFrame = 8;
const wyvern_composite_runAnimationEndFrame = 15;
const wyvern_composite_meleeAttackAnimationStartFrame = 16;
const wyvern_composite_meleeAttackAnimationEndFrame = 23;
const wyvern_composite_castAnimationStartFrame = 24;
const wyvern_composite_castAnimationEndFrame = 31;
const wyvern_composite_meleeAttack2AnimationStartFrame = 32;
const wyvern_composite_meleeAttack2AnimationEndFrame = 39;
const wyvern_composite_hitAnimationStartFrame = 40;
const wyvern_composite_hitAnimationEndFrame = 47;
const wyvern_composite_deathAnimationStartFrame = 48;
const wyvern_composite_deathAnimationEndFrame = 55;

const wyvern_composite_leftOrientationSpriteOffset = 0;
const wyvern_composite_upLeftOrientationSpriteOffset = 56;
const wyvern_composite_upOrientationSpriteOffset = 112;
const wyvern_composite_upRightOrientationSpriteOffset = 168;
const wyvern_composite_rightOrientationSpriteOffset = 224;
const wyvern_composite_downRightOrientationSpriteOffset = 280;
const wyvern_composite_downOrientationSpriteOffset = 336;
const wyvern_composite_downLeftOrientationSpriteOffset = 392;
// ------------------------------------------

// ---------- wandering_trader_128 ----------
const wandering_trader_128_idleAnimationStartFrame = 0;
const wandering_trader_128_idleAnimationEndFrame = 5;
// --------------------------------

export const player_AnimationConfig = {
  idle: {
    frames: [
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.LEFT,        end: player_idleAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_idleAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP,          end: player_idleAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_idleAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_idleAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.RIGHT,       end: player_idleAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_idleAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN,        end: player_idleAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_idleAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_idleAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 4
  },
  run: {
    frames: [
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.LEFT,        end: player_runAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_runAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_runAnimationStartFrame + EntityOrientation.UP,          end: player_runAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_runAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_runAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.RIGHT,       end: player_runAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_runAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN,        end: player_runAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_runAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_runAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 12
  },
  meleeAttack: {
    frames: [
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT },     
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP,          end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_meleeAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_meleeAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_meleeAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_meleeAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 12
  },
  block: {
    frames: [
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT },  
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.LEFT,        end: player_blockAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_blockAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP,          end: player_blockAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_blockAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_blockAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.RIGHT,       end: player_blockAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_blockAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN,        end: player_blockAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_blockAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_blockAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.BLOCK,
    frameRate: 4
  },
  death: {
    frames: [
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT }, 
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.LEFT,        end: player_deathAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_deathAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP,          end: player_deathAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_deathAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_deathAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.RIGHT,       end: player_deathAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_deathAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN,        end: player_deathAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_deathAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_deathAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  },
  cheer: {
    frames: [
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT }, 
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.LEFT,        end: player_cheerAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_cheerAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP,          end: player_cheerAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_cheerAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_cheerAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.RIGHT,       end: player_cheerAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN,        end: player_cheerAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_cheerAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_cheerAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.CHEER,
    frameRate: 4
  },
  bowAttack: {
    frames: [
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'steel_armor', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'steel_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'steel_armor', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'steel_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'steel_armor', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'steel_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'steel_armor', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'steel_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'clothes', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'clothes', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'clothes', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'clothes', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'clothes', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'clothes', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'clothes', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'clothes', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'leather_armor', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'leather_armor', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'leather_armor', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'leather_armor', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'leather_armor', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'leather_armor', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'leather_armor', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'leather_armor', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head1', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head1', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head1', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head1', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head1', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head1', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head1', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head1', orientation: EntityOrientation.DOWN_LEFT }, 
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head2', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head2', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head2', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head2', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head2', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head2', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head2', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head2', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'male_head3', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'male_head3', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'male_head3', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'male_head3', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'male_head3', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'male_head3', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'male_head3', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'male_head3', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'buckler', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'buckler', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'buckler', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'buckler', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'buckler', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'buckler', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'buckler', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'buckler', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shield', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shield', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'shield', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shield', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shield', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shield', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shield', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shield', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatstaff', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatstaff', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatstaff', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatstaff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatstaff', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatstaff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatstaff', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatstaff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'rod', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'rod', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'rod', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'rod', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'rod', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'rod', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'rod', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'rod', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'staff', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'staff', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'staff', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'staff', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'staff', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'staff', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'staff', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'staff', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'wand', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'wand', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'wand', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'wand', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'wand', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'wand', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'wand', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'wand', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'dagger', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'dagger', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'dagger', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'dagger', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'dagger', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'dagger', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'dagger', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'dagger', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortsword', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortsword', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortsword', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortsword', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longsword', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'longsword', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longsword', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longsword', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatsword', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatsword', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatsword', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatsword', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatsword', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatsword', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatsword', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatsword', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'slingshot', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'slingshot', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'slingshot', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'slingshot', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'slingshot', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'slingshot', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'slingshot', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'slingshot', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'shortbow', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'shortbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'shortbow', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'shortbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'shortbow', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'shortbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'shortbow', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'shortbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'longbow', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'longbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'longbow', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'longbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'longbow', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'longbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'longbow', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'longbow', orientation: EntityOrientation.DOWN_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.LEFT,        end: player_bowAttackAnimationEndFrame + EntityOrientation.LEFT,        sheet: 'greatbow', orientation: EntityOrientation.LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_LEFT,     end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_LEFT,     sheet: 'greatbow', orientation: EntityOrientation.UP_LEFT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP,          end: player_bowAttackAnimationEndFrame + EntityOrientation.UP,          sheet: 'greatbow', orientation: EntityOrientation.UP },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.UP_RIGHT,    end: player_bowAttackAnimationEndFrame + EntityOrientation.UP_RIGHT,    sheet: 'greatbow', orientation: EntityOrientation.UP_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.RIGHT,       end: player_bowAttackAnimationEndFrame + EntityOrientation.RIGHT,       sheet: 'greatbow', orientation: EntityOrientation.RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_RIGHT,  end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_RIGHT,  sheet: 'greatbow', orientation: EntityOrientation.DOWN_RIGHT },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN,        end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN,        sheet: 'greatbow', orientation: EntityOrientation.DOWN },
      { start: player_bowAttackAnimationStartFrame + EntityOrientation.DOWN_LEFT,   end: player_bowAttackAnimationEndFrame + EntityOrientation.DOWN_LEFT,   sheet: 'greatbow', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.RANGEDATTACK,
    frameRate: 4
  }
};

export const zombie_AnimationConfig = {
  idle: {
    frames: [
      { start: zombie_idleAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_idleAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_idleAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_idleAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_idleAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_idleAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_idleAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_idleAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_idleAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_idleAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_idleAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_idleAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_idleAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_idleAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_idleAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_idleAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 4
  },
  run: {
    frames: [
      { start: zombie_runAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_runAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_runAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_runAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_runAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_runAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_runAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_runAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_runAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_runAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_runAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_runAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_runAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_runAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_runAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_runAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 8
  },
  meleeAttack: {
    frames: [
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_meleeAttackSlamAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_meleeAttackSlamAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_meleeAttackSlamAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_meleeAttackSlamAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_meleeAttackSlamAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_meleeAttackSlamAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_meleeAttackSlamAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_meleeAttackSlamAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_meleeAttackSlamAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 8
  },
  meleeAttack_2: {
    frames: [
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_meleeAttackBiteAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_meleeAttackBiteAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_meleeAttackBiteAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_meleeAttackBiteAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_meleeAttackBiteAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_meleeAttackBiteAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_meleeAttackBiteAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_meleeAttackBiteAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_meleeAttackBiteAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK_2,
    frameRate: 8
  },
  block: {
    frames: [
      { start: zombie_blockAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_blockAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_blockAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_blockAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_blockAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_blockAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_blockAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_blockAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_blockAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_blockAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_blockAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_blockAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_blockAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_blockAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_blockAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_blockAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.BLOCK,
    frameRate: 4
  },
  death: {
    frames: [
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_hitAndDeathAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_hitAndDeathAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_hitAndDeathAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_hitAndDeathAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_hitAndDeathAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_hitAndDeathAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_hitAndDeathAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_hitAndDeathAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_hitAndDeathAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  },
  death_2: {
    frames: [
      { start: zombie_criticalDeathAnimationStartFrame + zombie_leftOrientationSpriteOffset,      end: zombie_criticalDeathAnimationEndFrame + zombie_leftOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.LEFT },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_upLeftOrientationSpriteOffset,    end: zombie_criticalDeathAnimationEndFrame + zombie_upLeftOrientationSpriteOffset,    sheet: 'zombie', orientation: EntityOrientation.UP_LEFT },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_upOrientationSpriteOffset,        end: zombie_criticalDeathAnimationEndFrame + zombie_upOrientationSpriteOffset,        sheet: 'zombie', orientation: EntityOrientation.UP },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_upRightOrientationSpriteOffset,   end: zombie_criticalDeathAnimationEndFrame + zombie_upRightOrientationSpriteOffset,   sheet: 'zombie', orientation: EntityOrientation.UP_RIGHT },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_rightOrientationSpriteOffset,     end: zombie_criticalDeathAnimationEndFrame + zombie_rightOrientationSpriteOffset,     sheet: 'zombie', orientation: EntityOrientation.RIGHT },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_downRightOrientationSpriteOffset, end: zombie_criticalDeathAnimationEndFrame + zombie_downRightOrientationSpriteOffset, sheet: 'zombie', orientation: EntityOrientation.DOWN_RIGHT },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_downOrientationSpriteOffset,      end: zombie_criticalDeathAnimationEndFrame + zombie_downOrientationSpriteOffset,      sheet: 'zombie', orientation: EntityOrientation.DOWN },
      { start: zombie_criticalDeathAnimationStartFrame + zombie_downLeftOrientationSpriteOffset,  end: zombie_criticalDeathAnimationEndFrame + zombie_downLeftOrientationSpriteOffset,  sheet: 'zombie', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.CRITICALDEATH,
    frameRate: 8
  }
};

export const minotaur_AnimationConfig = {
  idle: {
    frames: [
      { start: minotaur_idleAnimationStartFrame + minotaur_leftOrientationSpriteOffset,      end: minotaur_idleAnimationEndFrame + minotaur_leftOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.LEFT },
      { start: minotaur_idleAnimationStartFrame + minotaur_upLeftOrientationSpriteOffset,    end: minotaur_idleAnimationEndFrame + minotaur_upLeftOrientationSpriteOffset,    sheet: 'minotaur', orientation: EntityOrientation.UP_LEFT },
      { start: minotaur_idleAnimationStartFrame + minotaur_upOrientationSpriteOffset,        end: minotaur_idleAnimationEndFrame + minotaur_upOrientationSpriteOffset,        sheet: 'minotaur', orientation: EntityOrientation.UP },
      { start: minotaur_idleAnimationStartFrame + minotaur_upRightOrientationSpriteOffset,   end: minotaur_idleAnimationEndFrame + minotaur_upRightOrientationSpriteOffset,   sheet: 'minotaur', orientation: EntityOrientation.UP_RIGHT },
      { start: minotaur_idleAnimationStartFrame + minotaur_rightOrientationSpriteOffset,     end: minotaur_idleAnimationEndFrame + minotaur_rightOrientationSpriteOffset,     sheet: 'minotaur', orientation: EntityOrientation.RIGHT },
      { start: minotaur_idleAnimationStartFrame + minotaur_downRightOrientationSpriteOffset, end: minotaur_idleAnimationEndFrame + minotaur_downRightOrientationSpriteOffset, sheet: 'minotaur', orientation: EntityOrientation.DOWN_RIGHT },
      { start: minotaur_idleAnimationStartFrame + minotaur_downOrientationSpriteOffset,      end: minotaur_idleAnimationEndFrame + minotaur_downOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.DOWN },
      { start: minotaur_idleAnimationStartFrame + minotaur_downLeftOrientationSpriteOffset,  end: minotaur_idleAnimationEndFrame + minotaur_downLeftOrientationSpriteOffset,  sheet: 'minotaur', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 6
  },
  run: {
    frames: [
      { start: minotaur_runAnimationStartFrame + minotaur_leftOrientationSpriteOffset,      end: minotaur_runAnimationEndFrame + minotaur_leftOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.LEFT },
      { start: minotaur_runAnimationStartFrame + minotaur_upLeftOrientationSpriteOffset,    end: minotaur_runAnimationEndFrame + minotaur_upLeftOrientationSpriteOffset,    sheet: 'minotaur', orientation: EntityOrientation.UP_LEFT },
      { start: minotaur_runAnimationStartFrame + minotaur_upOrientationSpriteOffset,        end: minotaur_runAnimationEndFrame + minotaur_upOrientationSpriteOffset,        sheet: 'minotaur', orientation: EntityOrientation.UP },
      { start: minotaur_runAnimationStartFrame + minotaur_upRightOrientationSpriteOffset,   end: minotaur_runAnimationEndFrame + minotaur_upRightOrientationSpriteOffset,   sheet: 'minotaur', orientation: EntityOrientation.UP_RIGHT },
      { start: minotaur_runAnimationStartFrame + minotaur_rightOrientationSpriteOffset,     end: minotaur_runAnimationEndFrame + minotaur_rightOrientationSpriteOffset,     sheet: 'minotaur', orientation: EntityOrientation.RIGHT },
      { start: minotaur_runAnimationStartFrame + minotaur_downRightOrientationSpriteOffset, end: minotaur_runAnimationEndFrame + minotaur_downRightOrientationSpriteOffset, sheet: 'minotaur', orientation: EntityOrientation.DOWN_RIGHT },
      { start: minotaur_runAnimationStartFrame + minotaur_downOrientationSpriteOffset,      end: minotaur_runAnimationEndFrame + minotaur_downOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.DOWN },
      { start: minotaur_runAnimationStartFrame + minotaur_downLeftOrientationSpriteOffset,  end: minotaur_runAnimationEndFrame + minotaur_downLeftOrientationSpriteOffset,  sheet: 'minotaur', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 10
  },
  meleeAttack: {
    frames: [
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_leftOrientationSpriteOffset,      end: minotaur_meleeAttackAnimationEndFrame + minotaur_leftOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.LEFT },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_upLeftOrientationSpriteOffset,    end: minotaur_meleeAttackAnimationEndFrame + minotaur_upLeftOrientationSpriteOffset,    sheet: 'minotaur', orientation: EntityOrientation.UP_LEFT },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_upOrientationSpriteOffset,        end: minotaur_meleeAttackAnimationEndFrame + minotaur_upOrientationSpriteOffset,        sheet: 'minotaur', orientation: EntityOrientation.UP },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_upRightOrientationSpriteOffset,   end: minotaur_meleeAttackAnimationEndFrame + minotaur_upRightOrientationSpriteOffset,   sheet: 'minotaur', orientation: EntityOrientation.UP_RIGHT },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_rightOrientationSpriteOffset,     end: minotaur_meleeAttackAnimationEndFrame + minotaur_rightOrientationSpriteOffset,     sheet: 'minotaur', orientation: EntityOrientation.RIGHT },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_downRightOrientationSpriteOffset, end: minotaur_meleeAttackAnimationEndFrame + minotaur_downRightOrientationSpriteOffset, sheet: 'minotaur', orientation: EntityOrientation.DOWN_RIGHT },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_downOrientationSpriteOffset,      end: minotaur_meleeAttackAnimationEndFrame + minotaur_downOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.DOWN },
      { start: minotaur_meleeAttackAnimationStartFrame + minotaur_downLeftOrientationSpriteOffset,  end: minotaur_meleeAttackAnimationEndFrame + minotaur_downLeftOrientationSpriteOffset,  sheet: 'minotaur', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 10
  },
  block: {
    frames: [
      { start: minotaur_blockAnimationStartFrame + minotaur_leftOrientationSpriteOffset,      end: minotaur_blockAnimationEndFrame + minotaur_leftOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.LEFT },
      { start: minotaur_blockAnimationStartFrame + minotaur_upLeftOrientationSpriteOffset,    end: minotaur_blockAnimationEndFrame + minotaur_upLeftOrientationSpriteOffset,    sheet: 'minotaur', orientation: EntityOrientation.UP_LEFT },
      { start: minotaur_blockAnimationStartFrame + minotaur_upOrientationSpriteOffset,        end: minotaur_blockAnimationEndFrame + minotaur_upOrientationSpriteOffset,        sheet: 'minotaur', orientation: EntityOrientation.UP },
      { start: minotaur_blockAnimationStartFrame + minotaur_upRightOrientationSpriteOffset,   end: minotaur_blockAnimationEndFrame + minotaur_upRightOrientationSpriteOffset,   sheet: 'minotaur', orientation: EntityOrientation.UP_RIGHT },
      { start: minotaur_blockAnimationStartFrame + minotaur_rightOrientationSpriteOffset,     end: minotaur_blockAnimationEndFrame + minotaur_rightOrientationSpriteOffset,     sheet: 'minotaur', orientation: EntityOrientation.RIGHT },
      { start: minotaur_blockAnimationStartFrame + minotaur_downRightOrientationSpriteOffset, end: minotaur_blockAnimationEndFrame + minotaur_downRightOrientationSpriteOffset, sheet: 'minotaur', orientation: EntityOrientation.DOWN_RIGHT },
      { start: minotaur_blockAnimationStartFrame + minotaur_downOrientationSpriteOffset,      end: minotaur_blockAnimationEndFrame + minotaur_downOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.DOWN },
      { start: minotaur_blockAnimationStartFrame + minotaur_downLeftOrientationSpriteOffset,  end: minotaur_blockAnimationEndFrame + minotaur_downLeftOrientationSpriteOffset,  sheet: 'minotaur', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.BLOCK,
    frameRate: 8
  },
  death: {
    frames: [
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_leftOrientationSpriteOffset,      end: minotaur_hitAndDeathAnimationEndFrame + minotaur_leftOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.LEFT },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_upLeftOrientationSpriteOffset,    end: minotaur_hitAndDeathAnimationEndFrame + minotaur_upLeftOrientationSpriteOffset,    sheet: 'minotaur', orientation: EntityOrientation.UP_LEFT },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_upOrientationSpriteOffset,        end: minotaur_hitAndDeathAnimationEndFrame + minotaur_upOrientationSpriteOffset,        sheet: 'minotaur', orientation: EntityOrientation.UP },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_upRightOrientationSpriteOffset,   end: minotaur_hitAndDeathAnimationEndFrame + minotaur_upRightOrientationSpriteOffset,   sheet: 'minotaur', orientation: EntityOrientation.UP_RIGHT },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_rightOrientationSpriteOffset,     end: minotaur_hitAndDeathAnimationEndFrame + minotaur_rightOrientationSpriteOffset,     sheet: 'minotaur', orientation: EntityOrientation.RIGHT },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_downRightOrientationSpriteOffset, end: minotaur_hitAndDeathAnimationEndFrame + minotaur_downRightOrientationSpriteOffset, sheet: 'minotaur', orientation: EntityOrientation.DOWN_RIGHT },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_downOrientationSpriteOffset,      end: minotaur_hitAndDeathAnimationEndFrame + minotaur_downOrientationSpriteOffset,      sheet: 'minotaur', orientation: EntityOrientation.DOWN },
      { start: minotaur_hitAndDeathAnimationStartFrame + minotaur_downLeftOrientationSpriteOffset,  end: minotaur_hitAndDeathAnimationEndFrame + minotaur_downLeftOrientationSpriteOffset,  sheet: 'minotaur', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  }
};

export const skeleton_AnimationConfig = {
  idle: {
    frames: [
      { start: skeleton_idleAnimationStartFrame + skeleton_leftOrientationSpriteOffset,      end: skeleton_idleAnimationEndFrame + skeleton_leftOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.LEFT },
      { start: skeleton_idleAnimationStartFrame + skeleton_upLeftOrientationSpriteOffset,    end: skeleton_idleAnimationEndFrame + skeleton_upLeftOrientationSpriteOffset,    sheet: 'skeleton', orientation: EntityOrientation.UP_LEFT },
      { start: skeleton_idleAnimationStartFrame + skeleton_upOrientationSpriteOffset,        end: skeleton_idleAnimationEndFrame + skeleton_upOrientationSpriteOffset,        sheet: 'skeleton', orientation: EntityOrientation.UP },
      { start: skeleton_idleAnimationStartFrame + skeleton_upRightOrientationSpriteOffset,   end: skeleton_idleAnimationEndFrame + skeleton_upRightOrientationSpriteOffset,   sheet: 'skeleton', orientation: EntityOrientation.UP_RIGHT },
      { start: skeleton_idleAnimationStartFrame + skeleton_rightOrientationSpriteOffset,     end: skeleton_idleAnimationEndFrame + skeleton_rightOrientationSpriteOffset,     sheet: 'skeleton', orientation: EntityOrientation.RIGHT },
      { start: skeleton_idleAnimationStartFrame + skeleton_downRightOrientationSpriteOffset, end: skeleton_idleAnimationEndFrame + skeleton_downRightOrientationSpriteOffset, sheet: 'skeleton', orientation: EntityOrientation.DOWN_RIGHT },
      { start: skeleton_idleAnimationStartFrame + skeleton_downOrientationSpriteOffset,      end: skeleton_idleAnimationEndFrame + skeleton_downOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.DOWN },
      { start: skeleton_idleAnimationStartFrame + skeleton_downLeftOrientationSpriteOffset,  end: skeleton_idleAnimationEndFrame + skeleton_downLeftOrientationSpriteOffset,  sheet: 'skeleton', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 6
  },
  run: {
    frames: [
      { start: skeleton_runAnimationStartFrame + skeleton_leftOrientationSpriteOffset,      end: skeleton_runAnimationEndFrame + skeleton_leftOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.LEFT },
      { start: skeleton_runAnimationStartFrame + skeleton_upLeftOrientationSpriteOffset,    end: skeleton_runAnimationEndFrame + skeleton_upLeftOrientationSpriteOffset,    sheet: 'skeleton', orientation: EntityOrientation.UP_LEFT },
      { start: skeleton_runAnimationStartFrame + skeleton_upOrientationSpriteOffset,        end: skeleton_runAnimationEndFrame + skeleton_upOrientationSpriteOffset,        sheet: 'skeleton', orientation: EntityOrientation.UP },
      { start: skeleton_runAnimationStartFrame + skeleton_upRightOrientationSpriteOffset,   end: skeleton_runAnimationEndFrame + skeleton_upRightOrientationSpriteOffset,   sheet: 'skeleton', orientation: EntityOrientation.UP_RIGHT },
      { start: skeleton_runAnimationStartFrame + skeleton_rightOrientationSpriteOffset,     end: skeleton_runAnimationEndFrame + skeleton_rightOrientationSpriteOffset,     sheet: 'skeleton', orientation: EntityOrientation.RIGHT },
      { start: skeleton_runAnimationStartFrame + skeleton_downRightOrientationSpriteOffset, end: skeleton_runAnimationEndFrame + skeleton_downRightOrientationSpriteOffset, sheet: 'skeleton', orientation: EntityOrientation.DOWN_RIGHT },
      { start: skeleton_runAnimationStartFrame + skeleton_downOrientationSpriteOffset,      end: skeleton_runAnimationEndFrame + skeleton_downOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.DOWN },
      { start: skeleton_runAnimationStartFrame + skeleton_downLeftOrientationSpriteOffset,  end: skeleton_runAnimationEndFrame + skeleton_downLeftOrientationSpriteOffset,  sheet: 'skeleton', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 8
  },
  meleeAttack: {
    frames: [
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_leftOrientationSpriteOffset,      end: skeleton_meleeAttackAnimationEndFrame + skeleton_leftOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.LEFT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_upLeftOrientationSpriteOffset,    end: skeleton_meleeAttackAnimationEndFrame + skeleton_upLeftOrientationSpriteOffset,    sheet: 'skeleton', orientation: EntityOrientation.UP_LEFT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_upOrientationSpriteOffset,        end: skeleton_meleeAttackAnimationEndFrame + skeleton_upOrientationSpriteOffset,        sheet: 'skeleton', orientation: EntityOrientation.UP },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_upRightOrientationSpriteOffset,   end: skeleton_meleeAttackAnimationEndFrame + skeleton_upRightOrientationSpriteOffset,   sheet: 'skeleton', orientation: EntityOrientation.UP_RIGHT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_rightOrientationSpriteOffset,     end: skeleton_meleeAttackAnimationEndFrame + skeleton_rightOrientationSpriteOffset,     sheet: 'skeleton', orientation: EntityOrientation.RIGHT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_downRightOrientationSpriteOffset, end: skeleton_meleeAttackAnimationEndFrame + skeleton_downRightOrientationSpriteOffset, sheet: 'skeleton', orientation: EntityOrientation.DOWN_RIGHT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_downOrientationSpriteOffset,      end: skeleton_meleeAttackAnimationEndFrame + skeleton_downOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.DOWN },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_downLeftOrientationSpriteOffset,  end: skeleton_meleeAttackAnimationEndFrame + skeleton_downLeftOrientationSpriteOffset,  sheet: 'skeleton', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 8
  },
  cast: {
    frames: [
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_leftOrientationSpriteOffset,      end: skeleton_meleeAttackAnimationEndFrame + skeleton_leftOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.LEFT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_upLeftOrientationSpriteOffset,    end: skeleton_meleeAttackAnimationEndFrame + skeleton_upLeftOrientationSpriteOffset,    sheet: 'skeleton', orientation: EntityOrientation.UP_LEFT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_upOrientationSpriteOffset,        end: skeleton_meleeAttackAnimationEndFrame + skeleton_upOrientationSpriteOffset,        sheet: 'skeleton', orientation: EntityOrientation.UP },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_upRightOrientationSpriteOffset,   end: skeleton_meleeAttackAnimationEndFrame + skeleton_upRightOrientationSpriteOffset,   sheet: 'skeleton', orientation: EntityOrientation.UP_RIGHT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_rightOrientationSpriteOffset,     end: skeleton_meleeAttackAnimationEndFrame + skeleton_rightOrientationSpriteOffset,     sheet: 'skeleton', orientation: EntityOrientation.RIGHT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_downRightOrientationSpriteOffset, end: skeleton_meleeAttackAnimationEndFrame + skeleton_downRightOrientationSpriteOffset, sheet: 'skeleton', orientation: EntityOrientation.DOWN_RIGHT },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_downOrientationSpriteOffset,      end: skeleton_meleeAttackAnimationEndFrame + skeleton_downOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.DOWN },
      { start: skeleton_meleeAttackAnimationStartFrame + skeleton_downLeftOrientationSpriteOffset,  end: skeleton_meleeAttackAnimationEndFrame + skeleton_downLeftOrientationSpriteOffset,  sheet: 'skeleton', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 8
  },
  block: {
    frames: [
      { start: skeleton_blockAnimationStartFrame + skeleton_leftOrientationSpriteOffset,      end: skeleton_blockAnimationEndFrame + skeleton_leftOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.LEFT },
      { start: skeleton_blockAnimationStartFrame + skeleton_upLeftOrientationSpriteOffset,    end: skeleton_blockAnimationEndFrame + skeleton_upLeftOrientationSpriteOffset,    sheet: 'skeleton', orientation: EntityOrientation.UP_LEFT },
      { start: skeleton_blockAnimationStartFrame + skeleton_upOrientationSpriteOffset,        end: skeleton_blockAnimationEndFrame + skeleton_upOrientationSpriteOffset,        sheet: 'skeleton', orientation: EntityOrientation.UP },
      { start: skeleton_blockAnimationStartFrame + skeleton_upRightOrientationSpriteOffset,   end: skeleton_blockAnimationEndFrame + skeleton_upRightOrientationSpriteOffset,   sheet: 'skeleton', orientation: EntityOrientation.UP_RIGHT },
      { start: skeleton_blockAnimationStartFrame + skeleton_rightOrientationSpriteOffset,     end: skeleton_blockAnimationEndFrame + skeleton_rightOrientationSpriteOffset,     sheet: 'skeleton', orientation: EntityOrientation.RIGHT },
      { start: skeleton_blockAnimationStartFrame + skeleton_downRightOrientationSpriteOffset, end: skeleton_blockAnimationEndFrame + skeleton_downRightOrientationSpriteOffset, sheet: 'skeleton', orientation: EntityOrientation.DOWN_RIGHT },
      { start: skeleton_blockAnimationStartFrame + skeleton_downOrientationSpriteOffset,      end: skeleton_blockAnimationEndFrame + skeleton_downOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.DOWN },
      { start: skeleton_blockAnimationStartFrame + skeleton_downLeftOrientationSpriteOffset,  end: skeleton_blockAnimationEndFrame + skeleton_downLeftOrientationSpriteOffset,  sheet: 'skeleton', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.BLOCK,
    frameRate: 8
  },
  death: {
    frames: [
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_leftOrientationSpriteOffset,      end: skeleton_hitAndDeathAnimationEndFrame + skeleton_leftOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.LEFT },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_upLeftOrientationSpriteOffset,    end: skeleton_hitAndDeathAnimationEndFrame + skeleton_upLeftOrientationSpriteOffset,    sheet: 'skeleton', orientation: EntityOrientation.UP_LEFT },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_upOrientationSpriteOffset,        end: skeleton_hitAndDeathAnimationEndFrame + skeleton_upOrientationSpriteOffset,        sheet: 'skeleton', orientation: EntityOrientation.UP },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_upRightOrientationSpriteOffset,   end: skeleton_hitAndDeathAnimationEndFrame + skeleton_upRightOrientationSpriteOffset,   sheet: 'skeleton', orientation: EntityOrientation.UP_RIGHT },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_rightOrientationSpriteOffset,     end: skeleton_hitAndDeathAnimationEndFrame + skeleton_rightOrientationSpriteOffset,     sheet: 'skeleton', orientation: EntityOrientation.RIGHT },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_downRightOrientationSpriteOffset, end: skeleton_hitAndDeathAnimationEndFrame + skeleton_downRightOrientationSpriteOffset, sheet: 'skeleton', orientation: EntityOrientation.DOWN_RIGHT },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_downOrientationSpriteOffset,      end: skeleton_hitAndDeathAnimationEndFrame + skeleton_downOrientationSpriteOffset,      sheet: 'skeleton', orientation: EntityOrientation.DOWN },
      { start: skeleton_hitAndDeathAnimationStartFrame + skeleton_downLeftOrientationSpriteOffset,  end: skeleton_hitAndDeathAnimationEndFrame + skeleton_downLeftOrientationSpriteOffset,  sheet: 'skeleton', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  }
};

export const goblin_AnimationConfig = {
  idle: {
    frames: [
      { start: goblin_idleAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_idleAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_idleAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_idleAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_idleAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_idleAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_idleAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_idleAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_idleAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_idleAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_idleAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_idleAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_idleAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_idleAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_idleAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_idleAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 6
  },
  jump: {
    frames: [
      { start: goblin_jumpAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_jumpAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_jumpAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_jumpAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_jumpAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_jumpAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_jumpAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_jumpAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_jumpAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_jumpAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_jumpAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_jumpAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_jumpAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_jumpAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_jumpAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_jumpAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 6
  },
  run: {
    frames: [
      { start: goblin_runAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_runAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_runAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_runAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_runAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_runAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_runAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_runAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_runAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_runAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_runAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_runAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_runAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_runAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_runAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_runAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 8
  },
  meleeAttack: {
    frames: [
      { start: goblin_meleeAttackAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_meleeAttackAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_meleeAttackAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_meleeAttackAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_meleeAttackAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_meleeAttackAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_meleeAttackAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_meleeAttackAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_meleeAttackAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_meleeAttackAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 16
  },
  rangedAttack: {
    frames: [
      { start: goblin_throwAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_throwAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_throwAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_throwAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_throwAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_throwAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_throwAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_throwAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_throwAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_throwAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_throwAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_throwAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_throwAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_throwAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_throwAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_throwAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RANGEDATTACK,
    frameRate: 8
  },
  block: {
    frames: [
      { start: goblin_blockAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_blockAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_blockAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_blockAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_blockAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_blockAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_blockAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_blockAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_blockAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_blockAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_blockAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_blockAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_blockAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_blockAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_blockAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_blockAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.BLOCK,
    frameRate: 8
  },
  hit: {
    frames: [
      { start: goblin_hitAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_hitAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_hitAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_hitAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_hitAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_hitAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_hitAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_hitAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_hitAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_hitAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_hitAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_hitAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_hitAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_hitAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_hitAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_hitAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.HIT,
    frameRate: 8
  },
  death: {
    frames: [
      { start: goblin_deathAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_deathAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_deathAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_deathAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_deathAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_deathAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_deathAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_deathAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_deathAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_deathAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_deathAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_deathAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_deathAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_deathAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_deathAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_deathAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  },
  criticalDeath: {
    frames: [
      { start: goblin_criticalDeathAnimationStartFrame + goblin_leftOrientationSpriteOffset,      end: goblin_criticalDeathAnimationEndFrame + goblin_leftOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.LEFT },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_upLeftOrientationSpriteOffset,    end: goblin_criticalDeathAnimationEndFrame + goblin_upLeftOrientationSpriteOffset,    sheet: 'goblin', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_upOrientationSpriteOffset,        end: goblin_criticalDeathAnimationEndFrame + goblin_upOrientationSpriteOffset,        sheet: 'goblin', orientation: EntityOrientation.UP },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_upRightOrientationSpriteOffset,   end: goblin_criticalDeathAnimationEndFrame + goblin_upRightOrientationSpriteOffset,   sheet: 'goblin', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_rightOrientationSpriteOffset,     end: goblin_criticalDeathAnimationEndFrame + goblin_rightOrientationSpriteOffset,     sheet: 'goblin', orientation: EntityOrientation.RIGHT },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_downRightOrientationSpriteOffset, end: goblin_criticalDeathAnimationEndFrame + goblin_downRightOrientationSpriteOffset, sheet: 'goblin', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_downOrientationSpriteOffset,      end: goblin_criticalDeathAnimationEndFrame + goblin_downOrientationSpriteOffset,      sheet: 'goblin', orientation: EntityOrientation.DOWN },
      { start: goblin_criticalDeathAnimationStartFrame + goblin_downLeftOrientationSpriteOffset,  end: goblin_criticalDeathAnimationEndFrame + goblin_downLeftOrientationSpriteOffset,  sheet: 'goblin', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  }
};

export const goblin_lumberjack_black_AnimationConfig = {
  idle: {
    frames: [
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_idleAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_idleAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 6
  },
  run: {
    frames: [
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_runAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_runAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 8
  },
  meleeAttack: {
    frames: [
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_meleeAttackAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_meleeAttackAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 20
  },
  carry: {
    frames: [
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_carryAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_carryAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 6
  },
  pickupPutdown: {
    frames: [
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_pickupPutdownAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_pickupPutdownAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 8
  },
  block: {
    frames: [
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_blockAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_blockAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.BLOCK,
    frameRate: 8
  },
  death: {
    frames: [
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_leftOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.LEFT },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_upLeftOrientationSpriteOffset,    sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_LEFT },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_upOrientationSpriteOffset,        sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_upRightOrientationSpriteOffset,   sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.UP_RIGHT },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_rightOrientationSpriteOffset,     sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.RIGHT },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_downRightOrientationSpriteOffset, sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_RIGHT },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_downOrientationSpriteOffset,      sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN },
      { start: goblin_lumberjack_black_hitAndDeathAnimationStartFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  end: goblin_lumberjack_black_hitAndDeathAnimationEndFrame + goblin_lumberjack_black_downLeftOrientationSpriteOffset,  sheet: 'goblin_lumberjack_black', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 8
  }
};

export const wyvern_composite_AnimationConfig = {
  idle: {
    frames: [
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_idleAnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_idleAnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 12
  },
  run: {
    frames: [
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_runAnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_runAnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_runAnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_runAnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_runAnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_runAnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_runAnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_runAnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_runAnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.RUN,
    frameRate: 14
  },
  meleeAttack: {
    frames: [
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_meleeAttackAnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_meleeAttackAnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK,
    frameRate: 14
  },
  castSpell: {
    frames: [
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_castAnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_castAnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_castAnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_castAnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_castAnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_castAnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_castAnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_castAnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_castAnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.CASTSPELL,
    frameRate: 8
  },
  meleeAttack_2: {
    frames: [
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_meleeAttack2AnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_meleeAttack2AnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.MELEEATTACK_2,
    frameRate: 8
  },
  hit: {
    frames: [
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_hitAnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_hitAnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.HIT,
    frameRate: 8
  },
  death: {
    frames: [
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_leftOrientationSpriteOffset,      end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_leftOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.LEFT },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_upLeftOrientationSpriteOffset,    end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_upLeftOrientationSpriteOffset,    sheet: 'wyvern_composite', orientation: EntityOrientation.UP_LEFT },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_upOrientationSpriteOffset,        end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_upOrientationSpriteOffset,        sheet: 'wyvern_composite', orientation: EntityOrientation.UP },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_upRightOrientationSpriteOffset,   end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_upRightOrientationSpriteOffset,   sheet: 'wyvern_composite', orientation: EntityOrientation.UP_RIGHT },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_rightOrientationSpriteOffset,     end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_rightOrientationSpriteOffset,     sheet: 'wyvern_composite', orientation: EntityOrientation.RIGHT },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_downRightOrientationSpriteOffset, end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_downRightOrientationSpriteOffset, sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_RIGHT },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_downOrientationSpriteOffset,      end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_downOrientationSpriteOffset,      sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN },
      { start: wyvern_composite_deathAnimationStartFrame + wyvern_composite_downLeftOrientationSpriteOffset,  end: wyvern_composite_deathAnimationEndFrame + wyvern_composite_downLeftOrientationSpriteOffset,  sheet: 'wyvern_composite', orientation: EntityOrientation.DOWN_LEFT }    
    ],
    state: ActiveEntityAnimationState.State.DEATH,
    frameRate: 12
  }
};

export const wandering_trader_128_AnimationConfig = {
  idle: {
    frames: [
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT },
      { start: wandering_trader_128_idleAnimationStartFrame, end: wandering_trader_128_idleAnimationEndFrame, sheet: 'wandering_trader_128', orientation: EntityOrientation.DOWN_LEFT }
    ],
    state: ActiveEntityAnimationState.State.IDLE,
    frameRate: 4
  },
};

const icicle_AnimationStartFrame = 0;
const icicle_AnimationEndFrame = 7; 

const firebolt_AnimationStartFrame = 0;
const firebolt_AnimationEndFrame = 7;

const throwSpear_AnimationsStartFrame = 0;
const throwSpear_AnimationsEndFrame = 0;
const throwSpear_leftOrientationSpriteOffset = 0;
const throwSpear_upLeftOrientationSpriteOffset = 1;
const throwSpear_upOrientationSpriteOffset = 2;
const throwSpear_upRightOrientationSpriteOffset = 3;
const throwSpear_rightOrientationSpriteOffset = 4;
const throwSpear_downRightOrientationSpriteOffset = 5;
const throwSpear_downOrientationSpriteOffset = 6;
const throwSpear_downLeftOrientationSpriteOffset = 7;

const greyQuake_AnimationStartFrame = 0;
const greyQuake_AnimationEndFrame = 5;

const redQuake_AnimationStartFrame = 6;
const redQuake_AnimationEndFrame = 11;

const blueQuake_AnimationStartFrame = 12;
const blueQuake_AnimationEndFrame = 17;

const aura_AnimationStartFrame = 0;
const aura_AnimationEndFrame = 3;

// ------------------------------

export const projectile_AnimationConfig = {
  icicle: {
    frames:{ start: icicle_AnimationStartFrame, end: icicle_AnimationEndFrame, sheet: 'icicle' },
    frameRate: 8,
    repeat: -1
  }, 

  firebolt: {
    frames:{ start: firebolt_AnimationStartFrame, end: firebolt_AnimationEndFrame, sheet: 'firebolt' },
    frameRate: 8,
    repeat: -1
  },

  throwSpear: {
    frames: { start: throwSpear_AnimationsStartFrame, end: throwSpear_AnimationsEndFrame, sheet: 'throwSpear' },
    frameRate: 666,
    repeat: -1
  }
};

export const circleSpell_AnimationConfig = {
  greyQuake: {
    frames:{ start: greyQuake_AnimationStartFrame, end: greyQuake_AnimationEndFrame, sheet: 'quake'},
    frameRate: 6,
    repeat: -1
  },

  redQuake: {
    frames:{ start: redQuake_AnimationStartFrame, end: redQuake_AnimationEndFrame, sheet: 'quake'},
    frameRate: 6,
    repeat: -1
  },

  blueQuake: {
    frames:{ start: blueQuake_AnimationStartFrame, end: blueQuake_AnimationEndFrame, sheet: 'quake'},
    frameRate: 6,
    repeat: -1
  }
};

export const aura_AnimationConfig = {
  aura: {
    frames:{ start: aura_AnimationStartFrame, end: aura_AnimationEndFrame, sheet: 'aura' },
    frameRate: 4,
    repeat: -1
  }, 
  }

export const animationConfigKeys = {
  "player_AnimationConfig": player_AnimationConfig,
  "zombie_AnimationConfig": zombie_AnimationConfig,
  "minotaur_AnimationConfig": minotaur_AnimationConfig,
  "skeleton_AnimationConfig": skeleton_AnimationConfig,
  "goblin_AnimationConfig": goblin_AnimationConfig,
  "goblin_lumberjack_black_AnimationConfig": goblin_lumberjack_black_AnimationConfig,
  "wyvern_composite_AnimationConfig": wyvern_composite_AnimationConfig,
  "wandering_trader_128_AnimationConfig": wandering_trader_128_AnimationConfig
};
