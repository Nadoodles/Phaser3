class Credits extends Phaser.Scene {
    constructor() {
      super('creditsScene');
    }

    create() {
        let creditsConfig = {
            fontFamily: 'Courier',
            fontSize: '13px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // add credits text
        this.add.text(300, 50, 'Creats', creditsConfig).setOrigin(0.5);
        this.add.text(300, 75, 'Created by:', creditsConfig).setOrigin(0.5)
        this.add.text(300, 100, 'Jose Nadales and Brian Camilo', creditsConfig).setOrigin(0.5);
        this.add.text(300, 125, 'Fog of war: ', creditsConfig).setOrigin(0.5);

        this.add.text(300, 150, 'https://blog.ourcade.co/posts/2020/phaser3-fog-of-war-field-of-view-roguelike/', creditsConfig).setOrigin(0.5)
        this.add.text(300, 175, '', creditsConfig).setOrigin(0.5)

        this.add.text(300, 200, '', creditsConfig).setOrigin(0.5)
        this.add.text(300, 225, '', creditsConfig).setOrigin(0.5)

        this.add.text(300, 250, "", creditsConfig).setOrigin(0.5)

    
        // add text to prompt player to go back to menu
        this.add.text(300, 275, 'Press (M) to go back to Menu', creditsConfig).setOrigin(0.5);
    
        // add keyboard input to go back to menu
        this.input.keyboard.on('keydown-M', () => {
          this.scene.start('menuScene');
        });
      }
}
  
  
  
  
  
  
  