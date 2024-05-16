export default class ExpBar
{
    private barFill: Phaser.GameObjects.Sprite;
    private background: Phaser.GameObjects.Sprite;
    private higlight: Phaser.GameObjects.Sprite;
    private shadow: Phaser.GameObjects.Sprite;
    private maxExp: number;
    private currentExp: number;
    private mask: Phaser.GameObjects.Graphics;
    
    constructor(scene: Phaser.Scene, x: number, y: number, maxExp: number)
    {
        this.maxExp = maxExp;
        this.currentExp = 0;
        const scale = 0.504;

        this.background = scene.add.sprite(x, y, 'expBack');
        this.background.setScale(scale + 0.005);

        this.barFill = scene.add.sprite(x, y, 'expFill');
        this.barFill.setTintFill(0x1EACB8);
        this.barFill.setScale(scale);

        this.mask = scene.add.graphics({x: x, y: y});

        this.shadow = scene.add.sprite(x, y, 'expShadow');
        this.shadow.setScale(scale);

        this.higlight = scene.add.sprite(x, y, 'expHighlight');
        this.higlight.setTint(0x000000);
        this.higlight.setScale(scale);

        this.updateMask();
    }

    public setMaxExp(value: number): void
    {
        this.maxExp = value;
        this.updateMask();
    }

    public setCurrentExp(value: number): void
    {
        this.currentExp = value;  
        this.updateMask();
    }

    public updateMask()
    {
        this.mask.clear();

        const width = ((this.maxExp - this.currentExp) / this.maxExp) * this.barFill.displayWidth;

        this.mask.fillStyle(0x333734);
        this.mask.fillRect(this.barFill.displayWidth/2, -this.barFill.displayHeight/2, -width, this.barFill.displayHeight); 
    }
}