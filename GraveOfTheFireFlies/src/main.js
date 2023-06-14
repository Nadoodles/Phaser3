// Movie: Grave of the Fireflies
// Partner; Brian Camillo

let config = {
  type: Phaser.AUTO,
  render: {
      pixelArt: true
  },
  width: 630,
  height: 450,
  scale:{
    autoCenter: Phaser.Scale.CENTER_BOTH
    }, 
  physics: {
      default: "arcade", 
      arcade: {
          debug: true
      }
  },
  zoom: 2, 
  scene: [Menu, Scene1, Scene2, Scene3, GameOver, Rules, Credits]
}

let game = new Phaser.Game(config);

// Set UI sizes
let borderUISize = game.config.height / 3;
let borderPadding = borderUISize / 3; 

// Reserve keyboard vars
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyR, keyS, keyC, key1, key2, key3;