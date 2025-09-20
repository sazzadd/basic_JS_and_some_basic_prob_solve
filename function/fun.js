// Daily Routine Simulation with Math Formulas
class Person {
    constructor(name, energy = 50) {
        this.name = name;
        this.energy = energy; // 0 to 100
        this.productivity = 0;
    }

    goToOffice(hours = 8) {
        let energyLoss = hours * 5; // lose 5 energy per hour
        this.energy -= energyLoss;
        this.productivity += hours * 2; // productivity increases
        console.log(`${this.name} office e jacche. Energy: ${this.energy.toFixed(1)}, Productivity: ${this.productivity.toFixed(1)}`);
    }
oi
    sleep(hours = 8) {
        let energyGain = hours * 7; // gain 7 energy per hour
        this.energy += energyGain;
        if (this.energy > 100) this.energy = 100;
        console.log(`${this.name} ghum kortese. Energy: ${this.energy.toFixed(1)}`);
    }

    // Coffee break: temporary energy boost using sine function for fun
    coffee() {
        let boost = 10 * Math.sin(Math.random() * Math.PI/2);
        this.energy += boost;
        if (this.energy > 100) this.energy = 100;
        console.log(`${this.name} coffee niye fresh hoise. Energy boost: ${boost.toFixed(1)}, Energy: ${this.energy.toFixed(1)}`);
    }

    // Simulate full day
    fullDay() {
        this.goToOffice();
        this.sleep();
        this.coffee();
        this.goToOffice(4); // afternoon work
        console.log('---------------------------');
    }
}

// Simulate a week
let sazzad = new Person("Sazzad");
for (let day = 1; day <= 7; day++) {
    console.log(`Day ${day}:`);
    sazzad.fullDay();
}
