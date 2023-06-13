class Fire extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      this.moveSpeed = 3;
      this.timer = 1000;
    }
  
    update() {
        // move trunk to the left
        this.x -= this.moveSpeed;

        // reset trunk position if it goes off screen
        if(this.x < -this.width) {
            this.x = game.config.width;
            this.y = Phaser.Math.Between(0, game.config.height - this.height);
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
  