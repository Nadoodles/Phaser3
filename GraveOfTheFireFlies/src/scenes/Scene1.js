class Scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
        
        // Declare cursors variable
        this.cursors = null;
        this.VEL = 50;
        this.fireSprite = null; // Declare fireSprite as a class member variable


    }

    preload() {
        this.load.spritesheet('slime', './assets/slime.png', {
            frameWidth: 16, 
            frameHeight: 16
        });
        this.load.spritesheet('fire', './assets/fire.png', {
            frameWidth: 16, 
            frameHeight: 16
        });
        this.load.image('seita', './assets/seitaSmall.png');
        this.load.image('exit', './assets/exitsign.png')
        this.load.image('tilesetImage', './assets/tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON', './assets/scenetilemap.json');
        this.load.audio('bgmS1', './assets/bgms1.mp3');
        this.load.audio('winner', './assets/winner.wav');
    }

    spawnFire() {
        // Generate random coordinates within the game world
        const x = Phaser.Math.Between(0, this.game.config.width);
        const y = Phaser.Math.Between(0, this.game.config.height);
    
        // Create the fire sprite
        this.fireSprite = this.add.sprite(x, y, 'fire');
        this.physics.add.existing(this.fireSprite); // Enable physics for collision detection
    
        // Set a timer to spawn the next fire
        const spawnInterval = Phaser.Math.Between(500, 1000); // Randomize the interval
        this.fireSpawnTimer = this.time.delayedCall(spawnInterval, () => {
          this.fireSpawned = false; // Reset the fireSpawned flag
          this.spawnFire(); // Call the spawnFire function again
        });
      }


    create() {
        const map = this.add.tilemap("tilemapJSON")
        const tileset = map.addTilesetImage('tileset', 'tilesetImage')

        // add layer
        const bgLayer = map.createLayer('background', tileset, 0, 0)
        const terrainLayer = map.createLayer('path', tileset, 0, 0)
        const treeLayer = map.createLayer('houses', tileset, 0, 0).setDepth(100)

        // Add player
        this.seita = this.physics.add.sprite(0, this.game.config.height, 'seita', 0);
        this.anims.create({
            key: 'jiggle',
            frameRate: 8, 
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0, 
                end: 1
            })
        })
        //this.slime.play('jiggle')

        this.seita.body.setCollideWorldBounds(true)

        // enable Collisoin
        treeLayer.setCollisionByProperty({collides: true})

        //cameras 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.seita, true, 0.25, 0.25)
        this.cameras.main.setZoom(2, 2);
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels)

        //input
        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(this.seita, treeLayer);
        treeLayer.setCollisionBetween(1452, 1586)
        treeLayer.setCollisionBetween(0, 3)
        treeLayer.setCollisionBetween(33, 36)
        treeLayer.setCollisionBetween(66, 69)

       
        this.spawnFire()

        // added sfx
        this.winner = this.sound.add('winner', {volume: 0.3});
        this.bgm = this.sound.add('bgmS1', { 
			mute: false,
			volume: 0.3,
			rate: 1,
			loop: true 
		});
		this.bgm.play();
       

        const exitSign = this.add.sprite(this.game.config.width - 140, 50, 'exit');
        this.physics.add.existing(exitSign);
        this.physics.add.collider(this.seita, exitSign, () => {
            this.scene.start("scene2")
            this.bgm.stop();
            this.winner.play();
          });

   
         
    }

    update() {
        this.direction = new Phaser.Math.Vector2(0);

        if (this.cursors.left.isDown) {
            this.direction.x = -1;
        } else if (this.cursors.right.isDown) {
            this.direction.x = 1;
        }
    
        if (this.cursors.up.isDown) {
            this.direction.y = -1;
        } else if (this.cursors.down.isDown) {
            this.direction.y = 1;
        }
    
        this.direction.normalize();
        this.seita.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)

        this.physics.add.collider(this.seita, this.fireSprite, () => {
            this.bgm.stop();
            this.scene.start("gameOver");
          });

    }


}