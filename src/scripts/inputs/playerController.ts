import { PlayerEntity } from "../entities/playerEntity";
import { GameInput } from "./gameInputs";
import { MenuInputs } from "./menuInputs";

export class PlayerController {
  private _playerEntity: PlayerEntity;
  private _gameInputs: GameInput;
  private _menuInputs: MenuInputs;

  constructor(playerEntity: PlayerEntity) {
    this._playerEntity = playerEntity;
  }
}