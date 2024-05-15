// Value of the enum are used to correctly set the frame of the sprite in the player direction (32 frames total for each direction).
// TODO: Check if the other entities' spritesheets are structured the same way.
export enum EntityOrientation {
  LEFT = 0,
  UP_LEFT = 32,
  UP = 64,
  UP_RIGHT = 96,
  RIGHT = 128,
  DOWN_RIGHT = 160,
  DOWN = 192,
  DOWN_LEFT = 224
}