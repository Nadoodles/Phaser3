class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.audio('menuMusic', './assets/menumusic.mp3');
    }
    

    create() {
        let music = this.sound.add('menuMusic', { loop: true });
        music.play();

        // menu text configuration
        let menuConfig = {
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Duck Escape', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Type (S) to start, (R) for rules, (C) for credits', menuConfig).setOrigin(0.5);
       
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
            this.scene.start("playScene");
        }
        else if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("rulesScene")
        }

        else if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start("creditsScene"); 
        }

    }
}
