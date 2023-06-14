class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
  
    preload() {
        // load backgorund
        this.load.image('bgImage', './assets/bgImage.png')
        // load font
        this.load.bitmapFont('Font', './assets/gem.png', './assets/gem.xml');
    }
  
    create() {

        // add bgImage
        this.bgImage = this.add.tileSprite(0,0, 630, 450, 'bgImage').setOrigin(0,0);
        // show menu text
        this.add.bitmapText(game.config.width/2, game.config.height/2.5, 'Font', 'Grave of the FireFlies', 50).setOrigin(0.5);
        this.add.bitmapText(game.config.width/2, game.config.height/2, 'Font', 'Type (1) to Scene1, (2) for Scene2', 32).setOrigin(0.5);
        this.add.bitmapText(game.config.width/2, game.config.height/1.75, 'Font', '(3) for Scene3', 32).setOrigin(0.5);
        this.add.bitmapText(game.config.width/2, game.config.height/1.55, 'Font', '(R) for Rules (C) for Credits', 16).setOrigin(0.5);
       // this.add.bitmapText(game.config.width/2, game.config.height/1.25, 'Font', '(C) for Credits', 16).setOrigin(0.5);

       
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        key3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
    }
  
    update() {
        if (Phaser.Input.Keyboard.JustDown(key1)) {
            this.scene.start("scene1");
        }
        else if (Phaser.Input.Keyboard.JustDown(key2)) {
            this.scene.start("scene2")
        }

        else if (Phaser.Input.Keyboard.JustDown(key3)) {
            this.scene.start("scene3"); 
        }
        else if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("rulesScene"); 
        }
        else if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start("creditsScene"); 
        } 
    }
  }