import RessourceBar from '../uielements/ressourceBar'
import SpellBar from '../uielements/spellBar'
import ExpBar from '../uielements/expBar'
import LeftInfoBar from '../uielements/leftInfoBar'
import Spell from '../objects/spell'

export default class GUI extends Phaser.GameObjects.Container
{
    healthBar: RessourceBar;
    manaBar: RessourceBar;
    spellBar: SpellBar;
    expBar: ExpBar;
    leftInfoBar: LeftInfoBar;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this.leftInfoBar = new LeftInfoBar(scene, 200, 672);
        this.healthBar = new RessourceBar(scene, 85, 640, 100, 'health');
        //this.healthBar.setMaxValue(324);
        //this.healthBar.setCurrentValue(208);
        this.manaBar = new RessourceBar(scene, 1195, 640, 100, 'mana');
        this.spellBar = new SpellBar(scene, 1080, 672);
        //this.manaBar.setMaxValue(153);
        //this.manaBar.setCurrentValue(80);
        //const spell = new Spell();
        //this.spellBar.addSpell(1, spell.getSprite());
        //this.spellBar.addSpell(7, spell.getSprite());
        this.expBar = new ExpBar(scene, 640, 716, 100);
        //this.expBar.setCurrentExp(66);

        scene.add.existing(this);
    }
}