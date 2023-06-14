class Credits extends Phaser.Scene {
    constructor() {
      super('creditsScene');
    }

    preload(){
      this.load.bitmapFont('Font', './assets/gem.png', './assets/gem.xml');
      this.load.image('bgImage2', './assets/bgImage3.png')
    }

    create() {
        // add bgImage
        this.bgImage = this.add.tileSprite(0,0, 630, 450, 'bgImage2').setOrigin(0,0);
        // add credits text
        this.add.bitmapText(300, 100, 'Font', 'Creats', 12).setOrigin(0.5);
        this.add.bitmapText(300, 125, 'Font',  'Created by:', 12).setOrigin(0.5)
        this.add.bitmapText(300, 150,'Font', 'Jose Nadales and Brian Camilo', 12).setOrigin(0.5);
        this.add.bitmapText(300, 175,'Font', 'Fog of war: ', 12).setOrigin(0.5);

        this.add.bitmapText(300, 200,'Font', 'https://blog.ourcade.co/posts/2020/phaser3-fog-of-war-field-of-view-roguelike/', 12).setOrigin(0.5)
        this.add.bitmapText(300, 225,'Font', 'All music assets are from pixabay', 12).setOrigin(0.5)
        this.add.bitmapText(300, 250,'Font', 'All background image assets are from wallpaperaccess', 12).setOrigin(0.5)

        // add text to prompt player to go back to menu
        this.add.bitmapText(300, 275, 'Font','Press (M) to go back to Menu', 12).setOrigin(0.5);
    
        // add keyboard input to go back to menu
        this.input.keyboard.on('keydown-M', () => {
          this.scene.start('menuScene');
        });
      }
}
  
  
  
  
  
  
  