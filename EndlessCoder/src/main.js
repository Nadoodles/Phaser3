let config = {
    type: Phaser.AUTO,
    width:  961,
    height: 640,
    scene: [ Menu, Play ],
    title: "Duckie Dodge", 
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH
  }
  }
console.log(window.innerWidth-20); 
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize / 3; 




