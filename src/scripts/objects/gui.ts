import RessourceBar from '../uielements/ressourceBar'
import SpellBar from '../uielements/spellBar'
import ExpBar from '../uielements/expBar'
import LeftInfoBar from '../uielements/leftInfoBar'
import { Scene } from 'phaser';

export default class GUI extends Phaser.GameObjects.Container
{
    public healthBar: RessourceBar;
    public manaBar: RessourceBar;
    public spellBar: SpellBar;
    public expBar: ExpBar;
    public leftInfoBar: LeftInfoBar;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this.leftInfoBar = new LeftInfoBar(scene, 200, 672);
        this.healthBar = new RessourceBar(scene, 85, 640, 100, 'health');
        this.manaBar = new RessourceBar(scene, 1195, 640, 100, 'mana');
        this.spellBar = new SpellBar(scene, 1080, 672);
        this.expBar = new ExpBar(scene, 640, 716, 100);

        this.add([this.leftInfoBar, this.healthBar, this.manaBar, this.spellBar, this.expBar]);

        scene.add.existing(this);
    }
}