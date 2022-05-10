class ProbTable {
    constructor() {
        this.maxFreqDelta = 2;
        this.pro = {
            mild: 0,
            moderate: 0,
            radical: 0
        }; 

        this.anti = {
            mild: 0,
            moderate: 0,
            radical: 0
        };
    }
    // How it works:
    // each category of post has a number assigned to it, its frequency
    // the maximum frequency is 10 and the min frequency is -10
    //
    // No but seriously how does this system work?:
    // imagine you roll a D10 for each category, and you add its frequency to 
    // the result of the D10 roll, then you rank each category in order. the 
    // top result of this gets chosen and displayed to the player at random.
    // the category cannot be chosen again for the next 3 turns.
    // 


}
