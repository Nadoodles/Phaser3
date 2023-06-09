class Scene2 extends Phaser.Scene {
    constructor() {
        super("scene2"); 
    }

    preload() {

    }

    create() {
        // menu text configuration
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
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Scene2', gameConfig).setOrigin(0.5);
    
        // add text to prompt player to restart
        this.add.text(game.config.width/2, game.config.height*3/4, 'Press SPACE to restart', gameConfig).setOrigin(0.5);

        // add keyboard input to restart game
        this.input.keyboard.on('keydown-SPACE', () => {
        this.scene.start('menuScene');
        });
    
    }

    update() {

    }
    
}