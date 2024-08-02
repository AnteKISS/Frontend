import { ActiveEntity } from './activeEntity';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { BaseEntity } from './baseEntity';
import { MathModule } from '../utilities/mathModule'
import PlayerController from '../inputs/playerController';
import Spell from '../spells/spell';
import SpellBook from '../spells/spellBook';
import IceShard from '../spells/craftedSpells/iceShard';
import Firebolt from '../spells/craftedSpells/firebolt';
import Quake from '../spells/craftedSpells/quake';
import { Physics } from '../physics/collider';
import { IFightable } from './IFightable';
import { ActiveEntityAnimator } from './activeEntityAnimator';
import { ActiveEntityAnimationState } from './entityState';
import { InventorySprite } from './inventorySprite';
import { InventorySlots } from '../enums/inventorySlots';
import { Signal, SignalHandler } from '../events/signal';
import { Exp } from '../progression/exp';
import { SkillTree } from '../progression/skillTree';
import { AttributeAllocation } from '../progression/attributeAllocation';
import CampaignManager from '../managers/campaignmanager';
import TileModule from '../tiles/tilemodule';
import { ActiveEntityEvents } from '../events/activeEntityEvents';
import { GeneralEventManager } from '../managers/eventManager';
import IObserver from '../observer/observer';
import { PlayerEvents } from '../events/playerEvents';
import { ItemType } from '../inventory/itemType';
import Inventory from '../inventory/inventory';
import StatModule from './statModule';
import { PotionPouch } from '../otherItems/potionPouch';
import FrostStomp from '../spells/craftedSpells/frostStomp';
import Rage from '../spells/craftedSpells/rage';
import { UnlockOrder } from '../spells/unlockOrder';
import Item from '../inventory/item';

export class PlayerEntity extends ActiveEntity implements IFightable, IObserver {
  public headSprite: InventorySprite;
  public bodySprite: InventorySprite;
  public mainHandSprite: InventorySprite;
  public offHandSprite: InventorySprite;
  public onPlayerDeath: Signal = new Signal();
  public maxMana: number = 150;

  public mySpellBook: SpellBook;
  public equippedSpells: Spell[] = [];
  public controller: PlayerController;
  public exp: Exp;
  public inventory: Inventory;
  public potionPouch: PotionPouch;
  public unlockOrder: UnlockOrder;

  private skillTree: SkillTree;
  public attributeAllocation: AttributeAllocation;
  private manaRegenEvent: Phaser.Time.TimerEvent;
  private healthRegenEvent: Phaser.Time.TimerEvent;
  private realStrenght: number;
  private realDexterity: number;
  private realIntelligence: number;
  private realVitality: number;

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.inventory = new Inventory(this.scene);
    this.type = 'PlayerEntity';
    this.code = "player";
    this.headSprite = scene.add.sprite(0, 0, 'helmetTexture');
    this.headSprite.textureName = 'MALE_HEAD2';
    this.headSprite.slot = InventorySlots.HELMET;
    this.headSprite.scale = 1.5;
    this.bodySprite = scene.add.sprite(0, 0, 'chestplateTexture');
    this.bodySprite.textureName = 'CLOTHES';
    this.bodySprite.slot = InventorySlots.CHESTPLATE;
    this.bodySprite.scale = 1.5;
    this.mainHandSprite = scene.add.sprite(0, 0, 'mainHandTexture');
    this.mainHandSprite.textureName = 'SHORTSWORD';
    this.mainHandSprite.slot = InventorySlots.MAINHAND;
    this.mainHandSprite.scale = 1.5;
    this.offHandSprite = scene.add.sprite(0, 0, 'offHandTexture');
    this.offHandSprite.textureName = 'LONGBOW';
    this.offHandSprite.slot = InventorySlots.OFFHAND;
    this.offHandSprite.scale = 1.5;
    this.offHandSprite.visible = false;
    this.add(this.headSprite);
    this.add(this.bodySprite);
    this.add(this.mainHandSprite);
    this.add(this.offHandSprite);
    this.initializeAnimations();

    this.positionX = this.scene.cameras.main.width / 2;
    this.positionY = this.scene.cameras.main.height / 2;

    this.controller = new PlayerController(scene, this);
    this.exp = new Exp(this);
    this.skillTree = new SkillTree(this);
    this.attributeAllocation = new AttributeAllocation(this);
    this.potionPouch = new PotionPouch(this);
    this.unlockOrder = new UnlockOrder(this);

    //this.spellBook.addSpell(new Firebolt(this));
    //this.spellBook.addSpell(new IceShard(this));
    //this.spellBook.addSpell(new Quake(this));
    //this.spellBook.addSpell(new FrostStomp(this));
    //this.spellBook.addSpell(new Rage(this));

