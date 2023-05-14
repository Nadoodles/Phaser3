/*
Name: Jose Nadales
Game Name: Duck Escape
Hours: 22 Hours
Creative Tilt: I don't believe I added much creativity. I started on the assignment late, so I wasn't able to add much creativity. This is 
similar to the rocket game with some adjustments. I will do better in the next assignment. 
*/

let config = {
    type: Phaser.AUTO,
    width:  961,
    height: 640,
    scene: [ Menu, Play, GameOver, Rules, Credits],
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
// reserve keyboard vars
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyR, keyS, keyC;

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = 30;
let borderPadding = 10;





