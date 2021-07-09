class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        this.load.image('menuBack','./assets/menuBack.png');
        this.load.audio('boom', './assets/boom.wav');
        this.load.audio('ding', './assets/ding.wav');
        this.load.audio('bgm', './assets/bgm.wav');
        this.load.audio('go', './assets/gameover.wav');
        
    }
    create() {
        
        this.menuBack = this.add.tileSprite(0, 0, 525, 700, 'menuBack').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // one player
            game.settings = {
                foodSpeed: 3,
                players: 1  
            }
            //this.sound.play('sfx_select');
            this.scene.start('playScene');
            //this.sound.add('bgm').play();
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // two player
            game.settings = {
                foodSpeed: 3,
                players: 2 
            }
            //this.sound.play('sfx_select');
            this.scene.start('playScene');
            //this.sound.add('bgm').play();
        }
    }
}