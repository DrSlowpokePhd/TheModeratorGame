class NewUI extends Phaser.Scene {
    constructor() {
        super("ui-test");
    }

    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'lib/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.image('f1-car', 'assets/Formula2.png');
        this.load.image('blu-button', 'assets/blue_button07.png');
    }

    create() {
        this.background = this.add.image(0, 0, 'f1-car').setOrigin(0);
        this.button1 = premadeButton(300, 300, 'blu-button', "button", this) ;
        this.button = this.rexUI.add.buttons({
            x: 100,
            y: 100,
            width: 200,
            height: 50,
            buttons: [ 
                this.button1
            ]
        })
    }

    update() {

    }
}
