class GameOver extends Phaser.Scene {
    constructor() {
      super({ key: 'gameOver' });
    }
  
    create() {
      // add text to display game over message
      this.add.text(400, 200, 'GAME OVER', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
  
      // add text to prompt player to restart
      this.add.text(400, 300, 'Press SPACE to restart', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
  
      // add keyboard input to restart game
      this.input.keyboard.on('keydown-SPACE', () => {
        this.scene.start('playScene');
      });
    }
  }