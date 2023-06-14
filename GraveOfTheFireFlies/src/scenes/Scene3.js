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
      
   }

   create() {
      const map = this.add.tilemap("tilemapJSON")
      const tileset = map.addTilesetImage('tileset', 'tilesetImage')
 

      // add layer
      const bgLayer = map.createLayer('background', tileset, 0, 0)
      
      // add fireflies
      
      this.firefly1 = this.add.sprite(310, 300, 'firefly');
      this.firefly2 = this.add.sprite(100, 350, 'firefly');
      this.firefly3 = this.add.sprite(55, 100, 'firefly');
      this.firefly4 = this.add.sprite(395, 430, 'firefly');
      this.firefly5 = this.add.sprite(360, 150, 'firefly');
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
      vision.scale = 9.5
   
      rt.mask = new Phaser.Display.Masks.BitmapMask(this, vision)
      rt.mask.invertAlpha = true


      const firefliesGroup = this.add.group({ depth: bgLayer.depth - 1 })

    
    
      // cameras 
      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      this.cameras.main.startFollow(this.seita, true, 0.25, 0.25);
      this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);
    
      // input
      this.cursors = this.input.keyboard.createCursorKeys();
      this.vision = vision

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
         console.log(this.points)         
      }

      if(this.checkCollision(this.seita, this.firefly2)){
         this.firefly2.destroy();
         this.points1 = 1;  
         console.log(this.points1)         

      }

      if(this.checkCollision(this.seita, this.firefly3)){
         this.firefly3.destroy();
         this.points2 = 1;  
         console.log(this.points2)         
      
      }

      if(this.checkCollision(this.seita, this.firefly4)){
         this.firefly4.destroy();
         this.points3 = 1;    
         console.log(this.points3)         

      }

      if(this.checkCollision(this.seita, this.firefly5)){
         this.firefly5.destroy();
         this.points4 = 1;    
         console.log(this.points4)         

      }

      if(this.points == 1 && this.points1 == 1 && this.points2 == 1 
         && this.points3 == 1 && this.points4 == 1){
            this.scene.start("menuScene");
      }
   }
}