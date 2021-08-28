class Race {

    constructor(numRunners, finishLine) {
        this.runners = [];
        this.finishLine = finishLine;
        this.winner = false;

        for (let i = 0; i < numRunners; i++) {
            this.runners.push(new Runner());
        }
    }

    startRace = () => {
        let dice = new Dice();
        /*console.log(`Inicia la carrera`)
        console.log(this.runners)
        console.log(this.finishLine)*/
        while (!this.winner) {
            for (let j = 0; j < this.runners.length; j++) {
                this.runners[j].toRun(dice.roll());
                let pos = this.runners[j].getPosition();
                console.log(`runner ${j+1}: meter ${pos}`);
                if ( pos >= this.finishLine) {
                    this.winner = `winner: ${(j + 1)}`;
                    console.log(`THE WINNER IS RUNNER ${j+1}`);
                    break;
                }
            }
            console.log(``)
        }
    }

}

class Runner {
    constructor () {
        this.position = 0;
    }

    toRun = (num) => {
        let steps = 0;

        if (num < 3) {
            steps = 1;
        } else if (num == 3){
            steps = 3;
        } else {
            steps = 2;
        }

        this.position = this.position + steps;
    }

    getPosition = () => {
        return this.position;
    }
}

class Dice {
    roll = () => {
        return Math.ceil(Math.random() * 6)
    }
}

var race = new Race(3, 15);
race.startRace();