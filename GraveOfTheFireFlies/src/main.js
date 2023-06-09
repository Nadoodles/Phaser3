let config = {
  type: Phaser.CANVAS,
  render: {
      pixelArt: true
  },
  width: 630,
  height: 450, 
  phsyics: {
      default: "arcade", 
      arcade: {
          debug: true
      }
  },
  zoom: 2, 
  scene: [Menu, Scene1, Scene2, Scene3]
}

let game = new Phaser.Game(config);

// Set UI sizes
let borderUISize = game.config.height / 3;
let borderPadding = borderUISize / 3; 

// Reserve keyboard vars
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyR, keyS, keyC;