import { PlayerEntity } from "../entities/playerEntity";
import { UiEvents } from "../events/uiEvents";
import IObserver from "../observer/observer";
import { Settings } from "../settings/settings";

export default class SoundManager implements IObserver {

  private scene: Phaser.Scene;
  private player: PlayerEntity;
  private uiSoundManager: Phaser.Sound.WebAudioSoundManager;
  private backgroundSoundManager: Phaser.Sound.WebAudioSoundManager;
  private effectsSoundManager: Phaser.Sound.WebAudioSoundManager;

  private readonly BUTTON_CLICK_SOUND_KEY = 'buttonClick';

  constructor(scene: Phaser.Scene, player: PlayerEntity) {
    this.scene = scene;
    this.player = player;
    this.uiSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);
    this.backgroundSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);
    this.effectsSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);

    // scene.sound.setListenerPosition(x, y);
    // scene.tweens.add({ targets: mySound, volume: 0, duration: 500 });
  }
  public onNotify(event: any): void {
    if (this.isUiEvent(event)) {
      this.handleUiEvent(event);
    }
    // if (event instanceof UiEvents.ButtonClickEvent) {
    //   this.uiSoundManager.play('buttonClick');
    // }
  }

  public playBackgroundMusic(): void {
    if (Settings.instance.soundSettings.backgroundMusicMuted) {
      if (this.backgroundSoundManager.getAllPlaying().length > 0) {
        this.backgroundSoundManager.stopAll();
      }
      return;
    }
    this.backgroundSoundManager.play('backgroundMusic');
  }

  private handleUiEvent(event: any): void {
    if (event instanceof UiEvents.ButtonClickEvent) {
      this.uiSoundManager.play(this.BUTTON_CLICK_SOUND_KEY);
    }
  }

  private isUiEvent(event: any): boolean {
    return event.constructor && event.constructor.name.startsWith('UiEvents');
  }
}

/**
 * But how would I play a sound at a specific time? For example, when the player is hitting a monster, how could I play the appropriate sound if he hits the enemy?

To play a sound at a specific time, such as when the player hits a monster in your game, you can implement event-driven sound playback. Here's how you can achieve this in your TypeScript game development architecture:

    Event System: Implement an event system that allows different game entities to communicate with each other. When the player hits a monster, an event can be triggered to play the appropriate sound.

    Observer Pattern: Use the observer pattern to notify the sound manager or relevant sound classes when specific events occur in the game, such as a player hitting a monster.

    Custom Events: Define custom events for different interactions in the game, such as "PlayerHitMonsterEvent", which can carry information about the specific interaction.

Here's an updated example to demonstrate how you can play a sound at a specific time, like when the player hits a monster:

typescript

// Custom event for when the player hits a monster
class PlayerHitMonsterEvent {
    constructor(public player: Player, public monster: Monster) {}
}

// Observer interface for classes that listen to events
interface Observer {
    onNotify(event: any): void;
}

// Player class
class Player {
    hitMonster(monster: Monster) {
        // Logic for player hitting a monster
        const event = new PlayerHitMonsterEvent(this, monster);
        EventManager.notify(event);
    }
}

// Monster class
class Monster {}

// Event manager to handle events and notify observers
class EventManager {
    private static observers: Observer[] = [];

    static addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    static notify(event: any) {
        this.observers.forEach(observer => {
            observer.onNotify(event);
        });
    }
}

// Sound manager class that acts as an observer for game events
class SoundManager implements Observer {
    onNotify(event: any) {
        if (event instanceof PlayerHitMonsterEvent) {
            // Play sound when player hits a monster
            const hitSound = new SoundEffect("hitSound.mp3");
            hitSound.play();
        }
    }
}

// Usage
const player = new Player();
const monster = new Monster();
const soundManager = new SoundManager();

EventManager.addObserver(soundManager);

// Simulate player hitting a monster
player.hitMonster(monster);

In this example, when the player hits a monster, a custom event PlayerHitMonsterEvent is triggered. The SoundManager class listens for this event and plays the appropriate sound effect. By using events and observers, you can decouple the sound playback logic from the game entities, making your code more modular and easier to maintain.
 */