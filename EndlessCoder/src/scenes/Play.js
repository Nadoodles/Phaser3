class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    preload() {
        // load images/tile sprites
        this.load.image('river', './assets/river2.png');
        this.load.image('duck', './assets/duck.png');
        this.load.image('trunk', './assets/treeTrunk.png');
        this.load.image('boulder', './assets/boulder.png');
        this.load.audio('duckSound', './assets/duck-quack5.wav');
    }

    create() {
        // Create a graphics object
        const graphics = this.add.graphics();

        // Set the fill color and alpha of the rectangle
        graphics.fillStyle(0x000000, 0.5);

        // Draw the rectangle
        graphics.fillRect(0, 0, this.game.config.width, 50);

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
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // add duck (d)
        this.d1Duck = new Duck(this, x, y, 'duck').setOrigin(0, 0); 

        // add tree trunk
        this.tTrunk = new Trunk(this, x, y, 'trunk').setOrigin(0.0);

        // add boulder 
        this.Boulder = new Boulder(this, x, y, 'boulder').setOrigin(0.0); 
    
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
        
        // spawn tree trunk
        if (!this.trunkSpawned && this.tTrunk.x > this.game.config.width) {
            this.tTrunk = new Trunk(this, this.game.config.width, Phaser.Math.Between(0, this.game.config.height), 'trunk').setOrigin(0, 0);
            this.trunkSpawned = true;
        }

        // spawn boulder trunk
        if (!this.BoulderSpawned && this.Boulder.x > this.game.config.width) {
            this.Boulder = new Boulder(this, this.game.config.width, Phaser.Math.Between(0, this.game.config.height), 'boulder').setOrigin(0, 0);
            this.BoulderSpawned = true;
        }

        if (this.d1Duck.totalLives <= 0) {
            this.gameOver = true; 
            this.scene.start('gameOver');
        }
        
        

        // check collisions
        if(this.checkCollision(this.d1Duck, this.tTrunk)) {
            this.tTrunk.reset();
            this.d1Duck.totalLives -= 1;
        }
        
        // check collisions with boulder
        if (this.collisionBoulder(this.d1Duck, this.Boulder)) {
            this.Boulder.reset(); 
            this.d1Duck.totalLives -= 2; 
        }

        if(!this.gameOver) {
            this.d1Duck.update();
            this.tTrunk.update(); 
            this.Boulder.update(); 
        }

        console.log(this.d1Duck.totalLives);
    }

    checkCollision(duck, trunk) {
        // simple AABB checking
        if (duck.x < trunk.x + trunk.width && 
            duck.x + duck.width > trunk.x && 
            duck.y < trunk.y + trunk.height &&
            duck.height + duck.y > trunk.y) {
                return true;
        } else {
            return false;
        }
    }

    collisionBoulder(duck, boulder) {
        if (duck.x < boulder.x + boulder.width &&
            duck.x + duck.width > boulder.x &&
            duck.y < boulder.y + boulder.height &&
            duck.height + duck.y > boulder.y) {
                return true; 
            }
            else { 
                return false; 
            }
    }
}