class Credits extends Phaser.Scene {
    constructor() {
      super('rulesScene');
    }

    create() {
        let rulesConfig = {
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

        // show rules text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Game Rules', rulesConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Avoid obstacles to score points. You have 10 lives', rulesConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Use the arrow keys to move.', rulesConfig).setOrigin(0.5);
        // add text to prompt player to go to menu scene
        this.add.text(400, 400, 'Press (M) to go to menu', rulesConfig).setOrigin(0.5);

        // add keyboard input to go to menu scene
        this.input.keyboard.on('keydown-M', () => {
            this.scene.start('menuScene');
        
        });
    }
}
  
  
  
  
  
  
  