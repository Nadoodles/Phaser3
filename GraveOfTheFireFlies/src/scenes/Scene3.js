class Scene3 extends Phaser.Scene {
    constructor() {
        super("scene3"); 
   // Declare cursors variable
   this.cursors = null
   this.VEL = 50
   this.vision = null
   }  

   preload() {
      this.load.image('seita', './assets/seitaSmall.png');
      this.load.image('firefly', './assets/firefly.png');
      this.load.image('tilesetImage', './assets/tileset.png');
      this.load.tilemapTiledJSON('tilemapJSON', './assets/scenetilemap.json');
      this.load.bitmapFont('Font', './assets/gem.png', './assets/gem.xml');
      this.load.audio('bgms3', './assets/fireflybgm.mp3');
      this.load.audio('pickup', './assets/pickupF.mp3');

   }

   create() {
      const map = this.add.tilemap("tilemapJSON")
      const tileset = map.addTilesetImage('tileset', 'tilesetImage')
 

      // add layer
      const bgLayer = map.createLayer('background', tileset, 0, 0)
      
      // add fireflies

      this.firefly1 = this.add.sprite(525, 400, 'firefly');
      this.firefly2 = this.add.sprite(100, 50, 'firefly');
      this.firefly3 = this.add.sprite(120, 380, 'firefly');
      this.firefly4 = this.add.sprite(550, 230, 'firefly');
      this.firefly5 = this.add.sprite(500, 70, 'firefly');
      this.firefly6 = this.add.sprite(200, 180, 'firefly');

        // Create tweens for firefly movement
      this.createFireflyTween(this.firefly1, 600, 400);
      this.createFireflyTween(this.firefly2, 150, 200);
      this.createFireflyTween(this.firefly3, 220, 420);
      this.createFireflyTween(this.firefly4, 600, 250);
      this.createFireflyTween(this.firefly5, 550, 100);
      this.createFireflyTween(this.firefly6, 250, 200);


      // Add player
      this.seita = this.physics.add.sprite(315, 225, 'seita', 0);

      const width = 1300;
      const height = 1000;

      // make a RenderTexture that is the size of the screen
      const rt = this.make.renderTexture({
         width,
         height
      }, true)

      // fill it with black
      rt.fill(0x000000, 1)

      // draw the floorLayer into it
      rt.draw(bgLayer)

      // set a dark blue tint
      rt.setTint(0x0a2948)

      const vision = this.make.image({
         x: this.seita.x,
         y: this.seita.y,
         key: 'vision',
         add: false
      })
      vision.scale = 2.5
   
      rt.mask = new Phaser.Display.Masks.GeometryMask(this, vision)
      rt.mask.invertAlpha = true


      const firefliesGroup = this.add.group({ depth: bgLayer.depth - 1 })

      this.points, this.points1, this.points2, this.points3, this.points4, this.points5 = 0;

    
      // cameras 
      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      this.cameras.main.startFollow(this.seita, true, 0.25, 0.25);
      this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);
    
      // input
      this.cursors = this.input.keyboard.createCursorKeys();
      this.vision = vision
      
      this.pickupSound = this.sound.add('pickup', {volume: 0.3});
      this.bgm = this.sound.add('bgms3', { 
         mute: false,
         volume: 0.3,
         rate: 1,
         loop: true 
      });
      this.bgm.play();
   }


   createFireflyTween(firefly, targetX, targetY) {
      const duration = Phaser.Math.Between(2000, 4000); // Randomize the duration
      this.tweens.add({
         targets: firefly,
         x: targetX,
         y: targetY,
         duration: duration,
         yoyo: true,
         repeat: -1
      });
   }

   // check collision
   checkCollision(seita, firefly){
      // simple AABB checking
      if(seita.x < firefly.x + firefly.width &&
         seita.x + seita.width > firefly.x &&
         seita.y < firefly.y + firefly.height &&
         seita.height + seita.y > firefly.y){
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
      this.seita.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y);

      if (this.vision) {
         this.vision.x = this.seita.x
         this.vision.y = this.seita.y
      }

      // Update the fog of war position
      if (this.vision) {
         this.vision.x = this.seita.x;
         this.vision.y = this.seita.y;
      }

      // check collisions
      if(this.checkCollision(this.seita, this.firefly1)){
         this.firefly1.destroy();
         this.points = 1;   
         this.pickupSound.play();
      }

      if(this.checkCollision(this.seita, this.firefly2)){
         this.firefly2.destroy();
         this.points1 = 1;  
         this.pickupSound.play();

      }

      if(this.checkCollision(this.seita, this.firefly3)){
         this.firefly3.destroy();
         this.points2 = 1; 
         this.pickupSound.play();
       
      }

      if(this.checkCollision(this.seita, this.firefly4)){
         this.firefly4.destroy();
         this.points3 = 1;  
         this.pickupSound.play();
  
      }

      if(this.checkCollision(this.seita, this.firefly5)){
         this.firefly5.destroy();
         this.points4 = 1;    
         console.log(this.points4)         
      }

      if(this.checkCollision(this.seita, this.firefly6)){
         this.firefly6.destroy();
         this.points5 = 1;    
         console.log(this.points5)         
      }

      if(this.points == 1 && this.points1 == 1 && this.points2 == 1 
         && this.points3 == 1 && this.points4 == 1 && this.points5 == 1){
            this.scene.start("menuScene");
            this.bgm.stop();
      }
   }

}