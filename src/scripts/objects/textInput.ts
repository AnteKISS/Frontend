import 'phaser'

export default class TextInput extends Phaser.GameObjects.Text {
  focused: boolean;
  onSubmit: Function;
  label: string;
  inputText: string;

  constructor(scene: Phaser.Scene, onSubmit: Function, x: number, y: number, label: string, style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y, '', style);
    this.scene.add.existing(this);
    this.onSubmit = onSubmit;
    this.label = label;
    this.inputText = '';
    this.focused = false;

    this.scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleInput(event));
  }

  public updateInputText(text: string) {
    this.inputText = text;
    this.setText(this.label + this.inputText);
  }

  private handleInput(event: KeyboardEvent) {
    const ALLOWED_CHARS = /^[a-zA-Z0-9 ]$/;

    if (this.focused !== true) return;

    if (event.key === 'Backspace')
      this.inputText = this.inputText.slice(0, -1);
    else if (event.key === 'Enter')
      this.onSubmit();
    else if (ALLOWED_CHARS.test(event.key))
      this.inputText += event.key;

    this.setText(this.label + this.inputText);
  }
}
