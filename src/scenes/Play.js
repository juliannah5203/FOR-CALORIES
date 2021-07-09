class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('pinkback', './assets/pinkback.png');
        this.load.image('blueback', './assets/blueback.png');
        this.load.image('blueboy', './assets/blueboy.png');
        this.load.image('pinkgirl', './assets/pinkgirl.png');
        this.load.image('boom', './assets/boom.png');
        this.load.image('ice', './assets/icecream.png');
        this.load.image('choco', './assets/choco.png');
        this.load.image('straw', './assets/straw.png');
        this.load.image('cupcake', './assets/cupcake.png');
        this.load.image('watermelon', './assets/wl.png');
        this.load.image('sandwich', './assets/sandwich.png');
        this.load.spritesheet('explosion', './assets/explode.png', {frameWidth: 80, frameHeight:72, startFrame: 0, endFrame: 0});



    }
    create() {
        if (game.settings.players == 1) {
            this.playBack = this.add.tileSprite(0, 0, 525, 700, 'blueback').setOrigin(0, 0);
            this.player1 = new Player(this, centerX, centerY+230 , 'pinkgirl').setOrigin(0.5, 0);
        }
        if (game.settings.players == 2) {
            this.playBack = this.add.tileSprite(0, 0, 525, 700, 'pinkback').setOrigin(0, 0);
            this.player1 = new Player(this, centerX, centerY + 238, 'blueboy').setOrigin(0.5, 0);
        }
        this.add.rectangle( 5, 5, 145, 95, 0x9383a3).setOrigin(0, 0);

        this.music = this.sound.add('bgm', {
            volume: 0.5,
            loop: true
        });

        this.music.play();
        // this.donut01 = new Donut(this, game.config.width/2-200, centerY + centerX, 'choco', 0, 8).setOrigin(0, 0);
        // this.donut02 = new Donut(this, game.config.width/2+100, centerY + centerX, 'straw', 0, 8).setOrigin(0, 0);
        // this.donut03 = new Donut(this, game.config.width/2-25, centerY + centerX-100, 'ice', 0, 5).setOrigin(0, 0);
        // this.donut04 = new Donut(this, game.config.width/2-25, centerY + centerX-300, 'watermelon', 0, 5).setOrigin(0, 0);
        // this.donut05 = new Donut(this, game.config.width/2-25, centerY + centerX-400, 'cupcake', 0, 3).setOrigin(0, 0);
        // this.donut06 = new Donut(this, game.config.width/2-25, centerY + centerX-500, 'sandwich', 0, 8).setOrigin(0, 0);
        // this.donut07 = new Boom(this, game.config.width/2-25, centerY + centerX-550, 'boom', 0, -20).setOrigin(0,0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        
        // var skins = ['boom','ice','choco','straw','cupcake','watermelon','sandwich'];
        // var skin1 = Phaser.Math.RND.pick(skins);
        // var skin2 = Phaser.Math.RND.pick(skins);
        // var skin3 = Phaser.Math.RND.pick(skins);
        // var skin4 = Phaser.Math.RND.pick(skins);
   
        this.donut01 = new Donut(this, Phaser.Math.Between(50, 400 ), centerY - centerX, Phaser.Math.RND.pick(['boom','ice','choco','straw','cupcake','watermelon','sandwich']), 0, 5).setOrigin(0, 0);
        // this.donut02 = new Donut(this, centerX + 170, centerY - centerX, skin2, 0, 30).setOrigin(0, 0);
        // this.donut03 = new Donut(this, centerX - 80, centerY - centerX, skin3, 0, 30).setOrigin(0, 0);
        // this.donut04 = new Donut(this, centerX - 200, centerY - centerX, skin4, 0, 30).setOrigin(0, 0);

     
        this.score = 0;
        let scoreConfig = {
            fontFamily: 'Comic Sans MS',
            fontSize: '36px',
            backgroundColor: '#FFFFFF',
            color: '#D43F4D',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        if (game.settings.players == 2) {
            scoreConfig.color = '#7FA8CF';
        }
        this.scoreLeft = this.add.text(centerX / 10, game.config.height / 30, this.score, scoreConfig);
        // this.add.text(centerX + 100, centerY - centerX - 30, 'Press R to restart',{ fontFamily: 'Comic Sans MS',color: '#170469',fontSize:'32px' }).setOrigin(0.5);
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 0, first: 0}),
            frameRate: 30
        });
        
    }
    update() {

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.gameOver = false;
            this.scene.start("menuScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.add.text(game.config.width/2, game.config.height/2 - 30, 'GAME OVER',{ fontFamily: 'Comic Sans MS',color: '#170469',fontSize:'32px' }).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 34, 'Press (R) to Restart',{ fontFamily: 'Comic Sans MS',color: '#170469',fontSize:'32px' }).setOrigin(0.5);
            this.gameOver = true;
            this.sound.play('go');
            this.music.stop();
            //this.scene.start("menuScene");
        }
        this.playBack.tilePositionY += 2;
        if (!this.gameOver) {
            this.player1.update();
            this.donut01.update();
            // this.donut02.update();
            // this.donut03.update();
            // this.donut04.update();
        }

        // if(this.checkCollision(this.player1, this.donut04)) {
        //     // this.player1.reset();
            
        //     this.shipExplode(this.donut04);
        // }
        // if(this.checkCollision(this.player1, this.donut03)) {
        //     // this.player1.reset();
        //     this.shipExplode(this.donut03);
        // }
        // if(this.checkCollision(this.player1, this.donut02)) {
        //     // this.player1.reset();
        //     this.shipExplode(this.donut02);
        // }
        
            if(this.pass(this.donut01)) {
            this.donut01.alpha = 0;
            this.donut01 = new Donut(this, Phaser.Math.Between(50, 400 ), centerY - centerX, Phaser.Math.RND.pick(['boom','ice','choco','straw','cupcake','watermelon','sandwich']), 0, 5).setOrigin(0, 0);
            this.donut01.alpha = 1;
        }
        if(this.checkCollision(this.player1, this.donut01)) {
            this.donut01.alpha = 0;
            // this.player1.reset();
            if (this.donut01.texture.key == 'boom'){
                this.sound.play('boom');
                
        // create explosion sprite at ship's position
                let boom = this.add.sprite(this.donut01.x, this.donut01.y, 'explodsion').setOrigin(0, 0);
                boom.anims.play('explode');             // play explode animation
                boom.on('animationcomplete', () => {    // callback after anim completes
                                // make ship visible again
                  
                boom.destroy();                       // remove explosion sprite
                }); 
                this.score -= 20;
                this.scoreLeft.text = this.score;
            }
        
            else {
                this.sound.play('ding');
                this.score += this.donut01.points;
                this.scoreLeft.text = this.score;
            }
            this.donut01 = new Donut(this, Phaser.Math.Between(50, 400 ), centerY - centerX, Phaser.Math.RND.pick(['boom','ice','choco','straw','cupcake','watermelon','sandwich']), 0, 5).setOrigin(0, 0);
            this.donut01.alpha = 1;   
            
            if (this.score < 0) {
                this.level = this.add.text(game.config.width/2, game.config.height/2 - 30, 'GAME OVER',{ fontFamily: 'Comic Sans MS',color: '#170469',fontSize:'32px' }).setOrigin(0.5);
                this.add.text(game.config.width/2, game.config.height/2 + 34, 'Press (R) to Restart',{ fontFamily: 'Comic Sans MS',color: '#170469',fontSize:'32px' }).setOrigin(0.5);
                this.gameOver = true;
                this.sound.play('go');
                this.music.stop();
            }
            
            
        }


    
        

        
        
    }
    pass(donut) {
        if(donut.y >= centerX + centerY + 80) {
            return true;
        }
        else {
            return false;
        }
    }
    checkCollision(rocket, ship) {
        // simple AABB checking
        
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y) {
                return true;
        }
        else {
            return false;
        }
    }
}