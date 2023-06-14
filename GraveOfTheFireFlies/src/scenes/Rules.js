class Rules extends Phaser.Scene {
    constructor() {
        super("rulesScene");
    }

    create() {
        let rulesConfig = {
            fontFamily: 'Courier',
            fontSize: '13px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // add credits text
        this.add.text(300, 50, 'Rules:', rulesConfig).setOrigin(0.5);
        this.add.text(300, 75, 'Scene 1:', rulesConfig).setOrigin(0.5)
        this.add.text(300, 100, 'Your goal is to dodge the fires and reach the exit sign.', rulesConfig).setOrigin(0.5);
        this.add.text(300, 125, 'You must find the exit sign and escape to safety. ', rulesConfig).setOrigin(0.5);

        this.add.text(300, 150, 'Scene 2: ', rulesConfig).setOrigin(0.5)
        this.add.text(300, 175, 'Gather all the materials on the field to complete the level', rulesConfig).setOrigin(0.5)

        this.add.text(300, 200, 'Scene 3: ', rulesConfig).setOrigin(0.5)
        this.add.text(300, 225, 'Collect all the fireflies and you complete the level', rulesConfig).setOrigin(0.5)

        this.add.text(300, 250, "Use the arrow keys to navigate.", rulesConfig).setOrigin(0.5)

    
        // add text to prompt player to go back to menu
        this.add.text(300, 275, 'Press (M) to go back to Menu', rulesConfig).setOrigin(0.5);
    
        // add keyboard input to go back to menu
        this.input.keyboard.on('keydown-M', () => {
          this.scene.start('menuScene');
        });
      }

    
}