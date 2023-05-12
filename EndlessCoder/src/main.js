let config = {
    type: Phaser.AUTO,
    width:  window.innerWidth-20,
    height: 640,
    scene: [ Menu, Play ]
  }
console.log(window.innerWidth-20); 
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize / 3; 




