import { SoundSettings } from "./soundSettings";

export class Settings {
  
  private static _instance: Settings | null = null;

  public soundSettings: SoundSettings;

  private constructor() {
    this.soundSettings = new SoundSettings();
  }

  public static get instance(): Settings {
    if (!Settings._instance) {
      Settings._instance = new Settings();
    }
    return Settings._instance;
  }
}