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

    // add text to display score
    this.add.text(game.config.width/2, game.config.height/2, 'Score: ' + Math.trunc(this.scene.settings.data.score), gameConfig).setOrigin(0.5);

    // add text to prompt player to restart
    this.add.text(game.config.width/2, game.config.height*3/4, 'Press SPACE to restart', gameConfig).setOrigin(0.5);

    // add keyboard input to restart game
    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('playScene');
    });

    // add text to prompt player to go to menu scene
    this.add.text(game.config.width/2, game.config.height*3/4 + 50, 'Press (M) to go to menu', gameConfig).setOrigin(0.5);

    // add keyboard input to go to menu scene
    this.input.keyboard.on('keydown-M', () => {
      this.scene.start('menuScene');
    });
  }
}
