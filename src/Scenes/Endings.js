class Endings extends Phaser.Scene {
    constructor() {
        super("ending");
    }

    preload() {
        
    }
    
    create() {
        this.endingTextConfig = {
            wordWrap: {
                width: 520
            } 
        }

        this.endingText = this.add.text(480, 360, "this is the ending scene").setOrigin(0.5);
    }

    update() {

    }

}
