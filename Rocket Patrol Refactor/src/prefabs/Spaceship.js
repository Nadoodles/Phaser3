class Spaceship extends Phaser.GameObjects.Sprite { 
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame); 
        scene.add.existing(this); 
        this.points = pointValue; 
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.moving = false; 
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed; 

        // wrap around from left edge to right edge
        if (this.x <= 0 - this.width) {
            this.reset(); 
        }

        // left/right movement
        if (!this.moving) {
            if (keyO.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed; 
            }
            else if (keyP.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
    }

    reset() {
        this.x = game.config.width; 
    }
}