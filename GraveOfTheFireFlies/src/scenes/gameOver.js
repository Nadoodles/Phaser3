class GameOver extends Phaser.Scene {
    constructor() {
      super({ key: 'gameOver' });
    }
  
    create() {
      let gameConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        color: '#FFFFFF',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
      // add text to display game over message
      this.add.text(game.config.width/2, game.config.height/4, 'GAME OVER', gameConfig).setOrigin(0.5);
  
      // add text to prompt player to restart
      this.add.text(game.config.width/2, game.config.height*3/4, 'Press SPACE to Menu or R to Restart', gameConfig).setOrigin(0.5);
  
      // add keyboard input to restart game
      this.input.keyboard.on('keydown-SPACE', () => {
        this.scene.start('menuScene');
      });

      this.input.keyboard.on('keydown-R', () => {
        this.scene.start('scene1');
      });
    }
  }
  