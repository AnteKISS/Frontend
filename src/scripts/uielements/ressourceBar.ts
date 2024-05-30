export default class RessourceBar
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
    private mask: Phaser.GameObjects.Graphics;
    private scale: number

    constructor(scene: Phaser.Scene, x: number, y: number, maxValue: number, type: string)
    {
        this.scale = 0.75;
        this.maxValue = maxValue;
        this.currentValue = maxValue;

        this.barSprite = scene.add.sprite(x, y, 'sphereTexture');
        if(type == 'health')
        {
            this.barSprite.setTint(0xff0000);
        }
        if(type == 'mana')
        {
            this.barSprite.setTint(0x0000ff);
        }
        this.barSprite.setScale(this.scale);

        this.mask = scene.add.graphics({x: x, y: y});

        this.bigContourBottom = scene.add.sprite(x, y + this.barSprite.displayHeight / 4, 'bigContour');
        this.bigContourBottom.setScale(this.scale);

        this.bigContourTop = scene.add.sprite(x, y - this.barSprite.displayHeight / 4, 'bigContour');
        this.bigContourTop.setScale(this.scale);
        this.bigContourTop.setFlipY(true);

        this.shadow = scene.add.sprite(x, y, 'shadow');
        this.shadow.setScale(this.scale);

        this.text = new Phaser.GameObjects.Text(scene, x, y, '', {color: 'white', fontSize: '18px'});
        scene.add.existing(this.text);

        this.highlight = scene.add.sprite(x, y, 'highlight');
        this.highlight.setScale(this.scale);

        this.contour = scene.add.sprite(x, y, 'contour');
        this.contour.setScale(this.scale - 0.07);
        
        this.updateMask();
        this.updateText();
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
        this.mask.clear();

        const radius = this.barSprite.displayWidth / 2;
        const height = ((this.maxValue - this.currentValue) / this.maxValue) * this.barSprite.displayHeight;

        this.mask.fillStyle(0x000000);
        this.mask.fillRect(- this.barSprite.displayWidth / 2, - this.barSprite.displayHeight / 2, this.barSprite.displayWidth, height); 
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

