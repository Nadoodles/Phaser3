class Rules extends Phaser.Scene {
    constructor() {
        super("rulesScene");
    }
   
    preload(){
        this.load.image('bgImage1', './assets/bgImage2.png')

        this.load.bitmapFont('Font', './assets/gem.png', './assets/gem.xml');
    }

    create() {
        // add bgImage
        this.bgImage = this.add.tileSprite(0,0, 630, 450, 'bgImage1').setOrigin(0,0);

        // add credits text
        this.add.bitmapText(300, 50, 'Font', 'Rules:', 12).setOrigin(0.5);
        this.add.bitmapText(300, 75, 'Font', 'Scene 1:', 12).setOrigin(0.5)
        this.add.bitmapText(300, 100, 'Font', 'Your goal is to dodge the fires and reach the exit sign.', 12).setOrigin(0.5);
        this.add.bitmapText(300, 125, 'Font', 'You must find the exit sign and escape to safety. ', 12).setOrigin(0.5);

        this.add.bitmapText(300, 150, 'Font', 'Scene 2: ', 12).setOrigin(0.5)
        this.add.bitmapText(300, 175, 'Font', 'Gather all five materials on the field to complete the level', 12).setOrigin(0.5)

        this.add.bitmapText(300, 200, 'Font', 'Scene 3: ', 12).setOrigin(0.5)
        this.add.bitmapText(300, 225, 'Font', 'Collect all six the fireflies and you complete the level', 12).setOrigin(0.5)

        this.add.bitmapText(300, 250, 'Font', "Use the arrow keys to navigate.", 12).setOrigin(0.5)

    
        // add text to prompt player to go back to menu
        this.add.bitmapText(300, 275, 'Font', 'Press (M) to go back to Menu', 12).setOrigin(0.5);
    
        // add keyboard input to go back to menu
        this.input.keyboard.on('keydown-M', () => {
          this.scene.start('menuScene');
        });
      }

    
}