class GameOver extends Phaser.Scene {
    constructor() {
      super({ key: 'gameOver' });
    }

    preload() {
      // load backgorund
      this.load.image('bgImage4', './assets/bgImage4.png')
      // load font
      this.load.bitmapFont('Font', './assets/gem.png', './assets/gem.xml');
  }
  
    create() {
      // add bgImage
      this.bgImage = this.add.tileSprite(0,0, 630, 450, 'bgImage4').setOrigin(0,0);
      // add text to display game over message
      this.add.bitmapText(game.config.width/2, game.config.height/4, 'Font', 'GAME OVER', 12).setOrigin(0.5);
  
      // add text to prompt player to restart
      this.add.bitmapText(game.config.width/2, game.config.height*3/4, 'Font','Press SPACE to Menu or R to Restart', 12).setOrigin(0.5);
  
      // add keyboard input to restart game
      this.input.keyboard.on('keydown-SPACE', () => {
        this.scene.start('menuScene');
      });

      this.input.keyboard.on('keydown-R', () => {
        this.scene.start('scene1');
      });
    }
  }
  