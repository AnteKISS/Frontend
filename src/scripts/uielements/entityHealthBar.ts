import { ActiveEntity } from "../entities/activeEntity";

export class EntityHealthBar extends Phaser.GameObjects.GameObject {
  public scene: Phaser.Scene;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public health_perc: number;
  public graphics: Phaser.GameObjects.Graphics;
  public lblEntityName: Phaser.GameObjects.Text;
  public lblEntityDescription: Phaser.GameObjects.Text;
  public entity: ActiveEntity

  private healthBarFillingColor: number;
  private healthBarBackgroundColor: number;
  private healthBarBorderColor: number;
  private hasGraphicsDrawn: boolean;
  private hasEntityHealthChanged: boolean;

  private static readonly HEALTH_BAR_HEIGHT = 20;
  private static readonly HEALTH_BAR_WIDTH_SCREEN_RATIO = 0.2;
  private static readonly HEALTH_BAR_BORDER_WIDTH = 1;
  private static readonly HEALTH_BAR_BORDER_RADIUS = 1;
  private static readonly HEALTH_BAR_OFFSET_Y = 50;
  private static readonly HEALTH_BAR_BORDER_COLOR = 0x000000;
  private static readonly HEALTH_BAR_BACKGROUND_COLOR = 0x000000;
  private static readonly HEALTH_BAR_FILLING_COLOR = 0x540b0c;

  constructor(scene: Phaser.Scene) {
    super(scene, 'EntityHealthBar');
    this.scene = scene;
    this.width = this.scene.cameras.main.width * EntityHealthBar.HEALTH_BAR_WIDTH_SCREEN_RATIO;
    this.height = EntityHealthBar.HEALTH_BAR_HEIGHT;
    this.x = (this.scene.cameras.main.width * 0.5) - (this.width * 0.5);
    this.y = EntityHealthBar.HEALTH_BAR_OFFSET_Y;
    this.health_perc = 0;
    this.graphics = this.scene.add.graphics();
    this.lblEntityName = new Phaser.GameObjects.Text(this.scene, this.x + (this.width * 0.5), this.y + (this.height * 0.5), '', { color: '#ffffff', align: 'center', fontSize: '16px' });
    this.lblEntityName.setOrigin(0.5);
    this.lblEntityName.width = this.width;
    this.lblEntityDescription = new Phaser.GameObjects.Text(this.scene, this.x + (this.width * 0.5), this.y + (this.height * 0.5) + (this.height) + 5, '', { fontSize: '12px' });
    this.lblEntityDescription.setOrigin(0.5);
    this.lblEntityDescription.width = this.width;
    this.graphics.visible = true;
    this.scene.add.existing(this.graphics);
    this.scene.add.existing(this.lblEntityDescription);
    this.scene.add.existing(this.lblEntityName);
    this.hasGraphicsDrawn = false;
  }

  public set visible(visible: boolean) {
    this.graphics.visible = visible;
  }

  public get visible(): boolean {
    return this.graphics.visible;
  }

  public update(): void {
    this.entity = window['selectedMonster'];
    if (this.entity === undefined || this.entity === null || this.visible === false) {
      this.hasEntityHealthChanged = true;
      this.health_perc = -1;
      if (this.hasGraphicsDrawn) {
        this.graphics.clear();
        this.lblEntityName.visible = false;
        this.lblEntityDescription.visible = false;
        this.hasGraphicsDrawn = false;
      }
      return;
    }
    this.updateData();
    if (!this.hasEntityHealthChanged) {
      return;
    }
    this.lblEntityName.visible = true;
    this.lblEntityDescription.visible = true;
    this.graphics.clear();
    this.drawBackground();
    this.drawBorder();
    this.drawEntityName();
    this.drawEntityDescription();
    this.drawHealthBar();
    this.hasGraphicsDrawn = true;
  }

  public destroy(): void {
    this.graphics.destroy();
  }

  private updateData(): void {
    let newHealth_perc = this.entity.dynamicStats.health / this.entity.modifierStats.maxHealth;
    this.hasEntityHealthChanged = newHealth_perc != this.health_perc;
    this.health_perc = newHealth_perc < 0 ? 0 : newHealth_perc;
  }

  private drawBorder(): void {
    this.graphics.fillRoundedRect(this.x, this.y, this.width, this.height, EntityHealthBar.HEALTH_BAR_BORDER_RADIUS);
  }

  private drawBackground(): void {
    this.graphics.lineStyle(EntityHealthBar.HEALTH_BAR_BORDER_WIDTH, EntityHealthBar.HEALTH_BAR_BACKGROUND_COLOR, 0.5);
    this.graphics.strokeRoundedRect(this.x, this.y, this.width, this.height, EntityHealthBar.HEALTH_BAR_BORDER_RADIUS);
  }

  private drawHealthBar(): void {
    this.graphics.fillStyle(EntityHealthBar.HEALTH_BAR_FILLING_COLOR, 0.75);
    if (this.health_perc <= 0) {
      return;
    };
    this.graphics.fillRoundedRect(this.x, this.y, this.width * this.health_perc, this.height, EntityHealthBar.HEALTH_BAR_BORDER_RADIUS);
  }

  private drawEntityName(): void {
    this.lblEntityName.setText(this.entity.name);
  }

  private drawEntityDescription(): void {
    this.lblEntityDescription.setText(this.entity.code);
  }
}
