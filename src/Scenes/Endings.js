class Endings extends Phaser.Scene {
    constructor() {
        super("ending");
    }

    preload() {
        this.load.json('endings', 'endings.json');
        this.load.audio('ending_sound', 'assets/Audio/BadEnding.wav');
    }
    
    create() {
        this.endingSound = this.sound.add('ending_sound', {loop: false})
        this.endings = this.cache.json.get('endings');
        this.ending;
        if (!tally.armed_demonstration) {
            this.ending = 'demonstration-ending';
        } else if (!tally.assasination) {
            this.ending = 'assasination-ending';
        } else if (!tally.bombing) {
            this.ending = 'bombing-ending';
        } else if (!tally.drive_by) {
            this.ending = 'drive-by-ending';
        } else if (tally.armed_demonstration &&
                   tally.assasination &&
                   tally.bombing &&
                   tally.drive_by){
            this.ending = 'good-ending';
        }
        this.endingTextConfig = {
            wordWrap: {
                width: 520
            } 
        }
        this.timerEventConfig = this.time.addEvent({delay: 8000, repeat: 8, callback: this.endingSound.play(), callbackScope: this});

        this.endingText = this.add.text(480, 360, this.endings[this.ending], {
            fontSize: '24px',
            wordWrap : {
                width : 500
            }
        }).setOrigin(0.5);
    }

    update() {

    }

}
