import 'phaser'

export default class TextInput extends Phaser.GameObjects.Text {
  static readonly TEXT_TYPE = /^[a-zA-Z0-9 ]$/;
  static readonly NUMBER_TYPE = /^[0-9]$/;

  focused: boolean;
  onSubmit: Function;
  label: string;
  inputText: string;
  inputFilter: RegExp;
  maxLength: number;

  constructor(scene: Phaser.Scene, x: number, y: number, label: string, style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y, '', style);
    this.scene.add.existing(this);
    this.label = label;
    this.inputText = '';
    this.focused = false;
    this.inputFilter = TextInput.TEXT_TYPE;
    this.maxLength = Infinity;

    this.scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleInput(event));

    this.updateInputText("");
  }

  public setInputFilter(filter: RegExp) {
    this.inputFilter = filter;
  }

  public setMaxLength(length: number) {
    this.maxLength = length;
  }

  public updateInputText(text: string) {
    this.inputText = text;
    this.setText(this.label + this.inputText);
  }

  private handleInput(event: KeyboardEvent) {
    if (this.focused !== true) return;

    if (event.key === 'Backspace')
      // Erase character
      this.inputText = this.inputText.slice(0, -1);
    else if (event.key === 'Enter') {
      // Submit input
      if (this.onSubmit !== undefined)
        this.onSubmit();
    }
    else if (this.inputFilter.test(event.key)) {
      // Type character
      if (this.inputText.length < this.maxLength)
        this.inputText += event.key;
    }

    this.setText(this.label + this.inputText);
  }
}
