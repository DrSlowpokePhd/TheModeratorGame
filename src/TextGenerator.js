class TextGen {
    constructor(name) {
        this.file;
        this.initialized = false;
        this.probTable = new ProbTable();
        this.die = new nDie(9);
        this.inactiveCategories = {
             pro  : {
                mild : [false, 0],
                moderate : [false, 0],
                radical : [false, 0]
            },
             anti  : {
                mild : [false, 0],
                moderate : [false, 0],
                radical : [false, 0]
            }
        };

        this.currentPost = {
            side : "pro",
            intensity : "mild"
        }
    }

    // probability table
    // An object that shows the probability each category of post
    // has of showing up. Updates at the end of each in-game day
    // e.g.
    // {
    //      "pro": {
    //          mild : 1,
    //          moderate : 4,
    //          radical : 2
    //      },
    //      "anti" : {
    //          mild : -1,
    //          moderate : -3,
    //          radical : -6,
    //      }
    // }

    //
    // getPost()
    //
    // applies the results of the given probability table to chose a category,
    // then uses the result to chose a post in the chosen category at random.
    //


    
    getPost() {
        
        this.results = { 
             pro  : {
                mild : this.probTable.pro.mild + this.die.roll(),
                moderate : this.probTable.pro.moderate + this.die.roll(),
                radical : this.probTable.pro.radical + this.die.roll()
            },
             anti  : {
                mild : this.probTable.anti.mild + this.die.roll(),
                moderate : this.probTable.anti.moderate + this.die.roll(),
                radical : this.probTable.anti.radical + this.die.roll()
            }
        };
        console.log(this.results);

        this.sortedCategories = [
            { name : "pmild", value : this.results.pro.mild},
            { name : "pmoderate", value : this.results.pro.moderate}, 
            { name : "pradical", value : this.results.pro.radical}, 
            { name : "amild", value : this.results.anti.mild},
            { name : "amoderate", value : this.results.anti.moderate},
            { name : "aradical", value  : this.results.anti.radical}
        ];
        
        this.sortedCategories.sort((a, b) => {
            return b.value - a.value;
        });
        
        this.getCategoryLength = (beans) => {
            let sideVar1, intensityVar1;
            switch (beans) {
                case "pmild":
                case "pmoderate":
                case "pradical":
                    sideVar1 = "pro"
                    // this.currentPost.side = "pro";
                    break;
                                            
                case "amild":
                case "amoderate":
                case "aradical":
                    sideVar1 = "anti";
                    // this.currentPost.side = "anti";
                    break;
                default:
                    break;
            }
            console.log(beans);
            switch (beans) {
                case "pmild":
                case "amild":
                    intensityVar1 = "mild";
                    // this.currentPost.intensity = "mild";
                    break;
                case "pmoderate":
                case "amoderate":
                    intensityVar1 = "moderate";
                    // this.currentPost.intensity = "moderate";
                    break;
                case "pradical":
                case "aradical":
                    intensityVar1 = "radical";
                    // this.currentPost.intensity = "radical";
                    break;
                default:
                    break;
            }
            return this.file["posts"][sideVar1][intensityVar1].length;
        }
        console.log(this.sortedCategories);
        this.chosenCategory;
        for(let i = 0; i < this.sortedCategories.length; i++){
            if (this.sortedCategories[i].value > 0 && 
                this.getCategoryLength(this.sortedCategories[i].name) > 0) {
                this.chosenCategory = this.sortedCategories[i].name;
                break;
            }
        }
        
        console.log(this.chosenCategory);

        let sideVar, intensityVar, randomVar;
        
        switch (this.chosenCategory) {
                case "pmild":
                case "pmoderate":
                case "pradical":
                    sideVar = "pro"
                    this.currentPost.side = "pro";
                    break;
                                            
                case "amild":
                case "amoderate":
                case "aradical":
                    sideVar = "anti";
                    this.currentPost.side = "anti";
                    break;
                default:
                    break;
        }
        
        switch (this.chosenCategory) {
                case "pmild":
                case "amild":
                    intensityVar = "mild";
                    this.currentPost.intensity = "mild";
                    break;
                case "pmoderate":
                case "amoderate":
                    intensityVar = "moderate";
                    this.currentPost.intensity = "moderate";
                    break;
                case "pradical":
                case "aradical":
                    intensityVar = "radical";
                    this.currentPost.intensity = "radical";
                    break;
                default:
                    break;
        }
        
        randomVar = Math.floor(Math.random() * this.file["posts"][sideVar][intensityVar].length);
        
        console.log(sideVar, intensityVar, randomVar); 
        this.chosenPost = this.file["posts"][sideVar][intensityVar][randomVar];
        let index = this.file["posts"][sideVar][intensityVar].indexOf(this.chosenPost); 
        this.file["posts"][sideVar][intensityVar].splice(index, 1);
        return this.chosenPost;
    }

    modifyProb(yesNoBool) {
        if (yesNoBool === true) {
            this.probTable[this.currentPost.side][this.currentPost.intensity] += 1;

        } else {
            this.probTable[this.currentPost.side][this.currentPost.intensity] -= 1;
        }

    }
    
    
}

// tests


