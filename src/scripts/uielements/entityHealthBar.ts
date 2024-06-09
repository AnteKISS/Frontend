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
  private static readonly HEALTH_BAR_WIDTH = 100;
  private static readonly HEALTH_BAR_BORDER_WIDTH = 1;
  private static readonly HEALTH_BAR_BORDER_RADIUS = 1;
  private static readonly HEALTH_BAR_OFFSET_Y = 50;
  private static readonly HEALTH_BAR_BORDER_COLOR = 0x000000;
  private static readonly HEALTH_BAR_BACKGROUND_COLOR = 0x000000;
  private static readonly HEALTH_BAR_FILLING_COLOR = 0x540b0c;

  constructor(scene: Phaser.Scene) {
    super(scene, 'EntityHealthBar');
    this.scene = scene;
    this.x = this.scene.cameras.main.width / 2;
    this.y = EntityHealthBar.HEALTH_BAR_OFFSET_Y;
    this.width = EntityHealthBar.HEALTH_BAR_WIDTH;
    this.height = EntityHealthBar.HEALTH_BAR_HEIGHT;
    this.health_perc = 0;
    this.graphics = this.scene.add.graphics();
    this.lblEntityName = new Phaser.GameObjects.Text(this.scene, this.x + (this.width / 2), this.y + (this.height / 2), '', { fontSize: '16px' });
    this.lblEntityDescription = new Phaser.GameObjects.Text(this.scene, this.x + (this.width / 2), this.y + (this.height / 2) + 20, '', { fontSize: '12px' });
    this.graphics.visible = true;
    this.scene.add.existing(this.graphics);
    this.scene.add.existing(this.lblEntityDescription);
    this.scene.add.existing(this.lblEntityName);
  }

  public set visible(visible: boolean) {
    this.graphics.visible = visible;
  }

  public get visible(): boolean {
    return this.graphics.visible;
  }

  public update(): void {
    if (this.entity === undefined || this.entity === null || this.visible === false) {
      if (this.hasGraphicsDrawn) {
        this.graphics.clear();
        this.hasGraphicsDrawn = false;
      }
      return;
    }
    this.updateData();
    if (!this.hasEntityHealthChanged) {
      return;
    }
    this.graphics.clear();
    this.drawBackground();
    this.drawHealthBar();
    this.drawBorder();
    this.drawEntityName();
    this.drawEntityDescription();
    this.hasGraphicsDrawn = true;
    // console.log('EntityHealthBar updated');
  }

  public destroy(): void {
    this.graphics.destroy();
  }

  private updateData(): void {
    let newHealth_perc = this.entity.stats.health / this.entity.stats.maxHealth;
    this.hasEntityHealthChanged = newHealth_perc != this.health_perc;
    // console.log('EntityHealthBar health changed: ', this.hasEntityHealthChanged, 'new health perc: ', newHealth_perc, 'old health perc: ', this.health_perc);
    this.health_perc = newHealth_perc < 0 ? 0 : newHealth_perc;
  }
  
  private drawBorder(): void {
    this.graphics.fillRoundedRect(this.x, this.y, this.width, this.height, EntityHealthBar.HEALTH_BAR_BORDER_RADIUS);
  }

  private drawBackground(): void {
    this.graphics.lineStyle(EntityHealthBar.HEALTH_BAR_BORDER_WIDTH, EntityHealthBar.HEALTH_BAR_BACKGROUND_COLOR, 0.75);
    this.graphics.strokeRoundedRect(this.x, this.y, this.width, this.height, EntityHealthBar.HEALTH_BAR_BORDER_RADIUS);
  }

  private drawHealthBar(): void {
    this.graphics.fillStyle(EntityHealthBar.HEALTH_BAR_FILLING_COLOR, 1);
    if (this.health_perc < 0) {
      return;
    }
    this.graphics.fillRoundedRect(this.x, this.y, this.width * this.health_perc, this.height, EntityHealthBar.HEALTH_BAR_BORDER_RADIUS);
  }

  private drawEntityName(): void {
    this.lblEntityName.setText(this.entity.name);
    // this.lblEntityName = this.scene.add.text(this.x + (this.width / 2), this.y + (this.height / 2), this.entity.name, { fontSize: '16px' });
  }

  private drawEntityDescription(): void {
    this.lblEntityDescription.setText(this.entity.code);
    // this.lblEntityDescription = this.scene.add.text(this.x + (this.width / 2), this.y + (this.height / 2) + 20, this.entity.code, { fontSize: '12px' });
  }
}