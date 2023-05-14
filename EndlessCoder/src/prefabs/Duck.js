class Duck extends Phaser.GameObjects.Sprite { 
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame); 
        scene.add.existing(this); 
        this.score = 0; 
        this.moveSpeed = 5;
        this.duckSound = scene.sound.add('duckSound'); // duck quack 
        this.soundTimer = scene.time.addEvent({
            delay: 1000, // 5000 ms = 5 seconds
            loop: true,
            callback: () => {
              this.duckSound.play();
            },
          });
        this.totalLives = 18; 

    }

    update() {
        // left/right movement
        if (keyLEFT.isDown && this.x > borderUISize) {
            this.x -= this.moveSpeed; 
            //this.duckSound.play();
        }
        else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
            //this.duckSound.play();
        }

        // up/down movement
        if (keyUP.isDown && this.y >= borderUISize) {
            this.y -= this.moveSpeed; 
            //this.duckSound.play();
        }
        else if (keyDOWN.isDown && this.y <= game.config.height - borderUISize - this.height) {
            this.y += this.moveSpeed; 
            //this.duckSound.play();
        }

    }

    reset() {
        this.x = game.config.width; 
    }
}