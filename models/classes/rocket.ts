export class Rocket {
  id: string;
  propellant: number[];
    constructor(id: string, propellant: number[]) {
      this.id = id;
      this.propellant = propellant;
    }

    calcTotalPower(){
      const totalPower = this.propellant.reduce((a, b) => a + b);
      return totalPower;
    }

    speedUp() {
      
    }

    speedDown() {}
}