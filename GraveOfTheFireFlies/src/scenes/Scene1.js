class Scene1 extends Phaser.Scene {
    constructor() {
        super("scene1");
        
        // Declare cursors variable
        this.cursors = null;
        this.VEL = 100;
        this.fireSpawned = false;
        this.fireSpawnTimer = null;

    }

    preload() {
        this.load.spritesheet('slime', './assets/slime.png', {
            frameWidth: 16, 
            frameHeight: 16
        });
        this.load.image('fire', "./assets/fire.png")
        this.load.image('tilesetImage', './assets/tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON', './assets/scenetilemap.json');
    }


    create() {
        const map = this.add.tilemap("tilemapJSON")
        const tileset = map.addTilesetImage('tileset', 'tilesetImage')

        // add layer
        const bgLayer = map.createLayer('background', tileset, 0, 0)
        const terrainLayer = map.createLayer('path', tileset, 0, 0)
        const treeLayer = map.createLayer('houses', tileset, 0, 0).setDepth(100)

        // Add player
        this.slime = this.physics.add.sprite(32, 32, 'slime', 0);
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

        // enable Collisoin
        treeLayer.setCollisionByProperty({collides: true})

        //cameras 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.slime, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels)

        //input
        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(this.slime, treeLayer);
        treeLayer.setCollisionBetween(1452, 1586)
        treeLayer.setCollisionBetween(0, 3)
        treeLayer.setCollisionBetween(33, 36)
        treeLayer.setCollisionBetween(66, 69)

        for (var i = 0; i < 1; i++) {
            this.fire = new Fire(this, Phaser.Math.Between(0, this.game.config.width), Phaser.Math.Between(0, this.game.config.height), 'boufireder').setOrigin(0, 0);
        }

        /*this.fire = new Fire(this, 0, 0, 'fire').setOrigin(0.0);

        // spawn tree trunk
        if (!this.fireSpawned && this.fire.x > this.game.config.width) {
            this.fire = new Trunk(this, this.game.config.width, Phaser.Math.Between(0, this.game.config.height), 'fire').setOrigin(0, 0);
            this.fireSpawned = true;
        }*/
  

         
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
        this.slime.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y);
        const collidingWith = this.slime.body.collidesWith;
        console.log(collidingWith);
        
    }


}


   //create() {
        /*const map = this.make.tilemap({ key: "tilemapJSON" })
        const tileset = this.map.addTilesetImage('tileset', 'tilesetImage');

        // Add layers
        const bgLayer = this.map.createLayer('background', tileset, 0, 0);
        const terrainLayer = this.map.createLayer('path', tileset, 0, 0);
        const treeLayer = this.map.createLayer('houses', tileset, 0, 0).setDepth(100);

        // Add player
        //this.slime = this.physics.add.sprite(32, 32, 'slime', 0);
        //this.slime = new Seita(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'slime').setOrigin(0.5, 0);

        // Input
        this.cursors = this.input.keyboard.createCursorKeys()

        this.slime.setCollideWorldBounds(true);

        // Enable collision
        terrainLayer.setCollisionByProperty({ collides: true });
        treeLayer.setCollisionByProperty({ collides: true });

        // Cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.slime, true, 0.25, 0.25);
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);*/
    //}

    
    /*update() {
        this.direction = new Phaser.Math.Vector2(0);
        if(this.cursors.left.isDown){
            this.direction.x = -1;
        } else if (this.cursors.right.isDown){
            this.direction.x = 1;
        }
       
        if(this.cursors.up.isDown){
            this.direction.y = -1;
        } else if (this.cursors.down.isDown){
            this.direction.y = 1;
        }
        this.direction.normalize();
        this.slime.setVelocity(this.VEL * this.direction.x, this.VEL *
            this.direction.y);


    }*/

/*
        this.direction = new Phaser.Math.Vector2(0);

        // Check if cursors is not null
        if (this.cursors) {
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
            this.slime.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y);
        }*/

                /*this.anims.create({
            key: 'jiggle',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0,
                end: 1
            })
        });
        this.slime.play('jiggle');

        this.slime.setCollideWorldBounds(true);

        // Enable collision
        terrainLayer.setCollisionByProperty({ collides: true });
        treeLayer.setCollisionByProperty({ collides: true });

        // Cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.slime, true, 0.25, 0.25);
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();*/