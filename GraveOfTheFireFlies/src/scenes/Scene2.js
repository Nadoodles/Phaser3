class Scene2 extends Phaser.Scene {
    constructor() {
        super("scene2"); 

            // Declare cursors variable
            this.cursors = null;
            this.VEL = 50;
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
        this.load.image('food', './assets/crabmeat.png');
        this.load.image('tilesetImage', './assets/tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON', './assets/scenetilemap.json');
    }

    spawnFire() {
        // Generate random coordinates within the game world
        const x = Phaser.Math.Between(0, this.game.config.width);
        const y = Phaser.Math.Between(0, this.game.config.height);
    
        // Create the fire sprite
        this.physics.add.existing(this.fireSrprite); // Enable physics for collision detection
    
        // Set a timer to spawn the next fire
        const spawnInterval = Phaser.Math.Between(2000, 5000); // Randomize the interval
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
        this.slime = this.physics.add.sprite(0, this.game.config.height, 'slime', 0);
        this.anims.create({
            key: 'jiggle',
            frameRate: 8, 
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0, 
                end: 1
            })
        })
        this.slime.play('jiggle')

        this.slime.body.setCollideWorldBounds(true)

        this.food = this.add.sprite(100, 300, 'food');
        this.food1 = this.add.sprite(100, 350, 'food');


        // enable Collisoin
        treeLayer.setCollisionByProperty({collides: true})

        //cameras 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.slime, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.setZoom(2,2);
        //input
        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(this.slime, treeLayer);
        treeLayer.setCollisionBetween(1452, 1586)
        treeLayer.setCollisionBetween(0, 3)
        treeLayer.setCollisionBetween(33, 36)
        treeLayer.setCollisionBetween(66, 69)

        this.points = 0;
        this.points1 = 0;
    }

    // check collision
    checkCollision(slime, food){
        // simple AABB checking
        if(slime.x < food.x + food.width &&
            slime.x + slime.width > food.x &&
            slime.y < food.y + food.height &&
            slime.height + slime.y > food.y){
            return true;
        } else{
            return false;
        }
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
        this.slime.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.physics.add.collider(this.slime, this.fireSprite, () => {
            this.scene.start("gameOver");
          });

        // check collisions
        if(this.checkCollision(this.slime, this.food)){
            this.food.destroy();
            this.points = 1;
            console.log(this.points);
            
        }

        if(this.checkCollision(this.slime, this.food1)){
            this.food1.destroy();
            this.points1 = 1;
            console.log(this.points1);
            
        }
        
        if(this.points == 1 && this.points1 == 1){
            this.winner = this.add.text(50, 50, "winner", 0);
        }

    }

     
    
}