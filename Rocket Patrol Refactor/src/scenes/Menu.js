class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
  }

  create() {
      // menu text configuration
      let menuConfig = {
          fontFamily: 'Courier',
          fontSize: '20px',
          fontWeight: "heavy",
          //backgroundColor: '#F3B141',
          color: '#FFFFFF',
          align: 'right',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }

      let rectangleGreen = {
        fontFamily: 'Courier',
        fontWeight: "heavy",
        fontSize: '30px',
        height: '100px',
        width: '100px',
        //display: inline-block,
        backgroundColor:'	#008000'
      }

      let rectangleRed = {
        fontFamily: 'Courier',
        fontWeight: "heavy",
        fontSize: '30px',
        height: '100px',
        width: '100px',
        //display: inline-block,
        backgroundColor:'#ff0000'
      }
      
      // show menu text
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Use A or D to move ship', menuConfig).setOrigin(0.5);
      //menuConfig.backgroundColor = '#00FF00';
      menuConfig.color = '#FFFFFF';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice', rectangleGreen).setOrigin(0.9, -2.0);
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, '→ for Expert', rectangleRed).setOrigin(-0.3, -2.0);

      this.add.text(game.config.width/2, game.config.height/2 + borderUISize * 2 + borderPadding , 'Use O to speed up spaceships or P to stop them', menuConfig).setOrigin(0.5);


      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // Novice mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // Expert mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
    }
}