class Rules extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {
        let creditsConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // add credits text
        this.add.text(400, 200, 'Credits', creditsConfig).setOrigin(0.5);
        this.add.text(400, 300, 'Duck sound: https://wavlist.com/animals-birds-ducks-geese-10-wavs/', creditsConfig).setOrigin(0.5);
        this.add.text(400, 400, 'lobby music: https://freesound.org/people/LightMister/sounds/681744/', creditsConfig).setOrigin(0.5);

    
        // add text to prompt player to go back to menu
        this.add.text(400, 500, 'Press (M) to go back to Menu', creditsConfig).setOrigin(0.5);
    
        // add keyboard input to go back to menu
        this.input.keyboard.on('keydown-M', () => {
          this.scene.start('menuScene');
        });
      }

    
}