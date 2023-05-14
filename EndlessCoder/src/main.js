let config = {
    type: Phaser.AUTO,
    width:  961,
    height: 640,
    scene: [ Menu, Play, GameOver],
    title: "Duckie Dodge", 
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
    }


}
console.log(window.innerWidth-20); 
// reserve keyboard vars
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyR;

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = 30;
let borderPadding = 10;





