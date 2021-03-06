class Game extends Phaser.Scene {
    constructor() {
        super('game');
        this.tally = {
            armed_demonstration: false,
            assasination: false,
            bombing: false,
            drive_by: false
        }
    }

    preload() {
         this.load.json('posts', './posts.json');
         this.load.audio('approve', 'assets/Audio/approve.wav');
         this.load.audio('ban', 'assets/Audio/ban.wav');
    }

    create() {
        this.tenDie = new nDie(9);
        this.tenDie.roll();
        this.generator = new TextGen("posts.json");
        this.generator.file = this.cache.json.get('posts');
        this.fileCopy = JSON.parse(JSON.stringify(this.cache.json.get('posts')));
        this.postText = this.generator.getPost();
        this.totalPostsSeen = 0;
        this.banSound = this.sound.add('ban', {loop: false});
        this.approveSound = this.sound.add('approve', {loop: false});
        // text config object(s)
        this.statusConfig = {
            fontSize: '24px',
            wordWrap: {
                width: 520
            }
        };
        
        this.rulesConfig = {
            fontSize: '24px',
            wordWrap: {
                width: 240
            }
        };
        
        this.timeConfig = {
            fontSize: '64px'
        }
        
        // basic geometry setup
        this.background = this.add.rectangle(0, 0, 960, 720, 0x423F8C).setOrigin(0);
        this.add.line(0, 0, 720, 0, 720, 720, 0xFFF4BF).setOrigin(0).setLineWidth(8);
        this.add.line(0, 0, 720, 120, 960, 120, 0xFFF4BF).setOrigin(0).setLineWidth(8);
        this.add.rectangle(10, 10, 180, 180, 0xfacade).setOrigin(0);
        this.add.ellipse(100, 100, 45, 45, 0x423F8C).setOrigin(0.5);
        
        // textboxes and other imagery
        this.statusPost = this.add.text(200, 10, this.postText, this.statusConfig);
        keyLeft = this.input.keyboard.addKey(37);
        keyRight = this.input.keyboard.addKey(39);
        this.rules = this.add.text(728, 124, ["Rules:",
            "No violent content",
            "No sexually explicit content",
            "No content from extremist political points of view"],
            this.rulesConfig);
        this.gameTime = 8;
        this.timerEventConfig = this.time.addEvent({delay: 30000, repeat: 8, callback: () => {this.gameTime += 1;}});
        this.gameClock = this.add.text(840, 60, "08:00", this.timeConfig).setOrigin(0.5);
        this.endGameText = this.add.text(480, 360, ["Shift Complete!"],{ fontSize: '64px', backgroundColor: "#8C824D" }).setOrigin(0.5);
        this.endGameSubTitle = this.add.text(480, 400, "Press right arrow to clock out", {fontSize: '32px', backgroundColor: "#8C824D"}). setOrigin(0.5);
        this.endGameText.visible = false;
        this.endGameSubTitle.visible = false;
        this.shiftDone = false;
    }

    update() {
        if (!this.shiftDone) {
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            this.approveSound.play();
            // this.generator.modifyProb(true);
            this.totalPostsSeen += 1;
            this.updatePost();
        } else if (Phaser.Input.Keyboard.JustDown(keyLeft)) {
            this.banSound.play();
            // this.generator.modifyProb(false);
            this.checkPost();
            this.totalPostsSeen += 1;
            this.updatePost();
        }}

        // timer progression
        this.gameClock.text = this.gameTime.toString() + ":00"; 

        if (this.totalPostsSeen === 24 || this.gameTime === 16) {
            this.endGame();
        }
    }

    updatePost() {
        this.statusPost.text = this.generator.getPost();
    }

    updateTimer() {
        this.gameTime += 1;
    }

    checkPost() {
        if (this.statusPost.text === this.fileCopy["posts"]["pro"]["radical"][0]) {
            this.tally.armed_demonstration = true;
            //console.log(this.fileCopy["posts"]["pro"]["radical"][0]);
        } else if (this.statusPost.text === this.fileCopy["posts"]["pro"]["radical"][1]) {
            this.tally.assasination = true;
            //console.log(this.fileCopy["posts"]["pro"]["radical"][1]);
        } else if (this.statusPost.text === this.fileCopy["posts"]["anti"]["radical"][0]) {
            this.tally.bombing = true;
            //console.log(this.fileCopy["posts"]["anti"]["radical"][0]); 
        } else if (this.statusPost.text === this.fileCopy["posts"]["anti"]["radical"][1]) {
            this.tally.drive_by = true;
            //console.log(this.fileCopy["posts"]["anti"]["radical"][1]);
        }
        console.log(this.fileCopy);
        // console.log(this.statusPost.text);
    }

    endGame() {
        tally = this.tally;
        this.endGameText.visible = true;
        this.endGameSubTitle.visible = true;
        this.time.paused = true;
        this.shiftDone = true;
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            this.scene.start('ending');
        } 
    }
}
