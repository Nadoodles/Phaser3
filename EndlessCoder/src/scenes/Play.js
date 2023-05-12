class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    preload() {
        // load images/tile sprites
        this.load.image('river', './assets/river2.png');
        this.load.image('duck', './assets/duck.png');
    }

    create() {
        // Calculate the x and y position to center the river tile sprite
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        const riverWidth = this.textures.get('river').getSourceImage().width;
        const riverHeight = this.textures.get('river').getSourceImage().height;
        const scaleRatio = Math.max(this.game.config.width / riverWidth, this.game.config.height / riverHeight);
        const scaledRiverWidth = riverWidth * scaleRatio;
        const scaledRiverHeight = riverHeight * scaleRatio;
        const x = (this.game.config.width - scaledRiverWidth) / 2;
        const y = (this.game.config.height - scaledRiverHeight) / 2;

        // Place tile sprite
        this.starfield = this.add.tileSprite(x, y, scaledRiverWidth, scaledRiverHeight, 'river').setOrigin(0, 0);
  
       
        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // add duck (d)
        this.d1Duck = new Duck(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'duck').setOrigin(100, 100); 
    
        // GAME OVER flag
        this.gameOver = false;
  
    }

    update() {
        // check key input for restart / menu
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }
  
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        if(!this.gameOver) {
            this.d1Duck.update(); 
        }
    }
}