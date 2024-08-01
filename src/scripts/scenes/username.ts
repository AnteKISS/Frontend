import Phaser from 'phaser';
import Pregame from './pregame';


export default class Username extends Phaser.GameObjects.Container {
  private inputElement!: HTMLInputElement;
  private submitButton!: Phaser.GameObjects.Text;
  private background: Phaser.GameObjects.Rectangle;
  private promptText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene , x: number, y: number) {
    
    console.log(scene);
    super(scene, x, y);
    console.log('Username constructor called');
    console.log('Scene Systems:', scene.sys);


    // Ajouter une zone grise semi-transparente pour le fond
    this.background = scene.add.rectangle(0, 0, 400, 300, 0x000000, 0.5);
    this.background.setOrigin(0.5);
    

    // Ajouter du texte pour l'invite
    this.promptText = scene.add.text(0, -100, 'Enter your name:', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);
    

    // Créer un champ de texte HTML pour entrer le nom d'utilisateur
    this.createInputField();

    // Ajouter un bouton de soumission
    this.submitButton = scene.add.text(0, 50, 'Submit', { fontSize: '32px', color: '#ffffff' })
        .setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', this.handleSubmit, this);

    this.add([this.submitButton,this.background,this.promptText]);


    this.hide();
    scene.add.existing(this);
  }

  private createInputField(): void {
    this.inputElement = document.createElement('input');
    this.inputElement.type = 'text';
    this.inputElement.style.position = 'absolute';
    this.inputElement.style.left = '50%';
    this.inputElement.style.top = '50%';
    this.inputElement.style.transform = 'translate(-50%, -50%)';
    this.inputElement.style.fontSize = '24px';
    document.body.appendChild(this.inputElement);
  }

  private handleSubmit(): void {
      const userName = this.inputElement.value.trim();
      if (userName) {
          console.log(`User Name: ${userName}`);
          this.inputElement.remove();
          this.emit('submit', userName);
      }
  }

  destroy(fromScene?: boolean): void {
      this.inputElement.remove();
      super.destroy(fromScene);
  }
  
  public show(): void {
    this.setVisible(true);
  }

  public hide(): void {
    this.setVisible(false);
  }
}