    this.headSprite.setOrigin(0.5, 0.75);
    this.bodySprite.setOrigin(0.5, 0.75);
    this.mainHandSprite.setOrigin(0.5, 0.75);
    this.offHandSprite.setOrigin(0.5, 0.75);

    this.setDepth(0);
    this.truncatedSpriteWidth = 32 * this.bodySprite.scaleX;
    this.truncatedSpriteHeight = 64 * this.bodySprite.scaleY;
    this.collider = new Physics.Collider(this, this.bodySprite, this.onSpriteColliding, this.onEntityColliding);
    this.animator = new ActiveEntityAnimator(this);
    this.startManaRegen(scene);
    this.startHealthRegen(scene);
    const animationCompleteHandler: SignalHandler = {
      callback: this.onNonRepeatingAnimationEnd.bind(this),
      parameters: [this.currentAnimationState]
    }
    this.animator.onNonRepeatingAnimationComplete.addHandler(animationCompleteHandler);
    const animationYoyoMiddleFrameHandler: SignalHandler = {
      callback: this.onYoyoAnimationMiddleFrame.bind(this),
      parameters: [this.currentAnimationState]
    }
    this.animator.onYoyoAnimationMiddleFrame.addHandler(animationYoyoMiddleFrameHandler);
  }

  // Getters/Setters

  // Methods
  public update(time: number, deltaTime: number): void {
    this.controller.update(time, deltaTime);
    this.updatePosition();
    this.handleTileTransition();
    this.animator.update(time, deltaTime);

    this.exp.update();

    if (this._debugMode) {
      this.collider.displayDebugGraphics();
    }
    this.collider.checkSpriteCollision();
  }

  public attributeConversion(): void {
    this.realVitality = this.totalModifierStats.vitality + this.attributeAllocation.vitality;
    this.realStrenght = this.totalModifierStats.strength + this.attributeAllocation.strength;
    this.realDexterity = this.totalModifierStats.dexterity + this.attributeAllocation.dexterity;
    this.realIntelligence = this.totalModifierStats.intelligence + this.attributeAllocation.intelligence;
    this.updateStats();
  }

  public updateStats(): void {
    this.baseModifierStats.maxMana = 100 + this.realIntelligence * 5;
    this.baseModifierStats.maxHealth = 100 + this.realVitality * 10;
    this.baseModifierStats.healthRegeneration = 2 + this.realVitality * 0.2;
    this.baseModifierStats.manaRegeneration = 2 + this.realIntelligence * 0.2;
    this.baseModifierStats.movementSpeed = this.baseModifierStats.baseMovementSpeed + this.realDexterity * 1;
    this.baseModifierStats.basePhysicalDamage = 10 + this.realStrenght * 2 + this.realDexterity;
    this.baseModifierStats.baseMagicalDamage = 10 + this.realIntelligence * 2;

    StatModule.resetModifierStats(this.tempModifierStats);
    StatModule.resetModifierStats(this.totalModifierStats);

    for (const item of this.inventory.getPlayerEquipment().getEquippedItems())
      StatModule.affectModifierStatChange(this.tempModifierStats, item.stats);

    StatModule.affectModifierStatChange(this.totalModifierStats, this.baseModifierStats);
    StatModule.affectModifierStatChange(this.totalModifierStats, this.tempModifierStats);

    const castSpeed = 4 + Math.floor(this.realIntelligence * 0.1);
    for (const anim of AnimationManager.playerCastAnimations) {
      this.scene.anims.get(anim).frameRate = castSpeed;
    }

    const attackSpeed = (12 + Math.floor(this.realDexterity * 0.15)) * (1 + (this.tempModifierStats.attackSpeed / 100));
    for (const anim of AnimationManager.playerMeleeAttackAnimations) {
      this.scene.anims.get(anim).frameRate = attackSpeed;
    }
  }

  private startManaRegen(scene: Phaser.Scene) {
    this.manaRegenEvent = scene.time.addEvent({
      delay: 1000,
      callback: this.regenerateMana,
      callbackScope: this,
      loop: true
    });
  }

  private startHealthRegen(scene: Phaser.Scene) {
    this.healthRegenEvent = scene.time.addEvent({
      delay: 1000,
      callback: this.regenerateHealth,
      callbackScope: this,
      loop: true
    });
  }

  private regenerateMana() {
    if (this.isDead()) {
      return;
    }
    if (this.dynamicStats.mana < this.totalModifierStats.maxMana) {
      this.dynamicStats.mana += this.totalModifierStats.manaRegeneration;
    }
    if (this.dynamicStats.mana > this.totalModifierStats.maxMana) {
      this.dynamicStats.mana = this.totalModifierStats.maxMana;
    }
  }

  private regenerateHealth() {
    if (this.isDead()) {
      return;
    }
    if (this.dynamicStats.health < this.totalModifierStats.maxHealth) {
      this.dynamicStats.health += this.totalModifierStats.healthRegeneration;
    }
    if (this.dynamicStats.health > this.totalModifierStats.maxHealth) {
      this.dynamicStats.health = this.totalModifierStats.maxHealth;
    }
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  public attack(target: IFightable): void {
    target.damage(this.totalModifierStats.basePhysicalDamage, this);
  }

  public damage(amount: number, damageSource: ActiveEntity): void {
    // TODO: take into account gear, active effects then apply damage
    if (this.dynamicStats.health == 0) {
      return;
    }
    this.dynamicStats.health -= Math.abs(amount * (1 - (this.totalModifierStats.defense / (this.totalModifierStats.defense + 100))));
    if (this.dynamicStats.health <= 0) {
      this.dynamicStats.health = 0;
      this.destinationX = this.positionX;
      this.destinationY = this.positionY;
      this.currentAnimationState.state = ActiveEntityAnimationState.State.DEATH;
      this.onPlayerDeath.raise();
      const deathEvent = new ActiveEntityEvents.KilledEvent(damageSource, this);
      GeneralEventManager.getInstance().notifyObservers(deathEvent);
    }
  }

  public isAttacking(): boolean {
    // TODO: Add a boolean attribute that is set if the player is attacking instead of validating with an animation state
    return this.currentAnimationState.state == ActiveEntityAnimationState.State.MELEEATTACK;
  }

  public isCasting(): boolean {
    // TODO: Add a boolean attribute that is set if the player is attacking instead of validating with an animation state
    return this.currentAnimationState.state == ActiveEntityAnimationState.State.CASTSPELL;
  }

  public isDead(): boolean {
    return this.dynamicStats.health <= 0;
  }

  // Event Handlers
  public onSpellKeyDown(key: string): void {
    let hasCast: boolean = false;
    if (this.isAttacking() || this.isCasting() || this.isDead()) {
      return;
    }
    switch (key) {
      case '1':
        if (this.equippedSpells[0])
          hasCast = this.equippedSpells[0].onCast();
        break;
      case '2':
        if (this.equippedSpells[1])
          hasCast = this.equippedSpells[1].onCast();
        break;
      case '3':
        if (this.equippedSpells[2])
          hasCast = this.equippedSpells[2].onCast();
        break;
      case 'Q':
        if (this.equippedSpells[3])
          hasCast = this.equippedSpells[3].onCast();
        break;
      case 'W':
        if (this.equippedSpells[4])
          hasCast = this.equippedSpells[4].onCast();
        break;
      case 'E':
        if (this.equippedSpells[5])
          hasCast = this.equippedSpells[5].onCast();
        break;
      case 'R':
        if (this.equippedSpells[6])
          hasCast = this.equippedSpells[6].onCast();
        break;
      case 'T':
        if (this.equippedSpells[7])
          hasCast = this.equippedSpells[7].onCast();
        break;
      case '4':
        this.potionPouch.usePotion()
        break;
      default:
        break;
    }
    if (hasCast) {
      this.setDestination(this.positionX, this.positionY);
      this.animator.setAnimatorState(ActiveEntityAnimationState.State.CASTSPELL);
      const pointerX: number = (this.scene.input.activePointer.x + this.positionX - this.scene.cameras.main.width * 0.5);
      const pointerY: number = (this.scene.input.activePointer.y + this.positionY - this.scene.cameras.main.height * 0.5);
      this.updateOrientationWithPointerPosition(pointerX, pointerY);
    }
  }

  public levelUp() {
    this.dynamicStats.level++;
    this.skillTree.levelUp();
    this.attributeAllocation.levelUp();
    this.unlockOrder.checkLevel();
  }

  onSpriteColliding = (hitEntity: BaseEntity): void => {
    if (hitEntity.list.length == 0) {
      return;
    }
    let selfHeight: number = this.positionY + this.bodySprite.displayHeight;
    let otherHeight: number = hitEntity.positionY + (hitEntity.list.at(0) as InventorySprite).displayHeight;
    if (selfHeight < otherHeight) {
      this.depth = 0;
      hitEntity.depth = 1;
    } else {
      this.depth = 1;
      hitEntity.depth = 0;
    }
  }

  onEntityColliding = (hitEntity: BaseEntity): void => {

  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, `${this.code}_AnimationConfig`);
  }

  public onNonRepeatingAnimationEnd(animationState: ActiveEntityAnimationState): void {

  }

  public onYoyoAnimationMiddleFrame(animationState: ActiveEntityAnimationState): void {
    switch (animationState.state) {
      case ActiveEntityAnimationState.State.MELEEATTACK:
      case ActiveEntityAnimationState.State.MELEEATTACK_2:
        if (this.target !== null && this.target !== undefined) {
          this.setOrientationRad(Phaser.Math.Angle.Between(this.positionX, this.positionY, this.target.positionX, this.target.positionY));
          if (MathModule.scaledDistanceBetweenPositions(this.positionX, this.positionY, this.target.positionX, this.target.positionY) <= 100) {
            if (this.target.isTargetable) {
              this.currentAnimationState.state = ActiveEntityAnimationState.State.MELEEATTACK;
              this.attack(this.target as unknown as IFightable);
            }
            this.setDestination(this.positionX, this.positionY);
            this.target = null;
          }
        }
    }
  }

  public onNotify(event: any): void {
    if (event instanceof PlayerEvents.PlayerEquipItemEvent) {
      switch (event.item.getItem().itemType) {
        case ItemType.HELMET:
          if (event.item.getItem().inventorySprite.includes("leather")) {
            this.headSprite.textureName = "MALE_HEAD3";
          } else {
            this.headSprite.textureName = "MALE_HEAD1";
          }
          break;
        case ItemType.ARMOR:
          if (event.item.getItem().inventorySprite.includes("leather")) {
            this.bodySprite.textureName = "LEATHER_ARMOR";
          } else {
            this.bodySprite.textureName = "STEEL_ARMOR";
          }
          break;
        case ItemType.WEAPON:
          if (event.item.getItem().inventorySprite.includes("dagger")) {
            this.mainHandSprite.textureName = "DAGGER";
          } else if (event.item.getItem().inventorySprite.includes("sword")) {
            this.mainHandSprite.textureName = "LONGSWORD";
          } else if (event.item.getItem().inventorySprite.includes("kopis")) {
            this.mainHandSprite.textureName = "SHORTSWORD";
          }
          break;
      }
      event.player.animator.forceUpdateOnce = true;
    } else if (event instanceof PlayerEvents.PlayerUnequipItemEvent) {
      switch (event.item.getItem().itemType) {
        case ItemType.HELMET:
          this.headSprite.textureName = "MALE_HEAD2";
          break;
        case ItemType.ARMOR:
          this.bodySprite.textureName = "CLOTHES";
          break;
        case ItemType.WEAPON:
          this.mainHandSprite.textureName = "SHORTSWORD";
          break;
      }
      event.player.animator.forceUpdateOnce = true;
    }
  }

  public updatePlayerVisuals(): void {
    for (const equipSlot of this.inventory.getPlayerEquipment().equipSlots) {
      const inventoryItem = equipSlot.getInventoryItem();
      switch (equipSlot.itemType) {
        case ItemType.HELMET:
          if (!inventoryItem) {
            this.headSprite.textureName = "MALE_HEAD2";
            break;
          }
          if (inventoryItem.getItem().inventorySprite.includes("leather")) {
            this.headSprite.textureName = "MALE_HEAD3";
          } else {
            this.headSprite.textureName = "MALE_HEAD1";
          }
          break;
        case ItemType.ARMOR:
          if (!inventoryItem) {
            this.bodySprite.textureName = "CLOTHES";
            break;
          }
          if (inventoryItem.getItem().inventorySprite.includes("leather")) {
            this.bodySprite.textureName = "LEATHER_ARMOR";
          } else {
            this.bodySprite.textureName = "STEEL_ARMOR";
          }
          break;
        case ItemType.WEAPON:
          if (!inventoryItem) {
            this.mainHandSprite.textureName = "SHORTSWORD";
            break;
          }
          if (inventoryItem.getItem().inventorySprite.includes("dagger")) {
            this.mainHandSprite.textureName = "DAGGER";
          } else if (inventoryItem.getItem().inventorySprite.includes("sword")) {
            this.mainHandSprite.textureName = "LONGSWORD";
          } else if (inventoryItem.getItem().inventorySprite.includes("kopis")) {
            this.mainHandSprite.textureName = "SHORTSWORD";
          }
          break
      }
    }
    this.animator.forceUpdateOnce = true;
  }

  private handleTileTransition() {
    // Check if current tile has a transition
    if (!(CampaignManager.getInstance() && this.currentTile?.transition))
      return;

    // Make sure transition is valid in current act
    const transition = CampaignManager.getInstance().transition(this, this.currentTile.transition);
    if (!transition)
      return;

    const newPlayerPosition = TileModule.getUnitPosFromTilePos(transition.targetX, transition.targetY);
    this._positionX = newPlayerPosition.x;
    this._positionY = newPlayerPosition.y;
    this.setX(newPlayerPosition.x);
    this.setY(newPlayerPosition.y);
  }

  public getSprite(): Phaser.GameObjects.Sprite {
    return this.headSprite;
  }
}
