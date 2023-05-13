class Trunk extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      this.moveSpeed = 3;
      this.timer = 0;
    }
  
    update() {
        //move spaceship left
        this.x -= this.moveSpeed; 
    
        // wrap around from left edge to right edge
        if (this.x <= 0 - this.width) {
            this.reset(); 
        }

  
      // check if off the screen
      if (this.x < -this.width) {
        // reset position and timer
        this.x = game.config.width + this.width;
        this.timer = Phaser.Math.Between(1000, 10000); // respawn after 10 seconds
      }
    }

    reset() {
        this.x = game.config.width; 
    }

}
  