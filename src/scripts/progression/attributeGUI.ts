import { AttributeAllocation } from "./attributeAllocation";

export class AttributeGUI extends Phaser.GameObjects.Container
{
    private allocation: AttributeAllocation;
    private background: Phaser.GameObjects.Sprite;
    private closeButton: Phaser.GameObjects.Sprite;
    private availablePoint: Phaser.GameObjects.Text;
    private confirmButton: Phaser.GameObjects.Sprite;
    private confirmText: Phaser.GameObjects.Text;
    private plusVitButton: Phaser.GameObjects.Sprite;
    private minusVitButton: Phaser.GameObjects.Sprite;
    private plusStrButton: Phaser.GameObjects.Sprite;
    private minusStrButton: Phaser.GameObjects.Sprite; 
    private plusDexButton: Phaser.GameObjects.Sprite;
    private minusDexButton: Phaser.GameObjects.Sprite; 
    private plusIntButton: Phaser.GameObjects.Sprite;
    private minusIntButton: Phaser.GameObjects.Sprite;  
    private vitText: Phaser.GameObjects.Text;
    private strText: Phaser.GameObjects.Text;
    private dexText: Phaser.GameObjects.Text;
    private intText: Phaser.GameObjects.Text;
    private plusVitText: Phaser.GameObjects.Text;
    private minusVitText: Phaser.GameObjects.Text;
    private plusStrText: Phaser.GameObjects.Text;
    private minusStrText: Phaser.GameObjects.Text;
    private plusDexText: Phaser.GameObjects.Text;
    private minusDexText: Phaser.GameObjects.Text;
    private plusIntText: Phaser.GameObjects.Text;
    private minusIntText: Phaser.GameObjects.Text;

    private isOpen: Boolean;

