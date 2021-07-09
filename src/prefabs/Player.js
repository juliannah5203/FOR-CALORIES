class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // add object to exiting scene
        scene.add.existing(this);
        // this.isHitting = false;
        this.moveSpeed = 5;
        //this.sfxRocket = scene.sound.add('sfx_rocket');
    }
    update() {
        // if(!this.isHitting) {
            if(keyLEFT.isDown && this.x >= + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - this.width) {
                this.x += this.moveSpeed;
            }
        // }
        
    
    }
    reset() {
        // this.isHitting = false;
        this.y = game.config.height;
    }
}