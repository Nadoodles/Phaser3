class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
  
    preload() {
    }
  
    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Grave of the FireFlies', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Type (S) to Scene1, (R) for Scene2, (C) for Scene3', menuConfig).setOrigin(0.5);
       
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
  
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("scene1");
        }
        else if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("scene2")
        }

        else if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start("scene3"); 
        }
    }
  }