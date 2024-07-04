export default class RessourceBar extends Phaser.GameObjects.Container
{
    private maxValue: number;
    private currentValue: number;
    private text: Phaser.GameObjects.Text;
    private barSprite: Phaser.GameObjects.Sprite;
    private bigContourBottom: Phaser.GameObjects.Sprite;
    private bigContourTop: Phaser.GameObjects.Sprite;
    private contour: Phaser.GameObjects.Sprite;
    private shadow: Phaser.GameObjects.Sprite;
    private highlight: Phaser.GameObjects.Sprite;
    private sphereTexture: string;
    private emask: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene, x: number, y: number, maxValue: number, type: string)
    {
        super(scene);
        this.scale = 0.87;
        this.maxValue = maxValue;
        this.currentValue = maxValue;

        this.barSprite = scene.add.sprite(0, 0, 'sphereTexture');
        if(type == 'health')
        {
            this.barSprite.setTint(0xff0000);
        }
        if(type == 'mana')
        {
            this.barSprite.setTint(0x0000ff);
        }
        this.barSprite.setScale(this.scale);

        this.emask = scene.add.graphics({x: 0, y: 0});

        this.bigContourBottom = scene.add.sprite(0, this.barSprite.displayHeight / 4, 'bigContour');
        this.bigContourBottom.setScale(this.scale);

        this.bigContourTop = scene.add.sprite(0, 0 - this.barSprite.displayHeight / 4, 'bigContour');
        this.bigContourTop.setScale(this.scale);
        this.bigContourTop.setFlipY(true);

        this.shadow = scene.add.sprite(0, 0, 'shadow');
        this.shadow.setScale(this.scale);

        this.text = new Phaser.GameObjects.Text(scene, 0, 0, '', {color: 'white', fontSize: '18px'});
        scene.add.existing(this.text);

        this.highlight = scene.add.sprite(0, 0, 'highlight');
        this.highlight.setScale(this.scale);

        this.contour = scene.add.sprite(0, 0, 'contour');
        this.contour.setScale(this.scale - 0.07);

        this.updateMask();
        this.updateText();

        this.setPosition(x, y);

        this.add([this.barSprite, this.emask, this.bigContourBottom, this.bigContourTop, this.shadow, this.text, this.highlight, this.contour]);
    }

    public setMaxValue(value: number): void
    {
        this.maxValue = value;
        this.updateMask();
        this.updateText();
    }

    public setCurrentValue(value: number): void
    {
        this.currentValue = value;  
        this.updateMask();
        this.updateText();   
    }

    private updateMask(): void
    {
        this.emask.clear();

        const radius = this.barSprite.displayWidth / 2;
        const height = ((this.maxValue - this.currentValue) / this.maxValue) * this.barSprite.displayHeight;

        this.emask.fillStyle(0x000000);
        this.emask.fillRect(- this.barSprite.displayWidth / 2, - this.barSprite.displayHeight / 2, this.barSprite.displayWidth, height); 
    }

    private updateText(): void
    {
        const sphereCenterX = this.barSprite.x;
        const sphereCenterY = this.barSprite.y;
        
        this.text.setText(`${this.currentValue} / ${this.maxValue}`);

        const textX = sphereCenterX - this.text.displayWidth / 2;
        const textY = sphereCenterY - this.text.displayHeight / 2;

        this.text.setPosition(textX, textY);
    }
}

