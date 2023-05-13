class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    preload() {
        // load images/tile sprites
        this.load.image('river', './assets/river2.png');
        this.load.image('duck', './assets/duck.png');
        this.load.image('trunk', './assets/treeTrunk.png')
        this.load.audio('duckSound', './assets/duck-quack5.wav');
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
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // add duck (d)
        this.d1Duck = new Duck(this, x, y, 'duck').setOrigin(0, 0); 

        // add tree trunk
        this.tTrunk = new Trunk(this, x, y, 'trunk').setOrigin(0.0);
    
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
        
        

        // check collisions
        /*if(this.checkCollision(this.d1Duck, this.t1Trunk)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }*/

        if(!this.gameOver) {
            this.d1Duck.update();
            this.tTrunk.update(); 
        }
    }

    /*checkCollision(duck, trunk) {
        console.log(duck);
        console.log(trunk);
        // simple AABB checking
        if (duck.x < trunk.x + trunk.width && 
            duck.x + duck.width > trunk.x && 
            duck.y < trunk.y + trunk.height &&
            duck.height + duck.y > trunk. y) {
                return true;
        } else {
            return false;
        }
    }*/
}