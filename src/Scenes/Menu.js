class Menu extends Phaser.Scene {
    constructor() {
        super("main-menu");
    } 
    
    preload() {
        this.load.image('menu_bg', 'assets/Main\ Menu.png');
    }

    create() {
        this.background = this.add.image(0, 0, 'menu_bg').setOrigin(0);
        keyRight = this.input.keyboard.addKey(39);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            this.scene.start('game-intro');
        } else if (debugMode) {
            this.scene.start('ui-test');
        }
    }
}
