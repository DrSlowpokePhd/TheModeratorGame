class GameIntro extends Phaser.Scene {
    constructor() {
        super("game-intro");
    } 

    preload() {
        this.load.image('game_bg', 'assets/Main\ Game\ Scene.png');
        this.load.audio('game_start', 'assets/Audio/GameStart.wav')
    }

    create() {
        // this.background = this.add.image(0, 0, 'game_bg').setOrigin(0);
        this.contentWarningUp = true;
        this.backgroundLock = false;
        keyLeft = this.input.keyboard.addKey(37);
        keyRight = this.input.keyboard.addKey(39);
        this.overlay = this.add.rectangle(480, 360, 960, 720, 0x663FA6).setOrigin(0.5);
        this.overlayTitle = this.add.text(480, 200, 
            "Content Warning", 
            { 
                fontSize: '48px', 
                backgroundColor: '#E82A3F'
            }
        ).setOrigin(0.5);
        this.overlayText = this.add.text(480, 400, 
            ["This game contains descriptions of police brutality, terrorist recruitment, and deals with the topics of abortion access, political strife, and the decline of democracy.", 
                "If you do not want to encounter this content, press the left arrow key. If you would like to continue, press the right arrow key."], 
            { 
                fontSize: '24px', 
                wordWrap: {
                    width: 500
                } 
            }).setOrigin(0.5);
        this.backgroundTitle = this.add.text(480, 35, "Context", 
            {
                fontSize: '48px',
                backgroundColor: '#3C7AEB'
            }
        ).setOrigin(0.5);
        this.backgroundText = this.add.text(480, 350, ["The year is 20XX", "and Angel City is about to explode", "", "For the first time in the history of the City, a referendum is occuring about its independence from Angel County. It takes place tomorrow. If successful, Angel City would become an independent city state, free from the rule of an increasingly conservative County Government.", "You work as a content moderator for the popular social media platform uSpeak. Your job is to manually review reported content that cannot be settled through their artificial moderation systems. You get paid a poverty wage and can barely make rent living in Angel City. The results of this Referendum will determine the future.", "But no matter what, rent is due at the end of the month.", "Press the right arrow key to continue"], 
            { 
                fontSize: '24px',
                wordWrap: {
                    width: 700
                }
            }
        ).setOrigin(0.5);
        this.backgroundTitle.visible = false;
        this.backgroundText.visible = false;
        this.gameStartSound = this.sound.add('game_start', { loop: false }) 
    }

    update() {
        this.keyL = Phaser.Input.Keyboard.JustDown(keyLeft);
        this.keyR = Phaser.Input.Keyboard.JustDown(keyRight);
        if (this.keyL) {
            this.scene.start('main-menu');
        } else if (this.keyR) {
            this.gameStartSound.play();
            this.time.addEvent({
                delay: 2500,
                callback: this.scene.start('game'),
                callbackScope: this
            });
            
            
        }
        // console.log(Phaser.Input.Keyboard.JustDown(keyRight));
        
    }
}
