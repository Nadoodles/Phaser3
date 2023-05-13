let config = {
    type: Phaser.AUTO,
    width:  961,
    height: 640,
    scene: [ Menu, Play ],
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
let keyUP, keyDOWN, keyLEFT, keyRIGHT;

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = 30;
let borderPadding = 10;

/*
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

let game = new Phaser.Game(config);

let borderUISize = 30;
let borderPadding = 10;
*/




