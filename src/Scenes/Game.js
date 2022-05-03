class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        
    }

    create() {

        // text config object(s)
        this.statusConfig = {
            fontSize: '18px',
            wordWrap: {
                width: 520
            }
        }
        // basic geometry setup
        this.background = this.add.rectangle(0, 0, 960, 720, 0x000044).setOrigin(0);
        this.add.line(0, 0, 720, 0, 720, 720, 0xffffff).setOrigin(0).setLineWidth(8);
        this.add.line(0, 0, 720, 120, 960, 120, 0xffffff).setOrigin(0).setLineWidth(8);
        this.profilePic = this.add.rectangle(10, 10, 180, 180, 0xfacade).setOrigin(0);
        // textboxes and other imagery
        this.statusPost = this.add.text(200, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", this.statusConfig);
        keyLeft = this.input.keyboard.addKey(37);
        keyRight = this.input.keyboard.addKey(39);

    }

    update() {

    }
}
