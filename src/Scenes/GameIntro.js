class GameIntro extends Phaser.Scene {
    constructor() {
        super("game-intro");
    } 

    preload() {
        this.load.image('game_bg', 'assets/Main\ Game\ Scene.png');
    }

    create() {
        this.background = this.add.image(0, 0, 'game_bg').setOrigin(0);
        escKey = this.input.keyboard.addKey('ESC');
        keyLeft = this.input.keyboard.addKey(37);
        keyRight = this.input.keyboard.addKey(39);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(escKey)) {
            this.scene.start('main-menu');
        } else if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            this.scene.start('game')
        }
    }
}
