export class MinimapCameraSettings {
  public width: number = 400;
  public height: number = 250;
  public x: number = 0;
  public y: number = 0;
  public alpha: number = 1;
  public zoom: number = 0.1;
  public displayEnemies: boolean = true;
  public displayNpcs: boolean = true;
  public displayPlayer: boolean = true;
  public displayItems: boolean = true;
  public displayProjectiles: boolean = true;
  public visible: boolean = true;
}

export class MinimapCamera extends Phaser.Cameras.Scene2D.Camera {
  public _settings: MinimapCameraSettings = new MinimapCameraSettings();

  public get settings(): MinimapCameraSettings {
    return this._settings;
  }

  public set settings(value: MinimapCameraSettings) {
    this._settings = value;
  }

  public constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, name: string) {
      super(x, y, width, height);
      super.setName(name);
      this._settings.x = x;
      this._settings.y = y;
      this._settings.width = width;
      this._settings.height = height;
      this.setZoom(this._settings.zoom);
      // this.setBackgroundColor(0x000000);
      // this.setRoundPixels(true);
  }

  public applySettings(): void {
    this.width = this._settings.width;
    this.height = this._settings.height;
    this.x = this._settings.x;
    this.y = this._settings.y;
    this.setAlpha(this._settings.alpha);
    this.setZoom(this._settings.zoom);
    this.setVisible(this._settings.visible);
  }
}