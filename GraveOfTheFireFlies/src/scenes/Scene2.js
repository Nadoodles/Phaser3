class Scene2 extends Phaser.Scene {
    constructor() {
        super("scene2"); 

            // Declare cursors variable
            this.cursors = null;
            this.VEL = 50;
    }

    preload() {
        this.load.image('food', './assets/crabmeat.png');
        this.load.image('seita', './assets/seitaSmall.png');
        this.load.image('tilesetImage', './assets/tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON', './assets/scenetilemap.json');
        this.load.audio('pickup', './assets/pickup.mp3');
        this.load.audio('bgmS2', './assets/bgm.mp3');
        this.load.audio('winner', './assets/winner.wav');
    }
    
    create() {
        const map = this.add.tilemap("tilemapJSON")
        const tileset = map.addTilesetImage('tileset', 'tilesetImage')

        // add layer
        const bgLayer = map.createLayer('background', tileset, 0, 0)
        const terrainLayer = map.createLayer('path', tileset, 0, 0)
        const treeLayer = map.createLayer('houses', tileset, 0, 0).setDepth(100)

        // Add player
        this.seita = this.physics.add.sprite(600, 150, 'seita', 0);
        this.anims.create({
            key: 'jiggle',
            frameRate: 8, 
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0, 
                end: 1
            })
        })

        this.seita.body.setCollideWorldBounds(true)

        this.food = this.add.sprite(310, 300, 'food');
        this.food1 = this.add.sprite(100, 350, 'food');
        this.food2 = this.add.sprite(55, 100, 'food');
        this.food3 = this.add.sprite(395, 430,'food');

        this.food4 = this.add.sprite(360, 150, 'food');



        // enable Collisoin
        treeLayer.setCollisionByProperty({collides: true})

        //cameras 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.seita, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.setZoom(3,3);
        //input
        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(this.seita, treeLayer);
        treeLayer.setCollisionBetween(1452, 1586)
        treeLayer.setCollisionBetween(0, 3)
        treeLayer.setCollisionBetween(33, 36)
        treeLayer.setCollisionBetween(66, 69)

        this.points, this.points1, this.points2, this.points3, this.points4 = 0;

        // added sfx
        this.pickupSound = this.sound.add('pickup', {volume: 0.3});
        this.winner = this.sound.add('winner', {volume: 0.3});
        this.bgm = this.sound.add('bgmS2', { 
			mute: false,
			volume: 0.3,
			rate: 1,
			loop: true 
		});
		this.bgm.play();
    }

    // check collision
    checkCollision(seita, food){
        // simple AABB checking
        if(seita.x < food.x + food.width &&
            seita.x + seita.width > food.x &&
            seita.y < food.y + food.height &&
            seita.height + seita.y > food.y){
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
        this.seita.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)

        // check collisions
        if(this.checkCollision(this.seita, this.food)){
            this.food.destroy();
            this.points = 1;   
            this.pickupSound.play();
        }

        if(this.checkCollision(this.seita, this.food1)){
            this.food1.destroy();
            this.points1 = 1;        
            this.pickupSound.play();
        }

        if(this.checkCollision(this.seita, this.food2)){
            this.food2.destroy();
            this.points2 = 1;   
            this.pickupSound.play();
         
        }

        if(this.checkCollision(this.seita, this.food3)){
            this.food3.destroy();
            this.points3 = 1;      
            this.pickupSound.play();
        }

        if(this.checkCollision(this.seita, this.food4)){
            this.food4.destroy();
            this.points4 = 1; 
            this.pickupSound.play();           
        }

        
        if(this.points == 1 && this.points1 == 1 && this.points2 == 1 
            && this.points3 == 1 && this.points4 == 1){
                this.scene.start("scene3");
                this.bgm.stop();
                this.winner.play();

        }

    }

     
    
}