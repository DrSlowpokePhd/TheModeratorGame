class nDie {
    constructor(sides) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}