    constructor(scene: Phaser.Scene, allocation: AttributeAllocation)
    {
        super(scene);
        this.allocation = allocation;

        this.background = new Phaser.GameObjects.Sprite(scene, 175, 350, 'black_rock_background').setInteractive();
        this.background.setScale(0.5);

        this.closeButton = new Phaser.GameObjects.Sprite(scene, 295, 188, 'close_button').setInteractive();
        this.closeButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.hide();
        });
        this.closeButton.setScale(0.5);

        this.availablePoint = new Phaser.GameObjects.Text(scene, 0, 0, "Unallocated Points: " + this.allocation.getTotalAvailablePoint(), {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.availablePoint.setPosition( this.background.x - this.availablePoint.displayWidth/2, this.background.y - this.background.displayHeight/8 * 3);

        this.confirmButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.confirmButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.confirmSelection()
        });
        this.confirmButton.setScale(0.5);
        this.confirmButton.setPosition( this.background.x, this.background.y + this.background.displayHeight/8 * 3);

        this.confirmText = new Phaser.GameObjects.Text(scene, 0, 0, "Confirm", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.confirmText.setPosition(this.confirmButton.x - this.confirmText.displayWidth/2, this.confirmButton.y - this.confirmText.displayHeight/2);

        this.plusVitButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.plusVitButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.allocateVitalityPoint()
        });
        this.plusVitButton.setScale(0.1, 0.32);
        this.plusVitButton.setPosition(this.background.x + this.background.displayWidth/8 * 3, this.background.y - this.background.displayHeight/8 * 2 + 10);

        this.minusVitButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.minusVitButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.unallocateVitalityPoint()
        });
        this.minusVitButton.setScale(0.1, 0.32);
        this.minusVitButton.setPosition(this.background.x - this.background.displayWidth/8 * 3, this.background.y - this.background.displayHeight/8 * 2 + 10);

        this.vitText = new Phaser.GameObjects.Text(scene, 0, 0, "VIT Bonus: " + this.allocation.vitality + " + " + this.allocation.tempVitality, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.vitText.setPosition(this.background.x - this.vitText.displayWidth/2, this.plusVitButton.y - this.vitText.displayHeight/2);

        this.plusVitText = new Phaser.GameObjects.Text(scene, 0, 0, "+", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.plusVitText.setPosition(this.plusVitButton.x - this.plusVitText.displayWidth/2, this.plusVitButton.y - this.plusVitText.displayHeight/2);

        this.minusVitText = new Phaser.GameObjects.Text(scene, 0, 0, "-", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.minusVitText.setPosition(this.minusVitButton.x - this.minusVitText.displayWidth/2, this.minusVitButton.y - this.minusVitText.displayHeight/2);

        this.plusStrButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.plusStrButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.allocateStrenghtPoint()});
        this.plusStrButton.setScale(0.1, 0.32);
        this.plusStrButton.setPosition(this.background.x + this.background.displayWidth/8 * 3, this.background.y - this.background.displayHeight/8 + 10);

        this.minusStrButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.minusStrButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.unallocateStrenghtPoint()
        });
        this.minusStrButton.setScale(0.1, 0.32);
        this.minusStrButton.setPosition(this.background.x - this.background.displayWidth/8 * 3, this.background.y - this.background.displayHeight/8 + 10);

        this.strText = new Phaser.GameObjects.Text(scene, 0, 0, "STR Bonus: " + this.allocation.strength + " + " + this.allocation.tempStrength, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.strText.setPosition(this.background.x - this.strText.displayWidth/2, this.plusStrButton.y - this.strText.displayHeight/2);

        this.plusStrText = new Phaser.GameObjects.Text(scene, 0, 0, "+", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.plusStrText.setPosition(this.plusStrButton.x - this.plusStrText.displayWidth/2, this.plusStrButton.y - this.plusStrText.displayHeight/2);

        this.minusStrText = new Phaser.GameObjects.Text(scene, 0, 0, "-", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.minusStrText.setPosition(this.minusStrButton.x - this.minusStrText.displayWidth/2, this.minusStrButton.y - this.minusStrText.displayHeight/2);

        this.plusDexButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.plusDexButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.allocateDexterityPoint()
        });
        this.plusDexButton.setScale(0.1, 0.32);
        this.plusDexButton.setPosition(this.background.x + this.background.displayWidth/8 * 3, this.background.y + 10);

        this.minusDexButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.minusDexButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.unallocateDexterityPoint()});
        this.minusDexButton.setScale(0.1, 0.32);
        this.minusDexButton.setPosition(this.background.x - this.background.displayWidth/8 * 3, this.background.y + 10);

        this.dexText = new Phaser.GameObjects.Text(scene, 0, 0, "DEX Bonus: " + this.allocation.dexterity + " + " + this.allocation.tempDexterity, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.dexText.setPosition(this.background.x - this.dexText.displayWidth/2, this.plusDexButton.y - this.dexText.displayHeight/2);

        this.plusDexText = new Phaser.GameObjects.Text(scene, 0, 0, "+", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.plusDexText.setPosition(this.plusDexButton.x - this.plusDexText.displayWidth/2, this.plusDexButton.y - this.plusDexText.displayHeight/2);

        this.minusDexText = new Phaser.GameObjects.Text(scene, 0, 0, "-", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.minusDexText.setPosition(this.minusDexButton.x - this.minusDexText.displayWidth/2, this.minusDexButton.y - this.minusDexText.displayHeight/2);

        this.plusIntButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.plusIntButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.allocateIntelligencePoint()});
        this.plusIntButton.setScale(0.1, 0.32);
        this.plusIntButton.setPosition(this.background.x + this.background.displayWidth/8 * 3, this.background.y + this.background.displayHeight/8 + 10);

        this.minusIntButton = new Phaser.GameObjects.Sprite(scene, 0, 0, 'button').setInteractive();
        this.minusIntButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.allocation.unallocateIntelligencePoint()});
        this.minusIntButton.setScale(0.1, 0.32);
        this.minusIntButton.setPosition(this.background.x - this.background.displayWidth/8 * 3, this.background.y + this.background.displayHeight/8 + 10);

        this.intText = new Phaser.GameObjects.Text(scene, 0, 0, "INT Bonus: " + this.allocation.intelligence + " + " + this.allocation.tempIntelligence, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.intText.setPosition(this.background.x - this.intText.displayWidth/2, this.plusIntButton.y - this.intText.displayHeight/2);

        this.plusIntText = new Phaser.GameObjects.Text(scene, 0, 0, "+", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.plusIntText.setPosition(this.plusIntButton.x - this.plusIntText.displayWidth/2, this.plusIntButton.y - this.plusIntText.displayHeight/2);

        this.minusIntText = new Phaser.GameObjects.Text(scene, 0, 0, "-", {
            fontSize: '18px',
            color: '#ffffff'
        });
        this.minusIntText.setPosition(this.minusIntButton.x - this.minusIntText.displayWidth/2, this.minusIntButton.y - this.minusIntText.displayHeight/2);

        this.background.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
        });

        this.isOpen = false;

        this.add([
            this.background,
            this.closeButton,
            this.availablePoint,
            this.confirmButton,
            this.confirmText, 
            this.plusVitButton, 
            this.minusVitButton, 
            this.plusStrButton, 
            this.minusStrButton, 
            this.plusDexButton, 
            this.minusDexButton, 
            this.plusIntButton, 
            this.minusIntButton,  
            this.vitText,
            this.strText,
            this.dexText,
            this.intText,
            this.plusVitText,
            this.minusVitText,
            this.plusStrText,
            this.minusStrText,
            this.plusDexText,
            this.minusDexText,
            this.plusIntText,
            this.minusIntText
        ]);

        scene.add.existing(this);
        
        this.setVisible(false);
    }

    public isPointerOn(pointer: Phaser.Input.Pointer): boolean {
        const bounds = this.getBounds();
        return Phaser.Geom.Rectangle.Contains(bounds, pointer.x, pointer.y);
      }

    public aKeyPressed()
    {
        if(this.isOpen)
        {
            this.hide();
            this.isOpen = false;
        }
        else
        {
            this.show();
            this.isOpen = true;
        }
    }

    public show()
    {
        this.setVisible(true);
    }

    public hide()
    {
        this.setVisible(false);
        this.allocation.cancelSelection();
    }

    public update()
    {
        this.availablePoint.setText("Unallocated Points: " + this.allocation.getTotalAvailablePoint());
        this.vitText.setText("VIT Bonus: " + this.allocation.vitality + " + " + this.allocation.tempVitality);
        this.strText.setText("STR Bonus: " + this.allocation.strength + " + " + this.allocation.tempStrength);
        this.dexText.setText("DEX Bonus: " + this.allocation.dexterity + " + " + this.allocation.tempDexterity);
        this.intText.setText("INT Bonus: " + this.allocation.intelligence + " + " + this.allocation.tempIntelligence);
    }
}